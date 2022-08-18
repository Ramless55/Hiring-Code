import axios from "axios";
import _ from 'lodash';

export const userLogin = async (data) => {
    const response = axios
        .post("http://localhost:8080/auth/login", data)
        .then((res) => res.data)
        .catch((err) => err.response.data);
    return response
};

export const userRegister = async (data) => {
    const response = axios
        .post("http://localhost:8080/auth/register", data)
        .then((res) => res.data)
        .catch((err) => err.response.data);
    return response
};

export const postPublications = async (data) => {
    const response = axios
        .post("http://localhost:8080/api/publication", data)
        .then((res) => res.data)
        .catch((err) => console.log(err.response.data));
    return response
};

export const getAllUser = async ({ setUser, userPro }) => {
    const response = axios
        .get(`http://localhost:8080/api/user?userName=${userPro}`)
        .then((res) => setUser(res.data))
        .catch((err) => err.response.data);
    return response
};

export const getAllPublications = async (setPublication) => {
    const response = axios
        .get(`http://localhost:8080/api/publication`)
            .then((res) => {
                setPublication(res.data)
                return res.data
            })
            .catch((err) => err.data);
    return response
};

export const deletePublications = async (id) => {
    const response = axios
        .delete(`http://localhost:8080/api/publication/${id}`,{
            headers: {
                'Authorization': `Bearer ${JSON.parse(localStorage.getItem("Token"))}`,
                'Content-Type': 'application/json'
            }
        })
            .then((res) => res)
            .catch((err) => err);
    return response
};

export const getMyProfile = async ({ setUser, userId }) => {
    const response = axios
        .get(`http://localhost:8080/api/user/${userId}`, {
            headers: {
                'Authorization': `Bearer ${JSON.parse(localStorage.getItem("Token"))}`,
                'Content-Type': 'application/json'
            }
        })
        .then((res) => setUser(res.data))
        .catch((err) => err.response.data);
    return response
};

export const putMyProfile = async (userId, data) => {
    const response = axios
        .put(`http://localhost:8080/api/user/${userId}`, {..._.omit(data, "id")}, {
            headers: {
                'Authorization': `Bearer ${JSON.parse(localStorage.getItem("Token"))}`,
                'Content-Type': 'application/json'
            }
        })
        .then((res) => {
            console.log(res.data)
            return res.data
        })
        .catch((err) => {
            console.log(err)
        })

    return response
};





import axios from "axios";


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

export const getMyProfile = async ({ setUser, userId }) => {
    const response = axios
        .get(`http://localhost:8080/api/user/${userId}`,{
            headers: {
                'Authorization': `Bearer ${JSON.parse(localStorage.getItem("Token"))}`,
                'Content-Type': 'application/json'
            }
        })
        .then((res) => setUser(res.data))
        .catch((err) => err.response.data);
    return response
};

export const putMyProfile = async ({ user, userId}) => {
    const response = axios
        .put(`http://localhost:8080/api/user/${userId}`, data,{
            headers: {
                'Authorization': `Bearer ${JSON.parse(localStorage.getItem("Token"))}`,
                'Content-Type': 'application/json'
            }
        })
        .then((res) => user(res.data))
        .catch((err) => err.response.data);
    return response
};

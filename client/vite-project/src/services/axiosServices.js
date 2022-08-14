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

export const getAllUser = async ({ data, setUser, userPro }) => {
    const response = axios
        .get(`http://localhost:8080/api/user?userName=${userPro}`, data)
        .then((res) => setUser(res.data))
        .catch((err) => err.response.data);
    return response
};

export const getMyProfile = async ({data, setUser, userId}) => {
    const response = axios
        .get(`http://localhost:8080/api/user/${userId}`, data,{
            headers: {
                'Authorization': `Bearer ${JSON.parse(localStorage.getItem("Token"))}`,
                'Content-Type': 'application/json'
            }
        })
        .then((res) => setUser(res.data))
        .catch((err) => err.response.data);
    return response
};

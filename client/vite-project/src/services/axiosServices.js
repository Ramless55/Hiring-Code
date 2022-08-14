import axios from "axios";


export const userLogin = async (data) => {
    const response = axios
        .post("http://localhost:8080/auth/login", data)
        .then((res) => res.data)
        .catch((err) => err.response.data);
        return response
};

export const getUser = async (data) => {
    const response = axios
        .get(`http://localhost:8080/api/user/${user}`, data)
        .then((res) => res.data)
        .catch((err) => err.response.data);
        return response
};

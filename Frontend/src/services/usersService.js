import axios from "axios";
import API from "./api";

export const getUser = () => {
    return axios.get(`${API}/users`);
};

export const addUser = (user) => {
    return axios.post(`${API}/users`, user);
};

export const editUser = (user_id, user) => {
    return axios.put(`${API}/users/${user_id}`, user);
};

export const deleteUser = (user_id) => {
    return axios.delete(`${API}/users/${user_id}`);
};
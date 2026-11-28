import axios from "axios";
import API from "./api.js";

export const loginUser = (data) => {
    return axios.post(`${API}/users/login`, data);
};
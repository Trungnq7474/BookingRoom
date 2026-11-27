import axios from "axios";
import API from "./api.js";

export const getDashboard = () => {
    return axios.get(`${API}/dashboards`);
};
import axios from "axios";
import API from "./api.js";

export const getIncident = () => {
    return axios.get(`${API}/incidents`);
};

export const deleteIncident = (incident_id) => {
    return axios.delete(`${API}/incidents/${incident_id}`);
};

export const assignIncident = (incident_id, employment) => {
    return axios.put(`${API}/incidents/${incident_id}`, {
        employment
    });
};

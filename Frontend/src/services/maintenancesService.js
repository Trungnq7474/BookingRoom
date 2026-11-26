import axios from "axios";
import API from "./api.js";

export const getMaintenance = () => {
    return axios.get(`${API}/maintenances`);
};

export const approveMaintenance = (maintenance_id) => {
    return axios.put(`${API}/maintenances/${maintenance_id}`, {
        status: "Đã Duyệt"
    });
};

export const deleteMaintenance = (maintenance_id) => {
    return axios.delete(`${API}/maintenances/${maintenance_id}`);
};

export const rejectMaintenance = (maintenance_id) => {
    return axios.put(`${API}/maintenances/${maintenance_id}/reject`);
};

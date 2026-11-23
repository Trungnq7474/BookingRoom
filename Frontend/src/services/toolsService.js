import axios from "axios";
import API from "./api";

export const getTool = () => {
    return axios.get(`${API}/tools`);
};

export const addTool = (tool) => {
    return axios.post(`${API}/tools`, tool);
};

export const editTool = (tool_id, tool) => {
    return axios.put(`${API}/tools/${tool_id}`, tool);
};

export const deleteTool = (tool_id) => {
    return axios.delete(`${API}/tools/${tool_id}`);
};

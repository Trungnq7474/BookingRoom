import axios from "axios";
import API from "./api";

export const getRoom = () => {
    return axios.get(`${API}/rooms`);
};

export const addRoom = (room) => {
    return axios.post(`${API}/rooms`, room);
};

export const editRoom = (room_id, room) => {
    return axios.put(`${API}/rooms/${room_id}`, room);
};

export const deleteRoom = (room_id) => {
    return axios.delete(`${API}/rooms/${room_id}`);
};

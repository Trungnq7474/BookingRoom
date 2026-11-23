import axios from "axios";
import API from "./api.js";

export const getBooking = () => {
    return axios.get(`${API}/bookings`);
};

export const deleteBooking = (booking_id) => {
    return axios.delete(`${API}/bookings/${booking_id}`);
};
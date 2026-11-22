import { useState, useEffect } from "react";
import axios from "axios";
import API from "../services/api";

function useRooms() {
    const [rooms, setRooms] = useState([]);

    useEffect(() => {
        const getRooms = async () => {
            try {
                const res = await axios.get(`${API}/rooms`);
                setRooms(res.data);
            }

            catch (err) {
                console.log(err);
            }
        };

        getRooms();
    }, []);

    const addRooms = async (room) => {
        try {
            await axios.post(`${API}/rooms`, room);

            const res = await axios.get(`${API}/rooms`);
            setRooms(res.data);
        }

        catch (err) {
            console.log(err);
        }
    };

    const editRooms = async (room_id, room) => {
        try {
            await axios.put(`${API}/rooms/${room_id}`, room);

            const res = await axios.get(`${API}/rooms`);
            setRooms(res.data);
        }

        catch (err) {
            console.log(err);
        }
    }

    const deleteRooms = async (room_id) => {
        try {
            await axios.delete(`${API}/rooms/${room_id}`);

            const res = await axios.get(`${API}/rooms`);
            setRooms(res.data);
        }

        catch (err) {
            console.log(err);
        }
    }

    return { rooms, addRooms, editRooms, deleteRooms };
};

export default useRooms;
import { useState, useEffect } from "react";
import { getRoom, addRoom, editRoom, deleteRoom } from "../services/roomsService.js";

function useRooms() {
    const [rooms, setRooms] = useState([]);

    useEffect(() => {
        const getRooms = async () => {
            try {
                const res = await getRoom();
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
            await addRoom(room);

            const res = await getRoom();
            setRooms(res.data);
        }

        catch (err) {
            console.log(err);
        }
    };

    const editRooms = async (room_id, room) => {
        try {
            await editRoom(room_id, room);

            const res = await getRoom();
            setRooms(res.data);
        }

        catch (err) {
            console.log(err);
        }
    }

    const deleteRooms = async (room_id) => {
        try {
            await deleteRoom(room_id);

            const res = await getRoom();
            setRooms(res.data);
        }

        catch (err) {
            console.log(err);
        }
    }

    return { rooms, addRooms, editRooms, deleteRooms };
};

export default useRooms;

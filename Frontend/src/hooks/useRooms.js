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

    return { rooms };
};

export default useRooms;
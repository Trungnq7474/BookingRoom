import { useState, useEffect } from "react";
import axios from "axios";
import API from "../services/api.js";

function useUsers() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const getUsers = async () => {
            try {
                const res = await axios.get(`${API}/users`);
                setUsers(res.data);
            }

            catch (err) {
                console.log(err);
            }
        };

        getUsers();
        
    }, []);

    return { users };
}

export default useUsers;


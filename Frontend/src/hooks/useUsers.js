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

    const addUsers = async (user) => {
        try {
            await axios.post(`${API}/users`, user);

            const res = await axios.get(`${API}/users`);
            setUsers(res.data);
        }

        catch (err) {
            console.log(err);
        }
    };

    const editUsers = async (user_id, user) => {
        try {
            await axios.put(`${API}/users/${user_id}`, user);
            
            const res = await axios.get(`${API}/users`);
            setUsers(res.data);
        }

        catch (err) {
            console.log(err);
        }
    };

    const deleteUsers = async (user_id) => {
        try {
            await axios.delete(`${API}/users/${user_id}`);
            
            const res = await axios.get(`${API}/users`);
            setUsers(res.data);
        }
        
        catch (err) {
            console.log(err);
        }
        
    };

    return { users, addUsers, editUsers, deleteUsers };
};



export default useUsers;
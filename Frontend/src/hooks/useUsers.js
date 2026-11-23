import { useState, useEffect } from "react";
import { getUser, addUser, editUser, deleteUser } from "../services/usersService";

function useUsers() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const getUsers = async () => {
            try {
                const res = await getUser();
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
            await addUser(user)

            const res = await getUser();
            setUsers(res.data);
        }

        catch (err) {
            console.log(err);
        }
    };

    const editUsers = async (user_id, user) => {
        try {
            await editUser(user_id, user);
            
            const res = await getUser();
            setUsers(res.data);
        }

        catch (err) {
            console.log(err);
        }
    };

    const deleteUsers = async (user_id) => {
        try {
            await deleteUser(user_id)
            
            const res = await getUser();
            setUsers(res.data);
        }
        
        catch (err) {
            console.log(err);
        }
        
    };

    return { users, addUsers, editUsers, deleteUsers };
};

export default useUsers;
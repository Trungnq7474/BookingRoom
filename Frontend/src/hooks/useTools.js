import { useState, useEffect } from "react";
import axios from "axios";
import API from "../services/api";

function useTools() {
    const [tools, setTools] = useState([]);

    useEffect(() => {
        const getTools = async () => {
            try {
                const res = await axios.get(`${API}/tools`);
                setTools(res.data);
            }

            catch (err) {
                console.log(err);
            }
        };

        getTools();
    }, []);

    const addTools = async (tool) => {
        try {
            await axios.post(`${API}/tools`, tool);

            const res = await axios.get(`${API}/tools`);
            setTools(res.data);
        }

        catch (err) {
            console.log(err);
        }
    };

    const editTools = async (tool_id, tool) => {
        try {
            await axios.put(`${API}/tools/${tool_id}`, tool);

            const res = await axios.get(`${API}/tools`);
            setTools(res.data);
        }

        catch (err) {
            console.log(err);
        }
    };

    const deleteTools = async (tool_id) => {
        try {
            await axios.delete(`${API}/tools/${tool_id}`);

            const res = await axios.get(`${API}/tools`);
            setTools(res.data);
        }

        catch (err) {
            console.log(err);
        }
    };

    return { tools, addTools, editTools, deleteTools }
};

export default useTools;
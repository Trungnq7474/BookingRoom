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

    return { tools }
};

export default useTools;
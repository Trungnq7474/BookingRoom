import { useState, useEffect } from "react";
import { getTool, addTool, editTool, deleteTool } from "../services/toolsService.js";

function useTools() {
    const [tools, setTools] = useState([]);

    useEffect(() => {
        const getTools = async () => {
            try {
                const res = await getTool();
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
            await addTool(tool);

            const res = await getTool();
            setTools(res.data);
        }

        catch (err) {
            console.log(err);
        }
    };

    const editTools = async (tool_id, tool) => {
        try {
            await editTool(tool_id, tool);

            const res = await getTool();
            setTools(res.data);
        }

        catch (err) {
            console.log(err);
        }
    };

    const deleteTools = async (tool_id) => {
        try {
            await deleteTool(tool_id);

            const res = await getTool();
            setTools(res.data);
        }

        catch (err) {
            console.log(err);
        }
    };

    return { tools, addTools, editTools, deleteTools }
};

export default useTools;

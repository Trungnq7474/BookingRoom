const db = require("../config/database.js");

const getTool = async (req, res) => {
    try {
        const [result] = await db.promise().query(
            `SELECT * FROM tools`
        );
        
        res.json(result);
    }

    catch (err) {
        res.send(err.message);
    }
};

const addTool = async (req, res) => {
    try {
        const { toolname, roomname, tooltype, location, floor, description, status } = req.body;

        const image = req.file ? `/uploads/${req.file.filename}` : null;

        await db.promise().query(
            `INSERT INTO tools (toolname, roomname, tooltype, location, floor, description, image, status)
            VALUES(?, ?, ?, ?, ?, ?, ?, ?)`,
            [toolname, roomname, tooltype, location, floor, description, image, status]
        );

        res.json({ message: "Thêm Thiết Bị Thành Công !" })
    }   

    catch (err) {
        res.send(err.message);
    }
};

const editTool = async (req, res) => {
    try {
        const { tool_id } = req.params;

        const { toolname, roomname, tooltype, location, floor, description, status } = req.body;

        const image = req.file ? `/uploads/${req.file.filename}` : null;

        await db.promise().query(
            `UPDATE tools SET
                toolname = ?,
                roomname = ?,
                location = ?,
                floor = ?,
                tooltype = ?,
                description = ?,
                status = ?,
                image = COALESCE(?, image)
            WHERE tool_id = ?`,
            [ toolname, roomname, location, floor, tooltype, description, status, image, tool_id ]
        );

        res.json({ message: "Cập Nhật Thiết Bị Thành Công !" })
    }

    catch (err) {
        res.send(err.message);
    }
};

const deleteTools = async (req, res) => {
    try {
        const { tool_id } = req.params;

        await db.promise().query(
            `DELETE FROM tools WHERE tool_id = ?`,
            [tool_id]
        );

        res.json({ message: "Xóa Thiết Bị Thành Công !" })
    }

    catch (err) {
        console.log(err)    
    }
    
}; 

module.exports = { getTool, addTool, editTool, deleteTools };
const db = require("../config/database.js");

const getIncident = async (req, res) => {
    try {
        const [result] = await db.promise().query(
            `SELECT
                i.*,
                u.full_name,
                u.user_code,
                u.role,
                t.toolname,
                t.tooltype,
                r.roomname,
                r.location,
                r.floor
            FROM incidents i
            LEFT JOIN users u ON i.user_id = u.user_id
            LEFT JOIN tools t ON i.tool_id = t.tool_id
            LEFT JOIN rooms r ON i.room_id = r.room_id`
        );

        res.json(result);
    } 

    catch (error) {
        res.send(err.message)
    }
};

const deleteIncident = async (req, res) => {
    try {
        const { incident_id } = req.params
        
        await db.promise().query(
            `DELETE FROM incidents WHERE incident_id = ?`,
            [incident_id]
        );

        res.json({ message: "Xóa Báo Cáo Sự Cố Thành Công !" });
    }

    catch (err) {
        res.send(err.message);
    }
};

const assignIncident = async (req, res) => {
    try {
        const { incident_id } = req.params;
        const { employment } = req.body;

        await db.promise().query(
            `UPDATE incidents
            SET employment = ?, status = ?
            WHERE incident_id = ?`,
            [employment, "Chờ Tiếp Nhận", incident_id]
        );

        res.json({ message: "Phân Công Sự Cố Thành Công !" });
    }

    catch (err) {
        res.send(err.message);
    }
};

module.exports = { getIncident, deleteIncident, assignIncident };
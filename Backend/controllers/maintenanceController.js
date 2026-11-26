const db = require("../config/database.js");

const getMaintenance = async (req, res) => {
    try {
        const [result] = await db.promise().query(
            `SELECT
                m.*,
                u.full_name,
                u.user_code,
                u.role,
                t.toolname,
                t.tooltype,
                r.roomname,
                r.location,
                r.floor,
                CASE
                    WHEN m.maintenance_target = 'Thiết Bị'
                    THEN t.toolname
                    ELSE r.roomname
                END AS name
            FROM maintenances m
            LEFT JOIN users u ON m.user_id = u.user_id
            LEFT JOIN tools t ON m.tool_id = t.tool_id
            LEFT JOIN rooms r ON m.room_id = r.room_id`
        );

        res.json(result);
    }

    catch (err) {
        res.send(err.message);
    }
};

const approveMaintenance = async (req, res) => {
    try {
        const { maintenance_id } = req.params;

        await db.promise().query(
            `UPDATE maintenances SET
            status = "Đã Duyệt"
            WHERE maintenance_id = ?`,
            [maintenance_id]
        );

        res.json({ message: "Duyệt Đề Xuất Bảo Trì Thành Công !" });
    }

    catch (err) {
        res.send(err.message);
    }
};

const deleteMaintenance = async (req, res) => {
    try {
        const { maintenance_id } = req.params;

        await db.promise().query(
            `DELETE FROM maintenances WHERE maintenance_id = ?`,
            [maintenance_id]
        );

        res.json({ message: "Xóa Đề Xuất Bảo Trì Thành Công !" });
    }

    catch (err) {
        res.send(err.message);
    }
};

const rejectMaintenance = async (req, res) => {
    try {
        const { maintenance_id } = req.params;

        await db.promise().query(
            `UPDATE maintenances SET
            status = "Đã Từ Chối",
            rejection_time = NOW()
            WHERE maintenance_id = ?`,
            [maintenance_id]
        );

        res.json({ message: "Đã Từ Chối Đề Xuất Bảo Trì Thành Công !" });
    }

    catch (err) {
        res.send(err.message);
    }
};

module.exports = { getMaintenance, approveMaintenance, deleteMaintenance, rejectMaintenance };
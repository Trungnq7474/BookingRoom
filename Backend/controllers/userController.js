const db = require("../config/database.js");

const getUser = async (req, res) => {
    try {
        const [result] = await db.promise().query(
            `SELECT user_id, user_code, full_name, email, phone, role, created_at 
            FROM users`
        );

        res.json(result);
    }

    catch (err) {
        res.send(err.message);
    }
};

const addUser = async (req, res) => {
    try {
        const { user_code, full_name, email, phone, role } = req.body;

        await db.promise().query(
            `INSERT INTO users (user_code, full_name, email, phone, role)
            VALUES (?, ?, ?, ?, ?)`,
            [user_code, full_name, email, phone, role]
        );

        res.json({ message: "Thêm Người Dùng Thành Công !"});
    }

    catch (err) {
        res.send(err.message);
    }
};

const editUser = async (req, res) => {
    try {
        const { user_id } = req.params;
        const { user_code, full_name, email, phone, role } = req.body;

        await db.promise().query(
            `UPDATE users SET user_code = ?, full_name = ?, email = ?, phone = ?, role = ?
            WHERE user_id = ?`,
            [user_code, full_name, email, phone, role, user_id]
        );

        res.json({ message: "Cập Nhật Người Dùng Thành Công !"});
    }

    catch (err) {
        res.send(err.message);
    }
};

const deleteUser = async (req, res) => {
    try {
        const { user_id } = req.params;

        await db.promise().query(
            `DELETE FROM users WHERE user_id = ?`,
            [user_id]
        );

        res.json({ message: "Xóa Người Dùng Thành Công !" });
    }

    catch (err) {
        res.send(err.message);
    }
};

module.exports = { getUser, addUser, editUser, deleteUser };
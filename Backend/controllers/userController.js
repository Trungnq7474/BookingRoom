const db = require("../config/database.js");

const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        const [result] = await db.promise().query(
            `SELECT user_id, user_code, full_name, email, phone, role
            FROM users
            WHERE email = ? AND password = ?`,
            [email, password]
        );

        if(result.length === 0) {
            return res.json({
                message: "Email Hoặc Mật Khẩu Không Đúng !"
            });
        }

        res.json({
            message: "Đăng nhập thành công!",
            user: result[0]
        })
    }

    catch (err) {
        res.send(err.message);
    }
};

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

module.exports = { login, getUser, addUser, editUser, deleteUser };
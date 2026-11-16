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

module.exports = { getUser };
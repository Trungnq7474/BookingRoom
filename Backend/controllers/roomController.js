const db = require("../config/database.js");

const getRoom = async (req, res) => {
    try {
        const [result] = await db.promise().query(
            `SELECT * FROM rooms`
        );

        res.json(result);
    }

    catch (err) {
        res.send(err.message)
    }
};

module.exports = { getRoom };
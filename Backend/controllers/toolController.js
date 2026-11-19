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

module.exports = { getTool };
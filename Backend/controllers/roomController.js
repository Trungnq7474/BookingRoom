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

const addRoom = async (req, res) => {
    try {
        const { roomname, location, floor, capacity, description, status } = req.body;

        const image = req.file ? `/uploads/${req.file.filename}` : null;

        await db.promise().query(
            `INSERT INTO rooms (roomname, location, floor, capacity, description, image, status)
            VALUES (?, ?, ?, ?, ?, ?, ?)`,
            [roomname, location, floor, capacity, description, image, status]
        );

        res.json({ message: "Thêm Phòng Thành Công !" });
    }

    catch (err) {
        res.send(err.message);
    }
};

const editRoom = async (req, res) => {
    try {
        const { room_id } = req.params;

        const { roomname, location, floor, capacity, description, status } = req.body;

        const image = req.file ? `/uploads/${req.file.filename}` : null;

        await db.promise().query(
            `UPDATE rooms SET 
                roomname = ?,
                location = ?,
                floor = ?,
                capacity = ?,
                description = ?,
                status = ?,
                image = COALESCE(?, image)
            WHERE room_id = ?`,
            [ roomname, location, floor, capacity, description, status, image, room_id ]
        );

        res.json({ message: "Cập Nhật Phòng Thành Công !" })
    }

    catch (err) {
        res.send(err.message);
    }
};

const deleteRoom = async (req, res) => {
    try {
        const { room_id } = req.params;

        await db.promise().query(
            `DELETE FROM rooms WHERE room_id = ?`,
            [room_id]
        );

        res.json({ message: "Xóa Phòng Thành Công !" })
    }

    catch (err) {
        res.send(err.message);
    }
};

module.exports = { getRoom, addRoom, editRoom, deleteRoom };
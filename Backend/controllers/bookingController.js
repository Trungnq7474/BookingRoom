const db = require("../config/database.js");

const getBooking = async (req, res) => {
    try {
        const [result] = await db.promise().query(
            `SELECT 
                b.*,
                u.full_name,
                u.user_code,
                u.role,

                CASE
                    WHEN b.type = 'Thiết Bị' THEN t.toolname
                    ELSE r.roomname
                END AS name,

                CASE
                    WHEN b.type = 'Thiết Bị' THEN t.roomname
                    ELSE r.roomname
                END AS room_name,

                CASE
                    WHEN b.type = 'Thiết Bị' THEN t.location
                    ELSE r.location
                END AS location,

                CASE
                    WHEN b.type = 'Thiết Bị' THEN t.floor
                    ELSE r.floor
                END AS floor,

                CASE 
                    WHEN b.type = 'Thiết Bị' THEN t.image
                    ELSE r.image
                END AS booking_image
                
            FROM bookings b
            LEFT JOIN users u ON b.user_id = u.user_id
            LEFT JOIN rooms r ON b.room_id = r.room_id
            LEFT JOIN tools t ON b.tool_id = t.tool_id`
        );

        res.json(result);
    }

    catch (err) {
        res.send(err.message)
    }
};

const deleteBooking = async (req, res) => {
    try {
        const { booking_id } = req.params
        
        await db.promise().query(
            `DELETE FROM bookings WHERE booking_id = ?`,
            [booking_id]
        );

        res.json({ message: "Xóa Lịch Đăng Ký Thành Công !" });
    }

    catch (err) {
        res.send(err.message);
    }
};

module.exports = { getBooking, deleteBooking };
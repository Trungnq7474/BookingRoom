const db = require("../config/database.js");

const getDashboard = async (req, res) => {
    try {
        const [rooms] = await db.promise().query(
            `SELECT COUNT(*) AS total FROM rooms`
        );

        const [tools] = await db.promise().query(
            `SELECT COUNT(*) AS total FROM tools`
        );

        const [bookings] = await db.promise().query(
            `SELECT COUNT(*) AS total FROM bookings
            WHERE status = 'Chờ Duyệt'`
        );

        const [incidents] = await db.promise().query(
            `SELECT COUNT(*) AS total FROM incidents
            WHERE status != 'Đã Hoàn Thành'`
        );

        const [bookingStats] = await db.promise().query(
            `SELECT 
                MONTH(start_time) AS month,
                COUNT(*) AS total
            FROM bookings
            WHERE YEAR(start_time) = YEAR(CURDATE())
            GROUP BY MONTH(start_time)
            ORDER BY MONTH(start_time)`
        );

        const [incidentStats] = await db.promise().query(
            `SELECT 
                MONTH(report_time) AS month,
                COUNT(*) AS total
            FROM incidents
            WHERE YEAR(report_time) = YEAR(CURDATE())
            GROUP BY MONTH(report_time)
            ORDER BY MONTH(report_time)`
        );

        const bookingData = [];
        const incidentData = [];

        for (let i = 1; i <= 12; i++) {
            const booking = bookingStats.find(item => Number(item.month) === i);
            const incident = incidentStats.find(item => Number(item.month) === i);

            bookingData.push(booking || { month: i, total: 0 });
            incidentData.push(incident || { month: i, total: 0 });
        }

        const [bookingsActive] = await db.promise().query(
            `SELECT 
                u.full_name AS name,
                CASE
                    WHEN b.type = 'Phòng Máy' THEN 'Đăng Ký Phòng Máy'
                    WHEN b.type = 'Phòng Thư Viện' THEN 'Đăng Ký Phòng Thư Viện'
                    WHEN b.type = 'Thiết Bị' THEN 'Đăng ký Thiết Bị'
                END AS activity,
                b.register_time AS time,
                b.status
            FROM bookings b
            JOIN users u ON b.user_id = u.user_id`
        );

        const [incidentsActive] = await db.promise().query(
            `SELECT 
                u.full_name AS name,
                'Báo Cáo Sự Cố' AS activity,
                i.report_time AS time,
                i.status
            FROM incidents i
            JOIN users u ON i.user_id = u.user_id`
        );

        const [maintenancesActive] = await db.promise().query(
            `SELECT 
                u.full_name AS name,
                'Đề Xuất Bảo Trì' AS activity,
                m.proposal_time AS time,
                m.status
            FROM maintenances m
            JOIN users u ON m.user_id = u.user_id`
        );

        const activities = bookingsActive.concat(incidentsActive, maintenancesActive);
        activities.sort((a, b) => new Date(b.time) - new Date(a.time));
        const recentActivities = activities.slice(0, 4);
        recentActivities.forEach((item, index) => {
            item.id = index + 1;
        });


        res.json({ 
            totalRooms: rooms[0].total,
            totalTools: tools[0].total,
            pendingBookings: bookings[0].total,
            pendingIncidents: incidents[0].total,
            bookingStats: bookingData,
            incidentStats: incidentData,
            recentActivities: recentActivities
        })
    }

    catch (err) {
        res.send(err.message);
    }
};


module.exports = { getDashboard };
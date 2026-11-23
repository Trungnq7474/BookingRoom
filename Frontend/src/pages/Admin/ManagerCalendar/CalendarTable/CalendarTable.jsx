import Table from "../../../../components/Table/Table.jsx";

function CalendarTable({ onView, data, onDelete }) {

    const columns = [
        { title: "STT", key: "booking_id" },

        { title: "Họ Và Tên", key: "full_name" },

        {
            title: "Vai Trò",
            key: "role",
            render: (value, item) => (
                <span className={
                    item.role === "Sinh Viên"
                        ? "common-student"
                        : "common-teacher"
                }>
                    {value}
                </span>
            )
        },

        { title: "Loại Đăng Ký", key: "type" },
        
        {
            title: "Trạng Thái",
            key: "status",
            render: (value) => (
                <span className={
                    value === "Chờ Duyệt"
                    ? "common-status-pending"
                    : value === "Đang Sử Dụng"
                    ? "common-status-active"
                    : value === "Đã Sử Dụng"
                    ? "common-status-completed"
                    : "common-status-rejected"
                }>
                    <i className={
                        value === "Chờ Duyệt"
                        ? "fa-regular fa-clock"
                        : value === "Đang Sử Dụng"
                        ? "fa-solid fa-gear"
                        : value === "Đã Sử Dụng"
                        ? "fa-solid fa-square-check"
                        : "fa-solid fa-xmark"
                    }></i>
                    {value}
                </span>
            )
        }
    ];

    const actions = [
        {
            label: "Xem",
            icon: "fa-regular fa-eye",
            className: "common-view-button",
            onClick: onView
        },
        
        {
            label: "Xóa",
            icon: "fa-regular fa-trash-can",
            className: "common-delete-button",
            onClick: onDelete
        }
    ];

    return (
        <Table
            columns={columns}
            data={data}
            actions={actions}
        />
    );
}

export default CalendarTable;

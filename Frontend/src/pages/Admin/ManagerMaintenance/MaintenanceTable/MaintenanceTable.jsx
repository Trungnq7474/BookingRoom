import Table from "../../../../components/Table/Table.jsx";

function MaintenanceTable({ onView, onDelete, data }) {

    const columns = [
        {
            title: "STT",
            key: "maintenance_id",
            render: (value) => `#00${value}`
        },

        {
            title: "Mã Đề Xuất",
            key: "maintenance_id",
            render: (value) => `#BT - 00${value}`
        },

        { title: "Người Đề Xuất", key: "full_name" },

        { title: "Loại Bảo Trì", key: "maintenance_type" },

        {
            title: "Trạng Thái",
            key: "status",
            render: (value) => (
                <span className={
                    value === "Chờ Duyệt"
                    ? "common-status-pending"
                    : value === "Đã Duyệt"
                    ? "common-status-received"
                    : value === "Đã Từ Chối"
                    ? "common-status-rejected"
                    : value === "Bảo Trì"
                    ? "common-status-active"
                    : "common-status-completed"
                }>
                    <i className={
                        value === "Chờ Duyệt"
                        ? "fa-solid fa-clock"
                        : value === "Đã Duyệt"
                        ? "fa-solid fa-circle-check"
                        : value === "Đã Từ Chối"
                        ? "fa-solid fa-circle-xmark"
                        : value === "Bảo Trì"
                        ? "fa-solid fa-gear"
                        : "fa-solid fa-square-check"
                    }></i>
                    {value}
                </span>
            )
        },
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

export default MaintenanceTable;
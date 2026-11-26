import Table from "../../../../components/Table/Table.jsx";
import useUsers from "../../../../hooks/useUsers.js";

function ProblemTable({ onView, data, onDelete, onAssign }) {

    const { users } = useUsers();
    
    const columns = [
        { 
            title: "STT", 
            key: "incident_id",
            render: (value) => `#00${value}`
        },

        { 
            title: "Mã Sự Cố", 
            key: "incident_id",
            render: (value) => `#SC - 00${value}`

        },

        { title: "Người Báo Cáo", key: "full_name" },

        { title: "Loại Sự Cố", key: "tooltype" },

        {
            title: "Trạng Thái",
            key: "status",
            render: (value) => (
                <span className={
                    value === "Chờ Phân Công"
                    ? "common-status-pending"
                    : value === "Chờ Tiếp Nhận"
                    ? "common-status-pendingg"
                    : value === "Đã Tiếp Nhận"
                    ? "common-status-received"
                    : value === "Đang Thực Hiện"
                    ? "common-status-active" 
                    : "common-status-completed"
                }>
                    <i className={
                        value === "Chờ Phân Công"
                        ? "fa-solid fa-clock"
                        : value === "Chờ Tiếp Nhận"
                        ? "fa-solid fa-business-time"
                        : value === "Đã Tiếp Nhận"
                        ? "fa-solid fa-circle-check"
                        : value === "Đang Thực Hiện"
                        ? "fa-solid fa-gear"
                        : "fa-solid fa-square-check"
                    }></i>
                    {value}
                </span>
            )
        },

        {
            title: "Nhân Viên Phân Công",
            key: "employment",
            render: (value, item) => (
                <div className="common-select">
                    <select value={item.status === "Chờ Phân Công" ? "" : value || ""} onChange={(e) => onAssign(item.incident_id, e.target.value)}>
                        {item.status === "Chờ Phân Công"
                            ? <option value="">Chọn Nhân Viên Kỹ Thuật</option>
                            : null
                        }

                        {users.filter((user) => {
                            return user.role === "Nhân Viên Kỹ Thuật";
                        }).map((user) => (
                            <option key={user.user_id} value={user.user_id}>
                                {user.full_name}
                            </option>
                        ))}
                    </select>
                    <i className="fa-solid fa-chevron-down"></i>
                </div>
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

export default ProblemTable;

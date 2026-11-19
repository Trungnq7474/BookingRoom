import Table from "../../../../components/Table/Table.jsx";

function UserTable({ data, onEdit, onDelete }) {

        const columns = [
            { title: "STT", key: "user_id" },

            { title: "Mã Số", key: "user_code" },

            { title: "Họ Và Tên", key: "full_name" },

            {
                title: "Vai Trò",
                key: "role",
                render: (value) => (
                    <span className={
                        value === "Admin" ? "common-admin":
                        value === "Sinh Viên" ? "common-student":
                        value === "Giảng Viên" ? "common-teacher":
                        value === "Nhân Viên Kỹ Thuật" ? "common-technician" : ""
                    }>
                        {value}
                    </span>
                )
            },

            { title: "Email", key: "email" },

            { title: "Số Điện Thoại", key: "phone" }
        ];

        const actions = [
            {
                label: "Sửa",
                icon: "fa-regular fa-pen-to-square",
                className: "common-edit-button",
                onClick: onEdit
            },

            {
                label: "Xóa",
                icon: "fa-regular fa-trash-can",
                className: "common-delete-button",
                onClick: onDelete
            }
        ];
    
    return (
        <>
            <Table 
                columns={columns}
                data={data}
                actions={actions}
            />
        </>
    )
}

export default UserTable;
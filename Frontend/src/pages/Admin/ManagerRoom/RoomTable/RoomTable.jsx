import Table from "../../../../components/Table/Table.jsx";
import commonImages from "../../../../utils/commonImages.js";

function RoomTable({ data, onView, onDelete, onEdit }) {

    const columns = [
        { title: "STT", key: "room_id" },

        {   title: "Hình Ảnh", 
            key: "image",
            render: (image) => (
                <img 
                    src={
                        image?.startsWith("/uploads/")
                        ? `http://localhost:5000${image}`
                        : commonImages[image]
                    } 
                    alt="Ảnh" className="common-image"/>
            )
        },

        { title: "Tên Phòng", key: "roomname" },

        {   title: "Sức Chứa", 
            key: "capacity",
            render: (value) => `${value} máy` 
        },

        {
            title: "Trạng Thái",
            key: "status",
            render: (value) => (
                <span className={
                    value === "Hoạt Động" ? "common-status-completed" : "common-status-active"
                }>
                    <i className={
                        value === "Hoạt Động" ? "fa-solid fa-square-check" : "fa-solid fa-wrench"
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
            label: "Sửa",
            icon: "fa-regular fa-pen-to-square",
            className: "common-edit-button",
            onClick: onEdit
        },

        {
            label: "Xóa",
            icon: "fa-solid fa-trash-can",
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

export default RoomTable;

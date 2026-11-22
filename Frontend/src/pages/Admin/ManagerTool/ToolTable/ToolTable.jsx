import Table from "../../../../components/Table/Table.jsx";
import computer from "../../../../assets/Equitment/computer.png";
import headphone from "../../../../assets/Equitment/headphone.png";
import keyboard from "../../../../assets/Equitment/keyboard.png";
import mouse from "../../../../assets/Equitment/mouse.png";
import micro from "../../../../assets/Equitment/micro.png";

const toolImages = {
    "computer.png": computer,
    "headphone.png": headphone,
    "keyboard.png": keyboard,
    "mouse.png": mouse,
    "micro.png": micro,
};

function ToolTable({ data, onView, onDelete, onEdit }) {

    const columns = [
        { title: "STT", key: "tool_id" },

        {   title: "Hình Ảnh", 
            key: "image",
            render: (image) => (
                <img 
                    src={
                        image?.startsWith("/uploads/")
                        ? `http://localhost:5000${image}`
                        : toolImages[image]
                    } 
                    alt="Ảnh" className="common-image"/>
            )
        },

        { title: "Tên Thiết Bị", key: "toolname" },

        { title: "Loại Thiết Bị", key: "tooltype" },

        {
            title: "Trạng Thái",
            key: "status",
            render: (value) => (
                <span className={
                    value === "Hoạt Động" ? "common-status-active" : "common-status-maintenance"
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
        <>
            <Table 
                columns={columns}
                data={data}
                actions={actions}
            />
        </>
    )
}

export default ToolTable;
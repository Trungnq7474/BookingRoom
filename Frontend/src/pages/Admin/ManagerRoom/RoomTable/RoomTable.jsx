import Table from "../../../../components/Table/Table.jsx";
import H003 from "../../../../assets/Room/H003.jpg";
import H509 from "../../../../assets/Room/H509.jpg";
import library from "../../../../assets/Room/library.jpg";
import I001 from "../../../../assets/Room/I001.jpg";
import I002 from "../../../../assets/Room/I002.jpg";
import I101 from "../../../../assets/Room/I101.png";

const roomImages = {
    "H003.jpg": H003,
    "H509.jpg": H509,
    "library.jpg": library,
    "I001.jpg": I001,
    "I002.jpg": I002,
    "I101.png": I101
};

function RoomTable({ data, onView, onEdit }) {

    const columns = [
        { title: "STT", key: "room_id" },

        {   title: "Hình Ảnh", 
            key: "image",
            render: (image) => (
                <img src={roomImages[image]} alt="Ảnh" className="common-image"/>
            )
        },

        { title: "Tên Phòng", key: "roomname" },

        { title: "Khu Vực", key: "location" },

        { title: "Tầng", key: "floor" },

        { title: "Sức Chứa", key: "capacity" },

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
            className: "common-delete-button"
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

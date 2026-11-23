import Detail from "../../../../components/Detail/Detail.jsx";
import commonImages from "../../../../utils/commonImages.js";


function RoomDetail({ onClose, room }) {

    const image = room?.image?.startsWith("/uploads/")
        ? `http://localhost:5000${room.image}`
        : commonImages[room?.image];

    return (
        <>
            <Detail
                image={image}
                title={room?.roomname}
                status={room?.status}
                statusIcon={
                    room?.status === "Hoạt Động"
                        ? "fa-solid fa-square-check"
                        : "fa-solid fa-wrench"
                }
                statusColor={
                    room?.status === "Hoạt Động" ? "#26964b" : " #1900ff"
                }
                onClose={onClose}
            >
                <div className="common-detail-item">
                    <i className="fa-solid fa-file-lines"></i>
                    <p>
                        <b>Mô Tả:</b> {room?.description}
                    </p>
                </div>

                <div className="common-detail-item">
                    <i className="fa-solid fa-location-dot"></i>
                    <p>
                        <b>{room?.roomname} - {room?.location} - {room?.floor}</b>
                    </p>
                </div>

                <div className="common-detail-item">
                    <i className="fa-solid fa-desktop"></i>
                    <p>
                        <b>Sức Chứa:</b> {room?.capacity} máy
                    </p>
                </div>
            </Detail>
        </>
    )
}

export default RoomDetail;
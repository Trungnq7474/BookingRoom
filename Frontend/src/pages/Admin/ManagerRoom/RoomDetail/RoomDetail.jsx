import Detail from "../../../../components/Detail/Detail.jsx";
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


function RoomDetail({ onClose, room }) {

    const image = room?.image?.startsWith("/uploads/")
        ? `http://localhost:5000${room.image}`
        : roomImages[room?.image];

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
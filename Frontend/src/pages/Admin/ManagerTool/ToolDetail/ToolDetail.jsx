import keyboard from "../../../../assets/Equitment/keyboard.png";
import computer from "../../../../assets/Equitment/computer.png";
import micro from "../../../../assets/Equitment/micro.png";
import headphone from "../../../../assets/Equitment/headphone.png";
import mouse from "../../../../assets/Equitment/mouse.png";
import Detail from "../../../../components/Detail/Detail.jsx";

const toolImages = {
    "keyboard.png" : keyboard,
    "computer.png" : computer,
    "micro.png" : micro,
    "headphone.png" : headphone,
    "mouse.png" : mouse
};

function ToolDetail({ onClose, tool }) {

    const image = tool?.image?.startsWith("/uploads/")
        ? `http://localhost:5000${tool.image}`
        : toolImages[tool?.image];

    return (
        <>
            <Detail
                image={image}
                title={tool?.toolname}
                status={tool?.status}
                statusIcon={
                    tool?.status === "Hoạt Động"
                        ? "fa-solid fa-square-check"
                        : "fa-solid fa-wrench"
                }
                statusColor={
                    tool?.status === "Hoạt Động" ? "#26964b" : " #1900ff"
                }
                onClose={onClose}
            >
                <div className="common-detail-item">
                    <i className="fa-solid fa-file-lines"></i>
                    <p>
                        <b>Mô Tả:</b> {tool?.description}
                    </p>
                </div>

                <div className="common-detail-item">
                    <i className="fa-solid fa-location-dot"></i>
                    <p>
                        <b>{tool?.roomname} - {tool?.location} - {tool?.floor}</b>
                    </p>
                </div>

                <div className="common-detail-item">
                    <i className="fa-solid fa-layer-group"></i>
                    <p>
                        <b>Loại Thiết Bị:</b> {tool?.tooltype}
                    </p>
                </div>
            </Detail>
        </>
    )
}

export default ToolDetail;
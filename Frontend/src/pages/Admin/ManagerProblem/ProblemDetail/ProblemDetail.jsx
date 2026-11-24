import DetailModal from "../../../../components/DetailModal/DetailModal.jsx";

function ProblemDetail({ onClose, incident }) {
    return (
        <>
            <DetailModal
                onClose={onClose}
                image={incident?.image?.startsWith("/uploads/")
                    ? `http://localhost:5000${incident.image}`
                    : incident?.image
                }
                status={incident?.status}
                name={incident?.toolname}
                title="Thông Tin Báo Cáo Sự Cố"
                statusClass={
                    incident?.status === "Chờ Phân Công"
                    ? "pending-status"
                    : incident?.status === "Chờ Tiếp Nhận"
                    ? "pendingg-status"
                    : incident?.status === "Đã Tiếp Nhận"
                    ? "received-status"
                    : incident?.status === "Đang Thực Hiện"
                    ? "active-status"
                    : "completed-status"
                }
                statusIcon={
                    incident?.status === "Chờ Phân Công"
                    ? "fa-solid fa-clock"
                    : incident?.status === "Chờ Tiếp Nhận"
                    ? "fa-solid fa-business-time"
                    : incident?.status === "Đã Tiếp Nhận"
                    ? "fa-solid fa-circle-check"
                    : incident?.status === "Đang Thực Hiện"
                    ? "fa-solid fa-gear"
                    : "fa-solid fa-square-check"
                }

                information={
                    <>
                        <p className="code">#SC - 00{incident?.incident_id}</p>

                        <p>
                            <i className="fa-solid fa-location-dot"></i>
                            <b>{incident?.roomname} - {incident?.location} - {incident?.floor}</b>
                        </p>

                        <p>
                            <i className="fa-solid fa-circle-exclamation"></i>
                            <span><b>Loại Sự Cố:</b> {incident?.tooltype}</span>
                        </p>
                    </>
                }

                registration={
                    <div className="detail-columns">

                        <div className="detail-column">
                            <p>
                                <i className="fa-solid fa-user-check"></i>
                                <span><b>Họ Và Tên:</b> {incident?.full_name}</span>
                            </p>

                            <p>
                                <i className="fa-regular fa-id-card"></i>
                                <span><b>Vai Trò:</b> <strong>{incident?.role}</strong></span>
                            </p>

                            <p>
                                <i className="fa-regular fa-credit-card"></i>
                                <span><b>Mã Số:</b> {incident?.user_code}</span>
                            </p>
                        </div>

                        <div className="detail-column">
                            <p>
                                <i className="fa-regular fa-calendar"></i>
                                <span><b>Thời Gian Báo Cáo:</b> {new Date(incident.report_time).toLocaleString("vi-VN")}</span>
                            </p>

                            <p>
                                <i className="fa-solid fa-message"></i>
                                <span>
                                    <b>Mô Tả Sự Cố:</b> {incident?.description}
                                </span>
                            </p>
                        </div>

                    </div>
                }
            />
        </>
    );
}

export default ProblemDetail;

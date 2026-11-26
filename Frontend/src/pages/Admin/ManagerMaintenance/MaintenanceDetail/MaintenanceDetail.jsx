import DetailModal from "../../../../components/DetailModal/DetailModal.jsx";


function MaintenanceDetail({ onClose, maintenance, onApprove, onReject }) {
    return (
        <>
            <DetailModal
                onClose={onClose}
                image={maintenance?.image?.startsWith("/uploads/")
                    ? `http://localhost:5000${maintenance.image}`
                    : maintenance?.image
                }
                status={maintenance?.status}
                name={maintenance?.name}
                title="Thông Tin Đề Xuất Bảo Trì"
                showButtons={true}
                onApprove={() => onApprove(maintenance?.maintenance_id)}
                onReject={() => onReject(maintenance?.maintenance_id)}
                statusClass={
                    maintenance?.status === "Chờ Duyệt"
                    ? "pending-status"
                    : maintenance?.status === "Đã Duyệt"
                    ? "received-status"
                    : maintenance?.status === "Bảo Trì"
                    ? "active-status"
                    : maintenance?.status === "Đã Từ Chối"
                    ? "rejected-status "
                    : "completed-status"
                }
                statusIcon={
                    maintenance?.status === "Chờ Duyệt"
                    ? "fa-solid fa-clock"
                    : maintenance?.status === "Đã Duyệt"
                    ? "fa-solid fa-circle-check"
                    : maintenance?.status === "Bảo Trì"
                    ? "fa-solid fa-wrench"
                    : maintenance?.status === "Đã Từ Chối"
                    ? "fa-solid fa-circle-xmark"
                    : "fa-solid fa-square-check"
                }

                information={
                    <>
                        <p className="code">#BT - 00{maintenance?.maintenance_id}</p>

                        <p>
                            <i className="fa-solid fa-location-dot"></i>
                            <b>{maintenance?.roomname} - {maintenance?.location} - {maintenance?.floor}</b>
                        </p>

                        <p>
                            <i className="fa-solid fa-screwdriver-wrench"></i>
                            <span><b>Loại Bảo Trì:</b> {maintenance?.maintenance_type}</span>
                        </p>
                    </>
                }

                registration={
                    <div className="detail-columns">

                        <div className="detail-column">
                            <p>
                                <i className="fa-solid fa-user-check"></i>
                                <span><b>Họ Và Tên:</b> {maintenance?.full_name}</span>
                            </p>

                            <p>
                                <i className="fa-regular fa-id-card"></i>
                                <span><b>Vai Trò:</b> <strong className="common-technician">{maintenance?.role}</strong></span>
                            </p>

                            <p>
                                <i className="fa-regular fa-credit-card"></i>
                                <span><b>Mã Số:</b> {maintenance?.user_code}</span>
                            </p>
                        </div>

                        <div className="detail-column">
                            <p>
                                <i className="fa-regular fa-calendar"></i>
                                <span><b>Thời Gian Đề Xuất:</b> {new Date(maintenance?.proposal_time).toLocaleString("vi-VN")}</span>
                            </p>

                            <p>
                                <i className="fa-solid fa-message"></i>
                                <span>
                                    <b>Nội Dung:</b> {maintenance?.description}
                                </span>
                            </p>

                            {maintenance?.status === "Đã Hoàn Thành"
                                ? <p>
                                    <i className="fa-solid fa-calendar-check"></i>
                                    <span>
                                        <b>Thời Gian Hoàn Thành:</b> {maintenance?.completion_time
                                            ? new Date(maintenance?.completion_time).toLocaleString("vi-VN")
                                            : ""}
                                    </span>
                                </p>
                                : ""
                            }

                            {maintenance?.status === "Đã Từ Chối"
                                ? <p>
                                    <i className="fa-solid fa-calendar-xmark"></i>
                                    <span>
                                        <b>Thời Gian Từ Chối:</b> {maintenance?.rejection_time
                                            ? new Date(maintenance?.rejection_time).toLocaleString("vi-VN")
                                            : ""}
                                    </span>
                                </p>
                                : ""
                            }
                        </div>

                    </div>
                }
            />
        </>
    );
}

export default MaintenanceDetail;

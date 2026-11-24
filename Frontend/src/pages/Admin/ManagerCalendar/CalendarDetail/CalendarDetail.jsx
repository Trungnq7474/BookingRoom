import DetailModal from "../../../../components/DetailModal/DetailModal.jsx";
import commonImages from "../../../../utils/commonImages.js";

function CalendarDetail({ onClose, booking, onApprove, onReject }) {
    return (
        <>
            <DetailModal
                onClose={onClose}
                image={booking?.booking_image?.startsWith("/uploads/")
                    ? `http://localhost:5000${booking.booking_image}`
                    : commonImages[booking?.booking_image]
                }
                status={booking?.status}
                statusIcon={
                    booking?.status === "Chờ Duyệt"
                    ? "fa-solid fa-clock"
                    : booking?.status === "Đang Sử Dụng"
                    ? "fa-solid fa-gear"
                    : booking?.status === "Đã Sử Dụng"
                    ? "fa-solid fa-square-check"
                    : booking?.status === "Đã Duyệt"
                    ? "fa-solid fa-circle-check"
                    : "fa-solid fa-circle-xmark"
                }
                statusClass={
                    booking?.status === "Chờ Duyệt"
                    ? "pending"
                    : booking?.status === "Đang Sử Dụng"
                    ? "active"
                    : booking?.status === "Đã Sử Dụng"
                    ? "completed"
                    : booking?.status === "Đã Duyệt"
                    ? "received"
                    : "rejected"
                }
                name={booking?.name}
                title="Thông Tin Đăng Ký"
                showButtons={true}
                onApprove={() => onApprove(booking?.booking_id)}
                onReject={() => onReject(booking?.booking_id)}

                information={
                    <>
                        <p>
                            <i className="fa-regular fa-calendar"></i>
                            <span>
                                <b>Thời Gian Bắt Đầu:</b> {new Date(booking?.start_time).toLocaleString("vi-VN")}
                            </span>
                        </p>

                        <p>
                            <i className="fa-regular fa-calendar"></i>
                            <span>
                                <b>Thời Gian Kết Thúc:</b> {new Date (booking?.end_time).toLocaleString("vi-VN")}
                            </span>
                        </p>

                        <p>
                            <i className="fa-solid fa-location-dot"></i>
                            <b>{booking?.room_name} - {booking?.location} - {booking?.floor}</b>
                        </p>

                        <p>
                            <i className="fa-solid fa-hard-drive"></i>
                            <span>
                                <b>Loại Đăng Ký:</b> {booking?.type}
                            </span>
                        </p>
                    </>
                }

                registration={
                    <div className="detail-columns">

                        <div className="detail-column">
                            <p>
                                <i className="fa-solid fa-user-check"></i>
                                <span><b>Họ Và Tên:</b> {booking?.full_name}</span>
                            </p>

                            <p>
                                <i className="fa-regular fa-id-card"></i>
                                <span><b>Vai Trò:</b> <strong>{booking?.role}</strong></span>
                            </p>

                            <p>
                                <i className="fa-regular fa-credit-card"></i>
                                <span><b>Mã Số:</b> {booking?.user_code}</span>
                            </p>
                        </div>

                        <div className="detail-column">
                            <p>
                                <i className="fa-regular fa-calendar"></i>
                                <span><b>Thời Gian Đăng Ký:</b> {new Date (booking?.register_time).toLocaleString("vi-VN")}</span>
                            </p>

                            <p>
                                <i className="fa-regular fa-bookmark"></i>
                                <span><b>Mục Đích Sử Dụng:</b> {booking?.purpose}</span>
                            </p>
                        </div>

                    </div>
                }
            />
        </>
    );
}

export default CalendarDetail;

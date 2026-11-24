import Title from "../../../../components/Title/Title.jsx";

function ProblemTitle() {
    return (
        <>
            <Title
                icon="fa-solid fa-triangle-exclamation"
                title="QUẢN LÝ SỰ CỐ"
                placeholder="Tìm kiếm theo tên, mã sự cố,..."
            >
                <div className="filter-box">
                    <select defaultValue="">
                        <option value="">Trạng thái</option>
                        <option value="Chờ Phân Công">Chờ Phân Công</option>
                        <option value="Chờ Tiếp Nhận">Chờ Tiếp Nhận</option>
                        <option value="Đã Tiếp Nhận">Đã Tiếp Nhận</option>
                        <option value="Đang Thực Hiện">Đang Thực Hiện</option>
                        <option value="Đã Hoàn Thành">Đã Hoàn Thành</option>
                    </select>

                    <i className="fa-solid fa-chevron-down"></i>
                </div>
            </Title>
        </>
    );
}

export default ProblemTitle;

import Title from "../../../../components/Title/Title.jsx";

function ProblemTitle({ search, onSearch, filters, setFilters }) {
    return (
        <>
            <Title
                icon="fa-solid fa-triangle-exclamation"
                title="QUẢN LÝ SỰ CỐ"
                placeholder="Tìm kiếm theo tên, loại sự cố,..."
                search={search}
                onSearch={onSearch}
            >
                <div className="filter-box">
                    <select value={filters.status || ""}
                            onChange={(e) => setFilters({ ...filters, status: e.target.value })}>
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

import Title from "../../../../components/Title/Title.jsx";

function CalendarTitle({ search, onSearch, filters, setFilters }) {
    return (
        <>
            <Title
                icon="fa-regular fa-calendar-days"
                title="QUẢN LÝ ĐĂNG KÝ LỊCH"
                placeholder="Tìm kiếm theo tên, vai trò,..."
                search={search}
                onSearch={onSearch}
            >
                <div className="filter-box">
                    <select value={filters.type || ""}
                            onChange={(e) => setFilters({ ...filters, type: e.target.value })}>
                        <option value="">Loại đăng ký</option>
                        <option value="Thiết Bị">Thiết Bị</option>
                        <option value="Phòng Máy">Phòng Máy</option>
                        <option value="Phòng Thư Viện">Phòng Thư Viện</option>
                    </select>

                    <i className="fa-solid fa-chevron-down"></i>
                </div>

                <div className="filter-box">
                    <select value={filters.status || ""}
                            onChange={(e) => setFilters({ ...filters, status: e.target.value })}>
                        <option value="">Trạng Thái</option>
                        <option value="Chờ Duyệt">Chờ Duyệt</option>
                        <option value="Đã Duyệt">Đã Duyệt</option>
                        <option value="Đang Sử Dụng">Đang Sử Dụng</option>
                        <option value="Đã Sử Dụng">Đã Sử Dụng</option>
                        <option value="Đã Từ Chối">Đã Từ Chối</option>
                    </select>

                    <i className="fa-solid fa-chevron-down"></i>
                </div>
            </Title>
        </>
    );
}

export default CalendarTitle;

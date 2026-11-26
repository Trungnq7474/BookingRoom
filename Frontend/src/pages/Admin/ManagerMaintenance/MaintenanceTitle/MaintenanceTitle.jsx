import Title from "../../../../components/Title/Title.jsx";

function MaintenanceTitle({ search, onSearch, filters, setFilters }) {
    return (
        <>
            <Title
                icon="fa-solid fa-screwdriver-wrench"
                title="QUẢN LÝ ĐỀ XUẤT BẢO TRÌ"
                placeholder="Tìm kiếm theo tên,..."
                search={search}
                onSearch={onSearch}
            >
                <div className="filter-box">
                    <select value={filters.maintenance_type || ""}
                            onChange={(e) => setFilters({ ...filters, maintenance_type: e.target.value })}>
                        <option value="">Loại bảo trì</option>
                        <option value="Bảo Trì Định Kỳ">Bảo Trì Định Kỳ</option>
                        <option value="Bảo Trì Đột Xuất">Bảo Trì Đột Xuất</option>
                    </select>

                    <i className="fa-solid fa-chevron-down"></i>
                </div>

                <div className="filter-box">
                    <select value={filters.status || ""}
                            onChange={(e) => setFilters({ ...filters, status: e.target.value })}>
                        <option value="">Trạng thái</option>
                        <option value="Chờ Duyệt">Chờ Duyệt</option>
                        <option value="Đã Duyệt">Đã Duyệt</option>
                        <option value="Đã Từ Chối">Đã Từ Chối</option>
                        <option value="Bảo Trì">Bảo Trì</option>
                        <option value="Đã Hoàn Thành">Đã Hoàn Thành</option>
                    </select>

                    <i className="fa-solid fa-chevron-down"></i>
                </div>

            </Title>
        </>
    );
}

export default MaintenanceTitle;
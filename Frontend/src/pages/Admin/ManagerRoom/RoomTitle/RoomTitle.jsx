import Title from "../../../../components/Title/Title.jsx";

function RoomTitle({ onAdd, onSearch, search, filters, setFilters }) {
    return (
        <>
            <Title
                icon="fa-solid fa-desktop"
                title="QUẢN LÝ PHÒNG"
                placeholder="Tìm kiếm theo tên phòng,..."
                buttonText="Thêm Phòng"
                onAdd={onAdd}
                search={search}
                onSearch={onSearch}
            >

                <div className="filter-box">
                    <select value={filters.status || ""}
                            onChange={(e) => setFilters({ ...filters, status: e.target.value })}>
                        <option value="">Trạng thái</option>
                        <option value="Hoạt Động">Hoạt Động</option>
                        <option value="Bảo Trì">Bảo Trì</option>
                    </select>

                    <i className="fa-solid fa-chevron-down"></i>
                </div>
            </Title>
        </>
    );
}

export default RoomTitle;

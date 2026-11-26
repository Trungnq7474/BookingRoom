import Title from "../../../../components/Title/Title.jsx";

function UserTitle({ onAdd, search, onSearch, filters, setFilters }) {
    return (
        <>
            <Title
                icon="fa-solid fa-users"
                title="QUẢN LÝ NGƯỜI DÙNG"
                placeholder="Tìm kiếm theo tên, mã số,..."
                buttonText="Thêm Người Dùng"
                onAdd={onAdd}
                search={search}
                onSearch={onSearch}
            >
                <div className="filter-box">
                    <select value={filters.role || ""}
                            onChange={(e) => setFilters({ ...filters, role: e.target.value })}>
                        <option value="">Vai trò</option>
                        <option value="Admin">Admin</option>
                        <option value="Sinh Viên">Sinh Viên</option>
                        <option value="Giảng Viên">Giảng Viên</option>
                        <option value="Nhân Viên Kỹ Thuật">Nhân Viên Kỹ Thuật</option>
                    </select>

                    <i className="fa-solid fa-chevron-down"></i>
                </div>
            </Title>
        </>
    );
}

export default UserTitle;

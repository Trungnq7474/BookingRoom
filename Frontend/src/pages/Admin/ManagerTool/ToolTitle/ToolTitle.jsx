import Title from "../../../../components/Title/Title.jsx";
import useTools from "../../../../hooks/useTools.js";

function ToolTitle({ onAdd, onSearch, search, filters, setFilters }) {
    
    const { tools } = useTools();

    return (
        <>
            <Title
                icon="fa-solid fa-hard-drive"
                title="QUẢN LÝ THIẾT BỊ"
                placeholder="Tìm kiếm theo tên thiết bị,..."
                buttonText="Thêm Thiết Bị"
                onAdd={onAdd}
                search={search}
                onSearch={onSearch}
            >
                <div className="filter-box">
                    <select value={filters.tooltype || ""}
                            onChange={(e) => setFilters({ ...filters, tooltype: e.target.value })}>
                        <option value="">Loại thiết bị</option>
                        {tools.map((tool) => (
                            <option key={tool?.tool_id} value={tool?.tooltype}>
                                {tool?.tooltype}
                            </option>
                        ))}
                    </select>

                    <i className="fa-solid fa-chevron-down"></i>
                </div>

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

export default ToolTitle;

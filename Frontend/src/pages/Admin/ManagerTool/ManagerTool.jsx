import ToolTitle from "./ToolTitle/ToolTitle.jsx";
import ToolTable from "./ToolTable/ToolTable.jsx";
import Pagination from "../../../components/Pagination/Pagination.jsx";
import ToolForm from "./ToolForm/ToolForm.jsx";
import ToolDetail from "./ToolDetail/ToolDetail.jsx";
import useForm from "../../../hooks/useAdd.js"
import useEdit from "../../../hooks/useEdit.js"
import useDetail from "../../../hooks/useDetail.js"
import useTools from "../../../hooks/useTools.js";
import usePagination from "../../../hooks/usePagination.js";
import useSearch from "../../../hooks/useSearch.js";
import useFilter from "../../../hooks/useFilter.js";

function ManagerTool() {

    const { show, setShow } = useForm();
    const { showEdit, setShowEdit, selectedItem, setSelectedItem } = useEdit();
    const { showDetail, setShowDetail, selectedDetail, setSelectedDetail } = useDetail();
    const { tools, addTools, editTools, deleteTools } = useTools();
    const { search, setSearch, filteredData: searchedData } = useSearch(
        tools,
        ["toolname"]
    );
    const { filters, setFilters, filteredData } = useFilter(searchedData);
    const { currentPage, setCurrentPage, pages, pagesNumber } = usePagination(filteredData);

    return (
        <>
            <ToolTitle 
                onAdd={() => setShow(true)}
                onSearch={setSearch}
                search={search}
                filters={filters}
                setFilters={setFilters}
            />

            <section className="content">

                <ToolTable 
                    onView={(item) => {
                        setShowDetail(true)
                        setSelectedDetail(item)
                    }} 
                    onEdit={(item) => {
                        setShowEdit(true)
                        setSelectedItem(item)
                    }}
                    onDelete={(item) => {
                        const confirmDelete = window.confirm(
                            `Bạn Có Chắc Chắn Muốn Xóa Thiết Bị "${item.toolname}" Không?`
                        )

                        if(confirmDelete) {
                            deleteTools(item.tool_id);
                        }
                    }}
                    data={pages}
                />

                <Pagination
                    pages={pagesNumber}
                    currentPage={currentPage}
                    onPageChange={setCurrentPage}
                />

            </section>

            {show ? 
                <ToolForm 
                    onClose={() => setShow(false)}
                    onAdd={addTools}
                    isEdit={false}
                /> 
            : "" }

            {showEdit ?
                <ToolForm 
                    onClose={() => setShowEdit(false)}
                    onEdit={editTools}
                    tool={selectedItem}
                    isEdit={true}
                />
            : ""}

            {showDetail ? 
                <ToolDetail 
                    onClose={() => setShowDetail(false)}
                    tool={selectedDetail} 
                /> 
            : "" }

        </>
    )
}

export default ManagerTool;
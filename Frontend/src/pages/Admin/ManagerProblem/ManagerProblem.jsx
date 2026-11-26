import ProblemTitle from "./ProblemTitle/ProblemTitle.jsx";
import ProblemTable from "./ProblemTable/ProblemTable.jsx";
import ProblemDetail from "./ProblemDetail/ProblemDetail.jsx";
import Pagination from "../../../components/Pagination/Pagination.jsx";
import useDetail from "../../../hooks/useDetail.js";
import useIncidents from "../../../hooks/useIncidents.js";
import usePagination from "../../../hooks/usePagination.js";
import useSearch from "../../../hooks/useSearch.js";
import useFilter from "../../../hooks/useFilter.js";

function ManagerProblem() {

    const { showDetail, setShowDetail, selectedDetail, setSelectedDetail } = useDetail();
    const { incidents, deleteIncidents, assignIncidents } = useIncidents();
    const { search, setSearch, filteredData: searchedData } = useSearch(
        incidents,
        ["full_name", "tooltype"]
    ); 
    const { filters, setFilters, filteredData } = useFilter(searchedData);
    const { currentPage, setCurrentPage, pages, pagesNumber } = usePagination(filteredData);
    
    return (
        <>
            <ProblemTitle 
                search={search}
                onSearch={setSearch}
                filters={filters}
                setFilters={setFilters}
            />

            <section className="content">

                <ProblemTable 
                    onView={(item) => {
                        setShowDetail(true);
                        setSelectedDetail(item);
                    }}
                    onDelete={(item) => {
                        const confirmDelete = window.confirm(
                            `Bạn Có Chắc Chắn Muốn Xóa Sự Cố "#SC - 00${item.incident_id}" Không?`
                        );

                        if(confirmDelete) {
                            deleteIncidents(item.incident_code);
                        }
                    }}
                    onAssign={(incident_id, employment) => {
                        assignIncidents(incident_id, employment);
                    }}

                    data={pages}
                />

                <Pagination 
                    pages={pagesNumber}
                    currentPage={currentPage}
                    onPageChange={setCurrentPage}
                />

            </section>
            
            {showDetail ? 
                <ProblemDetail 
                    onClose={() => setShowDetail(false)}
                    incident={selectedDetail} 
                /> 
            : "" }

        </>
    )
}

export default ManagerProblem;
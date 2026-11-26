import MaintenanceTitle from "./MaintenanceTitle/MaintenanceTitle.jsx";
import MaintenanceTable from "./MaintenanceTable/MaintenanceTable.jsx";
import MaintenanceDetail from "./MaintenanceDetail/MaintenanceDetail.jsx";
import Pagination from "../../../components/Pagination/Pagination.jsx";
import useDetail from "../../../hooks/useDetail.js";
import useMaintenances from "../../../hooks/useMaintenances.js";
import usePagination from "../../../hooks/usePagination.js";
import useSearch from "../../../hooks/useSearch.js";
import useFilter from "../../../hooks/useFilter.js";

function ManagerMaintenance() {
    
    const { showDetail, setShowDetail, selectedDetail, setSelectedDetail } = useDetail();
    const { maintenances, approveMaintenances, rejectMaintenances, deleteMaintenances } = useMaintenances();
    const { search, setSearch, filteredData: searchedData } = useSearch(
        maintenances,
        ["full_name"]
    );
    const { filters, setFilters, filteredData } = useFilter(searchedData);
    const { currentPage, setCurrentPage, pages, pagesNumber } = usePagination(filteredData);

    return (
        <>
            <MaintenanceTitle
                search={search}
                onSearch={setSearch}
                filters={filters}
                setFilters={setFilters}
            />

            <section className="content">

                <MaintenanceTable 
                    onView={(item) => {
                        setShowDetail(true)
                        setSelectedDetail(item)
                    }}
                    onDelete={(item) => {
                        const confirmDelete = window.confirm(
                            `Bạn Có Chắc Chắn Muốn Xóa Đề Xuất Bảo Trì "#BT - 00${item.maintenance_id}" Không?`
                        );

                        if(confirmDelete) {
                            deleteMaintenances(item.maintenance_id);
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

            {showDetail ? 
                <MaintenanceDetail 
                    onClose={() => setShowDetail(false)}
                    maintenance={selectedDetail}
                    onApprove={async (maintenance_id) => {
                        await approveMaintenances(maintenance_id);
                        setSelectedDetail({ ...selectedDetail, status: "Đã Duyệt" });
                    }}
                    onReject={async (maintenance_id) => {
                        await rejectMaintenances(maintenance_id);
                        setSelectedDetail({ ...selectedDetail, status: "Đã Từ Chối" });
                    }}
                /> 
            : ""}
        </>
    )
};

export default ManagerMaintenance;
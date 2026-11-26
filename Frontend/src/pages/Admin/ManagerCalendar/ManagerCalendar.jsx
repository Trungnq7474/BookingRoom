import CalendarTitle from "./CalendarTitle/CalendarTitle.jsx";
import CalendarTable from "./CalendarTable/CalendarTable.jsx";
import Pagination from "../../../components/Pagination/Pagination.jsx";
import CalendarDetail from "./CalendarDetail/CalendarDetail.jsx";
import useDetail from "../../../hooks/useDetail.js";
import useBookings from "../../../hooks/useBookings.js";
import usePagination from "../../../hooks/usePagination.js";
import useSearch from "../../../hooks/useSearch.js";
import useFilter from "../../../hooks/useFilter.js";

function ManagerCalendar() {

    const { showDetail, setShowDetail, selectedDetail, setSelectedDetail } = useDetail();
    const { bookings, deleteBookings, approveBookings, rejectBookings } = useBookings();
    const { search, setSearch, filteredData: searchedData } = useSearch(
        bookings,
        ["full_name", "role"]
    );
    const { filters, setFilters, filteredData } = useFilter(searchedData);
    const { currentPage, setCurrentPage, pages, pagesNumber } = usePagination(filteredData);

    return (
        <>
            <CalendarTitle
                search={search}
                onSearch={setSearch}
                filters={filters}
                setFilters={setFilters}
            />

            <section className="content">

                <CalendarTable 
                    onView={(item) => {
                        setShowDetail(true)
                        setSelectedDetail(item)
                    }}
                    onDelete={(item) => {
                        const confirmDelete = window.confirm(
                            `Bạn Có Chắc Chắn Muốn Xóa Đăng Ký Của "${item.full_name}" Không?`
                        );

                        if(confirmDelete) {
                            deleteBookings(item.booking_id);
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
                <CalendarDetail 
                    onClose={() => setShowDetail(false)}
                    booking={selectedDetail} 
                    onApprove={async (booking_id) => {
                        await approveBookings(booking_id);
                        setSelectedDetail({ ...selectedDetail, status: "Đã Duyệt" });
                    }}
                    onReject={async (booking_id) => {
                        await rejectBookings(booking_id);
                        setSelectedDetail({ ...selectedDetail, status: "Đã Từ Chối" });
                    }}
                /> 
            : ""}
        </>
    )
}

export default ManagerCalendar;
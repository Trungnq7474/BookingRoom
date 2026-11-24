import CalendarTitle from "./CalendarTitle/CalendarTitle.jsx";
import CalendarTable from "./CalendarTable/CalendarTable.jsx";
import Pagination from "../../../components/Pagination/Pagination.jsx";
import CalendarDetail from "./CalendarDetail/CalendarDetail.jsx";
import useDetail from "../../../hooks/useDetail.js";
import useBookings from "../../../hooks/useBookings.js";
import usePagination from "../../../hooks/usePagination.js";

function ManagerCalendar() {

    const { showDetail, setShowDetail, selectedDetail, setSelectedDetail } = useDetail();
    const { bookings, deleteBookings, approveBookings, rejectBookings } = useBookings();
    const { currentPage, setCurrentPage, pages, pagesNumber } = usePagination(bookings);

    return (
        <>
            <CalendarTitle />

            <section className="content">

                <CalendarTable 
                    onView={(item) => {
                        setShowDetail(true)
                        setSelectedDetail(item)
                    }}
                    onDelete={(item) => {
                        const confirmDelete = window.confirm(
                            `Bạn Có Chắc Chắn Muốn Xóa Đăng ký "${item.type}" Không?`
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
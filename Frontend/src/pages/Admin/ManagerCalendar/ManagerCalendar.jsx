import CalendarTitle from "./CalendarTitle/CalendarTitle.jsx";
import CalendarTable from "./CalendarTable/CalendarTable.jsx";
// import Pagination from "../../../components/Pagination/Pagination.jsx";
import CalendarDetail from "./CalendarDetail/CalendarDetail.jsx";
import useDetail from "../../../hooks/useDetail.js";
import useBookings from "../../../hooks/useBookings.js";

function ManagerCalendar() {

    const { showDetail, setShowDetail, selectedDetail, setSelectedDetail } = useDetail();
    const { bookings, deleteBookings } = useBookings();

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
                    data={bookings}
                />

                {/* <Pagination /> */}

            </section>

            {showDetail ? 
                <CalendarDetail 
                    onClose={() => setShowDetail(false)}
                    booking={selectedDetail} 
                /> 
            : ""}
        </>
    )
}

export default ManagerCalendar;
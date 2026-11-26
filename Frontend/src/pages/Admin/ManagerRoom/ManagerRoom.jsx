import RoomTitle from "./RoomTitle/RoomTitle.jsx";
import RoomTable from "./RoomTable/RoomTable.jsx";
import RoomForm from "./RoomForm/RoomForm.jsx";
import RoomDetail from "./RoomDetail/RoomDetail.jsx";
import Pagination from "../../../components/Pagination/Pagination.jsx";
import useAdd from "../../../hooks/useAdd.js";
import useEdit from "../../../hooks/useEdit.js"
import useDetail from "../../../hooks/useDetail.js";
import useRooms from "../../../hooks/useRooms.js";
import usePagination from "../../../hooks/usePagination.js";
import useSearch from "../../../hooks/useSearch.js";
import useFilter from "../../../hooks/useFilter.js";

function ManagerRoom() {

    const { show, setShow } = useAdd();
    const { showEdit, setShowEdit, selectedItem, setSelectedItem } = useEdit();
    const { showDetail, setShowDetail, selectedDetail, setSelectedDetail } = useDetail();
    const { rooms, addRooms, editRooms, deleteRooms } = useRooms();
    const { search, setSearch, filteredData: searchedData } = useSearch(
        rooms,
        ["roomname"]
    );
    const { filters, setFilters, filteredData } = useFilter(searchedData);
    const { currentPage, setCurrentPage, pages, pagesNumber } = usePagination(filteredData);

    return (
        <>
            <RoomTitle 
                onAdd={() => setShow(true)}
                onSearch={setSearch}
                search={search}
                filters={filters}
                setFilters={setFilters}
            />

            <section className="content">

                <RoomTable 
                    onView={(item) => {
                        setSelectedDetail(item);
                        setShowDetail(true);
                    }}
                    onEdit={(item) => {
                        setSelectedItem(item);
                        setShowEdit(true);
                    }}
                    onDelete={(item) => {
                        const confirmDelete = window.confirm(
                            `Bạn Có Chắc Chắn Muốn Xóa Phòng "${item.roomname}" Không?`
                        )

                        if(confirmDelete) {
                            deleteRooms(item.room_id);
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
                <RoomForm 
                    onClose={() => setShow(false)}
                    onAdd={addRooms}
                    isEdit={false}
                /> 
            : ""}

            {showEdit ? 
                <RoomForm 
                    onClose={() => setShowEdit(false)}
                    onEdit={editRooms}
                    room={selectedItem}
                    isEdit={true}
                />
            : ""}
            
            {showDetail ? 
                <RoomDetail 
                    onClose={() => setShowDetail(false)}
                    room={selectedDetail}
                /> 
            : ""}

        </>
    )
}

export default ManagerRoom;
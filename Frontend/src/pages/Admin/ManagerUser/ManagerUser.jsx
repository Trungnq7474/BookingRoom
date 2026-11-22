import UserTitle from "./UserTitle/UserTitle.jsx";
import UserTable from "./UserTable/UserTable.jsx";
import Pagination from "../../../components/Pagination/Pagination.jsx";
import UserForm from "./UserForm/UserForm.jsx";
import useAdd from "../../../hooks/useAdd.js";
import useEdit from "../../../hooks/useEdit.js";
import useUsers from "../../../hooks/useUsers.js";
import usePagination from "../../../hooks/usePagination.js";

function ManagerUser() {

    const { show, setShow } = useAdd();
    const { showEdit, setShowEdit, selectedItem, setSelectedItem } = useEdit();
    const { users, addUsers, editUsers, deleteUsers } = useUsers();
    const { currentPage, setCurrentPage, pages, pagesNumber } = usePagination(users);

    return (
        <>
            <UserTitle onAdd={() => setShow(true)} />

            <section className="content">

                <UserTable 
                    onEdit={(item) => {
                        setSelectedItem(item);
                        setShowEdit(true);
                    }}

                    onDelete={(item) => {
                        const confirmDelete = window.confirm(
                            `Bạn Có Chắc Chắn Muốn Xóa Người Dùng "${item.full_name}" Không?`
                        );

                        if(confirmDelete) {
                            deleteUsers(item.user_id);
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
                <UserForm 
                    onClose={() => setShow(false)}
                    onAdd={addUsers}
                    isEdit={false} 
                /> 
            : ""}

            {showEdit ? 
                <UserForm 
                    onClose={() => setShowEdit(false)} 
                    onEdit={editUsers}
                    user={selectedItem}
                    isEdit={true}
                /> 
            : ""} 

        </>
    )
}

export default ManagerUser;
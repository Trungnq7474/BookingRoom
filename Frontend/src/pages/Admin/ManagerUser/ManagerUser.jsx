import UserTitle from "./UserTitle/UserTitle.jsx";
import UserTable from "./UserTable/UserTable.jsx";
import Pagination from "../../../components/Pagination/Pagination.jsx";
import UserForm from "./UserForm/UserForm.jsx";
import useAdd from "../../../hooks/useAdd.js";
import useEdit from "../../../hooks/useEdit.js";
import useUsers from "../../../hooks/useUsers.js";


function ManagerUser() {

    const { show, setShow } = useAdd();
    const { showEdit, setShowEdit } = useEdit();
    const { users } = useUsers();

    return (
        <>
            <UserTitle onAdd={() => setShow(true)} />

            <section className="content">

                <UserTable 
                    onEdit={() => setShowEdit(true)}
                    data={users}
                />

                <Pagination />

            </section>

            {show ? 
                <UserForm 
                    onClose={() => setShow(false)}
                    isEdit={false} 
                /> 
            : ""}

            {showEdit ? 
                <UserForm 
                    onClose={() => setShowEdit(false)} 
                    isEdit={true}
                /> 
            : ""} 

        </>
    )
}

export default ManagerUser;
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

function ManagerTool() {

    const { show, setShow } = useForm();
    const { showEdit, setShowEdit } = useEdit();
    const { showDetail, setShowDetail } = useDetail();
    const { tools } = useTools();
    const { currentPage, setCurrentPage, pages, pagesNumber } = usePagination(tools);

    return (
        <>
            <ToolTitle onAdd={() => setShow(true)} />

            <section className="content">

                <ToolTable 
                    onView={() => setShowDetail(true)} 
                    onEdit={() => setShowEdit(true)}
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
                    isEdit={false}
                /> 
            : "" }

            {showEdit ?
                <ToolForm 
                    onClose={() => setShowEdit(false)}
                    isEdit={true}
                />
            : ""}

            {showDetail ? <ToolDetail onClose={() => setShowDetail(false)} /> : "" }

        </>
    )
}

export default ManagerTool;
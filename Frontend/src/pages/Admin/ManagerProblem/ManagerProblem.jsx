import ProblemTitle from "./ProblemTitle/ProblemTitle.jsx";
import ProblemTable from "./ProblemTable/ProblemTable.jsx";
import ProblemDetail from "./ProblemDetail/ProblemDetail.jsx";
// import Pagination from "../../../components/Pagination/Pagination.jsx";
import useDetail from "../../../hooks/useDetail.js";
import useIncidents from "../../../hooks/useIncidents.js";

function ManagerProblem() {

    const { showDetail, setShowDetail, selectedDetail, setSelectedDetail } = useDetail();
    const { incidents, deleteIncidents } = useIncidents();
    
    return (
        <>
            <ProblemTitle />

            <section className="content">

                <ProblemTable 
                    onView={(item) => {
                        setShowDetail(true);
                        setSelectedDetail(item);
                    }}
                    onDelete={(item) => {
                        const confirmDelete = window.confirm(
                            `Bạn Có Chắc Chắn Muốn Xóa Sự Cố "#SC - 00${item.incident_code}" Không?`
                        );

                        if(confirmDelete) {
                            deleteIncidents(item.incident_code);
                        }
                    }}

                    data={incidents}
                />

                {/* <Pagination /> */}

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
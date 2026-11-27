import BoardTitle from "./BoardTitle/BoardTitle.jsx";
import BoardActive from "./BoardActive/BoardActive.jsx";
import BoardTable from "./BoardTable/BoardTable.jsx";
import useDashboards from "../../../hooks/useDashboards.js";

function DashBoard() {

    const { dashboards } = useDashboards();

    return (
        <>
            <BoardTitle dashboards={dashboards}/>

            <BoardActive dashboards={dashboards}/>

            <section className="content">

                <BoardTable data={dashboards?.recentActivities || []}/>

            </section>
        </>
    )
}

export default DashBoard;
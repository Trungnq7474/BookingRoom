import { useState, useEffect } from "react";
import { getDashboard } from "../services/dashboardsService.js";

function useDashboard() {
    const [dashboards, setDashboards] = useState({});

    useEffect(() => {
        const getDashboards = async () => {
            try {
                const res = await getDashboard();
                setDashboards(res.data);
            }

            catch (err) {
                console.log(err);
            }
        };

        getDashboards();
    }, []);

    return { dashboards };
}

export default useDashboard;
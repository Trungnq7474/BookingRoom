import { useState, useEffect } from "react";
import { getMaintenance, approveMaintenance, deleteMaintenance, rejectMaintenance } from "../services/maintenancesService.js";

function useMaintenances() {
    const [maintenances, setMaintenances] = useState([]);

    useEffect(() => {
        const getMaintenances = async () => {
            try {
                const res = await getMaintenance();
                setMaintenances(res.data);
            } 
            
            catch (err) {
                console.log(err);
            }
        };

        getMaintenances();
    }, []);

    const approveMaintenances = async (maintenance_id) => {
        try {
            await approveMaintenance(maintenance_id);
    
            const res = await getMaintenance();
            setMaintenances(res.data);
        }
    
        catch (err) {
            console.log(err);
        }
    };

    const deleteMaintenances = async (maintenance_id) => {
        try {
            await deleteMaintenance(maintenance_id);
    
            const res = await getMaintenance();
            setMaintenances(res.data);
        }
    
        catch (err) {
            console.log(err);
        }
    };

    const rejectMaintenances = async (maintenance_id) => {
        try {
            await rejectMaintenance(maintenance_id);
    
            const res = await getMaintenance();
            setMaintenances(res.data);
        }
    
        catch (err) {
            console.log(err);
        }
    };
    

    return { maintenances, approveMaintenances, deleteMaintenances, rejectMaintenances };
}

export default useMaintenances;
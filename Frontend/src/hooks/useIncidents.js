import { useState, useEffect } from "react";
import { getIncident, deleteIncident, assignIncident } from "../services/incidentsService.js";

function useIncidents() {
    const [incidents, setIncidents] = useState([]);

    useEffect(() => {
        const getIncidents = async () => {
            try {
                const res = await getIncident();
                setIncidents(res.data);
            } 
            
            catch (err) {
                console.log(err);
            }
        };

        getIncidents();
    }, []);

    const deleteIncidents = async (incident_id) => {
            try {
                await deleteIncident(incident_id)
                
                const res = await getIncident();
                setIncidents(res.data);
            }
            
            catch (err) {
                console.log(err);
            }  
        };
    
    const assignIncidents = async (incident_id, employment) => {
        try {
            await assignIncident(incident_id, employment);

            const res = await getIncident();
            setIncidents(res.data);

        } 
        
        catch (err) {
            console.log(err);
        }
    };

    return { incidents, deleteIncidents, assignIncidents };
}

export default useIncidents;
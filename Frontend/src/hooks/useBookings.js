import { useState, useEffect } from "react";
import { getBooking, deleteBooking } from "../services/bookingsService.js";

function useBookings() {
    const [bookings, setBookings] = useState([]);

    useEffect(() => {
        const getBookings = async () => {
            try {
                const res = await getBooking();
                setBookings(res.data);
            }

            catch (err) {
                console.log(err);
            }
        };

        getBookings();
    }, []);

    const deleteBookings = async (booking_id) => {
        try {
            await deleteBooking(booking_id);

            const res = await getBooking();
            setBookings(res.data);
        }

        catch (err) {
            console.log(err);
        }
    }

    return { bookings, deleteBookings };
};

export default useBookings;

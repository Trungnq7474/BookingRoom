import { useState, useEffect } from "react";
import { getBooking, deleteBooking, approveBooking, rejectBooking } from "../services/bookingsService.js";

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
    };

    const approveBookings = async (booking_id) => {
        try {
            await approveBooking(booking_id);

            const res = await getBooking();
            setBookings(res.data);
        }

        catch (err) {
            console.log(err);
        }
    };

    const rejectBookings = async (booking_id) => {
        try {
            await rejectBooking(booking_id);

            const res = await getBooking();
            setBookings(res.data);
        }

        catch (err) {
            console.log(err);
        }
    };

    return { bookings, deleteBookings, approveBookings, rejectBookings };
};

export default useBookings;

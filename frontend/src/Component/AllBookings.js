import React from 'react';
import { useState, useEffect } from 'react'
import axios from "axios";
import Navbar from './NavBar';

const ManageBookings = () => {
    const [bookings, setBookings] = useState([]);

    useEffect(() => {
        getBookings();
    }, []);

    const authAxios = axios.create({
        baseURL: 'http://localhost:5000/auth',
        headers: {
            Authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    })

    const getBookings = async () => {
        const response = await authAxios.get('http://localhost:5000/booking/all');
        setBookings(response.data);
        console.log(response.data)
    }

    const deleteBooking = async (id) => {
        console.log(id)
        await authAxios.delete(`http://localhost:5000/booking/delete/${id}`);
        getBookings();
    }

    return (

        <div className="userInfo">
            <Navbar />
            <table className="table is-striped is-fullwidth">
                <thead>
                    <tr>
                        <th>Booking By</th>
                        <th>Booking Time</th>
                    </tr>
                </thead>
                <tbody>
                    {bookings.map((booking, _id) => (
                        <tr key={bookings.id}>
                            <td>{booking.bookingBy}</td>
                            <td>{booking.bookingTime}</td>
                            <td>
                                <td><button onClick={() => deleteBooking(booking._id)} className="button is-small is-danger">Delete</button>
                                </td></td>
                        </tr>
                    ))}

                </tbody>
            </table>
        </div>
    )
}
export default ManageBookings
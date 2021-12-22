import React from 'react';
import { useState, useEffect } from 'react'
import axios from "axios";
import NavBar from '../Component/NavBar';

const MyBookings = () => {
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
        const response = await authAxios.get(`http://localhost:5000/booking/${localStorage.getItem('userId')}`);
        setBookings(response.data);
    }

    return (
        <div className="userInfo">
            <NavBar />
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
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
export default MyBookings
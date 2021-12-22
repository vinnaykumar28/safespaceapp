import React from 'react';
import { useState, useEffect } from 'react'
import axios from "axios";
import { Link } from "react-router-dom";
import { useHistory } from 'react-router-dom';
import NavBar from '../NavBar';

const DisplayUsers = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        getUsers();
    }, []);

    const authAxios = axios.create({
        baseURL: 'http://localhost:5000/auth',
        headers: {
            Authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    })

    const getUsers = async () => {
        const response = await authAxios.get('http://localhost:5000/user/all');
        setUsers(response.data);
        console.log(response.data)
    }

    const deleteUsers = async (id) => {
        console.log(id)
        await authAxios.delete(`http://localhost:5000/user/delete/${id}`);
        getUsers();
    }

    return (
        
        <div className="userInfo">
            <NavBar/>
            <table className="table is-striped is-fullwidth">
                <thead>
                    <tr>
                        <th>Username</th>
                        <th>Email Address</th>
                        <th>Address</th>
                        <th>Bookings</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, _id) => (
                        <tr key={user._id}>
                            <td>{user.username}</td>
                            <td>{user.email}</td>
                            <td>{user.address}</td>
                            <td>
                                <Link to={`/users/update/${user._id}`} className="button is-small is-info">Edit</Link>
                                <td><button onClick={() => deleteUsers(user._id)} className="button is-small is-danger">Delete</button>
                                </td></td>
                        </tr>
                    ))}

                </tbody>
            </table>
        </div>
    )
}
export default DisplayUsers
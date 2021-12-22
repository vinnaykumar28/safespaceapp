import React from 'react';
import { useState, useEffect } from 'react'
import axios from "axios";
import { Link } from "react-router-dom";
import { useHistory } from 'react-router-dom';
import NavBar from '../NavBar';

const ConsultantList = () => {
    const [consultants, setConsultant] = useState([]);

    useEffect(() => {
        getConsultant();
    }, []);

    const authAxios = axios.create({
        baseURL: 'http://localhost:5000/auth',
        headers: {
            Authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    })

    const getConsultant = async () => {
        const response = await authAxios.get('http://localhost:5000/consultant/all');
        setConsultant(response.data);
        console.log(response.data)
    }

    const deleteConsultant = async (id) => {
        console.log(id)
        await authAxios.delete(`http://localhost:5000/consultant/delete/${id}`);
        getConsultant();
    }

    return (
        
        <div className="userInfo">
            <NavBar/>
            <li class="nav-item" role="presentation">

                <Link to="/addConsultant" className="button is-primary mt-2">Add New Consultant</Link>

            </li>
            <table className="table is-striped is-fullwidth">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Speciality</th>
                        <th>Email</th>
                        <th>ID</th>
                        <th>Working Hours</th>
                    </tr>
                </thead>
                <tbody>
                    {consultants.map((consultant, _id) => (
                        <tr key={consultants.id}>
                            <td>{consultant.name}</td>
                            <td>{consultant.speciality}</td>
                            <td>{consultant.email}</td>
                            <td>{consultant._id}</td>
                            <td>{consultant.workinghours}</td>
                            <td>
                                <Link to={`/consultant/update/${consultant._id}`} className="button is-small is-info">Edit</Link>
                                <td><button onClick={() => deleteConsultant(consultant._id)} className="button is-small is-danger">Delete</button>
                                </td></td>
                        </tr>
                    ))}

                </tbody>
            </table>
        </div>
    )
}
export default ConsultantList
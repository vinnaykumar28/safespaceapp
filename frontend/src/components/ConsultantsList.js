import React, { Component }  from 'react';
import { useState, useEffect } from 'react'
import axios from "axios";
import { Link } from "react-router-dom";
 
const ConsultantList = () => {
    const [consultants, setConsultant] = useState([]);
 
    useEffect(() => {
        getConsultant();
    }, []);
 
    const getConsultant = async () => {
        const response = await axios.get('http://localhost:5000/consultant/all');
        setConsultant(response.data);
        console.log(response.data)
    }
 
    const deleteConsultant = async (id) => {
        console.log(id)
        await axios.delete(`http://localhost:5000/consultant/delete/${id}`);
        getConsultant();
    }
 
    return (
        <div className="userInfo">
            <Link to="/add" className="button is-primary mt-2">Add New</Link>
            <table className="table is-striped is-fullwidth">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Speciality</th>
                        <th>Email</th>
                        <th>ID</th>
                    </tr>
                </thead>
                <tbody>
                    { consultants.map((consultant, id) => (
                        <tr key={ consultants.id }>
                            <td>{ consultant.name }</td>
                            <td>{ consultant.speciality }</td>
                            <td>{ consultant.email}</td>
                            <td>{ consultant._id}</td>
                            <td>
                                <Link to={`/update/${consultant._id}`} className="button is-small is-info">Edit</Link>
                                <button onClick={ () => deleteConsultant(consultant._id) } className="button is-small is-danger">Delete</button>
                            </td>
                        </tr>
                    )) }
                     
                </tbody>
            </table>
        </div>
    )
}
 
export default ConsultantList
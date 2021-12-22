import React from 'react';
import { useState, useEffect } from 'react'
import axios from "axios";
import { useHistory, useParams } from 'react-router-dom';
 
const EditConsultant = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [speciality, setSpeciality] = useState('');
    const [workingHours, setWorkingHours] = useState('');
    const history = useHistory();
    const { id } = useParams();
 
    const updateConsultant = async (e) => {
        e.preventDefault();
        await axios.patch(`http://localhost:5000/consultant/update/${id}`,{
            name: name,
            email: email,
            speciality: speciality,
            workingHours: workingHours
        });
        history.push("/");
    }
 
    useEffect(() => {
        getConsultantbyId();
    }, []);
 
    const getConsultantbyId = async () => {
        const response = await axios.get(`http://localhost:5000/consultant/${id}`);
        setName(response.data.name);
        setEmail(response.data.email);
        setSpeciality(response.data.speciality);
        setWorkingHours(response.data.workingHours);
    }
 
    return (
        <div className = "AllForms">
            <form onSubmit={ updateConsultant }>
                <div className="form-control">
                    <label className="label">Name</label>
                    <input 
                        className="input"
                        type="text"
                        placeholder="Name"
                        value={ name }
                        onChange={ (e) => setName(e.target.value) }
                    />
                </div>
 
                <div className="form-control">
                    <label className="label">Email</label>
                    <input 
                        className="input"
                        type="text"
                        placeholder="Email Address"
                        value={ email }
                        onChange={ (e) => setEmail(e.target.value) }
                    />
                </div>
 
                <div className="form-control">
                    <label className="label">Speciality</label>
                    <input 
                        className="input"
                        type="text"
                        placeholder="Speciality"
                        value={ speciality }
                        onChange={ (e) => setSpeciality(e.target.value) }
                    />
                </div>

                <div className="form-control">
                    <label className="label">Working Hours</label>
                    <input 
                        className="input"
                        type="text"
                        placeholder="Working Hours"
                        value={ workingHours }
                        onChange={ (e) => setWorkingHours(e.target.value) }
                    />
                </div>

                <div className="form-control">
                    <button className="button is-primary">Update</button>
                </div>
            </form>
        </div>
    )
}
 
export default EditConsultant
import React from 'react';
import { useState } from 'react';
import axios from "axios";
import { useHistory } from 'react-router-dom';
 
const AddConsultant = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [speciality, setSpeciality] = useState('');
    const [workingHours, setWorkingHours] = useState('');
    const history = useHistory();

    const authAxios = axios.create({
        baseURL: 'http://localhost:5000/auth',
        headers: {
            Authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    })
    
    const saveConsultant = async (e) => {
        e.preventDefault();
        await authAxios.post('http://localhost:5000/consultant/create',{
            name: name,
            email:email,
            speciality: speciality,
            workingHours: workingHours
        });
        history.push("/consultants");
    }
 
    return (
        <div className="AllForms">
            <form onSubmit={ saveConsultant }>
                <div className="form-control">
                    <label className="label">Name</label>
                    <input 
                        className="input"
                        type="text"
                        placeholder="Full Name"
                        value={name}
                        onChange={ (e) => setName(e.target.value) }
                    />
                </div>
 
                <div className="form-control">
                    <label className="label">Email</label>
                    <input 
                        className="input"
                        type="text"
                        placeholder="Emaiil Address"
                        value={email}
                        onChange={ (e) => setEmail(e.target.value) }
                    />
                </div>

                <div className="form-control">
                    <label className="label">Speciality</label>
                    <input 
                        className="input"
                        type="text"
                        placeholder="Speciality"
                        value={speciality}
                        onChange={ (e) => setSpeciality(e.target.value) }
                    />
                </div>

                <div className="form-control">
                    <label className="label">Working Hours</label>
                    <input 
                        className="input"
                        type=""
                        placeholder="Working Hours"
                        value={workingHours}
                        onChange={ (e) => setWorkingHours(e.target.value) }
                    />
                </div>

 
                <div className="form-control">
                    <button className="button is-primary">Save</button>
                </div>
            </form>
        </div>
    )
}
 
export default AddConsultant
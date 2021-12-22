import React from 'react';
import { useState, useEffect } from 'react'
import axios from "axios";
import { useHistory, useParams } from 'react-router-dom';

const UpdateUsers = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const history = useHistory();
    const { id } = useParams();

    const authAxios = axios.create({
        baseURL: 'http://localhost:5000/auth',
        headers: {
            Authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    })

    const updateUser = async (e) => {
        e.preventDefault();
        await authAxios.patch(`http://localhost:5000/user/update/${id}`, {
            username: username,
            email: email,
            address: address
        });
        history.push("/users");
    }

    useEffect(() => {
        getUserbyId();
    }, []);

    const getUserbyId = async () => {
        const response = await authAxios.get(`http://localhost:5000/user/${id}`);
        setUsername(response.data.username);
        setEmail(response.data.email);
        setAddress(response.data.address);
    }

    return (
        <div className="AllForms">
            <form onSubmit={updateUser}>
                <div className="form-control">
                    <label className="label">Name</label>
                    <input
                        className="input"
                        type="text"
                        placeholder="User Name"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>

                <div className="form-control">
                    <label className="label">Email</label>
                    <input
                        className="input"
                        type="text"
                        placeholder="Email Address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                <div className="form-control">
                    <label className="label">Address</label>
                    <input
                        className="input"
                        type="text"
                        placeholder="Address"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                    />
                </div>

                <div className="form-control">
                    <button className="button is-primary">Update</button>
                </div>
            </form>
        </div>
    )
}

export default UpdateUsers
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import Modal from 'react-modal';
import axios from "axios";
const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};

Modal.setAppElement('#root');

const AppointmentForm = (props) => {
    const [name, setName] = useState("");
    const [time, setTime] = useState("");
    const { date, modalIsOpen, appointmentOn, closeModal } = props;
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const authAxios = axios.create({
        baseURL: 'http://localhost:5000/auth',
        headers: {
            Authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    })
    
    const onSubmit = async (e) => {
        e.preventDefault();
        await authAxios.post('http://localhost:5000/booking/create', {
        bookingBy: localStorage.getItem('user'),
        bookingTime: date+time,
        patientName: name
        }).then(response => {
            if (response.status === 200) {
                    closeModal();
                    alert('Appointment created successfully');
                }
            });
    };

    return (
        <div>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <h2 className="text-brand text-center">{appointmentOn}</h2>
                <p className="text-secondary text-center">
                    <small>ON {date.toDateString()}</small>
                </p>
                <form className="p-5" onSubmit={onSubmit}>
                    <div className="form-group">
                        <input
                            class="form-control"
                            type="text"
                            value={name}
                            placeholder="Enter your name"
                            onChange={({ target }) => setName(target.value)}
                            required
                        />
                        {errors.name && <span className="text-danger">This field is required</span>}
                    </div>

                    <div className="form-group">
                        <input
                            className="form-control"
                            type="time"
                            value={time}
                            placeholder="Booking Time"
                            onChange={({ target }) => setTime(target.value)}
                        />
                        {errors.name && <span className="text-danger">This field is required</span>}
                    </div>

                    <div className="form-group text-right">
                        <button type="submit" className="btn btn-brand">
                            Request Appointment
                        </button>
                    </div>
                </form>
            </Modal>
        </div>
    );
};

export default AppointmentForm;

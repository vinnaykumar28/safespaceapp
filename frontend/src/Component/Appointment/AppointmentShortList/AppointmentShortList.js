/* eslint-disable react/no-array-index-key */
import React from 'react';

const AppointmentShortList = (props) => {
    const { appointments } = props;
    const [consultants, setConsultant] = useState([]);
    
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
    
    return (
        <table className="table table-borderless">
            <thead>
                <tr>
                    <th className="text-secondary" scope="col">
                        Name
                    </th>
                    <th className="text-secondary" scope="col">
                        Email
                    </th>
                    <th className="text-secondary" scope="col">
                        Speciality
                    </th>
                    <th className="text-secondary" scope="col">
                        Working Hours
                    </th>
                </tr>
            </thead>
            <tbody>
                {appointments.map((appointment, index) => (
                    <tr key={index}>
                        <td>{appointment.name}</td>
                        <td>{appointment.email}</td>
                        <td>{appointment.speciality}</td>
                        <td>{appointment.workinghours}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default AppointmentShortList;

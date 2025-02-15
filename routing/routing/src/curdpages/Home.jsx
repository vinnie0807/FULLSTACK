import React, { useEffect, useState } from 'react';
import './Home.css';
import axios from 'axios';

const Home = () => {
    const [usersData, setUsersData] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:5000/users")
            .then((response) => {
                setUsersData(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    const handleDelete = (id) => {
        axios.delete(`http://localhost:5000/users/${id}`)
            .then(() => {
                setUsersData(usersData.filter(user => user.id !== id));
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <section id="homebolck">
            <article>
                <h1>List of user</h1>
                <button onClick={() => window.location.href = '/Create'}>Create user</button>
                <table>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone number</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {usersData.map((user, i) => (
                            <tr key={i}>
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.phone}</td>
                                <td>
                                    <button onClick={() => handleDelete(user.id)}>Delete</button>
                                    <button onClick={() => window.location.href = `/Edit`}>Edit</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </article>
        </section>
    );
};

export default Home;

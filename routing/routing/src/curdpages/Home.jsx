import React, { useEffect } from 'react'
import './Home.css';
import axios from 'axios';
const Home = () => {
    useEffect(()=>{
        axios.get("http://localhost:5000/users").then((response)=>{
            console.log(response.data);
        }).catch((error)=>{
            console.log(error);
        }) 
    },[])
  return (
    <section id="homebolck">
        <article>
            <h1>List of user</h1>
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone number</th>
                    </tr>
                </thead>
                <tbody>
                    {/* {
                        usersData.map((user,i)=>{
                            return(
                                <tr key={i}>
                                    <td>{user.id}</td>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.phone}</td>
                                </tr>
                            )
                        })
                    } */}
                </tbody>
            </table>
        </article>
    </section>
  )
}

export default Home

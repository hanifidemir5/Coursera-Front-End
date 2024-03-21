import React, { useEffect, useState } from 'react'
import "./fetchcss.css"

export default function     Fetch() {
    const [user,setUser] = useState([]);

    const fetchData = () => {
        fetch("https://randomuser.me/api/?results=1")
        .then(response => response.json())
        .then(data => setUser(data));
    }
    
    useEffect(() => {
        fetchData();
    },[]);


    return Object.keys(user).length > 0 ? (
        <div className='fetch-main-container'>
            <h1>
                Data Returned
            </h1>
            <img src={user.results[0].picture.large} alt="profile-picture" className='rounded-lg self-center'/>
            <h2>First Name: {user.results[0].name.first}</h2>
            <h2>Last Name: {user.results[0].name.last}</h2>
        </div>
    ) : (
        <h1>Data Pending...</h1>
    );
}

    // Import the necessary hooks from React and react-router-dom
import React, { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom';

function UserDetails() {
    // Declaring a state variable "users"(Has an empty array as the value), a function "SetUsers" that updates the state
    const [user, setUser] =useState({})
    // Uses "useParams()" hook to get the 'id' parameter from the URL
    const { id } = useParams()
    
     // "useEffect()" hook fetches user data based on the 'id' when the component renders or 'id' changes
    useEffect(()=>{
        fetch(`http://localhost:3000/users/${id}`)
        .then(res => res.json())
        .then(user => setUser(user)) // Updates the 'user' state with the fetched data
        .catch(error => console.log(error))
    },[id]) // The dependency array includes 'id' to re-fetch data if 'id' changes

    // Renders to show a loading message if the user data takes time before it renders
    if(!user.name){
        return (
            <div className="loadOption">Loading......</div>
        )
    }

        // Renders user Details if user data is available
  return (
    <div>
        <h1>UserDetails</h1>
        <h1>Name: {user.name}</h1>
        <h3>Username: {user.username}</h3>
        <h5>Phone: {user.phone}</h5>
        <h3>Company: {user.company.name}</h3>

        <div>
            <div>
                <h3>Address:</h3>
                <h5>Street: {user.address.street}</h5>
                <br />
                <h5>City: {user.address.city}</h5>
            </div>
        </div>

    </div>
  );
}

export default UserDetails;
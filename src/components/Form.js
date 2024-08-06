import React, { useState } from 'react';
import { useEffect } from 'react';

function Form({users, setUsers}) {

    const [formData, setFormData] = useState({
        name : "",
        username : ""
    })

    const handleOnchange = (event)=>{
        const name = event.target.name
        const value = event.target.value

        // Updates the current state
        setFormData({
            ...formData, [name]: value
        })
    }

    useEffect(() => {
        fetch("http://localhost:3000/users")
        .then(response => response.json())
        .then(users => setUsers(users))
        .catch(error => console.log(error))
        
    },[]);


const handleSubmit =(e)=> {
    e.preventDefault()

    fetch("http://localhost:3000/users", {
        method : "POST",
        headers : {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body : JSON.stringify(formData)
    })
    .then(res => res.json())
    .then(user => setUsers([user, ...users]))

    setFormData({
        name : "",
        username : ""
    })
}

  return (
    <div className='form-wrapper'>
        <div>
            <h1>Post User</h1>
        </div>
        <form onSubmit={handleSubmit}>
            <div>
                <input type='text' name='name' placeholder='Enter Name' value={formData.name} onChange={handleOnchange}/>
            </div>
            <div>
                <input type='text' name='username' placeholder='Enter username' value={formData.username} onChange={handleOnchange}/>
            </div>
            <div>
                <input type='submit' value="Submit"/>
            </div>

        </form>
    </div>
  )
}

export default Form;
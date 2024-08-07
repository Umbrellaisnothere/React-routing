    // Imports the necessary hooks
import React, { useState } from 'react';
import { useNavigate } from 'react';

    // Form component which accepts 'users' and 'setUsers' as props
function Form({users, setUsers}) {
    // 'useNavigate()' hook to navigate to a different route
    const navigate= useNavigate()
    // Declares a state variable formData
    const [formData, setFormData] = useState({
        name : "",
        username : ""
    })
    // Handler for the input change events
    const handleOnchange = (event)=>{
        const name = event.target.name
        const value = event.target.value

        // Updates the current state with a new input value
        setFormData({
            ...formData, [name]: value
        })
    }

    // Handler for form submission
const handleSubmit =(e)=> {
    e.preventDefault()

    // Sends a POST request for adding new users
    fetch("http://localhost:3000/users", {
        method : "POST",
        headers : {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },

        body : JSON.stringify(formData)

    })
    .then(res => res.json())
    .then(user => setUsers([user, ...users]))   // Adds the new user to the users state

        // Resets the formDta state
    setFormData({
        name : "",
        username : ""
    })

    // Navigates back to the Home page
    navigate("/")
}

    // Returns the form JSX
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
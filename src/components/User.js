  // Imports the components
import React from 'react';
import { Link } from 'react-router-dom';
 
function User({user}) {
    
  return (
    <div className='user'>
        <h1>Name: {user.name}</h1> {/* Displays user name and username */}
        <h3>Username: {user.username}</h3>
        {/* Link to navigate to UserDetails page for a specific user */}
        <button><Link to={`/users/${user.id}`}>View More...</Link></button>
    </div>
  )
}

export default User;
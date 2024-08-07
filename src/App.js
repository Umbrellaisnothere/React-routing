  // Imports the necessary CSS for styling
import './App.css';

  // Imports components which are used in the application
import Home from './components/Home';
import Form from './components/Form';
import About from './components/About';
import NavBar from './components/NavBar';
import UserDetails from './components/UserDetails';

  // Imports Route and Routes components from the 'react-router-dom' for navigation
import { Route, Routes } from 'react-router-dom';

  // Imports useState and useEffect hooks from React
import { useState, useEffect } from "react";

  // App component
function App() {

    // Declaring a state variable "users"(Has an empty array as the value), a function "SetUsers" that updates the state
  const [users, setUsers] = useState([]);

    // useEffect hook
    useEffect(() => {  // Fetching data from URL
        fetch("http://localhost:3000/users")
        .then(response => response.json())
        .then(users => setUsers(users)) // Updates the "users" state with the fetched data
        .catch(error => console.log(error)) // Logs any errors which may develop
        
    },[]);

  return ( // Main container
    <div className='App'>
      <NavBar />
      
      {/* Defines the Routes */}
      <Routes>
        <Route path='/' element={<Home users={users} />} />
        <Route path='/about' element={<About />} />
        <Route path='/users/:id' element={<UserDetails />} />
        <Route path="/users/add"
          element={<Form users={users} setUsers={setUsers} />}/>
        <Route path="*" element={<Error />} /> {/* A Route that gives undefined paths and Renders an error */}
      </Routes>
    </div>
  );
}


export default App;

import './App.css';
import Home from './components/Home';
import { Route, Routes } from 'react-router-dom';
import About from './components/About';
import NavBar from './components/NavBar';
import UserDetails from './components/UserDetails';

function App() {

  return (
    <div className='App'>
      <NavBar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/users/:id' element={<UserDetails />} />
      </Routes>
    </div>
  );
}


export default App;

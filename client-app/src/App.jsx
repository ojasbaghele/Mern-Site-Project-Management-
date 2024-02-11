import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Homepage from './components/Homepage';
import About from './components/About';
import Register from './components/Register';
import Login from './components/Login';
import Navbar from './components/Navbar';



export default function app() {
  return (
    <>
      <BrowserRouter>
        {/* <Navbar/> */}
        <Routes>
          <Route path='/login' element={<Login />}></Route>
          {/* <Route path='/About' element={<About/>}></Route>
        <Route path='/Register' element={<Register/>}></Route>
        <Route path='/Login' element={<Login/>}></Route> */}
        </Routes>

      </BrowserRouter>
    </>
  )
}
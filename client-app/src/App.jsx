import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Dashbaord from './components/Dashboard';
import CreateProject from './components/CreateProject';
import ProjectList from './components/ProjectList';



export default function app() {
  return (
    <>
      <BrowserRouter>
        <Routes>

          <Route path='/' element={<Login />}></Route>
          <Route path='/Dashboard' element={<Dashbaord/>}/>
          <Route path='/Project-List' element={<ProjectList/>}/>
          <Route path='/Create-Project' element={<CreateProject/>}/>
      
        </Routes>
      </BrowserRouter>
    </>
  )
}
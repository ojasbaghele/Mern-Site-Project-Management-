import React from 'react';
import './CreateProject.css';
import logo  from '../assets/images/Logo.svg';
import bg1  from '../assets/images/login-bg-1.svg';
import bArrow  from '../assets/images/back arrow.svg';
import ProjectManagement from './ProjectManagement';

export default function CreateProject() {
  return (
    <>
    <ProjectManagement/>
    <div className='createprojectBody'>
    <img id='bg1' src={bg1} alt='./logos/login-bg-1.svg'/>
    <img id='logo-cp' src={logo} alt='./logos/Logo.svg'/>
    <div id='headline'>
        <img id='bArrow' src={bArrow} alt='./logos/back arrow.svg'/>
        <p>Create Project</p>
    </div>
    <div className='fill-form'>
    <div className='projectTheme'>
        <textarea id='projectTheme' type='text' placeholder='Enter Project Theme'></textarea>
        <button id='save_btn'>Save Project</button>
    </div>
    <div className='inputForm'>
    <div className='inputRow inputRow1'>
        <div className=' inputData'>
            <label>Reason</label>
            <select>
                <option value="volvo">Volvo</option>
                <option value="saab">Saab</option>
                <option value="opel">Opel</option>
                <option value="audi">Audi</option>
            </select>
        </div>
        <div className='inputData'>
            <label>Category</label>
            <select>
                <option value="volvo">Volvo</option>
                <option value="saab">Saab</option>
                <option value="opel">Opel</option>
                <option value="audi">Audi</option>
            </select>
        </div>
        <div className='inputData'>
            <label>Start Date as per Project Plan</label>
            <input type="date" id="start" name="startDate" min="2023-12-10" max="2024-12-31"></input>
        </div>
    </div>
    <div className='inputRow inputRow2'>
        <div className='inputData'>
            <label>Type</label>
            <select>
                <option value="volvo">Volvo</option>
                <option value="saab">Saab</option>
                <option value="opel">Opel</option>
                <option value="audi">Audi</option>
            </select>
        </div>
        <div className='inputData'>
            <label>Priority</label>
            <select>
                <option value="volvo">Volvo</option>
                <option value="saab">Saab</option>
                <option value="opel">Opel</option>
                <option value="audi">Audi</option>
            </select>
        </div>
        <div className=' inputData'>
            <label>End Date as per Project Plan</label>
            <input type="date" id="start" name="startDate" min="2023-12-10" max="2024-12-31"></input>
        </div>
    </div>
    <div className='inputRow inputRow3'>
        <div className='inputData'>
            <label>Division</label>
            <select>
                <option value="volvo">Volvo</option>
                <option value="saab">Saab</option>
                <option value="opel">Opel</option>
                <option value="audi">Audi</option>
            </select>
        </div>
        <div className='inputData'>
            <label>Department</label>
            <select>
                <option value="volvo">Volvo</option>
                <option value="saab">Saab</option>
                <option value="opel">Opel</option>
                <option value="audi">Audi</option>
            </select>
        </div>
        <div className='inputData'>
            <label>Location</label>
            <select>
                <option value="volvo">Volvo</option>
                <option value="saab">Saab</option>
                <option value="opel">Opel</option>
                <option value="audi">Audi</option>
            </select>
            <p>Status:<b>Registered</b></p>
        </div>
        
    </div>
    </div>
    </div>


    </div>
    </>
    )}
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
    <form className='fill-form'>
    <div className='projectTheme'>
        <textarea id='projectTheme' type='text' placeholder='Enter Project Name'></textarea>
        <button id='save_btn'>Save Project</button>
    </div>
    <div className='inputForm'>
    <div className='inputRow inputRow1'>
        <div className=' inputData'>
            <label>Reason</label>
            <select>
                <option selected disabled></option>
                <option value="Basic Learning">Basic Learning</option>
                <option value="New Skill Developementl">New Skill Developement</option>
                <option value="volvo">Skill Developement</option>
                <option value="Skill Showcase">Skill Showcase</option>
            </select>
        </div>
        <div className='inputData'>
            <label>Category</label>
            <select>
                <option selected disabled></option>
                <option value="Personal">Personal</option>
                <option value="Skill Based">Skill Based</option>
            </select>
        </div>
        <div className='inputData'>
            <label>Start Date as per Project Plan</label>
            <input type="date" id="start" name="startDate" min="2024-01-01" max="2030-12-29"></input>
        </div>
    </div>
    <div className='inputRow inputRow2'>
        <div className='inputData'>
            <label>Type</label>
            <select>
                <option selected disabled></option>
                <option value="Frontend">Frontend</option>
                <option value="Backend">Backend</option>
                <option value="Backend">Backend</option>
            </select>
        </div>
        <div className='inputData'>
            <label>Priority</label>
            <select>
                <option selected disabled></option>
                <option value="High">High</option>
                <option value="Medium">Medium</option>
                <option value="Low">Low</option>
                <option value="Very Low">Very Low</option>
            </select>
        </div>
        <div className=' inputData'>
            <label>End Date as per Project Plan</label>
            <input type="date" id="start" name="startDate" min="2024-01-01" max="2030-12-29"></input>
        </div>
    </div>
    <div className='inputRow inputRow3'>
        <div className='inputData'>
            <label>Skill</label>
            <select required>
                <option selected disabled></option>
                <option value="volvo">Java</option>
                <option value="saab">JavaScript</option>
                <option value="opel">React Js</option>
                <option value="opel">MERNStack</option>
                <option value="audi">Express Js</option>
            </select>
        </div>
        <div className='inputData'>
            <label>Git Link</label>
            <textarea id='gitLinkInput' type='text' placeholder=''></textarea>
        </div>
        <div className='inputData'>
            <label>Status</label>
            <select>
                <option selected disabled></option>
                <option value="Started">Started</option>
                <option value="On Going">On Going</option>
                <option value="Near Completion">Near Completion</option>
                <option value="Completed">Completed</option>
            </select>
            {/* <p>Status:<b>Registered</b></p> */}
        </div>
        
    </div>
    </div>
    </form>

    </div>
    </>
    )}
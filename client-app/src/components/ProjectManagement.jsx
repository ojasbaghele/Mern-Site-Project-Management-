import React from 'react';
import './ProjectManagement.css';
import iocDash from '../assets/images/Dashboard.svg';
import iocPlist from '../assets/images/Project-list.svg';
import iocClist from '../assets/images/create-project.svg';
import iocLogout from '../assets/images/Logout.svg';
import HeaderBG from '../assets/images/Header-bg.svg';
import { Link } from 'react-router-dom';

export default function ProjectManagement() {
  return (
    <>
      <div className='sitePage'>
        <div className='Navbar'>
          <div className='navBtns'>
            <Link to="/Dashboard"><img className='iconBtn' src={iocDash} alt='Dashboard' /></Link>
            <Link to="/Project-List"><img className='iconBtn' src={iocPlist} alt='ProjectList' /></Link>
            <span id='dashicon'>——</span>
            <Link to="/Create-Project"><img className='iconBtn' src={iocClist} alt='Create List' /></Link>
          </div>
          <Link to="/"><img className='iconBtn' id='Logout-icon' src={iocLogout} alt='Logout' /></Link>
        </div>
        <div className='DivContent'>
          <img id='HeaderBG' src={HeaderBG} alt='./logos/Header-bg.svg' />
        </div>
      </div>
    </>
  )
}

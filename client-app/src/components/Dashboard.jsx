import React from 'react';
import './Dashboard.css';
import logo  from '../assets/images/Logo.svg';
import ProjectManagement from './ProjectManagement';


export default function Dashbaord() {
  return (<>
    <ProjectManagement/>
    <div className='DoashboardBody'>
    
    <h1 id='dashHeadline'>Dashboard</h1>
     <img id='logo-d' src={logo} alt='./logos/Logo.svg'/>
     <div className='projectStatus '>

       <div className='totalProject statusDiv'>
       <p className='statusTitle'>Total Projects</p>
       <p className='statusNunber'>8</p>
       </div>

       <div className='Closed statusDiv'>
       <p className='statusTitle'>Closed</p>
       <p className='statusNunber'>5</p>       
       </div>

       <div className='Running statusDiv'>
       <p className='statusTitle'>Running</p>
       <p className='statusNunber'>3</p>
       
       </div>
       <div className='closureDelay statusDiv'>
       <p className='statusTitle'>Closure Delay</p>
       <p className='statusNunber'>0</p>        
       </div>

       <div className='Cancelled statusDiv'>
       <p className='statusTitle'>Cancelled</p>
       <p className='statusNunber'>4</p> 
       </div>
     </div>

     <h2 id='title'>Department Wise - Total Vs Closed</h2>
     <div id='graph'>
     <p>Bar Graph</p>
     </div>
     
    </div>
    </>
)}
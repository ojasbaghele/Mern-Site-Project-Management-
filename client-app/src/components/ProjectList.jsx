import React from 'react';
import './ProjectList.css';
import logo  from '../assets/images/Logo.svg';
import bg1  from '../assets/images/login-bg-1.svg';
import bArrow  from '../assets/images/back arrow.svg';
import ProjectManagement from './ProjectManagement';


export default function ProjectList() {
    
  return (
  <>
  <ProjectManagement/>

<div className='projectList-body'>
    <img id='bg1' src={bg1} alt='./logos/login-bg-1.svg'/>
    <img id='logo-pl' src={logo} alt='./logos/Logo.svg'/>
    <div id='headline'>
        <img id='bArrow' src={bArrow} alt='./logos/back arrow.svg'/>
        <h1 id="pagename">Project List</h1>
    </div>
    <div className='fill-form'>
        <div className='searchSort'>
        <div className='searchDiv'>
        <i class="fa-solid fa-magnifying-glass"></i>
        <input id='search' type='text' placeholder='Search'></input>
        </div>
        <div className='sort'>
            <label id='sortLabel'>Sort By :</label>
            <select id='sortSelect'>
                <option value="Priority">Priority</option>
                <option value="saab">Saab</option>
                <option value="opel">Opel</option>
                <option value="audi">Audi</option>
            </select>
        </div>
        </div>
        <div className='Table'>
        <table className='table table-hover'>
  <thead>
    <tr className='table-info'>
      <th>Project Name</th>
      <th>Reason</th>
      <th>Type</th>
      <th>Division</th>
      <th>Category</th>
      <th>Priority</th>
      <th>Dept.</th>
      <th>Location</th>
      <th>Status</th>
      <th> </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Project Name</td>
      <td>Reason</td>
      <td>Type</td>
      <td>Division</td>
      <td>Category</td>
      <td>Priority</td>
      <td>Department</td>
      <td>Location</td>
      <td>Status</td>
      <td className='tdLast'>
      <button type="button" className="btn btn-primary">Primary</button>
      <button type="button" className="btn btn-outline-primary">Primary</button>
      <button type="button" className="btn btn-outline-primary">Primary</button>
      </td>

    </tr>
    <tr>
    <td>Project Name</td>
      <td>Reason</td>
      <td>Type</td>
      <td>Division</td>
      <td>Category</td>
      <td>Priority</td>
      <td>Dept.</td>
      <td>Location</td>
      <td>Status</td>
      <td className='tdLast'>
      <button type="button" className="btn btn-primary">Primary</button>
      <button type="button" className="btn btn-outline-primary">Primary</button>
      <button type="button" className="btn btn-outline-primary">Primary</button>
      </td>
    </tr>
    <tr>
    <td>Project Name</td>
      <td>Reason</td>
      <td>Type</td>
      <td>Division</td>
      <td>Category</td>
      <td>Priority</td>
      <td>Department</td>
      <td>Location</td>
      <td>Status</td>
      <td className='tdLast'>
      <button type="button" className="btn btn-primary">Primary</button>
      <button type="button" className="btn btn-outline-primary">Primary</button>
      <button type="button" className="btn btn-outline-primary">Primary</button>
      </td>
    </tr>
  </tbody>
</table>
        </div>
    </div>    
</div>
</>
)}
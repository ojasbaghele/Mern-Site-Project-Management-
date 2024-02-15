import React, { useState } from 'react';
import '../assets/Login.css';
import bg1 from '../assets/images/login-bg-1.svg';
import logo from '../assets//images/Logo.svg';
// import { useNavigate } from 'react-router-dom';
// const navigate = useNavigate();

export default function Login() {
  const [name, set_name] = useState("");
  const [email, set_email] = useState("");
  const [password, set_password] = useState("");
  const [pageName, setPageName] = useState("Sign Up");


  //! ------------------------ Page State  --------------------------- 

  function loginBtn() {
    setPageName("Log In");
    document.getElementById('UserName').classList.add("hidden");
  }
  function signupBtn() {
    setPageName("Sign Up");
    document.getElementById('UserName').classList.remove("hidden");
  }

  //! ----------------------------------------------------------------
  //! ----------------------- Handle OnChange ------------------------
  const handleName = (event) => {
    set_name(event.target.value);
  }
  const handleEmail = (event) => {
    set_email(event.target.value);
    if (email.length >= 1 && email.length <= 10) {
      document.getElementById('email_warning').classList.remove("hidden");
      document.getElementById('email_warning').innerHTML = "<p>eg. abcd@gmail.com</p>";
    }
    if (email.length > 10) {
      document.getElementById('email_warning').classList.add("hidden");
    }
  }
  const handlePassword = (event) => {
    set_password(event.target.value);
    if (password.length >= 1 && password.length < 6) {
      document.getElementById('pass_warning').innerHTML = "<p>* Password should have morethan 6 characters</p>";
      document.getElementById('pass_warning').classList.remove("hidden");
    }
    if (password.length >= 6) {
      document.getElementById('pass_warning').classList.add("hidden");
    }
  }
  //! ----------------------------------------------------------------
  //! ------------------- OnSubmit - Login Function ------------------

  async function LogIn(event) {
    event.preventDefault();
    if (pageName == "Log In") {
      let Login_user = {
        "pageName": pageName,
        "email": email,
        "password": password
      }
      console.log(Login_user);
      try {
        const response = await fetch('http://localhost:3030/login', {
          method: 'POST',
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(Login_user),
        });
        console.log(response);
        if (response.ok) {
          alert("User Logged in successfully")
        } else {
          alert("response is Not 'OK' ");
        }
      } catch (error) {
        console.log("User Data Not Sent", error);
      }
    } else {
      let Signup_user = {
        "pageName": pageName,
        "name": name,
        "email": email,
        "password": password
      }
      console.log(Signup_user);
      try {
        const response = await fetch('http://localhost:3030/login', {
          method: 'POST',
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(Signup_user),
        });
        console.log(response);
        if (response.ok) {
          alert("User Registered in successfully")
        } else {
          alert("response is Not 'OK' ");
        }
      } catch (error) {
        console.log("User Data Not Sent", error);
      }
    }
  }

  // if(password.length <= 6){
  //   document.getElementById('pass_warning').innerHTML = "<p>* Password Cannot Be lessthan 6 characters</p>";
  //   document.getElementById('pass_warning').classList.remove("hidden");
  // }
  // if(email.length <= 12){
  //   document.getElementById('email_warning').classList.remove("hidden");
  //   document.getElementById('email_warning').innerHTML = "<p>* Invalid Email</p>";
  // }else{
  //   navigate("/ProjectManagement/Dashboard");
  // }
  //! ----------------------------------------------------------------

  return (
    <>
      <img className='bg1' src={bg1} alt='./logos/login-bg-1.svg' />
      <div className='login-page'>
        <img id='logo' src={logo} alt='./logos/Logo-m.svg' />
        <h3 id='color-w'>Online Project Management</h3>

        <div className='pageSwitch'>
          <button onClick={loginBtn}>Log In</button>
          <button onClick={signupBtn}>Sign up</button>
        </div>
        <form className='login-form' onSubmit={LogIn}>
          <h1 id="formHeading"> {pageName} </h1>
          <div className='input-field' id="UserName">
            <label>Name</label>
            <input required id='Uname' onChange={handleName} name='name' type='text'></input >
          </div>
          <div className='input-field'>
            <label>Email</label>
            <input required id='Uemail' onChange={handleEmail} name='email' type='email'></input >
            <spam id='email_warning' className='warning_txt hidden'><p>* Invalid Email</p></spam>
          </div>
          <div className='input-field'>
            <label>Password</label>
            <input required id='Upassword' onChange={handlePassword} name='password' type='Password'></input>
            <spam id='pass_warning' className='warning_txt hidden'><p>* Invalid Password</p></spam>
            <span id='f-password'><p>Forgot Password?</p></span>
          </div>
          <button id='btnLOGIN' type='submit'> {pageName} </button>
        </form>
      </div>
    </>
  )
}
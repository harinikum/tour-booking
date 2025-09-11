import React, { useState } from 'react';
import axios from 'axios'; 
import "./newreg.css";
import { Link, useNavigate } from 'react-router-dom'; // ✅ import useNavigate

function Newregister() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // ✅ create navigate function

  const handleRegister = async (e) => {
    e.preventDefault();
    
    try {
      const payload = { username, email, password };
      const response = await axios.post(
        'http://localhost/tourbackend/controllers/api/User/post/register.php', 
        payload
      );
      console.log(",,",response)
      
      if (response.status === 200) {
        alert('User registered successfully!');
        setTimeout(() => {
          navigate('/userlogin'); // ✅ use navigate instead of window.location
        }, 100); 
      } else {
        alert('Registration failed. Please try again.');
      }
    } catch (error) {
      console.error('Error during registration:', error);
      alert('An error occurred. Please try again.');
    }
  };

  return (
    <>
      <div className="big-log">
        <div className="container-log">
          <h1 className='h1'>User Registration</h1>
          <form className='frm' onSubmit={handleRegister}>
            <label className='lbl'>Username</label>
            <input 
              className='inp' 
              type="text" 
              name="username"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />

            <label className='lbl'>Email</label>
            <input 
              className='inp' 
              type="email" 
              name="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <label className='lbl'>Password</label>
            <input 
              className='inp' 
              type="password" 
              name="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            
            <button className='bt' type="submit">Register</button>
          </form>

          <p className="login-text">
            Already have an account? <Link to="/userlogin">Login</Link>
          </p>
        </div>
      </div>
    </>
  );
}

export default Newregister;

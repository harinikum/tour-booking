import React, { useState } from 'react';
import "./adminlog.css";
import { useNavigate } from 'react-router-dom';

function Adminlogin() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    const staticUsername = "admin@gmail.com";
    const staticPassword = "admin123";

    if (username === staticUsername && password === staticPassword) {
      navigate("/dashboard");
    } else {
      alert("Invalid username or password!");
    }
  };

  return (
    <div className="big-log1">
      <div className="container-log1">
        <h1 className='h11'>Admin Login</h1>
        <form className='frm1' onSubmit={handleLogin}>
          <label className='lbl'>Username</label>
          <input 
            className='inp1' 
            type="text" 
            value={username} 
            onChange={(e) => setUsername(e.target.value)} 
            required 
          />
          
          <label className='lbl'>Password</label>
          <input 
            className='inp1' 
            type="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required 
          />
          
          <button className='bt-log' type="submit">Log In</button>
        </form>
      </div>
    </div>
  );
}

export default Adminlogin;

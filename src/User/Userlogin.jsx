import React, { useState } from 'react';
import axios from 'axios'; 
import './userlog.css';
import { useNavigate } from 'react-router-dom';

function Userlogin() {
  const [email, setemail] = useState('');
  const [password, setPassword] = useState('');
  const [Error,setError] = useState('')
  const navigate = useNavigate()

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const payload = { email, password };
      const response = await axios.post(
        'http://localhost/tourbackend/controllers/api/User/Get/login.php', 
        payload
      );
      console.log('Login response:', response.data,status);

     if (response.status == 200) {
        console.log("worked");
        if (response.data.status === 1) {
          setError("Your account is blocked. Please contact support.");
        } else if (response.data.status === 0) {
          // localStorage.setItem("user", JSON.stringify(result.user));
          navigate("/homepage");
        } else {
          setError("Invalid login status. Please try again.");
        }
      } else {
        setError(
          response.data.message || "Your account is blocked. Please contact support."
        );
      }
    }
    catch(error){
      console.error("error",error)
    }
  };

  return (
    <div className="big-log">
      <div className="container-log">
        <h1 className="h1">User Login</h1>
        <form className="frm" onSubmit={handleLogin}>
          <label className="lbl">Email</label>
          <input
            className="inp"
            type="text"
            id="email"
            name="email"
            value={email} 
            onChange={(e) => setemail(e.target.value)}  
            required
          />

          <label className="lbl" htmlFor="password">Password</label>
          <input
            className="inp"
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          {Error && <p className="error-text">{Error}</p>}
          <button className="bt2" type="submit">
            Log In
          </button>
        </form>

        {/* New User Registration Link */}
        <p className="register-text">
          New User? <a href="/register">Register</a>
        </p>
      </div>
    </div>
  );
}

export default Userlogin;

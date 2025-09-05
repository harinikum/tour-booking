import React from 'react'
import { Link } from 'react-router-dom'
import "./userland.css"
function Userlanding() {
  return (
    <>
           <div className="user1-main">
    <nav className="navbar-user">
        <div className="navbar-container">
            <div className="logo">Tour Package Booking System</div>
            <ul className="nav-links">
                <Link to={"/homepage"}><li><a href="#">Home</a></li></Link>
                <Link to={"/mybooking"}><li><a href="#">My booking</a></li></Link>
                <Link to={"/"}><li><a href="#">Logout</a></li></Link>
            </ul>
        </div>
    </nav>

    <div className="hero-image1">
        <div className="hero-text">
            <h1>Book Your Dream package</h1>
            <p>Explore our wide range of pacakages for your Trip</p>
            <Link to={"/bookpack"}><a href="#" class="cta-button">Book</a></Link>
        </div>
    </div>

    

    <footer className="footers">
        <div className="footer-container">
            <p>&copy; 2023 Tour Package booking System. All rights reserved.</p>
            <ul className="footer-links">
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Terms of Service</a></li>
                <li><a href="#">FAQ</a></li>
            </ul>
        </div>
    </footer>
    </div>
    </>
  )
}

export default Userlanding
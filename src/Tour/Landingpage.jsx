import React from 'react'
import "./land.css"
import { Link } from 'react-router-dom'

function Landingpage() {
  return (
    <>
    <div className="main-land">
    <main>
        <section className="hero1">
            <div className="container1">
                <h1>Welcome to Tour Package System</h1>
                <p>The ultimate tour package booking system for Your Dream Tours</p>
                <Link to={"/adminlogin"}><button className="btn-main">Admin Login</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Link>
                <Link to={"userlogin"}><button className="btn-main">User Login</button></Link>
            </div>
        </section>
    </main>
    </div>
    </>
  )
}

export default Landingpage
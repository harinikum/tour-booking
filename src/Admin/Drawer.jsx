import React from 'react'
import { FaBookmark, FaCar, FaUserAlt,FaSuitcaseRolling } from 'react-icons/fa'
import { GrLogout } from 'react-icons/gr'
import { MdDashboard, MdTwoWheeler } from 'react-icons/md'
import { Link } from 'react-router-dom'
import "./draw.css"
function Drawer() {
  return (
    <>
    <nav className="sidebar">
        <div className="logo">Admin panel</div>
        <div className="nav-links1">
            <Link to={"/dashboard"} ><a href="#" ><MdDashboard /> Dashboard</a></Link>
            <Link to={"/addpackage"}><a href="#"><FaSuitcaseRolling /> Add Tour packages</a></Link>
           
            <Link to={'/managebook'} ><a href="#"><FaUserAlt /> Manage booking</a></Link>
            <Link to={"/logout"} ><a href="#"><GrLogout /> Logout</a></Link>
        </div>
    </nav>
    </>
  )
}

export default Drawer
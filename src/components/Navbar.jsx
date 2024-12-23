import React from 'react'
import { useState,useEffect } from 'react'
import './Navbar.css'

const Navbar = (props) => {
  // useEffect(()=>{
  //   alert("Navbar is working")
  // })
  return (
    <nav className="Navbar">
        <div className="logo">
            {props.siteName}
        </div>
        <div className="navbar-items">
            <ul>
              <li><a href=".">Home</a></li>
              <li>About</li>
              <li>service</li>
              <li>contact</li>
            </ul>
        </div>
      </nav>
  )
}

export default Navbar

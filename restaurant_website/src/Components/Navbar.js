import React from 'react'
import Logo from '../Images/hamburgerlogo.png';
import { Link } from 'react-router-dom';


function Navbar() {
  return (
    <div className='navbar'>
        <div className='leftSide'>
            <img src={Logo}></img>
        </div>
        <div className='rightSide'>
    <Link to="/">Home</Link>
    <Link to="/menu">Menu</Link>
    <Link to="/about">About</Link>
    <Link to="/contact">Concact</Link>
        </div>
    </div>
  )
}

export default Navbar

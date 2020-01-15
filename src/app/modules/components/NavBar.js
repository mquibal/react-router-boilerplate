import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar'>
      <h3>Logo</h3>
      <ul className='nav-links'>
        <NavLink to='/home'>
          <li className='link'>Home</li>
        </NavLink>
        <NavLink to='/about'>
          <li className='link'>About</li>
        </NavLink>
        <NavLink to='/'>
          <li className='link'>Login</li>
        </NavLink>
      </ul>
    </div>
  )
}

export default Navbar
import React from 'react'
import {NavLink} from 'react-router-dom'

export const Navbar = () => (
  <nav className='navbar navbar-dark bg-primary navbar-expand-lg'>
    <div>
      Github search
    </div>
    <ul className='navbar-nav'>
      <li className='nav-item'>
        <NavLink end to="/" className="nav-link">Main</NavLink>
      </li>
      <li className='nav-item'>
        <NavLink to="/about" className="nav-link">Info</NavLink>
      </li>
    </ul>
  </nav>
)
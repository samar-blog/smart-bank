import React, { useState } from "react"
import { Link } from "react-router-dom"
import { FaBars } from "react-icons/fa"
import { ImCross } from "react-icons/im"
import {FaUser} from "react-icons/fa"

const Navbar = () => {
  const [Mobile, setMobile] = useState(false)
  return (
    <>
      <nav className='navbar' >
        <h3 className='logo'>Smart.Bank</h3>
        {/*
        if large screen ma xa bhane Mobile add huxa
        if mobile screen ma xa bhane nav-links-mobile add huxa
        */}
        <ul className={Mobile ? "nav-links-mobile" : "nav-links"} onClick={() => setMobile(false)}>
          <Link to='/' className='home'>
            <li>Home</li>
          </Link>
         
          <Link to='/news' className='news'>
            <li>News</li>
          </Link>
          <Link to='/todo' className='todo'>
            <li>Packages</li>
          </Link>
          <Link to='/charts' className='charts'>
            <li>Charts</li>
          </Link>
          <Link to='/profile' className='profile'>
            <li> <FaUser/>Profile</li>
          </Link>
        </ul>
        <button className='mobile-menu-icon' onClick={() => setMobile(!Mobile)}>
          {Mobile ? <ImCross /> : <FaBars />}
        </button>
      </nav>
    </>
  )
}
export default Navbar
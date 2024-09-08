'use client'
import React, { useState } from 'react'
import './navbar.css'
import { useRouter } from 'next/navigation'


const Navbar = () => {
  const [open, setOpen] = useState(false)
  const router  = useRouter()

  return (
    <div>
        <nav className="navbar">
          <div className='kk'>
        <div className="navbar-toggle" onClick={() => setOpen(!open)}>
        <span className=""><img className='navbar-toggle-icon' src="https://www.svgrepo.com/show/513802/align-justify.svg" alt="" /></span>
        </div>
      <div className="logo">scoot</div>
      </div>
      <div className="links">
        <a href="/About">About</a>
        <a href="/location">Location</a>
        <a href="/Career">Careers</a>
      </div>
      <button className="button" onClick={() => router.push('./')}>Get Scootin</button>
    </nav>
    <div className="navbar-links" style={{ display: open ? "flex" : "none" }}>
        <a className='a' href="/About">About</a>
        <a className='a' href="/location">Location</a>
        <a className='a' href="/Career">Careers</a>
        </div>
    </div>
  )
}

export default Navbar;
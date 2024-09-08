import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <div>  
       <div className='card6'>
          <div className=''>
          <h1 className='h0'>Sign up and  Scoot off today</h1>
          </div>
          <div className='logoo'>
            <div className='logo1'>
              <img className='logo-1' src="https://www.svgrepo.com/show/303125/apple-logo.svg" alt="" />
              <p className='p00'>Available on the <br /><strong>AppStore</strong></p>
            </div>
            <div className='logo1'>
              <img className='logo-1' src="https://www.svgrepo.com/show/355039/google-play.svg" alt="" />
              <p className='p00'>Get it on <br /><strong>GooglePlay</strong></p>
            </div>
          </div>
        </div>
    <footer className="footer">
    <div className="container">
      <div className="logo">
        <h3>scoot</h3>
      </div>
      <nav className="nav">
        <a href="#">About</a>
        <a href="#">Location</a>
        <a href="#">Careers</a>
      </nav>
      <div className="socialMedia">
        <a href="#"><img src="https://www.svgrepo.com/show/447369/facebook.svg" alt="" /></a>
        <a href="#"><img src="https://www.svgrepo.com/show/508977/twitter-3.svg" alt="" /></a>
        <a href="#"><img src="https://www.svgrepo.com/show/521711/instagram.svg" alt="" /></a>
      </div>
    </div>
  </footer>
  </div>
  )
}

export default Footer;
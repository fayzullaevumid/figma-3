import React from 'react'
import './career.css'
import Navbar from '../Navbar/page'
import Footer from '../Footer/page'

const Career = () => {
  return (
    <div>
        <Navbar/>
        <img className='about-img' src="about2.png" alt="" />
        <div className='section-3'>
          <div className='card-2'>
            <img className='img2' src="career.png" alt="" />
          </div>
          <div className='card-1'>
            <h3 className='h3'>Care to join our <br /> mission?</h3>
            <p className='p2'>We’re always looking for ambitious individuals to help us on <br />
             our journey. If you’re passionate about our mission to <br />
              provide clean, accessible transport to improve urban living <br />
               we want to hear from you!</p>
               <button className='button1'>Say Hello</button>
          </div>
        </div>
        <h1 className='h13'>Why join us?</h1>
        <div className='about'>
             <div className='card0'>
              <img className='bitmap-img' src="Group 11.jpg" alt="" />
              <h3 className='h3'>Our tech</h3>
              <p className='p2'>We’re using cutting edge technology to drive <br />
               accessible urban transportation forward. Our <br />
                fully electric scooters are a joy to ride!</p>
             </div>
             <div className='card0'>
              <img className='bitmap-img' src="Group 24.jpg" alt="" />
              <h3 className='h3'>Our integrity</h3>
              <p className='p2'>We are fully committed to deliver a great yet <br />
               safe, sustainable micro-mobility experience in <br />
                every city we serve.</p>
             </div>
             <div className='card0'>
              <img className='bitmap-img' src="Group 12.jpg" alt="" />
              <h3 className='h3'>Our community</h3>
              <p className='p2'>We support every community we serve. All <br />
               workers are paid a living wage based on their <br />
                location and are Scoot employees.</p>
             </div>
          </div>
          <div className='career'>
            <div className='container5'>
                <div>
                <h3 className='h'>General Manager</h3> <br />
                <p>Jakarta, Indonesia</p>
                </div>
                <button className='button2'>Apply</button>
            </div>
            <div className='container5'>
                <div>
                <h3 className='h'>UI/UX Designer</h3> <br />
                <p>Yokohama, Japan</p>
                </div>
                <button className='button2'>Apply</button>
            </div>
            <div className='container5'>
                <div>
                <h3 className='h'>Blog Content Copywriter</h3> <br />
                <p>New York, United States</p>
                </div>
                <button className='button2'>Apply</button>
            </div>
            <div className='container5'>
                <div>
                <h3 className='h'>Graphic Designer</h3> <br />
                <p>New York, United States</p>
                </div>
                <button className='button2'>Apply</button>
            </div>
            <div className='container5'>
                <div>
                <h3 className='h'>Fleet Supervisor</h3> <br />
                <p>Jakarta, Indonesia</p>
                </div>
                <button className='button2'>Apply</button>
            </div>
            <div className='container5'>
                <div>
                <h3 className='h'>UX Analyst</h3> <br />
                <p>London, United Kingdom</p>
                </div>
                <button className='button2'>Apply</button>
            </div>
          </div>
        <Footer/>
    </div>
  )
}

export default Career
import React from 'react'
import './about.css'
import Navbar from '../Navbar/page';
import Footer from '../Footer/page';

const About = () => {
  return (
    <div>
      <Navbar/>
      <img className='about-img' src="about2.png" alt="" />
      <h1 className='h11'>About</h1>
      <div className='section-3'>
          <div className='card-2'>
            <img className='img2' src="about.png" alt="" />
          </div>
          <div className='card-1'>
            <h3 className='h3'>Mobility for the <br /> digital era</h3>
            <p className='p2'>Getting around should be simple (and even fun!) for <br />
             everyone. We embrace technology to provide low cost, smart <br />
              access to scooters at your fingertips.</p>
               <button className='button1'>Learn More</button>
          </div>
        </div>
        <div className='section-3'>
          <div className='card-3'>
            <h3 className='h3'>Better urban <br /> living</h3>
            <p className='p2'>We’re helping connect cities and bring people closer <br />
             together. Our scooters are also fully-electric and we offset <br />
              the minimal carbon footprint for each ride.</p>
               <button className='button1'>Learn More</button>
          </div>
          <div className='card-4'>
            <img className='img2' src="about1.png" alt="" />
          </div>
          </div>
          <h1 className='h12'>Our vales</h1>
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
          <h1 className='h12'>FAQs</h1>
        <h1 className='h13'>How it works</h1>
        <div className='about3'>
          <summary className='sum'>How do I download the app?
            <details className='det'>
            To download the Scoot app, you can search “Scoot” in both the App and Google Play <br />
             stores. An even simpler way to do it would be to click the relevant link at the bottom of <br />
              this page and you’ll be re-directed to the correct page.
            </details>
          </summary>
          <summary className='sum1'>
          Can I find a nearby Scoots?
          <details></details>
          </summary>
          <summary className='sum1'>
          Do I need a license to ride?
          <details></details>
          </summary>
          <h1 className='h13'>Safe driving</h1>
          <summary className='sum'>Should I wear a helmet?
            <details className='det'>
            Yes, please do! All cities have different laws. But we strongly strongly <br />
             strongly recommend always wearing a helmet regardless of the local laws. We <br />
              like you and we want you to be as safe as possible while Scooting.
            </details>
          </summary>
          <summary className='sum1'>
          How about the rules & regulations?
          <details></details>
          </summary>
          <summary className='sum1'>
          What if I damage my Scoot?
          <details></details>
          </summary>
        </div>
      <Footer/>
    </div>
  )
}

export default About;
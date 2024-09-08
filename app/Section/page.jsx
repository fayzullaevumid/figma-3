import React from 'react'
import './section.css'

const Section = () => {
  return (
    <div>
        <div className='section'>
         <img className='img' src="img.png" alt="" />
         <h1 className='h1'>Scooter sharing <br /> made simple</h1>
         <p className='p1'>Scoot takes the hassle out of urban mobility. Our bikes <br />
          are placed in convenient locations in each of our cities. <br />
           Use our app to locate the nearest bike, unlock it with a <br />
            tap, and you’re away!</p>
        </div>
        <div className='section-2'>
          <div className='card'>
            <div className='oval'>
              <img className='img1' src="mobile.png" alt="" />
            </div>
            <h3 className='h3'>Locate with app</h3>
            <p className='p2'>Use the app to find the nearest scooter to you. <br />
             We are continuously placing scooters in the <br />
              areas with most demand, so one should never <br /> be too far away. </p>
          </div>
          <div className='card'>
            <div className='oval'>
              <img className='img1' src="scooter.png" alt="" />
            </div>
            <h3 className='h3'>Pick your scooter</h3>
            <p className='p2'>We show the most important info for the <br />
             scooters closest to you. So you know how much <br />
              charge they have left and can see roughly how <br />
               much it will cost. </p>
          </div>
          <div className='card'>
            <div className='oval'>
              <img className='img1' src="moto.png" alt="" />
            </div>
            <h3 className='h3'>Enjoy the ride</h3>
            <p className='p2'>Scan the QR code and the bike will unlock. <br />
             Retract the cable lock, put on a helmet, and <br />
              you’re off! Always lock bikes away from <br />
               walkways and accessibility ramps. </p>
          </div>
        </div>
        <div className='section-3'>
          <div className='card-2'>
            <img className='img2' src="girl-image.png" alt="" />
          </div>
          <div className='card-1'>
            <h3 className='h3'>Easy to use <br />
            riding telemetry</h3>
            <p className='p2'>The Scoot app is available with riding telemetry. This means <br />
             it can show you your average speed, how long you've been <br />
              using the scooter, your traveling distance, and many more <br />
               things all in an easy to use app.</p>
               <button className='button1'>Learn More</button>
          </div>
        </div>
        <div className='section-3'>
          <div className='card-3'>
            <h3 className='h3'>Coming to a city <br /> near you</h3>
            <p className='p2'>Scoot is available in 4 major cities so far. We’re expanding <br />
             rapidly, so be sure to let us know if you want to see us in <br />
              your hometown. We’re aiming to let our scooters loose on 23 <br />
               cities over the coming year.</p>
               <button className='button1'>Learn More</button>
          </div>
          <div className='card-4'>
            <img className='img2' src="im.png" alt="" />
          </div>
        </div>
        <div className='section-3'>
          <div className='card-5'>
            <h3 className='h3'>Zero hassle <br /> payments</h3>
            <p className='p2'>Our payment is as easy as one two three. We accept most <br />
             credit cards and debit cards. You can also link your PayPal <br />
              account inside the app. Need to pay later? No worries! You <br />
               can defer payment for up to a month.</p>
               <button className='button1'>Learn More</button>
          </div>
          <div className='card-6'>
            <img className='img2' src="imh.png" alt="" />
          </div>
        </div>
   
    </div>
  )
}

export default Section;
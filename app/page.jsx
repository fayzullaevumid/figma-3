import React from 'react'
import Navbar from './Navbar/page'
import Footer from './Footer/page'
import Section from './Section/page'
import './global.css'

const page = () => {
  return (
    <div>
      <Navbar/>
      <Section/>
      <Footer/>
    </div>
  )
}

export default page
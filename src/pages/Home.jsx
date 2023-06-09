import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Showcase from '../components/Showcase'
import Services from '../components/Services'
import About from '../pages/About'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Showcase/>
      <Services/>
      <Footer/>
    </div>
  )
}

export default Home

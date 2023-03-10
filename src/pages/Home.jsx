import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import HeroSection from '../components/Home/HeroSection'
import Services from '../components/Home/Services'
import Team from '../components/Home/Team'
import Testimonials from '../components/Home/Testimonials'
import WeAre from '../components/Home/WeAre'
const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <WeAre />
      <Services />
      <Testimonials />
      <Team />
    </div>
  )
}

export default Home

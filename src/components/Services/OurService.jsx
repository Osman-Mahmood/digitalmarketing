import React from 'react'
import './OurService.css'
import ser from '../../assets/ser.png'
const OurService = () => {
  return (
    <div>
      <div className='container'>
        <h1 className='text-center mt-2 mb-2'><span className='ser'>Our Services</span></h1>
        <p className='text-center mt-3'>We enjoy what we do and do what our clients enjoy, and we work with fantastic clients all over the world <br className='br' />
to create thoughtful and functional websites.</p>

<div class="d-flex whyus-card text-center mt-2 new-card">
        <div class="card p-2 border-0 align-items-center">
            <img className='team shadow' src={ser} height="60" alt="why Us" />
                <h5 class="text-center text-blue fw-bold mt-5">Social Media Marketing</h5>
                <p class="details-typography fs-10">Social Media Marketing on Facebook, Instagram, Pinterest,<br className='br'/>
Twitter and different Social Media Platforms.</p></div>
                <div class="card p-2 border-0 align-items-center">
                    <img className='team shadow' src={ser} height="60" alt="why Us" />
                    <h5 class="text-center text-blue fw-bold mt-5">Graphic designing</h5>
                    <p class="details-typography">Social Media Marketing on Facebook, Instagram, Pinterest, <br className='br'/>
Twitter and different Social Media Platforms.</p></div>

    </div>

    <div class="d-flex whyus-card text-center mt-2 new-card">
        <div class="card p-2 border-0 align-items-center">
            <img className='team shadow' src={ser} height="60" alt="why Us" />
                <h5 class="text-center text-blue fw-bold mt-5">Social Media Marketing</h5>
                <p class="details-typography fs-10">Social Media Marketing on Facebook, Instagram, Pinterest,<br className='br'/>
Twitter and different Social Media Platforms.</p></div>
                <div class="card p-2 border-0 align-items-center">
                    <img className='team shadow' src={ser} height="60" alt="why Us" />
                    <h5 class="text-center text-blue fw-bold mt-5">Graphic designing</h5>
                    <p class="details-typography">Social Media Marketing on Facebook, Instagram, Pinterest, <br className='br'/>
Twitter and different Social Media Platforms.</p></div>

    </div>

      </div>
    </div>
  )
}

export default OurService

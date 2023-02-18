import React from 'react'
import './Services.css'
import service from '../../assets/service.png'
const Services = () => {
  return (
    <div>
      <h1 className='who text-center mt-5' id='services'><span className='title'>Our Services</span></h1>
      <div class="d-flex whyus-card mt-5 text-center">
        <div class="card p-2 border-0 text-start">
            <div className='d-flex'>
            <img className='service' src={service} height="60" alt="why Us" />
                <h5 class="text-center text-blue ms-2 mt-3">Social Media Marketing</h5>
                </div>
                <p class="mt-2">Social Media Marketing on Facebook, Instagram, <br />
Pinterest, Twitter and different Social Media <br />
Platforms.</p></div>
<div class="card p-2 border-0">
            <div className='d-flex'>
            <img className='service' src={service} height="60" alt="why Us" />
                <h5 class="text-center text-blue ms-2 mt-3">Graphic Designing</h5>
                </div>
                <p class="mt-2">All Services provide you in Graphic Design.</p></div>
<div class="card p-2 border-0">
            <div className='d-flex'>
            <img className='service' src={service} height="60" alt="why Us" />
                <h5 class="text-center text-blue ms-2 mt-3">Apps UI/UX Designing</h5>
                </div>
                <p class="mt-2">Mobile Apps design and all meterial..</p></div>
                
                </div>

                {/* 2nd */}
                <div class="d-flex whyus-card text-center">
        <div class="card p-2 border-0 text-start">
            <div className='d-flex'>
            <img className='service' src={service} height="60" alt="why Us" />
                <h5 class="text-center text-blue ms-2 mt-3">Social Media Marketing</h5>
                </div>
                <p class="mt-2">Social Media Marketing on Facebook, Instagram, <br />
Pinterest, Twitter and different Social Media <br />
Platforms.</p></div>
<div class="card p-2 border-0">
            <div className='d-flex'>
            <img className='service' src={service} height="60" alt="why Us" />
                <h5 class="text-center text-blue ms-2 mt-3">Graphic Designing</h5>
                </div>
                <p class="mt-2">All Services provide you in Graphic Design.</p></div>
<div class="card p-2 border-0">
            <div className='d-flex'>
            <img className='service' src={service} height="60" alt="why Us" />
                <h5 class="text-center text-blue ms-2 mt-3">Apps UI/UX Designing</h5>
                </div>
                <p class="mt-2">Mobile Apps design and all meterial..</p></div>
                
                </div>
{/* third */}

                <div class="d-flex whyus-card text-center">
        <div class="card p-2 border-0 text-start">
            <div className='d-flex'>
            <img className='service' src={service} height="60" alt="why Us" />
                <h5 class="text-center text-blue ms-2 mt-3">Social Media Marketing</h5>
                </div>
                <p class="mt-2">Social Media Marketing on Facebook, Instagram, <br />
Pinterest, Twitter and different Social Media <br />
Platforms.</p></div>
<div class="card p-2 border-0">
            <div className='d-flex'>
            <img className='service' src={service} height="60" alt="why Us" />
                <h5 class="text-center text-blue ms-2 mt-3">Graphic Designing</h5>
                </div>
                <p class="mt-2">All Services provide you in Graphic Design.</p></div>

                
                </div>


    </div>
  )
}

export default Services

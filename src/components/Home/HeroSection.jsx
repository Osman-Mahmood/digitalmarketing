import React from 'react'
import './HeroSection.css'
import carasoul from '../../assets/carasoul.jpg'
const HeroSection = () => {
  return (
    // <div className="back">
    // <div className='container'>
    //     <h2 className='text-white text-center main'>Let Us Show You The Power Of</h2>
    //      <h1 className='text-white text-bold text-center'>MARKETING <br /> COMMUNICATION</h1>
    //      <div className='text-center'>
    //      <button className='btn mt-5 contact text-center'>Contact Us</button>
    //      </div>
    //    </div>
    <div>
       <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner" style={{height:"500px"}}>
    
    <div className="carousel-item active">
      <img src={carasoul} className="d-block w-100 back" alt="..." />
      <h2 className='text-white text-center main'>Let Us Show You The Power Of</h2>
      <h1 className='text-white text-bold text-center second'>MARKETING <br /> COMMUNICATION</h1>
        <div className='text-center'>
          <button className='btn contact text-center mt-3 hero'>Contact Us</button>
         </div>
    </div>
    <div className="carousel-item">
      <img src={carasoul} className="d-block w-100 back" alt="..." />
      <h2 className='text-white text-center main'>Let Us Show You The Power Of</h2>
      <h1 className='text-white text-bold text-center second'>MARKETING <br /> COMMUNICATION</h1>
        <div className='text-center'>
          <button className='btn contact text-center mt-3 hero'>Contact Us</button>
         </div>
    </div>
    <div className="carousel-item">
      <img src={carasoul} className="d-block w-100 back" alt="..." />
      <h2 className='text-white text-center main'>Let Us Show You The Power Of</h2>
      <h1 className='text-white text-bold text-center second'>MARKETING <br /> COMMUNICATION</h1>
        <div className='text-center'>
          <button className='btn contact text-center mt-3 hero'>Contact Us</button>
         </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    </div>
   
  )
}

export default HeroSection

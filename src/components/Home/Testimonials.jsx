import React from 'react'
import './Testimonials.css'
import service from '../../assets/service.png'
import stars from '../../assets/stars.png'
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";


// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
const Testimonials = () => {
 
  return (
    <div className='container fluid'>
      {/* <h1 className='who text-center mt-5'><span className='title'>Our Testimonial</span></h1>
      <p className='text-center mt-3'>Here are some of our clients’ comments on us; all testimonials are from fiverr.com. Learn why our clients prefer to have us create
<br /> their websites.</p>
<div class="d-flex whyus-card mt-5 text-center">
        <div class="card p-2 border-0 text-start">
            <div className='d-flex background'>
            <img className='service' src={service} height="60" alt="why Us" />
                <h5 class="text-center text-blue ms-2 mt-1 text-white">M.BILAL <br />
                <img className='star' src={stars} alt="stars" />
                <img className='star' src={stars} alt="stars" />
                <img className='star' src={stars} alt="stars" />
                <img className='star' src={stars} alt="stars" />
                <img className='star' src={stars} alt="stars" />
                
                </h5>
                
                </div>
                <p class="mt-2 fs-0 test-font">In publishing and graphic design, Lorem ipsum is a placeholder text
commonly used to demonstrate the visual form of a document or
a typeface without relying on meaningful content. Lorem ipsum may
be used as a placeholder before final copy is available.</p></div>
<div class="card p-2 border-0">
            <div className='d-flex background'>
            <img className='service' src={service} height="60" alt="why Us" />
                <h5 class="text-center text-blue ms-2 mt-1 text-white">M.BILAL  <br />
                <img className='star' src={stars} alt="stars" />
                <img className='star' src={stars} alt="stars" />
                <img className='star' src={stars} alt="stars" />
                <img className='star' src={stars} alt="stars" />
                <img className='star' src={stars} alt="stars" /></h5>
                </div>
                <p class="mt-2 test-font">In publishing and graphic design, Lorem ipsum is a placeholder text
commonly used to demonstrate the visual form of a document or
a typeface without relying on meaningful content. Lorem ipsum may
be used as a placeholder before final copy is available</p></div>
<div class="card p-2 border-0">
            <div className='d-flex background'>
            <img className='service' src={service} height="60" alt="why Us" />
                <h5 class="text-center text-blue ms-2 mt-1 text-white">M.BILAL  <br />
                <img className='star' src={stars} alt="stars" />
                <img className='star' src={stars} alt="stars" />
                <img className='star' src={stars} alt="stars" />
                <img className='star' src={stars} alt="stars" />
                <img className='star' src={stars} alt="stars" /></h5>
                </div>
                <p class="mt-2 test-font">In publishing and graphic design, Lorem ipsum is a placeholder text
commonly used to demonstrate the visual form of a document or
a typeface without relying on meaningful content. Lorem ipsum may
be used as a placeholder before final copy is available</p></div>
                
                </div> */}
<h1 className='who text-center mt-5'><span className='title'>Our Testimonial</span></h1>
      <p className='text-center mt-3'>Here are some of our clients’ comments on us; all testimonials are from fiverr.com. Learn why our clients prefer to have us create
<br /> their websites.</p>

<Swiper
        pagination={{
          type: "progressbar",
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
        <div class="card p-2 border-0 text-center justify-content-center align-items-center">
            <div className='d-flex background mt-5'>
            <img className='service' src={service} height="60" alt="why Us" />
                <h5 class="text-center text-blue ms-2 mt-1 text-white">M.BILAL <br />
                <img className='star' src={stars} alt="stars" />
                <img className='star' src={stars} alt="stars" />
                <img className='star' src={stars} alt="stars" />
                <img className='star' src={stars} alt="stars" />
                <img className='star' src={stars} alt="stars" />
                
                </h5>
                
                </div>
                <p class="mt-5 fs-0 test-font">In publishing and graphic design, Lorem ipsum is a placeholder text 
commonly used to demonstrate the visual form of a document or
a <br className='br'/>typeface without relying on meaningful content. Lorem ipsum may
be used as a placeholder before final copy is available.</p></div>
        </SwiperSlide>
        <SwiperSlide>
        <div class="card p-2 border-0 text-center justify-content-center align-items-center">
            <div className='d-flex background mt-5'>
            <img className='service' src={service} height="60" alt="why Us" />
                <h5 class="text-center text-blue ms-2 mt-1 text-white">M.BILAL <br />
                <img className='star' src={stars} alt="stars" />
                <img className='star' src={stars} alt="stars" />
                <img className='star' src={stars} alt="stars" />
                <img className='star' src={stars} alt="stars" />
                <img className='star' src={stars} alt="stars" />
                
                </h5>
                
                </div>
                <p class="mt-5 fs-0 test-font">In publishing and graphic design, Lorem ipsum is a placeholder text 
commonly used to demonstrate the visual form of a document or
a <br className='br'/>typeface without relying on meaningful content. Lorem ipsum may
be used as a placeholder before final copy is available.</p></div>
        </SwiperSlide>
        <SwiperSlide>
        <div class="card p-2 border-0 text-center justify-content-center align-items-center">
            <div className='d-flex background mt-5'>
            <img className='service' src={service} height="60" alt="why Us" />
                <h5 class="text-center text-blue ms-2 mt-1 text-white">M.BILAL <br />
                <img className='star' src={stars} alt="stars" />
                <img className='star' src={stars} alt="stars" />
                <img className='star' src={stars} alt="stars" />
                <img className='star' src={stars} alt="stars" />
                <img className='star' src={stars} alt="stars" />
                
                </h5>
                
                </div>
                <p class="mt-5 fs-0 test-font">In publishing and graphic design, Lorem ipsum is a placeholder text 
commonly used to demonstrate the visual form of a document or
a <br className='none'/>typeface without relying on meaningful content. Lorem ipsum may
be used as a placeholder before final copy is available.</p></div>
        </SwiperSlide>
        <SwiperSlide>
        <div class="card p-2 border-0 text-center justify-content-center align-items-center">
            <div className='d-flex background mt-5'>
            <img className='service' src={service} height="60" alt="why Us" />
                <h5 class="text-center text-blue ms-2 mt-1 text-white">M.BILAL <br />
                <img className='star' src={stars} alt="stars" />
                <img className='star' src={stars} alt="stars" />
                <img className='star' src={stars} alt="stars" />
                <img className='star' src={stars} alt="stars" />
                <img className='star' src={stars} alt="stars" />
                
                </h5>
                
                </div>
                <p class="mt-5 fs-0 test-font">In publishing and graphic design, Lorem ipsum is a placeholder text 
commonly used to demonstrate the visual form of a document or
a <br className='br'/>typeface without relying on meaningful content. Lorem ipsum may
be used as a placeholder before final copy is available.</p></div>
        </SwiperSlide>
        <SwiperSlide>  <div class="card p-2 border-0 text-center justify-content-center align-items-center">
            <div className='d-flex background mt-5'>
            <img className='service' src={service} height="60" alt="why Us" />
                <h5 class="text-center text-blue ms-2 mt-1 text-white">M.BILAL <br />
                <img className='star' src={stars} alt="stars" />
                <img className='star' src={stars} alt="stars" />
                <img className='star' src={stars} alt="stars" />
                <img className='star' src={stars} alt="stars" />
                <img className='star' src={stars} alt="stars" />
                
                </h5>
                
                </div>
                <p class="mt-5 fs-0 test-font">In publishing and graphic design, Lorem ipsum is a placeholder text 
commonly used to demonstrate the visual form of a document or
a <br className='br'/>typeface without relying on meaningful content. Lorem ipsum may
be used as a placeholder before final copy is available.</p></div></SwiperSlide>
        <SwiperSlide>
        <div class="card p-2 border-0 text-center justify-content-center align-items-center">
            <div className='d-flex background mt-5'>
            <img className='service' src={service} height="60" alt="why Us" />
                <h5 class="text-center text-blue ms-2 mt-1 text-white">M.BILAL <br />
                <img className='star' src={stars} alt="stars" />
                <img className='star' src={stars} alt="stars" />
                <img className='star' src={stars} alt="stars" />
                <img className='star' src={stars} alt="stars" />
                <img className='star' src={stars} alt="stars" />
                
                </h5>
                
                </div>
                <p class="mt-5 fs-0 test-font">In publishing and graphic design, Lorem ipsum is a placeholder text 
commonly used to demonstrate the visual form of a document or
a <br className='br'/>typeface without relying on meaningful content. Lorem ipsum may
be used as a placeholder before final copy is available.</p></div>
        </SwiperSlide>
        <SwiperSlide>
        <div class="card p-2 border-0 text-center justify-content-center align-items-center">
            <div className='d-flex background mt-5'>
            <img className='service' src={service} height="60" alt="why Us" />
                <h5 class="text-center text-blue ms-2 mt-1 text-white">M.BILAL <br />
                <img className='star' src={stars} alt="stars" />
                <img className='star' src={stars} alt="stars" />
                <img className='star' src={stars} alt="stars" />
                <img className='star' src={stars} alt="stars" />
                <img className='star' src={stars} alt="stars" />
                
                </h5>
                
                </div>
                <p class="mt-5 fs-0 test-font">In publishing and graphic design, Lorem ipsum is a placeholder text 
commonly used to demonstrate the visual form of a document or
a <br className='br'/>typeface without relying on meaningful content. Lorem ipsum may
be used as a placeholder before final copy is available.</p></div>
        </SwiperSlide>
        <SwiperSlide>
        <div class="card p-2 border-0 text-center justify-content-center align-items-center">
            <div className='d-flex background mt-5'>
            <img className='service' src={service} height="60" alt="why Us" />
                <h5 class="text-center text-blue ms-2 mt-1 text-white">M.BILAL <br />
                <img className='star' src={stars} alt="stars" />
                <img className='star' src={stars} alt="stars" />
                <img className='star' src={stars} alt="stars" />
                <img className='star' src={stars} alt="stars" />
                <img className='star' src={stars} alt="stars" />
                
                </h5>
                
                </div>
                <p class="mt-5 fs-0 test-font">In publishing and graphic design, Lorem ipsum is a placeholder text 
commonly used to demonstrate the visual form of a document or
a <br className='br'/>typeface without relying on meaningful content. Lorem ipsum may
be used as a placeholder before final copy is available.</p></div>
        </SwiperSlide>
        <SwiperSlide> 
        <div class="card p-2 border-0 text-center justify-content-center align-items-center">
            <div className='d-flex background mt-5'>
            <img className='service' src={service} height="60" alt="why Us" />
                <h5 class="text-center text-blue ms-2 mt-1 text-white">M.BILAL <br />
                <img className='star' src={stars} alt="stars" />
                <img className='star' src={stars} alt="stars" />
                <img className='star' src={stars} alt="stars" />
                <img className='star' src={stars} alt="stars" />
                <img className='star' src={stars} alt="stars" />
                
                </h5>
                
                </div>
                <p class="mt-5 fs-0 test-font">In publishing and graphic design, Lorem ipsum is a placeholder text 
commonly used to demonstrate the visual form of a document or
a <br className='br'/>typeface without relying on meaningful content. Lorem ipsum may
be used as a placeholder before final copy is available.

</p></div>
        </SwiperSlide>
      </Swiper>



</div>

  )
}

export default Testimonials

import React from 'react'
import './WeAre.css'
import Vector from '../../assets/Vector.png'
import Vector2 from '../../assets/Vector1.png'
import Vector3 from '../../assets/Vector3.png'
const WeAre = () => {
  return (
    <div className='container fluid'>
        <div className='text-center'>
      <h1 className='who text-center mt-5'><span className='title'>Who We Are</span></h1>
      <p className='mt-2'>AR is one of Pakistan’s fastest-growing IT companies, offering a diverse range of products/solutions and services to clients in a
variety <br className='br'/> of industries around the world. It enables businesses through business analytics, reporting capabilities, and IT consulting, in
<br className='br'/>addition to product development.s</p>
      </div>
      <div class="d-flex whyus-card text-center">
        <div class="card p-2 border-0 align-items-center">
            <img className='icons' src={Vector} height="60" alt="why Us" />
                <h5 class="text-center text-blue fw-bold">Our Vision</h5>
                <p class="details-typography">Inspire the lives of entrepreneurs, industrialists,
and businessmen, and make the world a better
place for everybody.</p></div>
                <div class="card p-2 border-0 align-items-center">
                    <img className='icons' src={Vector2} height="60" alt="why Us" />
                    <h5 class="text-center text-blue fw-bold">Our Mission</h5>
                    <p class="details-typography">Inspire the lives of entrepreneurs, industrialists,
and businessmen, and make the world a better
place for everybody.</p></div>
                    <div class="card p-2 border-0 align-items-center">
                        <img className='icons' src={Vector3} height="60" alt="why Us" />
                        <h5 class="text-center text-blue fw-bold">Our GOAL</h5>
                        <p class="details-typography">Inspire the lives of entrepreneurs, industrialists,
and businessmen, and make the world a better
place for everybody.</p></div></div></div>
    
  )
}

export default WeAre

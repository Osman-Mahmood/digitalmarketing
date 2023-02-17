import React from 'react'
import zaiqa from '../../assets/zaiqa.png'
import './MainSection.css'
const MainSection = () => {
  return (
    <div className='container fluid mt-5'>
        <div className='d-flex'>
      <p className='fs-5 mb-0'>Zaiqa TEA</p>
      <span className='right'></span>
      </div>
      <h2>Project</h2>
      <div className='row'>
        <div className='col-md-3'>
            <img className='zaiqa' src={zaiqa} alt="zaiqa" />
        </div>
        <div className='col-md-3'>
        <img className='zaiqa' src={zaiqa} alt="zaiqa" />
        </div>
        <div className='col-md-3'>
        <img className='zaiqa' src={zaiqa} alt="zaiqa" />
        </div>
        <div className='col-md-3'>
        <img className='zaiqa' src={zaiqa} alt="zaiqa" />
        </div>
      </div>
      <div className='row'>
        <div className='col-md-3'>
            <img className='zaiqa' src={zaiqa} alt="zaiqa" />
        </div>
        <div className='col-md-3'>
        <img className='zaiqa' src={zaiqa} alt="zaiqa" />
        </div>
        <div className='col-md-3'>
        <img className='zaiqa' src={zaiqa} alt="zaiqa" />
        </div>
        <div className='col-md-3'>
        <img className='zaiqa' src={zaiqa} alt="zaiqa" />
        </div>
      </div>
      <div className='row'>
        <div className='col-md-3'>
            <img className='zaiqa' src={zaiqa} alt="zaiqa" />
        </div>
        <div className='col-md-3'>
        <img className='zaiqa' src={zaiqa} alt="zaiqa" />
        </div>
        <div className='col-md-3'>
        <img className='zaiqa' src={zaiqa} alt="zaiqa" />
        </div>
        <div className='col-md-3'>
        <img className='zaiqa' src={zaiqa} alt="zaiqa" />
        </div>
      </div>
    </div>
  )
}

export default MainSection

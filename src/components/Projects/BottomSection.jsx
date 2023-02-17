import React from 'react'
import zaiqa2 from '../../assets/zaiqa2.png'
import './MainSection.css'
const BottomSection = () => {
  return (
    <div className='container fluid mt-5'>
        <div className='d-flex'>
      <p className='fs-5 mb-0'>Round house pizza</p>
      <span className='right'></span>
      </div>
      <h2>Project</h2>
      <div className='row'>
        <div className='col-md-3 col-sm-12'>
            <img className='zaiqa' src={zaiqa2} alt="zaiqa" />
        </div>
        <div className='col-md-3'>
        <img className='zaiqa' src={zaiqa2} alt="zaiqa" />
        </div>
        <div className='col-md-3'>
        <img className='zaiqa' src={zaiqa2} alt="zaiqa" />
        </div>
        <div className='col-md-3'>
        <img className='zaiqa' src={zaiqa2} alt="zaiqa" />
        </div>
      </div>
      <div className='row'>
        <div className='col-md-3'>
            <img className='zaiqa' src={zaiqa2} alt="zaiqa" />
        </div>
        <div className='col-md-3'>
        <img className='zaiqa' src={zaiqa2} alt="zaiqa" />
        </div>
        <div className='col-md-3'>
        <img className='zaiqa' src={zaiqa2} alt="zaiqa" />
        </div>
        <div className='col-md-3'>
        <img className='zaiqa' src={zaiqa2} alt="zaiqa" />
        </div>
      </div>
      <div className='row'>
        <div className='col-md-3'>
            <img className='zaiqa' src={zaiqa2} alt="zaiqa" />
        </div>
        <div className='col-md-3'>
        <img className='zaiqa' src={zaiqa2} alt="zaiqa" />
        </div>
        <div className='col-md-3'>
        <img className='zaiqa' src={zaiqa2} alt="zaiqa" />
        </div>
        <div className='col-md-3'>
        <img className='zaiqa' src={zaiqa2} alt="zaiqa" />
        </div>
      </div>
    </div>
  )
}

export default BottomSection

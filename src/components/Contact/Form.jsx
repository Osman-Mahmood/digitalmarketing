import React from 'react'
import './Form.css'
function Form() {
  return (
    <div className='container bg'>
    <div className='container fluid'>
    
      <div className='row'>
        <div className='col-md-6'>
            <h3 className='text-bold mt-5'>WE'RE READY, LET'S TALK.</h3>
            <input className='name' type="text" placeholder='Your Name' />
            <input className='name' type="text" placeholder='Email Address' />
            <textarea className='name' type="text" placeholder='Message' />
            <button className='btn send d-block mt-3'>Send Message</button>
        </div>
        <div className='col-md-5'>
        <h3 className='text-bold mt-5'>CONTACT INFO</h3>
        <h5 className='mb-0'>Address​</h5>
        <p>123, Faislabad ,Pakistan</p>
        <h5 className='mb-0'>Email Us</h5>
        <p>ghulamdim316@gmail.com</p>
        <h5 className='mb-0'>Contact Us</h5>
        <p>0316-7352056</p>
        <h5 className='mb-0'>Follow Us</h5>
        <p>123, Faislabad ,Pakistan</p>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Form

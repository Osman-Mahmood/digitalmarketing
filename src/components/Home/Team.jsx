import React from 'react'
import team from '../../assets/team.png'
import './Team.css'
const Team = () => {
  return (
    <div>
       <h1 className='who text-center mt-5'><span className='title' id='ourteam'>Our Team</span></h1>
      
      <div class="d-flex whyus-card text-center mt-2">
        <div class="card p-2 border-0 align-items-center">
            <img className='team' src={team} height="60" alt="why Us" />
                <h5 class="text-center text-blue fw-bold mt-2">M.Bilal</h5>
                <p class="details-typography">UI DESIGNER</p></div>
                <div class="card p-2 border-0 align-items-center">
                    <img className='team' src={team} height="60" alt="why Us" />
                    <h5 class="text-center text-blue fw-bold mt-2">M.Bilal</h5>
                    <p class="details-typography">UI DESIGNER</p></div>
                    <div class="card p-2 border-0 align-items-center">
                        <img className='team' src={team} height="60" alt="why Us" />
                        <h5 class="text-center text-blue fw-bold mt-2">M.Bilal</h5>
                        <p class="details-typography">UI DESIGNER</p></div>

    </div>
    {/* <div class="d-flex whyus-card text-center mt-1">
        <div class="card p-2 border-0 align-items-center">
            <img className='team' src={team} height="60" alt="why Us" />
                <h5 class="text-center text-blue fw-bold mt-2">M.Bilal</h5>
                <p class="details-typography">UI DESIGNER</p></div>
                <div class="card p-2 border-0 align-items-center">
                    <img className='team' src={team} height="60" alt="why Us" />
                    <h5 class="text-center text-blue fw-bold mt-2">M.Bilal</h5>
                    <p class="details-typography">UI DESIGNER</p></div>
                    <div class="card p-2 border-0 align-items-center">
                        <img className='team' src={team} height="60" alt="why Us" />
                        <h5 class="text-center text-blue fw-bold mt-2">M.Bilal</h5>
                        <p class="details-typography">UI DESIGNER</p></div>

    </div> */}
    {/* <div class="d-flex whyus-card text-center mt-1">
        <div class="card p-2 border-0 align-items-center">
            <img className='team' src={team} height="60" alt="why Us" />
                <h5 class="text-center text-blue fw-bold mt-2">M.Bilal</h5>
                <p class="details-typography">UI DESIGNER</p></div>
                <div class="card p-2 border-0 align-items-center">
                    <img className='team' src={team} height="60" alt="why Us" />
                    <h5 class="text-center text-blue fw-bold mt-2">M.Bilal</h5>
                    <p class="details-typography">UI DESIGNER</p></div>
                  

    </div> */}
    </div>
    
  )
}

export default Team

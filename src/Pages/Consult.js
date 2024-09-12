import React from 'react'
import Navbar from '../Components/Navbar'
import "../Css/Consult.css"
import { Link } from 'react-router-dom'
import Footer from '../Components/Footer'

const Consult = () => {
  return (
    <div>
        <Navbar/>
        <div className=''>
          <div className='consultImage'>

            <div className='consult-icon'>
              <img src='../images/Consult.webp'/>
            </div>
            <div className='consults'>
              <h2> HEALTHY IS MADE HERE</h2>
            </div>
            <div className='consult'>
              <p>
              SCHEDULE A CONSULT BELOW AND LEAVE WITH A PLAN, GOALS, AND COMFORT THAT YOU ARE IN THE RIGHT COMMUNITY TO GUIDE  YOUR FITNESS JOURNEY.
              </p>
            </div>
            <div className='consultant'>
              <button className='consult-btn'><Link className='Link' to="/classes">
              Classes
              </Link></button>
              <button className='consult-btn'><Link className='Link' to="/quiz">
              Consult
              </Link></button>         
              </div>

          </div>
        </div>
        <Footer/>
    </div>
  )
}

export default Consult
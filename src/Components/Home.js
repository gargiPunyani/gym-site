import React from 'react'
import Navbar from './Navbar'
import "../Css/Home.css"
import Aboutt from './Aboutt'
import Contact from './Contact'
import Owner from './Owner'
import Wake from './Wake'


const Home = () => {
  return (
    <div>
        <Navbar/>
        <div>
          <div className='slider'>
            <div className="slide">
              <h3>
              <span>
                MY BODY, MY MIND,
                </span>
                <br/>
                <span>
                  MY LIFE
                </span>
                </h3>              
            </div>
            <div className="slidee">
              < h2>
              <span>
                MY FITNESS SUITES
              </span>
              </h2>
            </div>
            <button className="book-now"> BOOK CLASSES</button>
          </div>
         
       </div>
       <Aboutt/>
       <Owner/>
       <Wake/>
       <Contact/>
    </div>
  )
}

export default Home
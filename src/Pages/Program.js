import React from 'react'
import { Link } from 'react-router-dom'
import Slider from 'react-slick'
import Navbar from '../Components/Navbar'
import "../Css/Program.css"
import { FaCarrot } from 'react-icons/fa'
import { FaAppleWhole } from 'react-icons/fa6'
import Footer from "../Components/Footer"

export const Program = () => {
    var settings = {
        // dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 2,
        initialSlide: 0,
       
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 5
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 4
                }
            },
            {
                breakpoint: 425,
                settings: {
                    slidesToShow: 3
                }
            },
        ]
    }

  return (
    <div >
        <Navbar/>
        <div className='program'>
        <h1>
            Programs
        </h1>
        <div className='programm'>
        <div className="slider-container">
                    <Slider {...settings}>
                        <div className='Slider'>
                            <span>
                                <Link className='Link' to=""> All Programs
                                </Link >
                            </span>
                        </div>
                        <div className='Slider'>
                            <span>
                                <Link className='Link' to=""> MIND
                                </Link></span>
                        </div>
                        <div className='Slider'>
                            <span>
                                <Link className='Link ' to=''>BODY
                                </Link >
                            </span>
                        </div>
                        <div className='Slider'>
                            <span>
                                <Link className='Link' to=""> LIFE
                                </Link>
                            </span>
                        </div>                
                    </Slider>
                </div>
        </div>
        <div className='program'>
            <img src='../images/program.webp'/>
            <p>
            
            Summer Cut 3.0<FaCarrot style={{color:"orange"}}/>
            <FaAppleWhole style={{color:"red"}}/>
        </p>
        <p>
            July 20, 2024 - Aug 22, 2024 • 33 Participants
            </p>  
            <hr/>  
            <div className='list'>
                ₹300
            
            <div>
                <button className='join-now'>
                    Join
                </button>
                </div>
            </div>
            
        </div>
        </div>
        <Footer/>
    
    </div>
  )
}

import React from 'react'
import { Link } from 'react-router-dom'
import Slider from 'react-slick'
import "../Css/Classes.css"
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ClassesSlider = () => {
    var settings = {
        // dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 2,
        initialSlide: 0,
        nextArrow:
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000" style={{ boxShadow: "rgba(149,157,165,0) 0px 8px 24px", color: "black", background: "whiteSmoke" }}><path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z" /></svg>,
        prevArrow:
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="30px" fill="#000000" style={{ boxShadow: "rgba(149,157,165,0) 0px 8px 24px", color: "black", background: "whiteSmoke" }}><path d="M400-80 0-480l400-400 71 71-329 329 329 329-71 71Z" /></svg>,

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
        <div>
            <div className='classes'>
                <div className="slider-container">
                    <Slider {...settings}>
                        <div className='Slider'>
                            <h6>
                                <Link className='Link' to="/bootcamp"> BOOTCAMP
                                </Link >
                            </h6>
                        </div>
                        <div className='Slider'>
                            <h6>
                                <Link className='Link' to="/yoga"> YOGA
                                </Link></h6>
                        </div>
                        <div className='Slider'>
                            <h6>
                                <Link className='Link ' to='/strength'>STRENGTH
                                </Link >
                            </h6>
                        </div>
                        <div className='Slider'>
                            <h6>
                                <Link className='Link' to=""> CHILDWATCH
                                </Link>
                            </h6>
                        </div>
                        <div className='Slider'>
                            <h6>
                                <Link className='Link' to=""> PHYSICAL STRENGTH
                                </Link>
                            </h6>
                        </div>
                        <div className='Slider'>
                            <h6>
                                <Link className='Link' to="">  HIIT
                                </Link>
                            </h6>
                        </div>
                        <div className='Slider'>
                            <h6>
                                <Link className='Link' to=""> BLENDED STYLE CLASSES
                                </Link >
                            </h6>
                        </div>
                        <div className='Slider'>
                            <h6>
                                <Link className='Link' to="" >BARRE
                                </Link>
                            </h6>
                        </div>
                        <div className='Slider'>
                            <h6>
                                <Link className='Link' to=""> FITNESS CONSULT
                                </Link>
                            </h6>
                        </div>

                    </Slider>
                </div>
            </div>
        </div>
    )
}

export default ClassesSlider
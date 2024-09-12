import React, { useState } from 'react'
import Navbar from './Navbar'
import '../Css/Events.css'
import { FaAngleDown, FaAngleUp } from 'react-icons/fa'
import { FaCircleUser } from 'react-icons/fa6'
import Footer from './Footer'

const Events = () => {
    const [scroll, setScroll] = useState(false)

    const handleScroll = () => {
        setScroll(!scroll)
    }

    return (
        <div>
            <Navbar />
            <div>
                <div className='event'>
                    <img src="../images/event.webp" className='eventImg' />
                </div>
                <div className='events'>
                    {
                        scroll == false && <span>
                            Sun, July 28
                        </span>
                    }
                    
                    <h4>
                        SUPERHERO YOGA (FOR KIDS) ON JULY 28th
                        {
                            scroll == false &&
                            <FaAngleDown onClick={handleScroll} />
                        }
                        {
                            scroll == true &&
                            <FaAngleUp onClick={handleScroll} />
                        }
                    </h4>
                </div>

                <div className='eventss'>
                    {
                        scroll == true &&
                        <div>
                            <p>
                                July 28,2024, 4:00 PM - 5:00 PM
                            </p>
                            <p>
                                MY FITNESS SUITE, Noida sector-15, UP(201301)
                            </p>
                            <p>
                                <FaCircleUser style={{ color: "rgb(151, 151, 151" }} />
                                <FaCircleUser style={{ color: "rgb(151, 151, 151" }} />
                                <FaCircleUser style={{ color: "rgb(151, 151, 151" }} /> +10 more
                            </p>
                            <p>
                            A 1hr fun SUPERHERO themed group yoga class for kids ages 5-12
                            </p>
                        </div>
                    }
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Events
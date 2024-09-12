import React from 'react'
import "../Css/Footer.css"

const Footer = () => {
    return (
        <div>
            <div className='footer-header'>
                <div>
                    <form className='footer'>
                        <span>Join our mailing list</span>
                        <div>
                            <input 
                            type='email'
                            placeholder='Enter Your Email *'
                            />
                        </div>
                        <button className='join'>Join Now</button>
                    </form>

                </div>
                <div className='copyright'>
                    <p>
                        &copy; 2024 by My Fitness Suites
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Footer
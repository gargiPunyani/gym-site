import React from 'react'
import "../Css/Contact.css"

const Contact = () => {
    return (
        <div className='contact'>
            <div>
                <div className='head1'>
                    /
                </div>
                <div className='contact-header'>
                    <h1>
                        CONTACT
                    </h1>
                </div>
                <div className='head2'>
                    /
                </div>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-2 '>
                            <h5>
                                <span>
                                    GETTING HERE:
                                </span>
                            </h5>
                            <p>
                                Noida Sector-15
                            </p>
                        </div>
                        <div className='col-md-2'>
                            <h5>
                                <span>
                                    OUR ADDRESS:
                                </span>
                            </h5>
                            <p>
                                THe Fitness Suites,<br />
                                Noida sector-15, UP(201301)
                            </p>
                        </div>
                        <div className='col-md-2'>
                            <h5>
                                <span>
                                    EMAIL:
                                </span>
                            </h5>
                            <p>
                                fitnessgym123@gmail.com
                            </p>
                        </div>
                        <div className='col-md-2'>
                            <h5>
                                <span>
                                    PHONE:
                                </span>
                            </h5>
                            <p>
                                +91 9876543210
                            </p>
                        </div>
                    </div>
                </div>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-4 map'>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.498447243554!2d77.30918341107807!3d28.5848199755895!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5097b129809%3A0x5195490a2c01875!2sNoida%20sector%2015%20Metro%20Station!5e0!3m2!1sen!2sin!4v1720854097707!5m2!1sen!2sin" style={{ width: "100%", height: "18rem" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                        <div className='col-lg-4 contactForm'>
                            <div className='form'>
                                <form>
                                    <div  className='cnt-form'>
                                    <div className='cntc-form'>
                                        <input className='namee'
                                            type='text'
                                            placeholder='Name'
                                            name='Name'
                                        />
                                    </div>
                                    <div className='cntc-form'>
                                        <input
                                            type='text'
                                            placeholder='Email'
                                            name='Email'
                                        />
                                    </div> 
                                    <div className='cntc-form'>
                                        <input
                                            type='text'
                                            placeholder='Phone'
                                            name='Phone'
                                        />
                                    </div> 
                                    <div className='cntc-form'>
                                        <input
                                            type='text'
                                            placeholder='Subject'
                                            name='Subject'
                                        />
                                    </div>
                                    <div className='contactt-form'>
                                        <input
                                            type='text'
                                            placeholder='Message'
                                            name='Message'
                                        />
                                    </div>
                                    <button className='btn-submit' type='submit'>
                                        Submit
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>

                    </div>
                </div>
                <div className='cntc'>

                </div>

            </div>
        </div>
    )
}

export default Contact
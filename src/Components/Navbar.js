import React, { useState } from 'react'
import "../Css/Navbar.css"
import { Link } from 'react-router-dom'
import { FaAngleDown } from 'react-icons/fa'

const Navbar = () => {
    //state -> false
    const [show, setShow]=useState(false)

    const showSidebar = () => {
        setShow(!show)
    }
    const hideSidebar = () => {
    setShow(!show)

    }

    return (
        <div className='container-fluid'>
            <div className='navb-head'>
                <div className='header'>
                    <img src='../images/logo.webp' alt='' />
                    <nav className='navContent'>
                        <ul>

                            <li className=' hideOnMobile-item' > <Link className='Link' to="/">Home</Link><FaAngleDown />
                                <ul className='drop-down'>
                                    <li className='hideOnMobile-item'><Link className='Link' to="/consult">Consult</Link></li>
                                    <li className='hideOnMobile-item'><Link className='Link' to='/quiz'>Body Type Quiz</Link></li>
                                </ul>
                            </li>

                            <li className='hideOnMobile-item'><Link className='Link' to="/schedule">Schedule</Link></li>
                            <li className='hideOnMobile-item'><Link className='Link' to="/plans">Plans</Link></li>
                            <li className='hideOnMobile-item'><Link className='Link' to='/instructors'>Instructors</Link></li>
                            <li className='hideOnMobile-item'><Link className='Link' to="/classes">Classes</Link></li>
                            <li className='hideOnMobile-item'><Link className='Link' to="/event">Events</Link><FaAngleDown />
                                <ul className='drop-down'>
                                    <li className=' hideOnMobile-item'><Link className='Link' to="/program">Program list</Link></li>
                                </ul>

                            </li>

                            <li className='hideOnMobile-item'><Link className='Link' to="/blogs">Blogs</Link></li>
                            <li className='hideOnMobile-item'><Link className='Link' to="/photos">Photos</Link></li>
                            <li className='hideOnMobile-item'><Link className='Link' to="/group">Groups</Link></li>
                            <li className=' hideOnMobile-item'><Link className='Link' to="/login">Login</Link></li>

                        </ul>
                        <label className='menu' onClick={showSidebar}>
                           
                            { !show && <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" /></svg>}
                            </label>
                    </nav>
                    <nav className='sidenavbar' style={{display: `${show ? 'block': 'none'}`}}>
                        <ul className='sidebar' >
                            <li className='imageLink' onClick={hideSidebar}>
                                <svg xmlns="http://www.w3.org/2000/svg" height="26px" viewBox="0 -960 960 960" width="26px" fill="#5f6368" style={{marginTop:"2rem", marginLeft:"10em"}} ><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" /></svg>
                            </li>
                            <li className=' ' > <Link className='Link' to="/">Home</Link>
                                <ul className='drop-down'>
                                    <li className=''><Link className='Link' to="/consult">Consult</Link></li>
                                    <li className=''><Link className='Link' to='/quiz'>Body Type Quiz</Link></li>
                                </ul>
                            </li>

                            <li className=''><Link className='Link' to="/schedule">Schedule</Link></li>
                            <li className=''><Link className='Link' to="/plans">Plans</Link></li>
                            <li className=''><Link className='Link' to='/instructors'>Instructors</Link></li>
                            <li className=''><Link className='Link' to="/classes">Classes</Link></li>
                            <li className=''><Link className='Link' to="/event">Events</Link>
                                <ul className='drop-down'>
                                    <li className=''><Link className='Link' to="/program">Program list</Link></li>
                                </ul>

                            </li>

                            <li className=''><Link className='Link' to="/blogs">Blogs</Link></li>
                            <li className=''><Link className='Link' to="/photos">Photos</Link></li>
                            <li className=''><Link className='Link' to="/group">Groups</Link></li>

                            <li className=' '><Link className='Link' to="/login">Login</Link></li>
                            {/* <li className='menu' onClick={showSidebar}><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg></li>                */}

                        </ul>
                    </nav>
                </div>
            </div>
        </div>



    )
}

export default Navbar




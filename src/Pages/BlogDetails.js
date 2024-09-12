import React from 'react'
import "../Css/Blogs.css"
import { FaEllipsisVertical } from 'react-icons/fa6'
import { FaHeart } from 'react-icons/fa'

const BlogDetails = (props) => {
    return (
        <div>
            <div className='container'>
                <div className='blogss'>
                    <div className='blog'>
                        <img src={props.image} />
                    </div>
                    <div className='bloggs'>
                        <div className='blog-head'>
                            <div className=''>
                                <img className="imgg" src="../images/profile1.jpg" />
                            </div>

                            <div className='user-name'>
                                <span>
                                    marybethellis
                                </span>
                                <p>
                                    {props.date}
                                 &nbsp; &nbsp;
                                    {props.time}
                                </p>
                            </div>
                            <div className='menuu'>
                                <FaEllipsisVertical />
                            </div>
                        </div>
                    <div className='blog-content'>
                        <h5>
                            {props.title}
                        </h5>
                        <p>
                            {props.details}
                        </p>
                        </div>
                        <hr/>
                        <p className='blog-views'>
                            149 views
                            &nbsp; &nbsp; &nbsp; &nbsp;
                            0 comments
                           <FaHeart  className="views" style={{color:"red"}}/>
                        </p>
                        
                    </div>
                
                </div>
                
            </div>
        </div>

    )
}

export default BlogDetails
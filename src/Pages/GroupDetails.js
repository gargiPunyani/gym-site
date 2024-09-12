import React from 'react'
import { FaCircleInfo } from 'react-icons/fa6'
import "../Css/Groups.css"
import { FaShare } from 'react-icons/fa'

const GroupDetails = (props) => {
    return (
        <div>
            <div className=''>
                <div className='grp1'>
                    <div className='groupss'>
                        <div className='groups'>
                            <div >
                                <FaCircleInfo style={{ color: "#dcdcdc" ,marginLeft:"1rem"}} />
                                <span>This post is from a suggested group</span>
                            </div>
                            <div>
                                <button className='join-btn' type='button'>Join</button>
                            </div>
                        </div>
                        <hr />
                    </div>
                    <div className='grp'>
                        <div className='grps1'>
                            <img src={props.img} />
                            <span>{props.user}</span>
                            <FaShare className='share' />
                        </div>
                        <div className='grps2'>
                            <img src={props.image} />
                            <p>{props.detail}</p>
                        </div>

                    </div>
                    <div className='comment'>
                        <input 
                        placeholder='Comment'
                        type='text'
                        />
                    </div>
                </div>
                <div className='suggestion'>
            </div>
            </div>
        </div>
    )
}

export default GroupDetails
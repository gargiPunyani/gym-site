import React from 'react'
import "../Css/Instructor.css"

export const InstructorDetails = (props) => {
  return (
    <div>
        <div className='container'>
            <div className='row instruct'>
                <div className='col-md-3 '>
                    <img src={props.image} alt=""/>
                </div>
                <div className='col-md-8'>
                    <h3>
                        {props.name}
                    </h3>
                    <p>
                        {props.para1}
                    </p>
                   
                </div>
            </div>

        </div>
    </div>
  )
}

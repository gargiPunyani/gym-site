import React from 'react'
import "../Css/Classes.css"

const SliderDetails = (props) => {
  return (
    <div className='container'>
      
        <div className='container'>
            <div className='row classess'>
                <div className='col-md-3 '>
                <img src={props.img}/>
                </div>
                <div className='col-md-3'>
                    <h6>
                        {props.head}
                    </h6>
                    <p>{props.details}</p>
                </div>
                <div className='col-md-3'>
                    <button className='books'>
                        BOOK NOW

                    </button>
                </div>
            </div>
        </div>
     </div>
  )
}

export default SliderDetails
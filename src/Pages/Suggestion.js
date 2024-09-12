import React from 'react'
import "../Css/suggestion.css" 

const Suggestion = (props) => {
  return (
    <div>
         <div className='suggest'>
                <div className='suggestion'>
                    <img src={props.imgg}/>
                    <span>{props.details}</span>
                </div>
              </div>
    </div>
  )
}

export default Suggestion
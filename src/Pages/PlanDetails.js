import React from 'react'
import "../Css/Plans.css"

const PlanDetails = (props) => {
    return (
        // <div className='container'>
            // <div className='row'>
                <div className='col-md-3 planDetail'>
                    
                    <p>
                        <span>
                            <h4>
                                {props.header}
                            </h4>
                            <h3>
                                ₹{props.price}
                            </h3>
                            <span>{props.month}</span>
                        </span>
                        <p>
                            <span>
                                {props.detail}
                            </span>
                        </p>
                        <button className='doIt'>
                            Let's do it
                        </button>
                    </p>
                    <ul >
                        <li>{props.list1}</li>
                        <li>{props.list2}</li>
                        <li>{props.list3}</li>
                        <li>{props.list4}</li>

                    </ul>


                </div>
            // </div>
        // </div>
    )
}

export default PlanDetails
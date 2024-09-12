import React from 'react'
import "../Css/Schedule.css"
const ScheduleDetails = (props) => {
    return (
        <div>
            <div className='containers'>
                <div className='schedule'>
                    <div className='schedule-details'>

                        <div>
                            <div>
                                <p>
                                    <span className='time'>
                                        {props.time}
                                    </span><br />
                                    <span className='trainer'>
                                        {props.hour}
                                    </span>
                                </p>
                            </div>
                        </div>
                        <div>
                            <p >
                                <span className='exercise'>
                                    {props.exercise}
                                </span><br />
                                <span className='trainer'>
                                    {props.trainee}
                                </span>
                            </p>
                        </div>
                        <div>
                            <p>
                                <span className='booking'>
                                    <button className='book'>
                                        {props.button}
                                    </button>
                                </span>
                            </p>

                        </div>

                    </div>
                </div>

            </div>

        </div>
    )
}

export default ScheduleDetails
import React, { useState } from 'react'
import Navbar from './Navbar'
import "../Css/Schedule.css"
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ScheduleDetails from '../Pages/ScheduleDetails';
import Footer from './Footer';

const Schedule = () => {
  
  const dateData=[ ]
  
  for (let i=1 ;i<=31; i++){
    dateData.push({id:i, className:"Slikes"})
  }
  console.log(dateData)
  const getDate = () => {
    const today = new Date();
    const month = today.getMonth() + 1;
    const year = today.getFullYear();
    const date = today.getDate();

    return `${month}/${date}/${year}`;
  }
  const gettDate = () => {
    const today = new Date();
    const month = today.getMonth() + 1;
    const year = today.getFullYear();
    const date = today.getDate() + 7;

    return `${month}/${date}/${year}`;

  }

  var settings = {
    // dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 7,
    initialSlide: 0,
    nextArrow:
      <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000" style={{ boxShadow: "rgba(149,157,165,0) 0px 8px 24px", color: "black", background: "whiteSmoke" }}><path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z" /></svg>,
    prevArrow:
      <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="30px" fill="#000000" style={{ boxShadow: "rgba(149,157,165,0) 0px 8px 24px", color: "black", background: "whiteSmoke" }}><path d="M400-80 0-480l400-400 71 71-329 329 329 329-71 71Z" /></svg>,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow:3
          }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3
        }
      },
    ]
  }

  const [currentDate, setCurrenDate] = useState(getDate());
  const [date, setDate] = useState(gettDate());
  return (
    <div>
      <Navbar />
      <div>
        <div>
          <div className='schedule-head'>
            <h1>
              Class Schedule
            </h1>
          </div>
          <div className='date'>
            <p>
              {currentDate}  -   {date}
            </p>
          </div>
          <div className='container'>
            <div className='days'>
              <ul>
                <li>Mon</li>
                <li>Tue</li>
                <li>Wed</li>
                <li>Thu</li>
                <li>Fri</li>
                <li>Sat</li>
                <li>Sun</li>

              </ul>
            </div>

            <div className='slider-container'>

            <Slider {...settings}>
              {
                dateData.map((item)=>{
                  return (
                    <div key={item.id} className={`item.className`}>
                      <h3>
                        {item.id}
                      </h3>
                    </div>
                  )
                })
              }
            </Slider>

            </div>
          </div>
          
            <ScheduleDetails
              time="5:00 am"
              hour="1 hr"
              exercise="WEIGHTED WORRIER YOGA"
              trainee="Diksha"
              button="Book"
            />
            <ScheduleDetails
              time="5:00 am"
              hour="1 hr"
              exercise="STRENGTH BOOTCAMP"
              trainee="Raghav"
              button="Book"
            />
            <ScheduleDetails
              time="6:20 am"
              hour="40 min"
              exercise="BODY SCULPT"
              trainee="Priya"
              button="Book"
            />
            <ScheduleDetails
              time="7:00 am"
              hour="45 min"
              exercise="BODY PUMP"
              trainee="Diksha"
              button="Book"
            />
            <ScheduleDetails
              time="8:00 am"
              hour="1 hr"
              exercise="BURN BARRE BLEND"
              trainee="Surbhi"
              button="Book"
            />
              <ScheduleDetails
              time="9:00 am"
              hour="1 hr"
              exercise="STRICTLY STRENGTH"
              trainee="Nisha"
              button="Book"
            />
            <ScheduleDetails
              time="6:00 pm"
              hour="1 hr"
              exercise="STRENGTH YOGA"
              trainee="RAKESH"
              button="Book"
            />
            <ScheduleDetails
              time="6:00 am"
              hour="1 hr"
              exercise="STRICTLY STRENGTH"
              trainee="NISHANT"
              button="Book"
            />
            <ScheduleDetails
              time="7:00 pm"
              hour="45 hr"
              exercise="YOGA FLOW"
              trainee="Khushi"
              button="Book"
            />
            <ScheduleDetails
              time="7:00 pm"
              hour="50 hr"
              exercise="BURN BARRE BLEND"
              trainee="Hitesh"
              button="Book"
            />
            <ScheduleDetails
              time="8:00 pm"
              hour="1 hr"
              exercise="STRENGTH BOOTCAMP"
              trainee="Raghav"
              button="Book"
            />
    

          <Footer/>

        </div>
      </div>
    </div>

  )
}

export default Schedule
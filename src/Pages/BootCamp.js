import React from 'react'
import SliderDetails from './SliderDetails'
import Navbar from '../Components/Navbar'
import Class from './Class'
import ClassesSlider from '../Components/ClassesSlider'
import Footer from '../Components/Footer'

const BootCamp = () => {
    return (
        <div>
            <Navbar >
                
                </Navbar>
            <Class />
            <ClassesSlider />

            <SliderDetails
                img="../images/classes1.webp"
                head="STRENGTH BOOTCAMP"
                details="Strength with some cardio in the Strength Room"
            />
            <SliderDetails
                img="../images/classes2.webp"
                head="SOLID STRENGTH BOOTCAMP"
                details="High Intensity Strength Training"
            />
            <SliderDetails
                img="../images/classes5.webp"
                head="MICHELLE'S BOOT CAMP"
                details="Get Ready!!"
            />
            <SliderDetails
                img="../images/classes4.webp"
                head="AUNNIE'S BOOT CAMP"
                details="BE Ready!!"
            />
             <SliderDetails
                img="../images/classes3.webp"
                head="JACKED w/ Jacqi"
                details="1 Hour Interval Strength Training with some HIIT mixed"
            />
            <Footer/>
        </div>
    )
}

export default BootCamp
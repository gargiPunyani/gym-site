import React from 'react'
import Navbar from '../Components/Navbar'
import Class from './Class'
import ClassesSlider from '../Components/ClassesSlider'
import SliderDetails from './SliderDetails'
import Footer from '../Components/Footer'

const Yoga = () => {
    return (
        <div>
            <Navbar />
            <Class />
            <ClassesSlider />

            <SliderDetails
                img="../images/yoga1.webp"
                head="CANDLELIT YOGA"
                details="A 60 Min slow-flow yoga with Candle Light that is beginner friendly"
            />
            <SliderDetails
                img="../images/ypga2.webp"
                head="HOT POWER YOGA"
                details="Power Yoga at 103"
            />
            <SliderDetails
                img="../images/yoga3.webp"
                head="HOT YOGA FLOW"
                details="A fun but challenging 60-minute heated yoga flow for all!"
            />
            <SliderDetails
                img="../images/yoga4.webp"
                head="STRENGTH YOGA"
                details="Intermediate Level -Working on building strength for possibility poses"
            />
            <SliderDetails
                img="../images/yoga5.webp"
                head="YOGA FLOW"
                details="60 min Vinyasa Style Yoga Set"
            />

            <Footer />
        </div>
    )
}

export default Yoga
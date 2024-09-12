import React from 'react'
import Navbar from '../Components/Navbar'
import Class from './Class'
import ClassesSlider from '../Components/ClassesSlider'
import SliderDetails from './SliderDetails'

const Strength = () => {
  return (
    <div>
        <Navbar/>
        <Class/>
        <ClassesSlider/>

        <SliderDetails
                img="../images/strength1.webp"
                head="STRENGTH- Total Body"
                details="Full Body Workout"
            />
             <SliderDetails
                img="../images/strength2.webp"
                head="LEGS, BUTT, AND THIGHS"
                details="GET FIT BABY!!!"
            />
             <SliderDetails
                img="../images/strength3.webp"
                head="SUPERSET STRENGTH"
                details="A CROSSFIT STYLE WORKOUT"
            />
             <SliderDetails
                img="../images/strength4.webp"
                head="STRICTLY STRENGTH"
                details="A CROSSFIT STYLE CLASS"
            />

    </div>
  )
}

export default Strength
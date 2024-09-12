import React from 'react'
import Navbar from './Navbar'
import { InstructorDetails } from '../Pages/InstructorDetails'
import "../Css/Instructor.css"
import Footer from './Footer'

const Instructors = () => {
    return (
        <div>
            <Navbar />
            <div className='instructor'>
                <div className='container'>
                    <div className='row'>
                        <InstructorDetails 
                        image="../images/trainer1.webp"
                        name="Alec- Certified Personal Trainer"
                        para1="Be stronger, Be Faster, & Master the Foundations. Alec focuses on functional fitness programs phased to challenge both the elite athlete and novice gym goer. Join him in the strength room for a class soon! "
                        />
                        <InstructorDetails 
                        image="../images/trainer2.webp"
                        name="Alli- Certified Barre Intensity Instructor"
                        para1="Be stronger, Be Faster, & Master the Foundations. Alec focuses on functional fitness programs phased to challenge both the elite athlete and novice gym goer. Join him in the strength room for a class soon! "
                        />
                        <InstructorDetails 
                        image="../images/trainer5.webp"
                        name="Tyler -Certified Yoga Instructor & Personal Trainer"
                        para1="Be stronger, Be Faster, & Master the Foundations. Alec focuses on functional fitness programs phased to challenge both the elite athlete and novice gym goer. Join him in the strength room for a class soon! "
                        />
                        <InstructorDetails 
                        image="../images/trainer4.webp"
                        name="Lori- Certified Yoga Instructor"
                        para1="Be stronger, Be Faster, & Master the Foundations. Alec focuses on functional fitness programs phased to challenge both the elite athlete and novice gym goer. Join him in the strength room for a class soon! "
                        />
                        <InstructorDetails 
                        image="../images/trainer3.webp"
                        name="Michelle- Certified Personal Trainer "
                        para1="Be stronger, Be Faster, & Master the Foundations. Alec focuses on functional fitness programs phased to challenge both the elite athlete and novice gym goer. Join him in the strength room for a class soon! "
                        />
                     </div>
                </div>
                <Footer/>
            </div>
        </div>
    )
}

export default Instructors
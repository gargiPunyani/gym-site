import React from 'react'
import Navbar from './Navbar'
import BlogDetails from '../Pages/BlogDetails'
import Footer from './Footer'

const Blogs = () => {
    return (
        <div>
            <Navbar />
            <div className='container'>
                <div className='blogs'>
                    <BlogDetails
                        image="../images/blog1.webp"
                        date="Jun7, 2024"
                        time="2 min"
                        title="Cold Exposure"
                        details="I stumbled upon this body hack 5 years ago by way of an introduction to the Wim Hof method. Recently, cold exposure began becoming popular for weight loss."
                    />
                    <BlogDetails
                        image="../images/blog2.webp"
                        date="May25, 2024"
                        time="3 min"
                        title="Be Generous With Your Scars"
                        details="Years ago I had the blessed opportunity of hearing retired Lieutenant Colonel Scott Mann give a talk entitled Being Generous With Your Scars."
                    />
                    <BlogDetails
                        image="../images/blog3.webp"
                        date="May15, 2024"
                        time="2 min"
                        title="Maximize Your Macros"
                        details="Eat fat, get fat? Eat protein get big muscles? Eat a lot of carbs and you’ll get soft in the middle? As is the case with most myths."
                    />
                    <BlogDetails
                        image="../images/blog4.webp"
                        date="May3, 2024"
                        time="5 min"
                        title="Why the Gym Is Over-Rated"
                        details="The gym is over-rated. Why would someone who quit their job to tirelessly pursue health and wellness by opening a gym say such a thing?"
                    />
                    <BlogDetails
                        image="../images/blog5.webp"
                        date="April 27, 2024"
                        time="2 min"
                        title="Stress and Cortisol"
                        details="Let’s face it: who isn’t stressed these days?Mindfulness and meditation be damned! As much as this practice helps me, I still don’t go a day without wanting to punch something."
                    />
                    <BlogDetails
                        image="../images/blog6.webp"
                        date="April 15, 2024"
                        time="4 min"
                        title="Measure What’s Important: Body Comps Explained"
                        details="Peter Drucker famously once said, “if you can’t measure it you can’t improve it.” "
                    />
                    <BlogDetails
                        image="../images/blog7.webp"
                        date="April 7, 2024"
                        time="3 min"
                        title="Post-Holiday Food Check In"
                        details="Eating the wrong foods is equivalent to putting the wrong fuel in your car"

                    />
                    <BlogDetails
                        image="../images/blog8.webp"
                        date="April 7, 2024"
                        time="2 min"
                        title="Take a Walk"
                        details="Where does the excess go? It’s converted into fat storage.Where does the excess go? It’s converted into fat storage."

                    />
                    <BlogDetails
                        image="../images/blog9.webp"
                        date="April 7, 2024"
                        time="5 min"
                        title="Harness the Power of Water"

                        details="Ask any trainer, fitness blogger, and weight loss coach to name their top 5 tips for weight loss, and you’ll likely find drinking more water near the top.  "

                    />
                    <BlogDetails
                        image="../images/blog10.webp"
                        date="April 7, 2024"
                        time="2 min"
                        title="Yoga for Mental and Physical Health"
                        details="Yoga philosophy teaches us that we have everything we need inside of us to tend to all of life’s moments."
                    />
                </div>

            </div>

            <Footer/>
        </div>
    )
}

export default Blogs
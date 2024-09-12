import React from 'react'
import Navbar from './Navbar'
import Pricing from '../Pages/Pricing'
import "../Css/Plans.css"
import PlanDetails from '../Pages/PlanDetails'
import Footer from "./Footer"

const Plans = () => {
  return (
    <div>
      <Navbar />
      <Pricing />
      <div className='plans'>
        <div className='plan'>
          <h1>
            Choose Your Pricing Plan
          </h1>

        </div>
        <div className='container'>
          <div className='row'>
            <div className='value'>
              Best Value
            </div>
          <PlanDetails 
           
            header="Unlimited Member"
            price="3500"
            month="Every Month"
            detail="Unlimited Plan w/all perks
             *No Contract"
             list1="Unlimited classes"
             list2="Locker & Shower"
             list3="Macros Diet Plan w/ Dietitian"
             list4="Fitness assessment"
          />
          
          <PlanDetails 
            header="Gold Membership"
            price="2000"
            month="Every Month"
            detail="8 classes a month + Perks
             *NO CONTRACT"
             list1="15 classes a month"
             list2="Lockers & Shower"
             
          />
          <PlanDetails 
          header="Single Pass Class"
          price="500"
          month="5 Classes "
          detail="Drop in for a class and try out something new"
           list1="3 classes session"
           list2="Locker & Shower"
           list3=""
           list4="" 
        />
          </div>
          <div className='row'>
          <PlanDetails 
          header="Yoga and Barre Plan"
          price="1500"
          month="Every Week "
          detail="Mix and Match 2 of any yoga and barre classes a week."
           list1="2 yoga or barre classes a week"
           list2="showers, towels, props, and mats provided" 
        />
          <PlanDetails 
          header="Child Watch 10 Pack"
          price="900"
          month=" 10 sessions "
          detail="10 child watch sessions in one single month"
           list1="10 sessions (per use NOT per kid)*Doesn't Expire"
           list2="" 
        />
          <PlanDetails 
          header="Child Watch 30 Pack"
          price="1800"
          month="30 Session "
          detail="30 Childwatch Sessions *Doesn't Expire"
           list1="30 child watch sessions (1 use per class NOT per kid)"
           list2="" 
        />
          </div>
          
          
        </div>

      </div>
      <Footer/>
    </div>
  )
}

export default Plans
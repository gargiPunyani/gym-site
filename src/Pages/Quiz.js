import React from 'react'
import Navbar from '../Components/Navbar'
import "../Css/Quiz.css"
import Footer from "../Components/Footer"

const Quiz = () => {
  return (
    <div>
      <Navbar />
      <div className='container'>
        <div className='Quizz'>
          <div className='col-md-3 quizImage'>
            <img className='quizImage' src='../images/quizz.png' />
          </div>

          <div className='col-md-8 quizForms'>
            <div className='quiz'>
              <form>
                <div className='quizForm'>
                  <div>
                    <div>
                      Name*
                    </div>
                    <input
                      type='String'
                      placeholder='Enter Your Name'
                    />
                  </div>

                  <div>
                    <div>
                      Email*
                    </div>
                    <input
                      type='String'
                      placeholder='Enter Your Email'
                    />
                  </div>
                </div>
              </form>
            </div>

            <div className='quiz'>
              <form>
                <div className='quizForm'>
                  <div>
                    <div >
                      Date of Birth*
                    </div>
                    <input
                      type='date'
                      placeholder='Enter Your DOB'
                    />
                  </div>
                </div>
                <div>
                  <div>
                    What describes your goal? *
                  </div>
                  <input
                    type='String'
                    placeholder='Enter Your Goal'
                  />
                </div>
              </form>
            </div>

            <div className='quizCheckox'>
              <label htmlFor=''>
                What diets have you tried in the past? *
              </label >
              <br />
              <input
                type='checkbox'
              /> Ketogenic "Keto"
              <br />
              <input
                type='checkbox'
              /> Whole 30
              <br />
              <input
                type='checkbox'
              /> Vegan
              <br />
              <input
                type='checkbox'
              /> Macro Tracking
              <br />
              <input
                type='checkbox'
              /> None of the above
            </div>
          </div>
          
        </div>
        <div className='knowMore'>
            <div>
              <label htmlFor=''>
                Enter any other info here that might be helpful to know prior to our meeting.
              </label>
            </div>
            <div >
              <input
                type='string'
                placeholder='Add answer here'
              />
            </div>
            <button className='booknow'>
              Submit
            </button>
          </div>
      </div>
      <Footer />
    </div>
  )
}

export default Quiz
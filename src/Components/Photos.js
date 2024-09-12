import React from 'react'
import Navbar from './Navbar'
import "../Css/Photos.css"
import Footer from './Footer'

const Photos = () => {
    return (
        <div>
            <Navbar />
            <div>
                <div>
                    <div className='photos'>
                        <h3>
                            See Our Place
                        </h3>
                        <p>

                            MYFITNESS SUITES is one of its kind.  After noticing how many fitness lovers <br/> had multiple memberships to fit their needs, we decided to build something <br/> that has it all.  It's like Orange Theory, Crossfit, Barre, and your favorite Hot<br/> Yoga combined under one roof.  See pictures of the space below
                        </p>
                    </div>

                </div>
                <div className='pictures'>
                    <div>
                        <img className='image1' src='../images/photos1.webp'/>
                    </div>
                    <div className='container'>
                    <div className='images'>
                        <img className=' image2' src='../images/photo2.webp'/>
                        <img className=' image3' src='../images/photo3.webp'/>
                    </div>
                    <div className='images'>
                        <img className=' image4' src='../images/photo4.webp'/>
                        <img className=' image5' src='../images/photo5.webp'/>
                    </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Photos
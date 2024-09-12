import React from 'react'
import Navbar from './Navbar'
import GroupDetails from '../Pages/GroupDetails'
import "../Css/Groups.css"
import Suggestion from '../Pages/Suggestion'
import { FaMagnifyingGlass } from 'react-icons/fa6'
import "../Css/suggestion.css"
const Groups = () => {
    return (
        <div>
            <Navbar />
            <div className='feed'>
                <h5>
                    Group Feed
                </h5>
            </div>
            <div className='container'>
                <div className='row'>
                    <div className="col-md-8 ">
                        <div className='group'>
                            <GroupDetails
                                img="../images/trainer1.webp"
                                user="Meg Judge"
                                image="../images/group1.webp"
                                detail="Don’t be scared off by the name - it’s not too spicy!"
                            />
                        </div>
                        <div className='group'>
                            <GroupDetails
                                img="../images/trainer1.webp"
                                user="Tyler Menke"
                                image="../images/group2.webp"
                                detail="Veggies in the raw form are so nutrient dense."
                            />
                        </div>
                        <div className='group'>
                            <GroupDetails
                                img="../images/trainer1.webp"
                                user="Meg Judge"
                                image="../images/group4.webp"
                                detail="Turned this recipe into a salad and it was delicious."
                            />
                        </div>
                        <div className='group'>
                            <GroupDetails
                                img="../images/trainer2.webp"
                                user="Meg Judge"
                                image="../images/group3.webp"
                                detail="Omitted the mozzarella and balsamic glaze from the recipe to stay “approved”."
                            />
                        </div>
                    </div>


                    <div className='col-md-3 suggestions'>
                        <div className='search'>
                            <FaMagnifyingGlass className='search-icon' />
                            <input
                                type="serach"
                                placeholder="Search"
                            />
                        </div>
                        <div className='suggested' >

                            <h3>
                                Suggested Groups
                            </h3>
                        </div>
                        <div className='suggest'>
                            <div>
                                <Suggestion
                                    imgg="../images/suggestion1.webp"
                                    details="Summer Cut 3.0"
                                />
                            </div>
                            <div>
                                <Suggestion
                                    imgg="../images/suggestiom7.webp"
                                    details="Alec's Challenge Group"
                                />
                            </div>
                            <div>
                                <Suggestion
                                    imgg="../images/suggestion3.webp"
                                    details="Lori's Challenge Group"
                                />
                            </div>
                            <div>
                                <Suggestion
                                    imgg="../images/suggestion4.webp"
                                    details="Tyler's Challenge Group"
                                />
                            </div>
                            <div>
                                <Suggestion
                                    imgg="../images/suggestion5.webp"
                                    details="Katie's Challenge Group"
                                />
                            </div>
                            <div>
                                <Suggestion
                                    imgg="../images/suggestio6.webp"
                                    details="Jacqui's Challenge Group"
                                />
                            </div>
                            <div>
                                <Suggestion
                                    imgg="../images/suggestion2.webp"
                                    details="Spring Cut Crew"
                                />
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Groups
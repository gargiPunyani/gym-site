import React from 'react'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'
import "../Css/Signup.css"
import { useFormik } from 'formik'
import { LoginSchema } from './SignupSchema'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../Fire'

const initialValues={
    name:"",
    phone:"",
    email:"",
    password:""
}

const Signup = () => {
    const {values, errors, handleBlur, handleChange,handleSubmit, touched}=useFormik({
        initialValues:initialValues,
        validationSchema:LoginSchema,
        onSubmit:(values,action)=>{
            console.log(values)
            const {name,phone, email,password}=values
            createUserWithEmailAndPassword(auth, name,phone,password)
            action.resetForm()
            alert("Account Created")
        }
        
    })
    console.log(errors)
    
    return (
        <div>
            <Navbar />
            <div className='container Signup-box'>
                <div className='row Signup'>
                    <div className='col-md-5 signup-start'>
                        <h1>Create Your Account</h1>
                        <p className='signup-details'>
                            Please Enter Your Details...
                        </p>
                        <div className='SignupForm'>
                            <div>
                                <form onSubmit={handleSubmit}>
                                    <div className='input-label'>
                                        <label htmlFor='name' className='input-labels'>
                                            Name
                                        </label>
                                        <br />
                                        <input
                                            type='text'
                                            name='name'
                                            value={values.name}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            placeholder='Enter your Name'
                                        /><br/>
                                         {errors.name &&touched.name? (
                                         <span className='form-error'>{errors.name} </span>):null}
                                    </div><div className='input-label'>
                                        <label htmlFor='name' className='input-labels'>
                                            Phone
                                        </label>
                                        <br />
                                        <input
                                            type='number'
                                            name='phone'
                                            value={values.phone}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            placeholder='Enter your Phone'
                                        /><br/>
                                         {errors.phone &&touched.phone? (
                                         <span className='form-error'>{errors.phone} </span>):null}
                                    </div>
                                    <div className='input-label'>
                                        <label htmlFor='name' className='input-labels'>
                                            Email-id
                                        </label>
                                        <br />
                                        <input
                                            type='email'
                                            name='email'
                                            value={values.email}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            placeholder='Enter your Email-id'
                                        /><br/>
                                         {errors.email &&touched.email? (
                                         <span className='form-error'>{errors.email} </span>):null}
                                    </div>
                                    <div className='input-label'>
                                        <label htmlFor='name' className='input-labels'>
                                            Password
                                        </label>
                                        <br />
                                        <input
                                            type='password'
                                            name='password'
                                            value={values.password}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            placeholder='Enter Your Password '
                                        /><br/>
                                         {errors.password &&touched.password? (
                                         <span className='form-error'>{errors.password} </span>):null}
                                    </div>
                                    <div>
                                        <div className='input-labelled'>

                                            <input
                                                type='checkbox'
                                                name='remember'
                                            />
                                            <label htmlFor='name' className='input-labels'>
                                                Remember me
                                            </label>
                                            
                                        </div>
                                        <button className='submit-button' type='submit'>Signup</button><br />
                                        <p className='account'>
                                            Already have Account?
                                            <Link className="link" to="/login"> Login</Link>
                                        </p>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>

                    <div className='col-md-5 signupImage'>
                        <img src='../images/signup.jpg' alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signup
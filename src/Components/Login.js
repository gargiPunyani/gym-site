import React from 'react'
import Navbar from "./Navbar"
import { Link } from 'react-router-dom'
import "../Css/Login.css"
import { LoginSchema } from './LoginSchema'
import { useFormik } from 'formik'
import { signInWithEmailAndPassword } from 'firebase/auth'
import {auth} from "../Fire"

const initialValues={
    email:"",
    password:"",
}
const Login = () => {
    const { values, errors, handleBlur,handleChange,touched, handleSubmit}= useFormik({
        initialValues:initialValues,
        validationSchema: LoginSchema,
        onSubmit:(values,action)=>{
            console.log(values)
            const {email, password}= values
            signInWithEmailAndPassword(auth, email, password)
            action.resetForm()
            alert("Logged in Successfully")
        }
        
    })
    console.log(errors)
    return (
        <div>
            <Navbar />
            <div className=' container Login-box'>
                <div className='row Login'>
                    <div className='col-md-5 loginStart'>
                        <h1>Welcome Back !!</h1>
                        <p className="Login-details">
                            Please Enter Your Details...
                        </p>
                        <div className='loginForm'>
                            <div>
                                <form onSubmit={handleSubmit}>
                                    <div className='input-label'>
                                        <label htmlFor='name' className='input-labels'>
                                            Email-id
                                        </label>
                                        <br />
                                        <input
                                            type='email'
                                            name='email'
                                            placeholder='Enter your Email-id'
                                            value={values.email}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
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
                                            placeholder='Enter Your Password '
                                            value={values.password}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            maxLength={12}
                                        />
                                        <br/>
                                         {errors.password && touched.password? (
                                     <span className='form-error'>{errors.password} </span>):null}
                                    </div>
                                    <div>
                                        <div className='input-labels'>

                                            <input
                                                type='checkbox'
                                                name='remember'
                                            />
                                            <label htmlFor='name' className='input-labelled'>
                                                Remember me
                                            </label>
                                        </div>
                                        <button className='submit-button' type='submit'>Login</button><br />
                                        <p className='account'>
                                            New to Site?
                                            <Link className="link" to="/Signup"> Create Account</Link>
                                        </p>
                                        </div>
                                </form>

                            </div>
                        </div>
                    </div>
                    <div className='col-md-5 loginImage'>
                        <img src='../images/logi.jpg' />
                    </div>
                </div>
            </div>
        </div>


    )
}

export default Login
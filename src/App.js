import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from "./Components/Home"
import Consult from './Pages/Consult'
import Quiz from './Pages/Quiz'
import Schedule from './Components/Schedule'
import Plans from './Components/Plans'
import Instructors from './Components/Instructors'
import Classes from './Components/Classes'
import BootCamp from './Pages/BootCamp'
import Yoga from './Pages/Yoga'
import Strength from './Pages/Strength'
import Events from './Components/Events'
import { Program } from './Pages/Program'
import Photos from './Components/Photos'
import Blogs from './Components/Blogs'
import Groups from './Components/Groups'
import Login from './Components/Login'
import Signup from './Components/Signup'


const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/consult' element={<Consult/>}/>
        <Route path='/quiz' element={<Quiz/>}/>
        <Route path='/schedule' element={<Schedule/>}/>
        <Route path='/plans' element={<Plans/>}/>
        <Route path='/instructors' element={<Instructors/>}/>
        <Route path='/classes' element={<Classes/>}/>
        <Route path='/bootcamp' element={<BootCamp/>}/>
        <Route path='/yoga' element={<Yoga/>}/>
        <Route path='/strength' element={<Strength/>}/>
        <Route path='/event' element={<Events/>}/>
        <Route path='/program' element={<Program/>}/>
        <Route path='/photos' element={<Photos/>}/>
        <Route path='/blogs' element={<Blogs/>}/>
        <Route path='/group' element={<Groups/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/> 
        
      </Routes>
      </BrowserRouter>

    </div>
  )
}

export default App
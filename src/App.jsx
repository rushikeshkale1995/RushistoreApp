
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home/Home'
import Courses from './Courses/Courses'
import Signup from './component/Signup'
import Contact from './component/Contact'


function App() {
  return (
    <div  className="dark:bg-slate-900 text-white">
  
      <Routes > 
          <Route path='/' element={<Home />} ></Route>
          <Route path='/course' element={ <Courses />} ></Route>
          <Route path='/signup' element={<Signup  />} ></Route>
          <Route path='/contact' element={<Contact  />} ></Route>
          
      </Routes>
    </div>
    
  )
}

export default App
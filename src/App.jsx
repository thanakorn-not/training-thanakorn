import React from 'react'
import Home from './pages/Home'
import Course from './pages/Course'
import Contact from './pages/Contact'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NotFound from './pages/NotFound'

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/course' element={<Course/>} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='*' element={<NotFound/>} />
        </Routes>
      </Router>
    </>
  )
}

export default App
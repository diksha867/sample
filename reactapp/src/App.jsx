import React, { useState } from 'react'
import './App.css'
import TopBar from './component/TopBar'
import Article from './component/Article'
import HomePage from './component/HomePage'
import Contact from './component/contact' 
import { Routes, Route } from 'react-router-dom'
import Profile from './component/profile'

function App() {

  const [title, setTitle]=useState("Sample Title")
 

  return (
    <>
      <Routes>
        <Route path="/" element={<><HomePage /><TopBar /></>} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/article" element={<Article  title={title}  />} />
        <Route path="/profile/:username" element={<Profile />} />
      </Routes>
    </>
  )
}

export default App

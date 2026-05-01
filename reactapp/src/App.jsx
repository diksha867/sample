import React, { useState } from 'react'
import './App.css'
import TopBar from './component/TopBar'
import Article from './component/Article'
import HomePage from './component/HomePage'
import Contact from './component/contact'
import { Route, Routes } from 'react-router-dom'
import Profile from './component/profile'
import { UserContext } from './UserContext'

function App() {

  const [title, setTitle]=useState("Sample Title")
  const name="Alex"
 

  return (
    <>
      <UserContext.Provider value={name}>
        <Routes>
          <Route path="/" element={<><HomePage/></>} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/article" element={<Article  title={title}  />} >

          </Route>
          <Route path='/profile/:username' element={<Profile />} />
        </Routes>
      </UserContext.Provider>

    </>
  )
}

export default App
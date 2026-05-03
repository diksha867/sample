import React from 'react'
import { Link, NavLink } from 'react-router-dom'



function TopBar() {
  return (
    <div>
      <h1>Logo</h1>
      <ul>
        <Link to="/"><li>HomePage</li></Link>
        <NavLink style={({isActive})=>({color:isActive?"red":"blue"})} to="/"><li>HomePage</li></NavLink>
        <NavLink style={({isActive})=>({color:isActive?"red":"blue"})} to="/article"><li>Article</li></NavLink>
        <Link to="/article"><li>Article</li></Link>
        <Link to="/contact"><li>Contact</li></Link>
      </ul>
    </div>
  )
}


export default TopBar
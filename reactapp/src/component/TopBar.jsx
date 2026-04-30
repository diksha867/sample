import React from 'react'
import { Link ,Navlink} from 'react-router-dom'

function TopBar() {
  return (
    <div>
      <h1>Logo</h1>
      <ul>
        <link to="/"><li>HomePage</li></link>
        <Navlink style={({isActive})=>({color:isActive?"red":"black"})} to="/"><li>HomePage</li></Navlink>
        <Navlink style={({isActive})=>({color:isActive?"red":"black"})} to="/article"><li>Article</li></Navlink>
        <link to="/contact"><li>Contact</li></link>
        <link to="/Article"><li>Article</li></link>
      </ul>
    </div>
  )
}

export default TopBar


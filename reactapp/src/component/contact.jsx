import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'

function Contact() {
    const [name,setName]=useState('')
    const [email,setEmail]=useState('')
    const [message,setMessage]=useState('')

    const navigate=useNavigate()

    const handleSubmit=(data)=>{
        event.preventDefault()
        if(!email.endsWith("krmu.edu.in")){
             alert("Invalid email")
             return
        }
        console.log(data)
        console.log(name,email,message)
        navigate("/")
    }
  return (
    <div>
      <form onSubmit={()=>handleSubmit("Sample string")}>
        <input type="text" placeholder='Enter your name' value={name} onChange={(event)=>setName(event.target.value)}/>
        <input type="email" placeholder='Enter your email' value={email}  onChange={(e)=>setEmail(e.target.value)}/>
        <textarea placeholder='Enter your message' value={message}  onChange={(e)=>setMessage(e.target.value)}/>
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default Contact
import React, {useState} from 'react'

function Contact() {
    const [name,setName]=useState('')
    const [email,setEmail]=useState('')
    const [message,setMessage]=useState('')

    const handleSubmit=(event)=>{
        event.preventDefault()
        console.log(name,email,message)
    }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder='Enter your name' value={name} onChange={(e)=>setName(e.target.value)}/>
        <input type="email" placeholder='Enter your email' value={email}  onChange={(e)=>setEmail(e.target.value)}/>
        <textarea placeholder='Enter your message' value={message}  onChange={(e)=>setMessage(e.target.value)}/>
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default Contact
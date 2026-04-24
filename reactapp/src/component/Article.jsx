import React, {use, useEffect, useState} from 'react'
import style from "../css/Article.module.css"
import style1 from "../css/HomePage.module.css"
// import styled from "styled-components"
import styled from "@emotion/styled"
import { css } from '@emotion/react'
import Axios from "axios";
function Article(props) {
  const [count, setCount]=useState(0)
  const [name, setName]=useState("Alex")
  const [loading, setloading]=useState(false)
  const inputRef=useRef(null)
  useEffect(()=>{
    console.log("component mount")
  },[name])
  
  useEffect(()=>{
    //const fetchData=async()=>{
    //try{
    //   const response=await Axios.get("https://jsonplaceholder.typicode.com/posts")
    //   method: "GET"
    // })
    // const data=await response.json()
    // console.log(data)
    // }
    //}

    const fetchData=async()=>{
    try{
      setloading(true)
      const response=await Axios.get("https://jsonplaceholder.typicode.com/posts")
      console.log(response.data)
      setloading(false)
    }catch(error){
      console.log(error)
    }
  }
    fetchData()
    },[])

  const handleIncrement=()=>{
    setCount(count+1)
  }
  return (
    <div>
      <h1>Article</h1>
       <h3>{props.title}</h3> 
       <h2>{name}</h2>
      <button onclick= {()=>setName("John")}>Change Name</button>
      {loading ? <h2>Loading...</h2> : " "}
      <div>
        <input type="text" placeholder='Enter your text'ref={inputRef}  />
        <button onClick={()=>{
          console.log(inputRef.current.value)
          inputRef.current.focus()
        }}>Submit</button>
      </div>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
      <h2>{count}</h2>
      <button className={style.btn} onClick={handleIncrement}>Increment</button>
      <button css={{backgroundColor:"green", color:"white"}}> First</button>
      <Button>Submit</Button>
      <Button yellow >Click Me!</Button>
      <button className="bg-blue-600 text-white px-4 py-2 rounded">Blue Button</button>
    </div>
  )
}

export default Article

const Button=styled.button`
background-color: ${props=>props.yellow ? "yellow" : "red"};  
color: white;
width: 100px;
height: 30px;
`

// import React from 'react'
// import { add as addition } from '../utility'


// class Article extends React.Component {
//     constructor(props) {
//       super(props)
//       this.state={
//         count:0,
//         name:"Alex"
//       }
//     //   console.log(addition(2,3))
//     }

//     componentDidMount(){
//         console.log("componentDidMount")
//     }

//     shouldComponentUpdate(nextProps, nextState){
//       if(nextState.count===1)return false
//         console.log("shouldComponentUpdate")
//         return true
//     }


//     componentDidUpdate(){
//         console.log("componentDidUpdate")
//     }

//     componentWillUnmount(){
//         console.log("componentWillUnmount")
//     }

//     handleClick=()=>{
//         // this.state.count=this.state.count+1
//         // console.log(this.state.count)
//         this.setState({count: this.state.count+1})
//     }

//     handleDecrement=()=>{
//         this.setState({count: this.state.count-1})
//     }
//   render() {
//     return (
//       <div>
//         <h1>Article</h1>
//         <h3>{this.state.count}</h3>
//         <button onClick={this.handleClick}>Increment</button>
//         <button onClick={this.handleDecrement}>Decrement</button>
//         <h3>{this.props.title}</h3> 
//         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi eligendi fugiat pariatur eos quibusdam ratione possimus adipisci, impedit, autem ad quo, et cum laudantium deleniti. Soluta molestias amet quas labore.</p>
//       </div>
//     )
//   }
// }


// export default  Article



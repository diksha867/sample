// let obj={
//     name:"Devendra",
//     age:"13",
//     address:"GGN"
// }


// console.log(obj.name)

// obj.age=24

// console.log(obj)

// const para=document.getElementsByClassName("para")
// para[0].textContent="This is updated para"
// para[1].style.color="red"
// console.info(para)


// let obj={
//     name:"yash",
//     section:"FSDB",
//     phone:8675754645
// }

// let obj2={
//     name:"alex",
//     section:"FSDB",
//     phone:8675754645
// }

// obj.name="Aditya"
// console.log(obj)

// console.log(document)

// const para=document.getElementById("para")
// para.textContent="This is updated one"
// para.style.color="green"
// console.log(para)

// const para2=document.getElementsByClassName("para") //return HTMLCollection
// para[0].textContent="This is updated one"
// para[1].style.color="green"
// console.log(para2)

// const para=document.querySelector(".para")
// para.innerText="This is updated one"
// para.style.color="green"
// console.log(para)

// const para=document.querySelectorAll(".para") //return NodeList 
// para[0].textContent="This is updated one"
// para[1].style.color="green"
// console.log(para)

// let arr=[234,345,456,2342,346]

// const newArrr=arr.map(function(ele){
//     return ele*2
// })
// console.log(newArrr)
// arr.forEach(function(ele){
//     console.log(ele)

// })

// const container=document.querySelector(".container")
// container.innerHTML="<h1>This is a heading</h1>"
// console.log(container)

// const button=document.querySelector("button")
// button.classList.add("btn")
// button.classList.add("btn2")
// // button.classList.remove("btn2")


// function show(event){
//     console.log(event)
//     alert("You have clicked the button")
// }

// button.addEventListener('click',show)
// button.removeEventListener('click',show)

// const btn=document.querySelector("#btn")
// const stop=document.querySelector("#stop")


// btn.addEventListener('keydown',(event)=>{
//     console.log(event.key)
// })
// btn.addEventListener('keyup',(event)=>{
//     console.log(event.key)
// })
// stop.addEventListener('click',function(){
//     btn.removeEventListener('click',show)
// })

// const form=document.querySelector("form")
// form.addEventListener('submit',(event)=>{
//     event.preventDefault()
//     console.log(event.target[0].value)
//     console.log(event.target[1].value)
//     console.log(event)
//     console.log("button Clicked")
// })

// console.log("Updated code")

// debugger
// console.log(a)
// console.log(b)

// debugger
// var a=3453
// let b=456;  //script scope for let and const

// console.log(a)
// console.log(b)

// function print(){
//     let c=40
//     console.log("Inside fn")
// }

// // console.log(c)
// print()



// function first(){
//     second()
// }
// function second(){
//     third()
// }
// function third(){
//     console.trace()
// }
// first()

// function infinite(){
//     infinite()
// }

// infinite()

// console.log(a)//TDZ
// console.log(b)  


// let a=34;
// var b=78

// let total=345;

// function calculate(){
//     console.log(total)
//     var total=565
//     console.log(total)
// }

// calculate()


// console.log("This is the beginning of the code")
// const timeout=setTimeout(()=>{console.log("After 2 sec")},2000)
// clearTimeout(timeout)
// console.log("This is the end of the code")

// const interval=setInterval(()=>{console.log("Printing at every two seconds")},2000)

// setTimeout(()=>{clearInterval(interval)},10000)

// const interval2=setInterval(()=>{console.log("Printing at every two seconds")},2000)
// console.log(interval2)



// let count=0;

// const interval=setInterval(()=>{
//     count+=1
//     console.log(count)
//     if(count===10){
//         clearInterval(interval)
//     }
// },1000)

// console.log("First line")
// setTimeout(()=>console.log("inside timeout"),0)

// console.log("last line")


// const studentName=document.querySelector('#name')
// const button=document.querySelector('.btn')
// const list=document.querySelector('.list')


// button.addEventListener('click',()=>{

//     //creating the element
//    const li= document.createElement('li')
//    const deleteButton= document.createElement('button')
//     //providing the text
//     li.innerText=studentName.value
//     deleteButton.innerText="Delete"

//     deleteButton.addEventListener('click',()=>{
//         // li.remove()
//         list.removeChild(li)
//     })

//     li.appendChild(deleteButton)
//     list.appendChild(li)
//     studentName.value=""
// })

// function print(name){ //callback fn
//     console.log("inside print",name)
// }

// function greet(print){ //higher order fn
//     setTimeout(()=>{
//         console.log("Hello students")
//         let name="Yash"
//         print(name)
//     },2000)
    
// }

// greet(print)

// const p= new Promise((res,rej)=>{
//    console.log("Going to do the homework!!")

//    setTimeout(()=>{
//     const done=true;
//     if(done){
//         res("Success")
//     }else{
//         rej("Failed to fetch Data from the server")
//     }
//    },3000)
// })

// p.then((a)=>{
//     console.log(a)
// }).catch((err)=>{
//     console.log(err)
// }).finally(()=>{
//     console.log("Finally block")
// })

// function doHomework(){
//     const p=new Promise((res,rej)=>{
//         setTimeout(()=>{
//             let done=true;
//             if(done){
//                 console.log("Homework Complete")
//                 res("Homework Done!!")
//             }
//             else{
//                 rej("Homework not done")
//             }
//         },2000)
//     })
//     return p;
// }
// function eatDinner(){
//     const p=new Promise((res,rej)=>{
//         setTimeout(()=>{
//             let done=false;
//             if(done){
//                 console.log("Dinner Complete")
//                 res("Dinner Done!!")
//             }
//             else{
//                 rej("Dinner not done")
//             }
//         },2000)
//     })
//     return p;
// }
// function goToPlayground(){
//     const p=new Promise((res,rej)=>{
//         setTimeout(()=>{
//             let done=true;
//             if(done){
//                 console.log("Went to pg")
//                 res("PG time")
//             }
//             else{
//                 rej("Not Allowed")
//             }
//         },2000)
//     })
//     return p
// }

// doHomework().then((data)=>{
//     console.log(data)
//      return eatDinner()
// }).then((data)=>{
//     console.log(data)
//     return goToPlayground()
// }).then((data)=>{
//     console.log(data)
// })
// .catch((err)=>{
//     console.log(err)
// }).finally(()=>{
//     console.log("Go to Sleep")
// })

// console.log("First Line")
// setTimeout(()=>{
//    console.log("Inside Timeout") 
// },0)
// const p=new Promise((res,rej)=>{
//     res()
// })
// p.then(()=>{
//     console.log("Inside Promise")
// })
// const p2=new Promise((res,rej)=>{
//     res()
// })
// p2.then(()=>{
//     console.log("Inside Promise")
// })
// const p3=new Promise((res,rej)=>{
//     res()
// })
// p3.then(()=>{
//     console.log("Inside Promise")
// })
// const p4=new Promise((res,rej)=>{
//     setTimeout(()=>{
//         res()
//     },0)
// })
// p4.then(()=>{
//     console.log("Inside Promise")
// })
// console.log("Last Line")

// function orderFood(){
//     return new Promise((res,rej)=>{
//         setTimeout(()=>{
//             console.log("Fooed ordered")
//             res()
//         },2000)
//     })
// }

// function prepareFood(){
//     return new Promise((res,rej)=>{
//         setTimeout(()=>{
//             console.log("Food prepared")
//             res()
//             // rej("Order Cancelled")
//         },2000)
//     })}

// function deliverFood(){
//     return new Promise((res,rej)=>{
//         setTimeout(()=>{
//             console.log("Food delivered")
//             res()
//         },2000)
//     })
// }

// orderFood().then(()=>{
//     return prepareFood()
// }).then(()=>{
//     return deliverFood()
// }).then(()=>{
//     console.log("Enjoy your food")
// }).catch((err)=>{
//     console.log(err)
// })

// async function foodOrder(){
//     await orderFood()
//     await prepareFood()
//     await deliverFood()
//     console.log("Enjoy your food")
// }
// foodOrder()

// const form=document.querySelector(".form")
// const eventcard=document.querySelector(".listEvents")

// form.addEventListener('submit',(event)=>{
//     event.preventDefault()
//     const title=eventTitle.value
//     const date=eventDate.value
//     const category=eventCategory.value
//     const description=eventDescription.value
//     console.log(title,date,category,description)
//     const card=document.createElement("div")
//     card.innerHTML=`
//     <div class="card">
//         <h2>${title}</h2>
//         <p>${date}</p>
//         <button>${category}</button>
//         <p>${description}</p>
//         <button class="delete">❌</button>
//     </div>
//     `
//     card.querySelector(".delete").addEventListener('click',()=>{
//         card.remove()
//    

// console.log("ITs the first line")
// try{
//     let age=17;
//     if(age<18){
//         throw new Error("You are not allowed")
//     }
//     let sample;
//     for(let i=0;i<10;i++){
//         sample=i
//     }
//     // console.log(sample)
// }
// catch(e){
//     console.log(e)
//     // throw new Error("Something went wrong")
// }finally{
//     console.log("finally block")
   
// }
// console.log("Its the last line")


// async function getData(){
//     try{
//         const response=await fetch("https://dummyjson.com/products/add",{
//             method:"POST",
//             headers:{
//                 "Content-Type":"application/json"
//             },
//             body:JSON.stringify({
//                 title: 'BMW Pencil',
//                 description: 'It is a pencil made by BMW',
//                 price: 99,
//                 discountPercentage: 5.9,
//                 rating: 4.9,
//                 stock: 100,
//                 brand: 'BMW',
//                 category: 'pencil'
//             })
//         })

//         console.log(response)
//         if(!response.ok){
//             throw new Error("Something went wrong")
//         }
//     const data=await response.json()
//     console.log(data)
//     // data.products.forEach((product)=>{
//     //     console.log(product.title)
//     // })
//     }
//     catch(e){
//         console.log(e)
        
//     }
// }
// getData()

// let obj={
//     title:"macbook",
//     price:453345
// }

// localStorage.setItem("obj",JSON.stringify(obj))

// localStorage.setItem("name","Yash")
// localStorage.setItem("age",24)

// console.log(localStorage.getItem("name"))
// console.log(localStorage.getItem("age"))

// console.log(JSON.parse(localStorage.getItem("obj")))

// localStorage.removeItem("age")
// localStorage.clear() ///clear everything

// sessionStorage.setItem("name","Yash")
// sessionStorage.setItem("age",24)

// console.log(sessionStorage.getItem("name"))
// console.log(sessionStorage.getItem("age"))

// sessionStorage.removeItem("age")


// document.cookie="name=yash; expires=Fri, 20 Feb 2026 23:59:59 UTC;"
// document.cookie="age=45; expires=Fri, 20 Feb 2026 23:59:59 UTC;"

// async function sample(){
//     await fetch("http://127.0.0.1:5504/javascript/index.html")
// }
// sample()

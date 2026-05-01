import React from 'react'
import TopBar from './TopBar';

function HomePage() {
  const loggedin=true;
//   if(loggedin){
//     return (
//         <button>Logout</button>
//     )
//   }else{
//     return (
//         <button>Login</button>
//     )
//   }
    return (
        <>
        <TopBar />
        {loggedin?<button>Logout</button>:<button>Login</button>}
        </>
    )
}

export default HomePage
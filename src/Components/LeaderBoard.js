import React, { useEffect, useState } from 'react';
import axios from 'axios';

const LeaderBoard = () => {
  const[user,setUser]=useState([]);
  useEffect(()=>{
    async function getuser() {
     
     const p= await axios.get(" https://userdatabase-gnofo3136-rank-boards-projects.vercel.app/user/sort");
     console.log(p.data);
     setUser(p.data);
     
     
    }
   getuser();
   
   
   },[])
  return (
    

<div class="w-full h-auto flex  justify-center">
<div class=" flex flex-col items-center border border-gray-100 space-y-3  w-2/3 h-auto justify-between p-2">

<h1 class="text-5xl font-mono">Points History <i class="ri-hourglass-fill"></i>  </h1>
{
user?.map((val,key)=>{
  return(
    <div class="flex space-x-10  text-amber-600 outline  outline-pink-500 p-3 rounded-md">
  <p>{key+1}</p>
  <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" alt="" class="w-14 h-14 rounded-full"/>
  <div class="w-48">
  <div>
  <p class="font-semibold text-xl italic"> {val.name}</p>
  <p>{val.email}</p>
  </div>
  <div>
    {val.His_points.map((val)=>{return(
      <span class="font-semibold  italic"> {"+"+val + ","}</span>
    )})}
  
 
  </div>
  
  </div>
  <div class="relative h-16 w-16  ">
 <p class="absolute top-0 right-0 font-extrabold "> {val.total_point} </p>
 </div>


  </div>
  )
})

  }


  
  



  </div>
  </div>
  
  )
}

export default LeaderBoard;
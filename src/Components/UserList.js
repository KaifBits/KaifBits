import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';



const UserList = () => {
  const[user,setUser]=useState(null);
  const[point,setPoint]=useState(0);
  const[msg,setMsg]=useState("");

  async function handle(e){
   
    const name=e.target.id;

    const p=await axios.put(` https://userdatabase-gnofo3136-rank-boards-projects.vercel.app/point/${name}`)
    setMsg(p.data);

  setPoint(point=>point+1);


  }

useEffect(()=>{
 async function getuser() {
  const p= await axios.get(" https://userdatabase-gnofo3136-rank-boards-projects.vercel.app/user/sort");
  console.log(p.data);
  setUser(p.data);
  
  
 }
getuser();


},[point,setPoint,msg])
    
  return (
    
<div class="w-full h-auto flex  justify-center">
<div class=" flex flex-col items-center border border-gray-100 space-y-3  w-2/3 h-auto justify-between p-2">

<h1 class="text-5xl font-mono">LeaderBoard <i class="ri-bar-chart-grouped-line"></i>  </h1>
<h1 className='text-xl font-semibold text-red-400'>{msg}</h1>
{user? user.map((val,key)=>{
  return(
  <div class="flex space-x-10  text-amber-600 outline  outline-pink-500 p-3 rounded-md"  >
    <div>
  <p>{key+1} </p>
  <div>Rank</div>
  </div>
  <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" alt="" class="w-14 h-14 rounded-full"/>
  <div class="w-48">
  <div>
  <p class="font-semibold text-xl italic"> {val.name}</p>
  <p>{val.email}</p>
  </div>
  
  </div>
  
  <div className="flex items-center justify-between space-x-4">
  <p className="font-extrabold text-sm md:text-xl text-gray-950 ml-4">
    {val.total_point}<i class="ri-star-fill ml-1"></i>
  </p>

  <button
    onClick={(e) => handle(e)}
    id={val.username}
    type="button"
    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm md:text-base px-3 py-1.5 md:px-5 md:py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
  >
    Claim
  </button>
</div>



  </div>
  ) 
}

): <>loading...</>
}


 <Link to="/rank" ><button className='bg-slate-500 text-xl rounded-md'>see Points History</button></Link>
 

  </div>



  </div>
  
  
  )
}

export default UserList;
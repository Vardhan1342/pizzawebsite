"use client"
import React, { useState } from 'react';
import { IoLogoGoogle } from 'react-icons/io5';

const Page = () => {
    const [email ,setEmail]=useState("");
    const [password ,setpassword]=useState("")
    const handleclick=async(e : any)=>{
         e.preventDefault();
        fetch("/api/regiter",{
            method:"POST",
            body:JSON.stringify({email,password}),
            headers:{'Content-Type' :'application/json'}
        });
    }
  return (
    <div className=''>
      <h1 className='text-center text-4xl text-red-600 font-semibold mt-10'> Register</h1>
      <form className='flex flex-col max-w-xs  mx-auto  justify-center items-center space-y-6 mt-10'>
        <input type="email" placeholder='Enter your mail' className='input' value={email} 
        onChange={(e)=>setEmail(e.target.value)} />
        <input type="password" placeholder='password ' className='input' 
        value={password} onChange={(e)=>setpassword(e.target.value)} />
        <button type="submit" className='btn w-full justify-center' onClick={handleclick} >Register</button>
        <p className='text-gray-500'>or</p>
        <button className='flex items-center gap-2 border-2 p-2 rounded-xl w-full justify-center hover:scale-105 transition-all'>
           <div className='text-blue-900'> <IoLogoGoogle size={20}/> </div>
            Log in with Google
            </button>
      </form>
    </div>
  );
}

export default Page;

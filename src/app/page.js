
"use client"
import React, { useEffect } from 'react'
import Navbar from './navbar';

const page = () => {
  
  useEffect(()=>{
    require("bootstrap/dist/js/bootstrap.js")
  })
  return (
    <div > 
    <Navbar/>
    </div>
  )
}

export default page
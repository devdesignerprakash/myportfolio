import { motion } from "framer-motion";
import React from 'react'
import { useNavigate } from "react-router-dom";

const Page = () => {
    const Navigate= useNavigate()
    const handleClick=()=>{
        Navigate('/home')
    }
  return (
    <>
<motion.button
onClick={handleClick}
  initial={{ opacity: 0, scale: 0.8 }}
  animate={{ opacity: 1, scale: 1 }}
  exit={{ opacity: 0, scale: 0.8 }}
  transition={{ duration: 0.5 }}
  className="p-3 bg-blue-500 text-white rounded hover:bg-blue-700"
>
  Go to Home
</motion.button>
<div class="flex items-center justify-center min-h-screen bg-gray-100">
  <button class="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 transition">
    Click Me
  </button>
</div>
</>
  )
}

export default Page
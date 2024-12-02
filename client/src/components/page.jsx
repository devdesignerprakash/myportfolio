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
<div className="flex justify-center items-center h-screen">
  <motion.button
    onClick={handleClick}
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0, scale: 0.8 }}
    transition={{ duration: 0.5 }}
    className="p-3 border border-white text-white font-bold rounded bg-[#fcdb83] hover:bg-transparent hover:border-white transition duration-300"
  >
    Go to Home
  </motion.button>
</div>
</>
  )
}

export default Page
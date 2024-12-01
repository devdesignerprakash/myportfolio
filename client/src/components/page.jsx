import { motion } from "framer-motion";



import React from 'react'

const Page = () => {
  return (
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
  )
}

export default Page
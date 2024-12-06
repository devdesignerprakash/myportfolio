import React from 'react'
import { FaBars, FaTimes } from "react-icons/fa";

const ToggleButton = ({open, setOpen}) => {
  return (
    <button onClick={()=>setOpen((prev)=>!prev)}>
      {open ? <FaTimes size={24} /> : <FaBars size={24} />}
    </button>
  )
}

export default ToggleButton
import { useState } from 'react'

const Sidebar = ({open, setOpen}) => {
    
  return (
    <div className="flex">
        <div className={`${open ? "w-72" : "w-20"} 
        duration-300 h-screen bg-dark-purple relative`}>
            <img src="right-arrow.png"
            className={`absolute cursor-pointer rounded-full
            -right-3 top-9 w-7 border-2 border-dark-purple ${!open && 'rotate-180'}`}
            onClick ={()=> setOpen(!open)}/>
        </div>
        <div className="p-7 text-2xl font-semibold flex-1 h-screen">
            <h1>Home Page</h1>
        </div>
      
    </div>
  )
}

export default Sidebar

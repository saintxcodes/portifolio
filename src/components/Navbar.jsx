import React from 'react'
import { Link } from 'react-router-dom'
import profile from "../assets/stunna.jpg"

const Navbar = () => {
  return (
    <div className='w-full h-[10vh] flex items-center justify-around list-none mt-[20px] sm:w-full'>
      <div className="flex gap-1 items-center justify-center">

        <Link to="/">
          <img className="w-[40px] h-[40px] rounded-[10px] object-cover cursor-pointer" src={profile} alt="photo"/>
          <span className="font-semibold">Felix A.</span>
        </Link>
        
      </div>

      <div className="flex gap-3 sm:gap-1">
        <Link to="/about">
          <li className="font-semibold hover:font-normal hover:cursor-pointer text-[17px] sm:text-[13px]">About Me</li>
        </Link>
        <Link to="/contact">
          <li className="font-semibold hover:font-normal hover:cursor-pointer text-[17px] sm:text-[13px]">Contacts</li>
        </Link>
        <Link to="/work">
          <li className="font-semibold hover:font-normal hover:cursor-pointer text-[17px] sm:text-[13px]">Work</li>
        </Link>
      </div>
      
    </div>
  )
}

export default Navbar

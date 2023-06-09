import React from 'react'
import photo from "../assets/photo.jpg"

const Showcase = () => {
  return (
    <div className='h-[25%] flex items-center justify-center'>
       
      <img className='relative rounded-[4px] w-[75%] h-[80vh] object-cover opacity-60 mt-3 hover:scale-105 hover:duration-300 hover:ease-linear sm:w-full sm:h-[50vh]' src={photo} alt="img" />
      <p className="absolute text-[20px] font-[600] text-blue-950 w-[60%] sm:text-[13px] sm:w-[80%]">I help design responsive User Interfaces for websites, web applications that give companies a fair edge into the digital world. Contact us via our email or website or on our socials on the links availed. Do you want quality work? Book with us for your next projects!</p>
     
      
    </div>
  )
}

export default Showcase
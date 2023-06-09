import React from 'react'
import { Link } from 'react-router-dom'

const Contact = () => {
  return (
    <div className='flex flex-col items-center justify-center h-[100vh] text-[18px]'>
      <div> For ways on how you can contact us, refer to the Home page!</div>
    
      <Link to='/'>
        <button className="p-3 bg-slate-600 rounded-[5px] text-white font-[600] mt-[20px]">Back Home</button>
      </Link>
    </div>
  )
}

export default Contact
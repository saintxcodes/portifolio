import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { Link } from 'react-router-dom';


const Work = () => {
  return (
    <div className='flex flex-col items-center justify-center h-[100vh] text-[18px]'>
      <div> All my work is available on my <GitHubIcon className='cursor-pointer'/>. Clone for use in your personal projects.</div>
      <div> Subscribe to my <YouTubeIcon className='cursor-pointer w-[20px] h-[20px] text-red-600'/> channel for weekly content if you want to learn more about Web Development.</div>

      <Link to='/'>
        <button className="p-3 bg-slate-600 rounded-[5px] text-white font-[600] mt-[20px]">Back Home</button>
      </Link>
    </div>
  )
}

export default Work

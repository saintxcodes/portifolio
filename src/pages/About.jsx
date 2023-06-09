import React from 'react'
import Navbar from '../components/Navbar'
import profile from "../assets/stunna.jpg"
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';

const About = () => {
  return (
    <div>
      <Navbar/>
      <div className="flex w-[75%]">
        <img className='h-[500px] ml-[70px] p-[20px] object-cover rounded-[10px]' src={profile} alt="stunna" />

        <div className="">
          <p className="flex-1 p-[20px] text-[18px]">I am a self-taught frontend Software Developer. I develop projects with MERN Stack. But more so with ReactJS since I decided to focus on the frontend roadmap for a while. From my previous work experiences, I have learnt proper communication between individuals, collaboration with team members, punctuality, flexiblity and adaptability, are essentials or integral parts of a productive work environment. I love to learn and work with new emerging technologies to keep ahead in my career in the Tech industry.</p>
          <div className="flex gap-2 p-[20px]">
              <div className="hover:cursor-pointer">
                  <GitHubIcon/>
              </div> 
              <div className="hover:cursor-pointer">
                  <TwitterIcon/>
              </div> 
              <div className="hover:cursor-pointer">
                  <LinkedInIcon/>
              </div> 
              <div className="hover:cursor-pointer">
                  <InstagramIcon/>
              </div> 
          </div>

        </div>
      </div>
      
    </div>
  )
}

export default About

import React from 'react'
import EmailIcon from '@mui/icons-material/Email';
import CallEndIcon from '@mui/icons-material/CallEnd';
import LanguageIcon from '@mui/icons-material/Language';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {
  return (
    <div className=' flex items-center justify-around h-[15vh] sm:w-full sm:h-[10vh]'>
      <div className="list-none">
        <li className="hover:font-semibold hover:cursor-pointer text-[17px] sm:text-[12px]">Home</li>
        <li className="hover:font-semibold hover:cursor-pointer text-[17px] sm:text-[12px]">Contact</li>
        <li className="hover:font-semibold hover:cursor-pointer text-[17px] sm:text-[12px]">About Me</li>
      </div>
      
      <div className="">
        <div className="">
            <EmailIcon className='sm:hidden'/>
            <span className="text-[17px] sm:text-[12px]"> atuhaire1738@gmail.com</span>
        </div>
        <div className="">
            <CallEndIcon/>
            <span className="text-[17px] sm:text-[12px]"> +234 7777 416 08</span>
        </div>

        <div className="">
            <LanguageIcon/>
            <span className="hover:cursor-pointer hover:underline text-[17px] sm:text-[12px]"> www.felixatuhaire.dev</span>
        </div>

      </div>
      
      <div className="">
        <div className="flex gap-2 sm:gap-[1px]">
            <div className="hover:cursor-pointer w-[35px] h-[35px] sm:w-[18px] sm:h-[18px]">
                <GitHubIcon/>
            </div> 
            <div className="hover:cursor-pointer w-[35px] h-[35px] sm:w-[20px] sm:h-[18px]">
                <TwitterIcon/>
            </div> 
            <div className="hover:cursor-pointer w-[35px] h-[35px] sm:w-[18px] sm:h-[18px]">
                <LinkedInIcon/>
            </div> 
            <div className="hover:cursor-pointer sm:w-[18px] sm:h-[18px]">
                  <InstagramIcon/>
            </div> 
        </div>
      </div>
      
    </div>
  )
}

export default Footer

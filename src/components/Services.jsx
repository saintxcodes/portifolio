import React from 'react'

const Services = () => {
  return (
    <section className='sm:w-full'>
        <p className="text-center p-3 text-[20px] font-semibold mt-[25px] sm:text-[14px] md:text-[16px]">A range of services are offered here:</p>
        <div className="flex items-center justify-center gap-[25px] h-[20vh] mb-3 sm:ml-1 sm:gap-1">
            <div className="w-[250px] h-[70px] bg-slate-300 rounded-[5px] p-2 flex items-center justify-center text-[17px] sm:text-[13px] md:text-[15px]">Software Testing & Debugging</div>
            <div className="w-[250px] h-[70px] bg-slate-300 rounded-[5px] p-2 flex items-center justify-center text-[17px] sm:text-[13px] md:text-[15px]">Software Development & Deployment</div>
            <div className="w-[250px] h-[70px] bg-slate-300 rounded-[5px] p-2 flex items-center justify-center text-[17px] sm:text-[13px] md:text-[15px]">Responsive Websites & User Interfaces</div>

        </div>
        <hr />

    </section>
  )
}

export default Services
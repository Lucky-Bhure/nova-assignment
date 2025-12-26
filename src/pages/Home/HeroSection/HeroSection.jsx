import React from 'react'
import { RiUserVoiceLine } from 'react-icons/ri'

const HeroSection = () => {
  return (
    <section className="w-full h-fit flex flex-col justify-center items-center bg-[#ffffff00] py-12 px-30 gap-8 mt-14">
      <div className='text-[#6D4C71] font-bold text-4xl'>
        <p>Communication.</p>
        <p>Finally done right.</p>
      </div>

      <div className='font-400 text-sm flex flex-col text-[#232323]'>
        <p>Nova helps people talk to each other in a kinder, clearer, safer way.</p>
        <p>Most misunderstandings aren't intentional.</p>
        <p>Nova guides conversations so people understand — and feel understood.</p>
      </div>

      <div className='w-[80%] font-300 text-xs text-[#232323] flex flex-row justify-between items-center gap-2'>
        <p className='border border-[#232323] bg-[#232323] text-[#FFFFFF] rounded-2xl py-2 px-4 max-w-80 flex flex-row items-center gap-2'>
            <RiUserVoiceLine size={16} />
            MODERN DATING</p>
        <p className='border border-[#232323] bg-transparent rounded-2xl py-2 px-4 max-w-80 flex flex-row items-center gap-2'> <RiUserVoiceLine size={16} /> PERSONAL CONVERSATIONS</p>
        <p className='border border-[#232323] bg-transparent rounded-2xl py-2 px-4 max-w-80 flex flex-row items-center gap-2'> <RiUserVoiceLine size={16} /> FRINDSHIPS & FAMILY</p>
        <p className='border border-[#232323] bg-transparent rounded-2xl py-2 px-4 max-w-80 flex flex-row items-center gap-2'><RiUserVoiceLine size={16} /> FOR WORKING & COMMUNICATIONS</p>
        </div>

        <div className='w-fit p-6 flex flex-row justify-center items-center bg-blue/20 backdrop-blur-xl border border-white/50 rounded-2xl shadow-xl mt-2'>
            <img src="video.gif" alt="video gif" width={400}/>    
        </div>
      
    </section>
  )
}

export default HeroSection

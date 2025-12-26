import React from 'react'

const NewsletterBlock = () => {
  return (
    <section className="w-full h-fit flex flex-col justify-center items-center bg-[#353535] py-14 px-30 gap-4 text-[#6D4C71]">
      <p className="font-semibold text-[38px] text-[#ffffff]">Newsletter Block</p>
      <p className="text-[18px] text-[#BFBFBF] font-400">
        Sign up to receive updates on Nova's research, product releases, and insights on the future of human communication.
      </p>

        <div className="w-fit h-fit flex flex-row justify-center items-center bg-[#ffffff01] py-4 px-30 gap-4 text-[#6D4C71]">
            <input type="text" placeholder='Please provide your Email ID here'
            className='w-109 h-10 bg-white border-gray-300 px-4 py-2 text-[#6D4C71]'/>

            <button className='flex flex-row justify-center items-center gap-2 bg-[#6D4C71] rounded-sm px-6 py-2 text-white hover:shadow-md transition border border-white'>Submit</button>
        </div>
    </section>
  )
}

export default NewsletterBlock

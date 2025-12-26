import React from 'react'

const EarlyAccess = () => {
  return (
    <section className="w-full h-fit flex flex-col justify-center items-center bg-[#ffffff01] py-12 px-30 gap-4">

        <div className='w-[86%] bg-[#EFE6F0] rounded-[15px] flex flex-col justify-center items-center py-6 px-4 gap-4'>
            <p className='text-[46px] text-[#6D4C71] font-500'>Talk better. Feel safer. Connect deeper.</p>
        </div>

        <p className="text-[28px] text-[#000000] font-400 mt-2">Nova guides the conversations that matter most.</p>

        <button className='flex flex-row justify-center items-center gap-2 bg-[#6D4C71] rounded-sm px-6 py-2 text-white hover:shadow-md transition text-[18px] mt-2'>Join Nova Early Access</button>

        <p className="text-[18px] font-300 text-[#000000] mt-2">Be among the first to experience the future of human communication</p>
    </section>
  )
}

export default EarlyAccess

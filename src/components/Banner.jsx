import React from 'react'

const Banner = ({gameForBanner}) => {
  return (
    <div className='relative cursor-pointer'>
        <div className='absolute bottom-0 text-white p-8 bg-gradient-to-t from-slate-700 to-100% w-full rounded-2xl'>
            <p className='font-bold'>
                {gameForBanner?.name}
            </p>
            <button className='bg-[#1D4ED8] font-semibold px-2 py-1 rounded-lg'>Get Now</button>
        </div>
      <img src={gameForBanner?.background_image} className='md:max-h-[400px] w-full object-cover rounded-2xl' />
    </div>
  )
}

export default Banner

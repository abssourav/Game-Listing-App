import React from 'react'

const TrendingGames = ({ allGameList }) => {
    return (
        <div className='my-9'>
            <h2 className='font-bold dark:text-white text-2xl mb-5'>Trending Games</h2>
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 '>
                {allGameList?.map((item, index) => {
                    if (index < 4) {
                        return (
                            <div key={index} className='bg-[#425572] rounded-lg cursor-pointer group hover:scale-110 transition-all duration-300 ease-in-out'>
                                <img src={item.background_image} className='h-[270px] object-cover rounded-t-lg ' />
                                <h3 className='font-semibold text-white p-3'>{item.name}</h3>
                            </div>
                        )
                    }
                })}
            </div>
        </div>
    )
}

export default TrendingGames

import { useEffect, useState } from 'react'
import GenresList from '../components/GenresList'
import Banner from '../components/Banner'
import useStore from '../app/store'
import TrendingGames from '../components/TrendingGames'

const Home = () => {

  const {allGameList,fecthAllGames} =useStore()

  useEffect(()=>{
    fecthAllGames()
  },[])

  

  return (
    <div className='grid grid-cols-4'>
      <div className='hidden md:block'>
        <GenresList />
      </div>
      <div className='col-span-4 md:col-span-3'>
        {allGameList.length === 0 ? 
        <div className='text-black dark:text-white font-bold'>Loading...</div> 
        : 
        <div className=' m-4'>
          <Banner gameForBanner={allGameList[3]} />
          <TrendingGames allGameList={allGameList}/>
        </div>}
      </div>
    </div>
  )
}

export default Home

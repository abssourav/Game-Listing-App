import { useEffect, useState } from 'react'
import GenresList from '../components/GenresList'
import { allGamesList } from '../services/GlobalApi'
import Banner from '../components/Banner'

const Home = () => {

  const [allGameList,setAllGameList] = useState([])

  useEffect(()=>{
    fecthAllGames()
  },[])

  const fecthAllGames = async() =>{
    const GamesList =await allGamesList()
    console.log(GamesList.results)
    setAllGameList(GamesList.results)
  }

  return (
    <div className='grid grid-cols-4'>
      <div className='hidden md:block'>
        <GenresList />
      </div>
      <div className='col-span-4 md:col-span-3'>
        {allGameList.length === 0 ? <div className='text-black dark:text-white font-bold'>Loading...</div> : <Banner gameForBanner={allGameList[3]}/>}
      </div>
    </div>
  )
}

export default Home

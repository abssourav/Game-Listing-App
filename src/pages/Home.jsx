import { useEffect } from 'react'
import GenresList from '../components/GenresList'
import { allGamesList } from '../services/GlobalApi'

const Home = () => {

  useEffect(()=>{
    fecthAllGames()
  },[])

  const fecthAllGames = async() =>{
    const GamesList =await allGamesList()
    console.log(GamesList.results)
  }

  return (
    <div className='grid grid-cols-4'>
      <div className='hidden md:block'>
        <GenresList />
      </div>
      <div className='col-span-4 md:col-span-3'>
      </div>
    </div>
  )
}

export default Home

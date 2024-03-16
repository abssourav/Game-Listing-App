import React, { useEffect, useState } from 'react'
import { fetchGenresList } from '../services/GlobalApi'

const GenListComponents = () => {

    const [genList, setGenList] = useState([])
    const [isActive, setIsActive] = useState(0)

    const GenresList = async () => {
        const data = await fetchGenresList()
        const genreList = data.results
        setGenList(genreList)
        console.log(genreList)
    }

    useEffect(() => {
        GenresList()
    }, [])

    return (
        <div>
            {genList && genList.map((item, index) => {
                return (
                    <div key={index} className={`flex items-center gap-1 cursor-pointer group hover:bg-gray-400 rounded-lg p-2 ${isActive == index && 'bg-gray-400'}`} onClick={() => setIsActive(index)}>

                        <img src={item.image_background} className={`h-[40px] w-[40px] object-cover rounded-lg transition ease-in-out delay-150 group-hover:scale-110 ${isActive == index && 'scale-110'} `} />

                        <h2 className={`font-semibold group-hover:font-bold dark:text-white ${isActive == index && 'font-bold'} `}>
                            {item.name}
                        </h2>
                    </div>
                )
            })}
        </div>
    )
}

export default GenListComponents

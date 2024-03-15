import GenListComponents from './GenListComponents'

const GenresList = () => {


  return (
    <div className='pl-8 '>
      <h2 className='font-bold text-3xl dark:text-white mb-3'>Genres</h2>
      <div className='h-[80vh] overflow-y-scroll'>
        <GenListComponents />
      </div>
    </div>
  )
}

export default GenresList

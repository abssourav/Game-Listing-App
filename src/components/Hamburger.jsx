import GenListComponents from './GenListComponents'

const Hamburger = () => {

  return (
    <div className='md:hidden absolute bg-white dark:bg-black overflow-scroll left-0 top-[4.5rem] max-h-[90vh] z-50 rounded-lg shadow-lg'>
       <GenListComponents />
    </div>
  )
}

export default Hamburger

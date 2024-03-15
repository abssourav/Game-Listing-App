import React, { useEffect, useState } from 'react'
import { IoSearchOutline, IoMoon, IoSunnyOutline } from "react-icons/io5";

import logo from '../assets/images/logo.png'
import useStore from '../app/store';



const Header = () => {
    const {theme,darkTheme,lightTheme} = useStore()

    useEffect(()=>{
        const theme = localStorage.getItem('theme')
        theme && theme == "dark" ? darkTheme() : lightTheme()
    },[])

    return (
        <div className='flex  items-center py-3 border-b-2 border-[#ccc5c5] dark:border-b-[red] px-6 sticky top-0 bg-white dark:bg-[#121212] z-[99]'>
            <img src={logo} alt="logo" height={50} width={50} className='hidden md:block'/>
            <div className='flex items-center gap-1 w-full bg-[#E3E8F1] p-2 mx-4 rounded-full'>
                <IoSearchOutline className='text-3xl '/>
                <input type="text" placeholder='Search Games' className='w-full bg-transparent px-1 outline-none ' />
            </div>
            <div className='bg-[#E3E8F1] p-2 rounded-full cursor-pointer'>
                { theme == 'light'?
                    <IoMoon className='text-3xl ' onClick={()=>{
                        darkTheme();
                        localStorage.setItem('theme','dark')
                    }}/>
                    :
                    <IoSunnyOutline className='text-3xl' onClick={()=>{
                        lightTheme();
                        localStorage.setItem('theme','light')
                    }}/>
                }

            </div>
        </div>
    )
}

export default Header

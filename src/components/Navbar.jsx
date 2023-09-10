import React, { useState } from 'react'
import { HiMenuAlt3 } from "react-icons/hi"
import { MdOutlineClose } from "react-icons/md";
import img1 from '../assets/about-img.png';
import About from './About';

const Navbar = () => {
  const [menu, setMenu] = useState(true)

  return (
    <div className="text-white px-5">
      
        
          <div className="z-50 flex fixed top-5 lg:top-5 md:left-6 md:right-6 md:top-9 md:h-20 md:px-9
           justify-between items-center h-14 lg:h-20 lg:px-12 p-2 
           rounded-full mx-6 left-2 right-2  backdrop-blur-3xl">
            <div className='font-Style cursor-pointer text-pink-600 lg:pl-9 lg:text-4xl md:text-4xl text-3xl z-11 font-bold'>
              YW
            </div>
            <ul className=' lg:text-2xl md:text-5xl hidden lg:flex justify-center items-center'>
              <li  className='p-5 lg:p-12 md:p-6  hover:text-pink-600 duration-300'><a href="#home">Home</a></li>
              <li  className='p-5 lg:p-12 md:p-6 hover:text-pink-600 duration-300'><a href="#about">About</a></li>
              <li  className='p-5 lg:p-12 md:p-6 hover:text-pink-600 duration-300'><a href="#projects">Projects</a></li>
            </ul>
            <HiMenuAlt3 onClick={() => setMenu(!menu)} className='text-white block lg:hidden cursor-pointer m-3' size={45}/>
          </div>
          <div className={`h-screen  font-bold flex items-center justify-center fixed  left-0 right-0 
           duration-500 ${!menu ? 'top-0' : 'top-[-120%]'} z-50   font-Alegreya text-center
            list-none text-3xl backdrop-blur-md `}>
            <div className='absolute lg:top-20 lg:right-24 top-5 right-5'>
              <MdOutlineClose onClick={() => setMenu(!menu)} className='text-white cursor-pointer m-3' size={60} />
            </div>
            <ul className='flex flex-col lg:text-5xl md:text-5xl  pt-5 justify-center items-center'>
              <li onClick={() => setMenu(!menu)}  className='p-5 lg:p-7 md:p-6  hover:text-pink-600 duration-300'><a href="#home">Home</a></li>
              <li onClick={() => setMenu(!menu)}  className='p-5 lg:p-7 md:p-6 hover:text-pink-600 duration-300'><a href="#about">About</a></li>
              <li onClick={() => setMenu(!menu)}  className='p-5 lg:p-7 md:p-6 hover:text-pink-600 duration-300'><a href="#projects">Projects</a></li>
            </ul>
          </div>
    </div>  
  )
}

export default Navbar
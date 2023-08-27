import React, { useState } from 'react'
import img3 from "../assets/image3.jpeg"
import home from '../assets/home-img.jpeg'
import {easeIn, easeInOut, motion} from 'framer-motion'

const Projects = () => {
  const [slide, setSlide] = useState(0)
  return (
    <section className='bg-black px-6 lg:px-36 lg:pt-36 pt-14  md:pt-32 lg:h-screen h-auto'>
      <motion.h1
          initial={{y:-50, opacity:0}}
          animate={{y:0, opacity:1}}
          exit={{y:0, opacity:0}}
          transition={{duration:1.2, ease:easeInOut}} className='text-pink-600 lg:text-7xl font-Style text-center font-bold pb-16 md:text-6xl text-5xl'>My Works</motion.h1>   
      <motion.div 
      initial={{opacity:0, scale:0}}
          animate={{opacity:1, scale:1}}
          exit={{opacity:0, scale:0}}
          transition={{duration:1.2}}
          className=' flex gap-24 font-Alegreya font-bold flex-1 flex-wrap  px-12 items-center justify-center'>
        <div className='h-96 group card w-96 bg-white  text-black relative '>
          <img src={img3} className='object-cover h-96 lg:group-hover:h-72 duration-300 w-full  ' />
          <h1 className=' text-3xl absolute left-5 font-Alegreya font-bold text-white bottom-12 lg:group-hover:bottom-28 duration-300 '>Netflix Clone</h1>
            <p className='opacity-0 group-hover:opacity-100  duration-300'>A cloned version of the Netflix website</p>
        </div>
       
        <div className='h-96 group card w-96 bg-white  text-black relative '>
          <img src={img3} className='object-cover h-96 group-hover:h-72 duration-300 w-full  ' />
          <h1 className=' text-3xl absolute left-5  font-Alegreya font-bold text-white bottom-12  group-hover:bottom-28 duration-300'>Personal Website</h1>
            <p className='opacity-0 group-hover:opacity-100  duration-300'>A cloned version of the Netflix website</p>
        </div>
        <div className='h-96 group card w-96 bg-white  text-black relative '>
          <img src={img3} className='object-cover h-96 group-hover:h-72 duration-300 w-full  ' />
          <h1 className=' text-3xl absolute left-5  font-Alegreya font-bold text-white bottom-12  group-hover:bottom-32 duration-300'>Notes App</h1>
            <p className='opacity-0 group-hover:opacity-100  duration-300'>A cloned version of the Netflix website</p>
        </div>
     
      </motion.div>
    </section>
  )
}

export default Projects
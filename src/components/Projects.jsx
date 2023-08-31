import React, { useState } from 'react'
import img3 from "../assets/image3.jpeg"
import home from '../assets/home-img.jpeg'
import cover from '../assets/Cover.png'
import pfolio from '../assets/pfolioPic.png'
import {AnimatePresence, easeIn, easeInOut, motion} from 'framer-motion'

const Projects = () => {
  const ProjectVariant = {
    hidden: {
      opacity:0, y:-50
    },
    visible: {
      opacity:1, y:0,
      transition: {
        duration:1.2,
       
      }
    }
  }
  const childVariant = {
    hidden:{
      opacity:0, y:50
    },
    visible: {
      opacity:1, y:0,
      
    }
  }

  const projectDetails = [
    {
      img: cover,
      title: "Netflix Clone",
      details: "A cloned version of the Netflix website"
    },
    {
      img: cover,
      title: "Netflix Clone",
      details: "A cloned version of the Netflix website"
    },
    {
      img: cover,
      title: "Netflix Clone",
      details: "A cloned version of the Netflix website"
    },
    {
      img: cover,
      title: "Netflix Clone",
      details: "A cloned version of the Netflix website"
    },
    {
      img: cover,
      title: "Netflix Clone",
      details: "A cloned version of the Netflix website"
    },
    {
      img: cover,
      title: "Netflix Clone",
      details: "A cloned version of the Netflix website"
    },
    

  ]
 
  const [slide, setSlide] = useState(0)
  return (
    <section id='projects' className='bg-black px-6 lg:px-24 lg:pt-28 pt-28 pt-14  md:pt-40 lg:h-screen h-auto'>
   
      <motion.h1
          variants={childVariant}
          initial="hidden"
          whileInView="visible"
          className='text-pink-600 lg:text-8xl font-Style text-center font-bold pb-14  md:text-7xl text-5xl'>My Works</motion.h1>   
      <div 
          className=' flex px-3 font-Alegreya gap-12 lg:gap-6 md:gap-20 font-bold flex-1 flex-wrap  items-center justify-center'>
          
        <motion.div variants={childVariant}
        initial="hidden"
        whileInView="visible"
        transition={{duration:0.8}} className='h-[300px] group rounded-lg card w-[500px] bg-white  text-black relative '>
          <img src={cover } className='object-cover h-[300px] lg:group-hover:h-56 rounded-t-lg duration-300 w-full  ' />
          <h1 className=' text-3xl absolute left-5 font-Alegreya font-bold text-white bottom-12 lg:group-hover:bottom-28 duration-300 '>Netflix Clone</h1>
            <p className='opacity-0 group-hover:opacity-100  duration-300'>A cloned version of the Netflix website</p>
        </motion.div>
       
        <motion.div variants={childVariant}
        initial="hidden"
        whileInView="visible"
        transition={{delay:0.2,duration:0.8}} className='h-[300px] group rounded-lg card w-[500px] bg-white  text-black relative '>
          <img src={pfolio} className='object-cover h-[300px] group-hover:h-56 rounded-t-lg duration-300 w-full  ' />
          <h1 className=' text-3xl absolute left-5  font-Alegreya font-bold text-white bottom-12  group-hover:bottom-28 duration-300'>Personal Website</h1>
            <p className='opacity-0 group-hover:opacity-100  duration-300'>A cloned version of the Netflix website</p>
        </motion.div>
        <motion.div variants={childVariant}
        initial="hidden"
        whileInView="visible"
        transition={{delay:0.4, duration:0.8}} className='h-[300px] group rounded-lg card w-[500px] bg-white  text-black relative '>
          <img src={img3} className='object-cover h-[300px] group-hover:h-56 rounded-t-lg duration-300 w-full  ' />
          <h1 className=' text-3xl absolute left-5  font-Alegreya font-bold text-white bottom-12  group-hover:bottom-32 duration-300'>Notes App</h1>
            <p className='opacity-0 group-hover:opacity-100  duration-300'>A cloned version of the Netflix website</p>
        </motion.div>
        <motion.div variants={childVariant}
        initial="hidden"
        whileInView="visible"
        transition={{duration:0.8}} className='h-[300px] group rounded-lg card w-[500px] bg-white  text-black relative '>
          <img src={cover } className='object-cover h-[300px] lg:group-hover:h-56 rounded-t-lg duration-300 w-full  ' />
          <h1 className=' text-3xl absolute left-5 font-Alegreya font-bold text-white bottom-12 lg:group-hover:bottom-28 duration-300 '>Netflix Clone</h1>
            <p className='opacity-0 group-hover:opacity-100  duration-300'>A cloned version of the Netflix website</p>
        </motion.div>
       
        <motion.div variants={childVariant}
        initial="hidden"
        whileInView="visible"
        transition={{delay:0.8,duration:0.8}} className='h-[300px] group rounded-lg card w-[500px] bg-white  text-black relative '>
          <img src={pfolio} className='object-cover h-[300px] group-hover:h-56 rounded-t-lg duration-300 w-full  ' />
          <h1 className=' text-3xl absolute left-5  font-Alegreya font-bold text-white bottom-12  group-hover:bottom-28 duration-300'>Personal Website</h1>
            <p className='opacity-0 group-hover:opacity-100  duration-300'>A cloned version of the Netflix website</p>
        </motion.div>
        <motion.div variants={childVariant}
        initial="hidden"
        whileInView="visible"
        transition={{delay:1, duration:0.8}} className='h-[300px] group rounded-lg card w-[500px] bg-white  text-black relative '>
          <img src={img3} className='object-cover h-[300px] group-hover:h-56 rounded-t-lg duration-300 w-full  ' />
          <h1 className=' text-3xl absolute left-5  font-Alegreya font-bold text-white bottom-12  group-hover:bottom-32 duration-300'>Notes App</h1>
            <p className='opacity-0 group-hover:opacity-100  duration-300'>A cloned version of the Netflix website</p>
        </motion.div>
      </div>
     
    </section>
  )
}

export default Projects
import React from 'react'
import About from './About'
import Projects from './Projects'
import { Link } from 'react-router-dom'
import {easeIn, motion} from 'framer-motion'

const Home = () => {
  return (
    <div>
    <div className=' bg-home-bg bg-cover covering bg-center bg-no-repeat h-screen '>
    <section id="" className='text-white flex flex-col md:gap-5   h-screen items-center justify-center  '>
          <div className=' px-5 font-bold text-5xl  text-center z-30  max-w-[800px] '>
            <motion.h1  initial={{y:-90, opacity:0}}
          animate={{y:0, opacity:1}}
          exit={{y:0, opacity:0}}
          transition={{duration:0.8, ease:easeIn}}  className='font-Style lg:text-8xl md:text-7xl text-pink-600 pb-4'>Yvette Wilcox</motion.h1>
            <h1 className='font-Alegreya md:text-6xl lg:text-7xl'>Front-end Developer.</h1>
          </div>
          <Link to="/projects" className='border-2  my-6 text-xl z-40 md:text-3xl
           lg:text-3xl bg-pink-600 rounded-full py-2 md:py-4 md:px-5 lg:py-4 lg:px-5 px-3 border-pink-600' >
           <motion.button initial={{opacity:0, y:90}}
          animate={{opacity:1, y:0}}
          exit={{opacity:0, y:90}}
          whileHover={{scale:1.05}}
          transition={{duration:0.8}}
          >My Projects</motion.button></Link>
        </section>
    </div>
      <div>
        
      </div>
    </div>
  )
}

export default Home
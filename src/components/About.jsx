import React from 'react'
import img1 from '../assets/about-img.png';
import { AiFillMail } from 'react-icons/ai'
import { BsGithub, BsLinkedin } from 'react-icons/bs'
import { easeIn, easeInOut, easeOut, motion } from 'framer-motion'
const About = () => {
  return (
    <div>
      <section id="about" className=' lg:pt-36 px-6 lg:px-72 pt-14  md:pt-32 text-center bg-black lg:h-screen h-auto'>
        <motion.h1 initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 0, opacity: 0 }}
          transition={{ duration: 0.8, ease: easeIn }}
          className='text-pink-600 font-Style lg:text-7xl md:text-6xl font-bold text-5xl'>About Me</motion.h1>
        <div className='flex flex-col lg:flex-row  lg:pt-28 md:pt-16 items-center justify-center'>
          <motion.div

            className=' px-12 relative'>
            <motion.img initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 1 }}
              src={img1} className='rounded-xl h-1/4 w-full md:h-[550px] md:w-[600px] lg:h-[700px] lg:w-[800px] object-contain ' />
          </motion.div>
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -100, opacity: 0 }}
            transition={{ duration: 1, ease: easeIn }}
            className=' font-Josefin px-6 md:px-12 pt-12 md:pt-16 text-white  text-wrap md:text-2xl lg:pl-28 lg:text-xl text-lg'>
            <p > Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui dicta minus molestiae vel beatae natus eveniet ratione temporibus aperiam harum alias officiis assumenda officia quibusdam deleniti eos cupiditate dolore doloribus!</p>
            <p>Ad dolore dignissimos asperiores dicta facere optio quod commodi nam tempore recusandae. Rerum sed nulla eum vero expedita ex delectus voluptates rem at neque quos facere sequi unde optio aliquam!</p>
            <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui dicta minus molestiae vel beatae natus eveniet ratione temporibus aperiam harum alias officiis assumenda officia quibusdam deleniti eos cupiditate dolore doloribus!</p>
            <p>Ad dolore dignissimos asperiores dicta facere optio quod commodi nam tempore recusandae. Rerum sed nulla eum vero expedita ex delectus voluptates rem at neque quos facere sequi unde optio aliquam!</p>

          </motion.div>
        </div>
        <div className='flex gap-7 md:gap-12 items-center justify-center mt-9  text-pink-600  lg:hidden  '>
          <AiFillMail size={30} />
          <BsLinkedin size={30} />
          <BsGithub size={30} />
        </div>
      </section>

    </div>
  )
}

export default About
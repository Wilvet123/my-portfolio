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
            <p>Hi! I'm Yvette Wilcox, a passionate front-end developer. My journey in the world of coding began in August 2022,
              and it has been an very rewarding experience. With a deep-rooted love for colors, art, and design, I've found my niche in the digital space.
              Throughout my coding journey, I've had the opportunity to work on some amazing projects independently.
              These experiences have not only enhanced my technical skills but have also fueled my enthusiasm for creating
              impactful digital experiences.  I'm currenlty seeking opportunities to collaborate on real-life
              projects alongside fellow developers and industry professionals.
              My goal is to contribute my creative perspective and technical prowess to projects that leave a lasting
              impression. I'm excited to continue growing and learning in this dynamic field while crafting innovative
              solutions that push the boundaries of design and functionality. </p>
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
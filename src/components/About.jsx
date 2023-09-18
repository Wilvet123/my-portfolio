import React from 'react'
import img1 from '../assets/about-img.png';
import { AiFillMail } from 'react-icons/ai'
import { BsGithub, BsLinkedin } from 'react-icons/bs'
import { easeIn, easeInOut, easeOut, motion } from 'framer-motion'
const About = () => {
  return (
    <div>
      <section id="about" className=' lg:pt-36 px-6 lg:px-48 lg:pt-28 pt-28 md:pt-40 text-center bg-black lg:h-screen h-auto'>
        <motion.h1 initial={{ y: -50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, ease: easeIn }}
          className='text-pink-600 font-Style lg:text-7xl md:text-7xl font-bold text-5xl'>About Me</motion.h1>
        <div className='flex flex-col lg:flex-row gap-x-28 lg:pt-20 md:pt-16 pt-8 items-center justify-between'>
          <motion.div
            className=' px-12 relative'>
            <motion.img 
             initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{  duration: 0.8, ease: easeIn }}
              src={img1} className='rounded-xl h-1/4 w-full md:h-[550px] md:w-[600px] lg:h-[700px] lg:w-[1500px] object-contain ' />
          </motion.div>
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            exit={{ x: -100, opacity: 0 }}
            transition={{ duration: 0.8, ease: easeIn }}
            className=' font-Josefin  md:px-24 px-3  text-center pt-12 md:pt-16  lg:pt-0 text-white  lg:text-start md:text-2xl  lg:text-xl text-lg'>
            <p>Hi! I'm Yvette Wilcox and I am a front-end developer. My journey into the world of coding began in August 2022,
              and it has been a very rewarding experience. With my love for colors, art, and design, I've found my niche in the digital space.</p>
             <br></br> <p>Throughout my coding journey, I've had the opportunity to work on some amazing projects independently.</p>
              <p>These experiences have not only enhanced my technical skills but have also made more excited for creating
              impactful digital experiences. </p>
              <br></br> <p> I'm currenlty seeking opportunities to collaborate on real-life
              projects alongside fellow developers and industry professionals. I'm excited to continue growing and learning in this dynamic field while workin on innovative
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
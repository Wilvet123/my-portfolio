import React from 'react'

const Trash = () => {
  return (
    <div className='z-[100px] h-screen w-full text-white'>
        <ul className='flex flex-col pt-5 justify-center items-center'>
              <li className='p-5'><NavLink to="/">Home</NavLink></li>
              <li className='p-5'><NavLink to="/about">About</NavLink></li>
              <li className='p-5'><NavLink to="/projects">Projects</NavLink></li>
              <li className='p-5'><NavLink to="/contact">Contact</NavLink></li>
            </ul>
            Hi! I'm Yvette Wilcox. I have always loved colors, art and design and wanted to be part of the digital space.
           I started learning to code in August,2022 and it has been a really nice experience. I have worked on some amazing projects
           on my own and I'm currently looking for opportunities to work on real-life projects
            with other developers and professionals.
    </div>
  )
}

export default Trash
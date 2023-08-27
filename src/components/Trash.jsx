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
    </div>
  )
}

export default Trash
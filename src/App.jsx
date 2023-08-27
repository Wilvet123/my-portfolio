import About from './components/About';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import {Route, Routes} from 'react-router-dom'
import NotFound from './components/NotFound'
import {AiFillMail} from 'react-icons/ai'
import {BsGithub, BsLinkedin} from 'react-icons/bs'
import {motion} from "framer-motion"

function App() {
  return (
    <div >
      <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/projects" element={<Projects/>}/>
      <Route path="*" element={<NotFound />} />
    </Routes>
    <div className='lg:flex flex-col gap-12 absolute text-pink-600 right-36 hidden top-[70%] '>
        <motion.a href='' whileHover={{scale:0.85}}><AiFillMail size={40}/></motion.a>
        <motion.a href="https://ng.linkedin.com/in/yvette-wilcox-776077214" whileHover={{scale:0.85}}><BsLinkedin size={40}/></motion.a>
        <motion.a href='https://github.com/Wilvet123/yvette' whileHover={{scale:0.85}}><BsGithub size={40}/></motion.a>
      </div>
    </div>
    
    
   
  );
}

export default App;

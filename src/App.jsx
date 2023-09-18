import About from './components/About';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import {AiFillMail} from 'react-icons/ai'
import {BsGithub, BsLinkedin} from 'react-icons/bs'
import {motion} from "framer-motion"

function App() {
  return (
    <div >
      <Navbar/>
    <Home/>
    <About/>
      <Projects/>
      
    
    <div className='lg:flex flex-col gap-12 fixed text-pink-600 right-36 hidden top-[70%] '>
        <motion.a href='mailto:wilcoxyvette2000@gmail.com' whileHover={{scale:0.85}}><AiFillMail size={40}/></motion.a>
        <motion.a href="https://ng.linkedin.com/in/yvette-wilcox-776077214" whileHover={{scale:0.85}}><BsLinkedin size={40}/></motion.a>
        <motion.a href='https://github.com/Wilvet123' whileHover={{scale:0.85}}><BsGithub size={40}/></motion.a>
      </div>
    </div>
    
    
   
  );
}

export default App;

import React from 'react'
import { motion } from 'framer-motion'
import './navbar.scss'
import Sidebar from '../sidebar/Sidebar'

const Navbar = () => {
  return (
    <div className='navbar'>
      <Sidebar/>
      <div className="wrapper">
        <motion.span initial={{opacity:0, scale: 0.5}} animate={{opacity:1, scale: 1}} transition={{duration: 0.5}}>Saiyam Verma</motion.span>
        <div className="social">
            <a href="https://github.com/Vermasaiyam/" target='blank'><img src="/github.png" alt="Github" style={{background: "white"}}/></a>
            <a href="https://www.linkedin.com/in/saiyam-verma-704302289/" target='blank'><img src="/linkedin.png" alt="Linkedin" /></a>
            <a href="https://x.com/SaiyamVerm91813" target='blank'><img src="/x.avif" alt="X" /></a>
            <a href="https://www.instagram.com/s.verma0504/" target='blank'><img src="/instagram.png" alt="Instagram" /></a>
        </div>
      </div>
    </div>
  )
}

export default Navbar

import React from 'react'
import './services.scss'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const variants= {
    initial:{
        x: -500,
        y:100,
        opacity: 0,
    },
    animate:{
        x: 0,
        y:0,
        opacity: 1,
        transition:{
            duration: 1,
            staggerChildren: 0.1,
        }
    }
}

const Services = () => {

    const ref = useRef();

    const isInView = useInView(ref, {margin: "-100px"})

  return (
    <motion.div 
    className='services' 
    variants={variants} 
    initial="initial" 
    // whileInView="animate"
    ref={ref}
    animate={"animate"}
    >
      <motion.div className="textContainer" variants={variants}>
        <p>When I'm not coding, you can find me <br /> strategizing my next move in a game of chess.</p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
            <img src="./people.webp" alt="People with same mindset" />
            <h1><motion.b whileHover={{color: "orange"}}>Unique</motion.b> Ideas</h1>
        </div>
        <div className="title">
            <h1><motion.b whileHover={{color: "orange"}}>For Your</motion.b> Business</h1>
            <button>WHAT WE DO?</button>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div className="box" whileHover={{backgroundColor: "lightgray", color:"black"}}>
            <h2>Branding</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid sapiente numquam quia reprehenderit ipsum, nisi atque in neque hic !</p>
            <button>Go</button>
        </motion.div>
        <motion.div className="box" whileHover={{backgroundColor: "lightgray", color:"black"}}>
            <h2>Branding</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid sapiente numquam quia reprehenderit ipsum, nisi atque in neque hic !</p>
            
            <button>Go</button>
        </motion.div>
        <motion.div className="box" whileHover={{backgroundColor: "lightgray", color:"black"}}>
            <h2>Branding</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid sapiente numquam quia reprehenderit ipsum, nisi atque in neque hic !</p>
            <button>Go</button>
        </motion.div>
        <motion.div className="box" whileHover={{backgroundColor: "lightgray", color:"black"}}>
            <h2>Branding</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid sapiente numquam quia reprehenderit ipsum, nisi atque in neque hic !</p>
            <button>Go</button>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default Services

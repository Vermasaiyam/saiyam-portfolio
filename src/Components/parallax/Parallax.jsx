import React, { useRef } from 'react'
import "./parallax.scss"
import { motion, useScroll, useTransform } from 'framer-motion'

const Parallax = ({type}) => {
  const ref = useRef();

  const {scrollYProgress} = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  })

  const yBg = useTransform(scrollYProgress, [0,1], ["0%", "100%"])
  const yText = useTransform(scrollYProgress, [0,1], ["0%", "400%"])

  return (
    <div className='parallax'
    ref={ref}
    style={{background: type==="services"
      ? "linear-gradient(180deg, #111132, #0c0c1d"
      : "linear-gradient(180deg, #111132, #505064"}}>
      <motion.h1 style={{y: yText}}>{type === "services" ? "What I Do?" : "What I Did?"}</motion.h1>
<<<<<<< HEAD
      <motion.div className="mountains" style={{backgroundImage: "url(mountains.png)"}}></motion.div>
      <motion.div className="planets" style={{y: yBg, backgroundImage: `url(${type === "services" ? "planets.png" : "sun.png"})`}}></motion.div>
      <motion.div style={{x: yBg, backgroundImage: "url(stars.png)"}} className="stars"></motion.div>
=======
      <motion.div className="mountains" style={{backgroundImage: "mountains.png"}}></motion.div>
      <motion.div className="planets" style={{y: yBg, backgroundImage: `url(${type === "services" ? "planets.png" : "sun.png"})`}}></motion.div>
      <motion.div style={{x: yBg}} className="stars" style={{backgroundImage: "mountains.png"}}></motion.div>
>>>>>>> b281257009aedc8e26832f752d6588e0ba087afa
    </div>
  )
}

export default Parallax

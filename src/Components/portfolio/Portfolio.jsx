import React, { useRef } from 'react'
import './portfolio.scss'
import { motion, useScroll, useSpring, useTransform } from 'framer-motion'
import { MdLaunch } from "react-icons/md";

const items = [
  {
    id: 1,
    title: "E-Commerce App",
    img: "./Ecommerce.png",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta neque sed nesciunt corrupti enim iste voluptate aspernatur esse vel! Ducimus.",
  },
  {
    id: 2,
    title: "YouTube App",
    img: "./youtubeApp.png",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta neque sed nesciunt corrupti enim iste voluptate aspernatur esse vel! Ducimus.",
  },
  {
    id: 3,
    title: "Online Music Player",
    img: "./spotify.png",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta neque sed nesciunt corrupti enim iste voluptate aspernatur esse vel! Ducimus.",
  },
  {
    id: 4,
    title: "Tic Tac Toe",
    img: "./ticTacToe.png",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta neque sed nesciunt corrupti enim iste voluptate aspernatur esse vel! Ducimus.",
  },
]

const Single = ({ item }) => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({ 
    target: ref,
    // offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [-100, 100]);

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt={item.title} />
          </div>
          <motion.div className="textContainer" style={{y}}>
            <h2 >{item.title}</h2>
            <p>{item.desc}</p>
            <a href=""><button>See Demo <MdLaunch /></button></a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

const Portfolio = () => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["end end", "start start"] });


  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  })

  return (
    <div className='portfolio' ref={ref}>
      <div className="progress">
        <h1>My Projects</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {
        items.map(item => (
          <Single item={item} key={item.id} />
        ))
      }

    </div>
  )
}

export default Portfolio

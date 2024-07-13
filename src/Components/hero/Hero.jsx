import React from 'react'
import './hero.scss'
import { motion } from 'framer-motion'

const textVariants = {
    initial: {
        x: -500,
        opacity: 0,
    },
    animate: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 1,
            staggerChildren: 0.1,
        },
    },
    scrollButton: {
        opacity: 0,
        y: 10,
        transition: {
            duration: 2,
            repeat: Infinity,
        },
    },
}
const sliderVariants = {
    initial: {
        x: 0,
    },
    animate: {
        x: "-220%",
        transition: {
            duration: 20,
            repeatType: "mirror",
            repeat: Infinity,
        },
    },
}

const Hero = () => {
    return (
        <div className='hero'>
            <div className="wrapper">
                <motion.div className="textContainer" variants={textVariants} initial="initial" animate="animate">
                    <motion.h2 variants={textVariants}>SAIYAM VERMA</motion.h2>
                    <motion.h1 variants={textVariants}>Full Stack Web Developer</motion.h1>
                    <motion.div className="buttons" variants={textVariants}>
                        <a href="#Portfolio">
                        <motion.button variants={textVariants}>Latest Works</motion.button>
                        </a>
                        <a href="#Contact">
                            <motion.button variants={textVariants}>Contact Me</motion.button>
                        </a>
                    </motion.div>
                    <a href="#Contact">
                        <motion.img src="./scroll.png" alt="Scroll Down" variants={textVariants} animate="scrollButton" />
                    </a>
                </motion.div>
            </div>
            <motion.div className="slidingTextContainer" variants={sliderVariants} initial="initial" animate="animate">
                SAIYAM VERMA: Full Stack Web Developer
            </motion.div>
            <div className='imageContainer'>
                <img src="./hero.png" alt="Saiyam" />
            </div>
        </div >
    )
}

export default Hero

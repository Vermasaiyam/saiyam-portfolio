import React, { useRef } from 'react'
import './portfolio.scss'
import { motion, useScroll, useSpring, useTransform } from 'framer-motion'
import { MdLaunch } from "react-icons/md";

const items = [
  {
    id: 1,
    title: "QuizLab",
    img: "./QuizLab.png",
    desc: "QuizLab transforms YouTube videos into interactive learning experiences by transcribing audio, summarizing content, and creating quizzes for users to earn tokens.",
    link: "https://quizlab.onrender.com/",
    code: "https://github.com/Vermasaiyam/quizlab",
    technologies: ["TailwindCSS", "ReactJS", "Node.js", "Express.js", "MongoDB", "Flask", "Whisper AI", "Groq AI"],
  },
  {
    id: 2,
    title: "PhotoAI",
    img: "./PhotoAI.png",
    desc: "PhotoAI allows users to create folders to upload and share event pictures, with face recognition and permission-based access for viewing photos.",
    link: false,
    code: "https://github.com/Vermasaiyam/PhotoAI-MIET",
    technologies: ["TailwindCSS", "ReactJS", "Node.js", "Express.js", "MongoDB", "Flask", "Face Recognition"],
  },
  {
    id: 3,
    title: "Cartiify",
    img: "./Ecommerce.png",
    desc: "Cartiify is an e-commerce platform that offers a seamless shopping experience with features like product browsing, reviews, favorites, and an admin dashboard for managing products, categories, and orders.",
    link: "https://cartiify.vercel.app/",
    code: "https://github.com/Vermasaiyam/Cartiify",
    technologies: ["Next.js", "Firebase", "Cloudinary", "Tailwind CSS"],
  },
  {
    id: 4,
    title: "Feasto",
    img: "./Feasto.png",
    desc: "Feasto is a food ordering platform built with the MERN stack, offering OTP-based authentication, menu management, Stripe payment integration, and a user hierarchy system for both users and restaurant owners.",
    link: "https://feasto-3uh7.onrender.com/",
    code: "https://github.com/Vermasaiyam/Feasto/",
    technologies: ["TailwindCSS", "Typescript", "ReactJS", "Node.js", "Express.js", "MongoDB"],
  },
  {
    id: 5,
    title: "ChatterBox",
    img: "./ChatterBox.png",
    desc: "ChatterBox is a social media platform with features like following users, interacting with posts, and real-time notifications. Built with the MERN stack and Redux for seamless user interaction.",
    link: "https://chatterbox-aaxc.onrender.com/login",
    code: "https://github.com/Vermasaiyam/ChatterBox",
    technologies: ["TailwindCSS", "ReactJS", "Node.js", "Express.js", "MongoDB"],
  },
];


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
          <motion.div className="textContainer" style={{ y }}>
            <h2 >{item.title}</h2>
            <p>{item.desc}</p>
            <div className="tech">
              {
                (item.technologies).map(tech => (
                  <div className="techItem" key={tech}>
                    {tech}
                  </div>
                ))
              }
            </div>
            <div className="buttons">
              <a href={item.code} target='blank'><button>See Code<b>&lt; &gt;</b></button></a>
              {
                item?.link && (
                  <a href={item?.link} target='blank'><button>Watch Live <MdLaunch /></button></a>
                )
              }
            </div>
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

import React, { useRef } from 'react'
import './portfolio.scss'
import { motion, useScroll, useSpring, useTransform } from 'framer-motion'
import { MdLaunch } from "react-icons/md";

const items = [
  // {
  //   id: 1,
  //   title: "Feasto",
  //   img: "./ChatterBox.png",
  //   desc: "A social media platform developed using the MERN stack and Redux, designed for seamless chatting and user interaction. Key features include the ability to follow/unfollow users, upload and interact with posts through likes and comments, edit profiles, and receive real-time notifications. Users can also bookmark posts for later viewing. ChatterBox offers a smooth, dynamic experience for social engagement.",
  //   link: "https://chat-tap.onrender.com/",
  //   code: "https://github.com/Vermasaiyam/ChatterBox",
  //   technologies: ["TailwindCSS", "React", "Node.js", "Express.js", "MongoDB"],
  // },
  {
    id: 1,
    title: "E-Commerce App",
    img: "./Ecommerce.png",
    desc: "Cartiify is a versatile e-commerce platform offering a seamless shopping experience and powerful administrative tools. Users can explore featured products, browse category-based and brand-specific collections, add favorites, rate and review items, and manage their carts and checkout. The admin dashboard provides graphical insights for efficient management of products, categories, brands, admin roles, and order statuses. With streamlined inventory and user management, Cartiify combines user-centric design with robust administrative features for a complete e-commerce solution.",
    link: "https://cartiify.vercel.app/",
    code: "https://github.com/Vermasaiyam/Cartiify",
    technologies: ["Next.js", "Firebase", "Cloudinary", "Tailwind CSS"],
  },
  {
    id: 2,
    title: "ChatterBox",
    img: "./ChatterBox.png",
    desc: "A social media platform developed using the MERN stack and Redux, designed for seamless chatting and user interaction. Key features include the ability to follow/unfollow users, upload and interact with posts through likes and comments, edit profiles, and receive real-time notifications. Users can also bookmark posts for later viewing. ChatterBox offers a smooth, dynamic experience for social engagement.",
    link: "https://chatterbox-aaxc.onrender.com/login",
    code: "https://github.com/Vermasaiyam/ChatterBox",
    technologies: ["TailwindCSS", "React", "Node.js", "Express.js", "MongoDB"],
  },
  {
    id: 3,
    title: "Chat-Tap",
    img: "./ChatTap.png",
    desc: "Developed a full-featured real-time chat application using the MERN stack. The app includes user authentication (with JWT), real-time one-on-one and group chats using Socket.io, and additional features like dark mode for an enhanced user experience. Designed with a responsive UI, the app offers seamless navigation, message notifications, and chat history. Built with a focus on performance and scalability, it's optimized for both desktop and mobile devices.",
    link: "https://chat-tap.onrender.com/",
    code: "https://github.com/Vermasaiyam/ChatTap",
    technologies: ["Chakra UI", "React", "Node.js", "Express.js", "MongoDB"],
  },
  {
    id: 4,
    title: "YouTube App",
    img: "./youtubeApp.png",
    desc: "Built a YouTube-like web application using React and Redux for state management, with API integration to fetch and display video content. The app allows users to search for videos, watch them, view related videos, and manage a watch history. Implemented efficient global state handling with Redux to manage video lists, user actions, and loading states, ensuring a smooth and responsive user experience. The app is fully responsive and optimized for both desktop and mobile devices.",
    link: "https://you-tubes-clone.vercel.app/",
    code: "https://github.com/Vermasaiyam/youtube",
    technologies: ["TailwindCSS", "React", "Redux"],
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
              <a href={item.link} target='blank'><button>Watch Live <MdLaunch /></button></a>
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

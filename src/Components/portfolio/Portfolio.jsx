import React, { useRef } from 'react'
import './portfolio.scss'
import { motion, useScroll, useSpring, useTransform } from 'framer-motion'
import { MdLaunch } from "react-icons/md";

const items = [
  {
    id: 1,
    title: "Chat-Tap",
    img: "./ChatTap.png",
    desc: "Developed a full-featured real-time chat application using the MERN stack (MongoDB, Express, React, Node.js). The app includes user authentication (with JWT), real-time one-on-one and group chats using Socket.io, and additional features like dark mode for an enhanced user experience. Designed with a responsive UI, the app offers seamless navigation, message notifications, and chat history. Built with a focus on performance and scalability, it's optimized for both desktop and mobile devices.",
    link: "https://chat-tap.onrender.com/",
  },
  {
    id: 2,
    title: "E-Commerce App",
    img: "./Ecommerce.png",
    desc: "Developed a E-Commerce web application using only frontend technologies like HTML, CSS, and JavaScript. The project showcases a modern, intuitive UI with a product listing page, product details, cart functionality, and a dynamic checkout experience. Implemented state management for the cart using local storage and ensured smooth navigation using JavaScript-based routing.",
    link: "https://vermasaiyam.github.io/e-commerce/",
  },
  {
    id: 3,
    title: "YouTube App",
    img: "./youtubeApp.png",
    desc: "Built a YouTube-like web application using React and Redux for state management, with API integration to fetch and display video content. The app allows users to search for videos, watch them, view related videos, and manage a watch history. Implemented efficient global state handling with Redux to manage video lists, user actions, and loading states, ensuring a smooth and responsive user experience. The app is fully responsive and optimized for both desktop and mobile devices.",
    link: "https://youtube-black-zeta.vercel.app/",
  },
  {
    id: 4,
    title: "Online Music Player",
    img: "./spotify.png",
    desc: "Developed a Spotify-inspired music streaming application using only HTML, CSS, and JavaScript. The app allows users to browse, play, and control music through a sleek, modern interface. Implemented audio controls, playlist management, and dynamic updates for playing tracks. With a focus on clean design and intuitive UX, the project replicates key features of a music streaming platform while being fully responsive across devices.",
    link: "https://vermasaiyam.github.io/Spotify-Clone/",
  },
  {
    id: 5,
    title: "Tic Tac Toe",
    img: "./ticTacToe.png",
    desc: "Created a classic Tic-Tac-Toe game using HTML, CSS, and JavaScript. The game features a simple, clean design with smooth gameplay and logic to track turns, check for winners, and reset the board. The project includes a two-player mode, responsive design for various screen sizes, and an intuitive UI. It demonstrates interactive game mechanics and DOM manipulation with vanilla JavaScript.",
    link: "https://vermasaiyam.github.io/Tic-Tac-Toe/",
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
            <a href={item.link} target='blank'><button>See Demo <MdLaunch /></button></a>
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

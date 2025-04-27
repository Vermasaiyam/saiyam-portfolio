import React from 'react';
import './aboutMe.scss';
import { FiArrowUpRight } from 'react-icons/fi';

const AboutMe = () => {
  return (
    <div className="aboutMe-container">
      <div className="aboutMe-left animated-gradient">
        <h1 className="aboutMe-title">Saiyam Verma</h1>
        <p className="aboutMe-desc">A full stack developer turning ideas into functional and interactive web applications</p>
        <p className="aboutMe-desc2">When I'm not coding, you can find me <br /> strategizing my next move in a game of chess.</p>
        <a href="http://bit.ly/41QOaPi" className="aboutMe-resume" target='_blank'>
          <span>Resume</span>
          <FiArrowUpRight />
        </a>
        <div className="aboutMe-skills">
          <div className="aboutMe-skill"><img src="./public/skills/javascript.png" alt="JavaScript" /> JavaScript</div>
          <div className="aboutMe-skill"><img src="./public/skills/typescript.png" alt="TypeScript" /> TypeScript</div>
          <div className="aboutMe-skill"><img src="./public/skills/react.png" alt="React" /> React</div>
          <div className="aboutMe-skill"><img src="./public/skills/next.png" alt="Next.js" /> Next.js</div>
          <div className="aboutMe-skill"><img src="./public/skills/node.png" alt="Node.js" /> Node.js</div>
          <div className="aboutMe-skill"><img src="./public/skills/mongodb.png" alt="MongoDB" /> MongoDB</div>
          <div className="aboutMe-skill"><img src="./public/skills/python.png" alt="Python" /> Python</div>
          <div className="aboutMe-skill"><img src="./public/skills/tailwind.png" alt="TailwindCSS" /> TailwindCSS</div>
          <div className="aboutMe-skill"><img src="./public/skills/scss.png" alt="CSS/SASS" /> CSS/SASS</div>
        </div>
      </div>
      <div className="aboutMe-right">
        <img
          src={'/hero1.jpg'}
          alt="Saiyam Verma"
          className="aboutMe-image"
        />
      </div>
    </div>
  );
};

export default AboutMe; 
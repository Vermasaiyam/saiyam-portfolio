import React, { useRef } from 'react'
import './experience.scss'
import { motion, useScroll, useSpring, useTransform } from 'framer-motion'
import { MdLaunch, MdWork } from "react-icons/md";

const items = [
  {
    id: 1,
    company: "Salescode.ai",
    role: "Software Engineer Trainee",
    duration: "July 2025 – September 2025",
    period: "3 months",
    current: false,
    companyLink: "https://salescode.ai",
    desc: "Kickstarted my professional journey building interactive dashboards and scalable web & mobile interfaces that improved data visualization and user engagement.",
    bullets: [
      "Built interactive dashboards and reusable UI components using Flutter, ReactJS, and Tailwind CSS",
      "Implemented RESTful APIs using Node.js and Express, reducing average response time by 150ms",
      "Accelerated data retrieval for interactive dashboards, improving overall system responsiveness",
    ],
    skills: ["Flutter", "ReactJS", "TypeScript", "Node.js", "Express.js", "Tailwind CSS", "REST APIs"],
  },
  {
    id: 2,
    company: "Salescode.ai",
    role: "Software Engineer",
    duration: "October 2025 – Present",
    period: "Current",
    current: true,
    companyLink: "https://salescode.ai",
    desc: "Designing and optimizing responsive web and mobile interfaces while streamlining data management and database performance across multiple modules.",
    bullets: [
      "Designed and optimized responsive web and mobile interfaces using Flutter, ReactJS, and TypeScript",
      "Ensured seamless and consistent user experience across web and mobile platforms",
      "Streamlined data management and database queries, enhancing data retrieval speed and system performance",
    ],
    skills: ["Flutter", "ReactJS", "TypeScript", "Node.js", "MongoDB", "REST APIs", "SCSS"],
  },
];

const Single = ({ item }) => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useTransform(scrollYProgress, [0, 1], [-80, 80]);

  return (
    <section>
      <div className="exp-container">
        <div className="exp-wrapper">

          <div className="companyCard" ref={ref}>
            <div className="companyInitial">{item.company[0]}</div>
            <h3 className="companyName">{item.company}</h3>
            <div className="durationBadge">
              <span className="durationText">{item.duration}</span>
            </div>
            {item.current ? (
              <div className="currentBadge">● Currently Working</div>
            ) : (
              <div className="periodChip">{item.period}</div>
            )}
            <a href={item.companyLink} target="_blank" rel="noopener noreferrer" className="visitBtn">
              Visit Company <MdLaunch />
            </a>
          </div>

          <motion.div className="jobDetails" style={{ y }}>
            <div className="roleHeader">
              <span className="roleIcon"><MdWork /></span>
              <h2 className="roleTitle">{item.role}</h2>
            </div>
            <p className="jobDesc">{item.desc}</p>
            <ul className="bulletList">
              {item.bullets.map((bullet, i) => (
                <li key={i}>{bullet}</li>
              ))}
            </ul>
            <div className="skillsRow">
              {item.skills.map((skill) => (
                <span className="skillChip" key={skill}>{skill}</span>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

const Experience = () => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["end end", "start start"] });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="experience" ref={ref}>
      <div className="exp-progress">
        <h1>Where I've Worked</h1>
        <motion.div style={{ scaleX }} className="exp-progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Experience;

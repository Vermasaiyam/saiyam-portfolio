import React, { useRef } from 'react'
import './experience.scss'
import { motion, useScroll, useSpring, useTransform } from 'framer-motion'
import { MdLaunch, MdWork, MdLocationOn } from "react-icons/md";

const SALESCODE_LOGO = "https://salescode.ai/wp-content/uploads/2025/09/logo_1.svg";

// Reverse chronological — present first
const items = [
  {
    id: 1,
    company: "Salescode.ai",
    role: "Software Engineer",
    duration: "October 2025 – Present",
    period: "Current",
    current: true,
    companyLink: "https://salescode.ai",
    location: "On-site, Gurugram",
    desc: "Designing and optimizing high-performance web and mobile solutions for enterprise B2B clients, while driving database efficiency and cloud infrastructure improvements.",
    bullets: [
      "Architected end-to-end responsive interfaces across web and mobile using Flutter, ReactJS, and TypeScript, serving enterprise clients across multiple B2B verticals",
      "Streamlined complex SQL queries and database schemas, cutting data retrieval latency by 30% and ensuring consistent performance at scale",
      "Deployed and maintained cloud-hosted features on AWS, improving application uptime and scalability for 1000+ concurrent users",
    ],
    skills: ["ReactJS", "Flutter", "TypeScript", "SQL", "Spring Boot", "MERN", "AWS", "REST APIs"],
  },
  {
    id: 2,
    company: "Salescode.ai",
    role: "Software Engineer Trainee",
    duration: "July 2025 – September 2025",
    period: "3 months",
    current: false,
    companyLink: "https://salescode.ai",
    location: "On-site, Gurugram",
    desc: "Built interactive dashboards and reusable UI components that transformed raw sales data into actionable visual insights, while delivering performant backend APIs.",
    bullets: [
      "Developed 10+ reusable UI components with Flutter, ReactJS, and Tailwind CSS, reducing average feature development time by 40%",
      "Implemented RESTful APIs with Node.js and Express, reducing average response time by 150ms and accelerating data retrieval for interactive dashboards",
      "Integrated MongoDB data pipelines to power real-time sales dashboards, turning complex datasets into clear, actionable visualizations",
    ],
    skills: ["ReactJS", "Flutter", "TypeScript", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
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

          {/* ── Left: Company Card ── */}
          <div className="companyCard" ref={ref}>
            <div className="logoBox">
              <img src={SALESCODE_LOGO} alt="Salescode.ai" className="companyLogo" />
            </div>

            <h3 className="companyName">{item.company}</h3>

            <div className="locationRow">
              <MdLocationOn />
              <span>{item.location}</span>
            </div>

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

          {/* ── Right: Job Details ── */}
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

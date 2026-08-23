import React, { useEffect, useRef, useState } from 'react'
import './portfolio.scss'
import { motion, useScroll, useSpring, useTransform } from 'framer-motion'
import { MdLaunch } from "react-icons/md";
import { FiChevronDown } from "react-icons/fi";
import { projects, moreProjects } from '../../utils/projects';

// A small click-to-open menu, closed on an outside click. Used for the project's
// several live demos and its several repositories.
const Menu = ({ label, items }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef();
  useEffect(() => {
    const onDoc = (e) => { if (ref.current && !ref.current.contains(e.target)) setOpen(false); };
    document.addEventListener('mousedown', onDoc);
    return () => document.removeEventListener('mousedown', onDoc);
  }, []);
  return (
    <div className="menu" ref={ref}>
      <button type="button" onClick={() => setOpen((o) => !o)}>
        {label} <FiChevronDown className={open ? 'flip' : ''} />
      </button>
      {open && (
        <div className="menuList">
          {items.map((it) => (
            <a key={it.url} href={it.url} target="blank" onClick={() => setOpen(false)}>{it.label}</a>
          ))}
        </div>
      )}
    </div>
  );
};

// The image on the left. A single screenshot, or — when a project ships several
// surfaces — a gallery whose thumbnails swap the main image. A screenshot that
// isn't there yet simply drops out rather than showing a broken frame.
const Media = ({ item, refEl }) => {
  const gallery = item.images?.length ? item.images : null;
  const [active, setActive] = useState(0);
  if (!gallery) {
    return (
      <div className="imageContainer" ref={refEl}>
        <img src={item.img} alt={item.title} />
      </div>
    );
  }
  return (
    <div className="imageContainer gallery" ref={refEl}>
      <img className="galleryMain" src={gallery[active].src} alt={`${item.title} — ${gallery[active].label}`}
        onError={(e) => { e.currentTarget.style.visibility = 'hidden'; }} />
      <div className="thumbs">
        {gallery.map((g, i) => (
          <button type="button" key={g.src} className={i === active ? 'active' : ''}
            onClick={() => setActive(i)}>
            <img src={g.src} alt={g.label}
              onError={(e) => { e.currentTarget.closest('button').style.display = 'none'; }} />
            <span>{g.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

const Single = ({ item }) => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useTransform(scrollYProgress, [0, 1], [-100, 100]);

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <Media item={item} refEl={ref} />
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <div className="tech">
              {item.technologies.map((tech) => (
                <div className="techItem" key={tech}>{tech}</div>
              ))}
            </div>
            <div className="buttons">
              {
                item.repos
                  ? <Menu label={<>See Code <b>&lt; &gt;</b></>} items={item.repos} />
                  : (
                    <>
                      <a href={item.code} target='blank'><button>See Code<b>&lt; &gt;</b></button></a>
                      {item?.appCode && (
                        <a href={item.appCode} target='blank'><button>App Code<b>&lt; &gt;</b></button></a>
                      )}
                    </>
                  )
              }
              {
                item.demos
                  ? <Menu label={<>Live Demo <MdLaunch /></>} items={item.demos} />
                  : item?.link && (
                    <a href={item?.link} target='blank'><button>Watch Live <MdLaunch /></button></a>
                  )
              }
              {item?.apk && (
                <a href={item.apk} target='blank'><button>Download App <MdLaunch /></button></a>
              )}
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
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 })

  return (
    <div className='portfolio' ref={ref}>
      <div className="progress">
        <h1>My Projects</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {projects.map(item => (
        <Single item={item} key={item.id} />
      ))}

      <section className="more">
        <div className="moreInner">
          <h2>More Projects</h2>
          <div className="moreGrid">
            {moreProjects.map((m) => (
              <div className="moreCard" key={m.id}>
                <h3>{m.title}</h3>
                <p>{m.desc}</p>
                <div className="tech">
                  {m.technologies.map((t) => <span key={t}>{t}</span>)}
                </div>
                <a href={m.code} target="blank"><button>See Code<b>&lt; &gt;</b></button></a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Portfolio

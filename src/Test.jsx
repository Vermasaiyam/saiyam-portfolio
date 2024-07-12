import React, { useState } from 'react'
import { delay, motion, spring, stagger } from 'framer-motion'
import './app.scss'

const Test = () => {
    const [open, setOpen] = useState(false);

    const variants = {
        visible: (i)=>( {opacity: 1, x: 100, transition: {delay: i*0.3}}),
        hidden: {opacity: 0},
    }

    const items = ["item1", "item2","item2", "item4"]
  return (
    <div className='course'>
        {/* <motion.div 
        className="box"
        variants={variants}
        // initial="hidden"
        // animate="visible"
        // transition={{duration: 2}}
        animate={open? "visible": "hidden"}
        >
        </motion.div>
        <button onClick={()=> setOpen(open=> !open)}>Click</button> */}
      
        <motion.ul initial="hidden" animate="visible" variants={variants}>
            {items.map((item, index) =>(
                <motion.li variants={variants} key={item} custom={index}>{item}</motion.li>

            ))}
        </motion.ul>
    </div>
  )
}

export default Test

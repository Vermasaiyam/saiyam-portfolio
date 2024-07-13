import React from 'react'
import "./cursor.scss"
import { useState } from 'react'
import { useEffect } from 'react';
import { motion } from 'framer-motion';

const Cursor = () => {
    const [position, setPosition] = useState({x:0, y:0});

    useEffect(()=>{
        const mouseMove = (e)=>{
            setPosition({x: e.clientX, y: e.clientY})
        }

        window.addEventListener('mousemove', mouseMove);
        // console.log(position);

        return ()=>{
            window.removeEventListener("mousemove", mouseMove);
        };
    }, []);
  return (
    <motion.div className='cursor' animate={{x:position.x+5, y:position.y+5}}>
      
    </motion.div>
  )
}

export default Cursor

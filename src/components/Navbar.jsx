import React, { useState } from 'react'
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { motion } from 'framer-motion'
import '../styles/Navbar.scss'
import { images } from '../constants'

const Navbar = () => {
    const [toggle, setToggle] = useState(false)
    return (
        <nav className='app__navbar'>
            <div className='app__navbar-logo' style={{width:'50px', height:'50px'}}>
                <img src={images.geekylogo} style={{width:'100%', height:'100%', objectFit:'contain'}} alt="logo" />
            </div>
            <ul className='app__navbar-links'>
                {['home',
                //  'about', 'work', 
                 'technologies', 'contact'].map((item) => (
                    <li className='app__flex p-text' key={`link-${item}`}>
                        <div />
                        <a href={`#${item}`}>{item}</a>
                    </li>
                ))}
            </ul>
            <div className="app__navbar-menu">
                <HiMenuAlt4 onClick={() => setToggle(true)} />
                {toggle && (
                    <motion.div
                        whileInView={{ x: [300, 0] }}
                        transition={{ duration: 0.85, ease: 'easeOut' }}
                    >
                        <HiX onClick={() => setToggle(false)} />
                        <ul >
                            {['home',
                            //  'about', 'work', 
                             'technologies', 'contact'].map((item) => (
                                <li key={item}>

                                    <a href={`#${item}`} onClick={() => setToggle(false)} >{item}</a>
                                </li>
                            ))}</ul>

                    </motion.div>
                )}
            </div>
        </nav>
    )
}

export default Navbar
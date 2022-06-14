import React from "react";
import "./navbar.css"
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from "react-icons/ai"
import {TbBook} from "react-icons/tb"
import {AiOutlineFundProjectionScreen} from "react-icons/ai"
import {TbSchool} from "react-icons/tb"
import {TbMessageCircle} from "react-icons/tb"
import {useState} from "react";


const Navbar = () => {
    const [activeNav, setActiveNav] = useState("#")
    return (
        <nav>
            <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><AiOutlineHome/></a>
            <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><AiOutlineUser/></a>
            <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><TbBook/></a>
            <a href="#projects" onClick={() => setActiveNav('#projects')} className={activeNav === '#projects' ? 'active' : ''}><AiOutlineFundProjectionScreen/></a>
            <a href="#education" onClick={() => setActiveNav('#education')} className={activeNav === '#education' ? 'active' : ''}><TbSchool/></a>
            <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><TbMessageCircle/></a>
        </nav>
    )
}
export default Navbar
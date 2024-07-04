import React from 'react'
import "../index.css"; // Ensure this path is correct and it includes your TailwindCSS imports
import aboutImg from "../assets/image2.jpg"
import { ABOUT_TEXT } from '../constants';
import {motion} from "framer-motion"

const About = () => {
  return <div className="border-b border-neutral-100 pb-4" >

    
    {/* <h2 className='my-20 text-center text-4xl'>About <span className='text-neutral-500 '>Me</span></h2> */}
    <h2 className='my-20 text-center text-4xl'><span className="bg-gradient-to-r from-blue-400 via-blue-300 to-sky-500 bg-clip-text text-4xl tracking-tight text-transparent">
                    About Me
                </span></h2>
    <div className="flex flex-wrap">
        <motion.div 
        whileInView={{opacity:1 , x:0}}
        initial={{opacity:0, x:-100}}
        transition={{duration: 0.5}}
        
        
        className="w-full lg:w-1/2 lg:p-8">
            <div className="flex items-center justify-center">
                <img className="rounded-2xl lg:w-4/5" src={aboutImg} alt="" />
            </div>
        </motion.div>
        <motion.div 
                whileInView={{opacity:1 , x:0}}
                initial={{opacity:0, x:100}}
                transition={{duration: 1}}
        
        
        
        className="w-full lg:w-1/2">
                <div className="flex justify-center lg:justify-start">
                    <p className='my-2 maxw-xl py-6 font-light text-zinc-800'>{ABOUT_TEXT}</p>
                </div>
            </motion.div>
    </div>
  </div>
}

export default About

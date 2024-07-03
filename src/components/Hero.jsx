import "../index.css"; // Ensure this path is correct and it includes your TailwindCSS imports
import "../constants";
import profilePic from "../assets/kevinRushProfile.png";
import { HERO_CONTENT } from "../constants";
import { motion } from "framer-motion"

const container = (delay) => ({
    hidden: {x:-100, opacity:0},
    visible:{
        x: 0,
        opacity: 1,
        transition: {duration: 0.5, delay: delay}

    }
})
const Hero = () => {
  return (
  
  <div className="border-b border-neutral-100 pb-4 lg:mb-35">

    <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
            <div className="flex flex-col items-center lg:items-start">
                <motion.h1 
                variants={container(0)}
                initial="hidden"
                animate="visible"
                
                className="pb-16 text-6xl text-zinc-500 font-thin tracking-tight lg:mt-16 lg:text-8xl">
                    Ming
                </motion.h1>
                <motion.span 
                                variants={container(0.5)}
                                initial="hidden"
                                animate="visible"
                
                className="bg-gradient-to-r from-blue-300 via-blue-200 to-sky-400 bg-clip-text text-3xl tracking-tight text-transparent">
                    Full Stack Developer
                </motion.span>

                <motion.p 
                    variants={container(1)}
                    initial="hidden"
                    animate="visible"
                    className="my-2 max-w-xl py-6 font-light tracking-tighter text-zinc-800">
                        {HERO_CONTENT}
                </motion.p>

            </div>
        </div>
        <div className=" w-full lg:w-1/2 lg:p-8">
            <div className="flex justify-center">
                <motion.img initial={{x:100 , opacity:0}} 
                animate={{x:0, opacity:1}}
                transition={{duration: 1, delay:1.4}}
                
                
                src={profilePic} alt="Kar Ming" />
            </div>
        </div>
    </div>
  </div>
  )
}

export default Hero
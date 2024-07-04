import "../index.css"; // Ensure this path is correct and it includes your TailwindCSS imports
import "../constants";
import profilePic from "../assets/image1.jpg";
import { HERO_CONTENT } from "../constants";
import { motion } from "framer-motion"

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay }
  }
})

const cursorVariants = {
  blinking: {
    opacity: [0, 0, 1, 1],
    transition: {
      duration: 1,
      repeat: Infinity,
      repeatDelay: 0,
      ease: "linear",
      times: [0, 0.5, 0.5, 1]
    }
  }
};

const textVariants = {
  hidden: { width: 10 },
  visible: {
    width: "50%",
    transition: {
      type: "tween",
      stiffness: 70,
      damping: 100,
      duration: 1,
      delay: 0.2,
    },
  },
};

const Hero = () => {
  return (
    <div className="border-b border-neutral-100 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.div 
              initial="hidden"
              animate="visible"
              variants={textVariants}
              style={{ overflow: "hidden", whiteSpace: "nowrap", display: "inline-block" }}
            >
              <h1 className="pb-16 text-6xl text-zinc-500 font-thin tracking-tight lg:mt-16 lg:text-8xl">
                Ming
              </h1>
            </motion.div>
            <motion.div
              variants={cursorVariants}
              animate="blinking"
              className="h-full w-1 bg-zinc-500"
              style={{ display: 'inline-block', marginLeft: '2px' }}
            />
            <motion.span
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r from-blue-400 via-blue-300 to-sky-500 bg-clip-text text-3xl tracking-tight text-transparent"
            >
              Full Stack Developer
            </motion.span>

            <motion.div
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="my-2 max-w-xl py-6 font-light tracking-tighter text-zinc-800"
            >
              {HERO_CONTENT.map((paragraph, index) => (
                <motion.p key={index} className="mb-4">
                  {paragraph}
                </motion.p>
              ))}
            </motion.div>
          </div>
        </div>

        <div className="w-auto lg:w-1/2 lg:p-32">
        <div className="flex justify-center ">
          <motion.img 
            initial={{ x: 100, opacity: 0 }} 
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 1.4 }}
            className= "drop-shadow-xl rounded-lg"
            src={profilePic} alt="Kar Ming" 
          />
        </div>
      </div>


      </div>
    </div>
  )
}

export default Hero;

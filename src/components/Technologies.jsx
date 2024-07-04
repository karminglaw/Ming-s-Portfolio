import {RiReactjsLine} from "react-icons/ri";
import {TbBrandNextjs} from "react-icons/tb";
import {SiMongodb} from "react-icons/si";
import {FaNodeJs} from "react-icons/fa";
import { DiJavascript } from "react-icons/di";
import { DiCss3 } from "react-icons/di";
import { DiHtml5 } from "react-icons/di";
import { animate, motion } from "framer-motion"




const Technologies = () => {
  return <div className="border-b border-neutral-100 pb-24">
    <h2 className="my-20 text-center text-4xl"><span className="bg-gradient-to-r from-blue-400 via-blue-300 to-sky-500 bg-clip-text text-4xl tracking-tight text-transparent">
                    Technologies
                </span></h2>
    <motion.div 


    
    
    className="flex flex-wrap items-center justify-center gap-4">
        <motion.div 
        whileInView={{opacity: 1, y: 0}}
        initial={{opacity: 0, y:-100}}
        transition={{duration:1, delay:0.5}}
        
        className="rounded-2xl border-4 border-zinc-100 shadow-lg p-6">
            <RiReactjsLine className="text-7xl text-cyan-400"/>
        </motion.div>

        <motion.div 
        whileInView={{opacity: 1, y: 0}}
        initial={{opacity: 0, y:-100}}
        transition={{duration:1, delay:0.7}}
        
        
        className="rounded-2xl border-4 border-zinc-100 shadow-lg p-6">
            <TbBrandNextjs className="text-7xl text-neutral-600"/>
        </motion.div>

        <motion.div 
        whileInView={{opacity: 1, y: 0}}
        initial={{opacity: 0, y:-100}}
        transition={{duration:1, delay:0.9}}
        
        className="rounded-2xl border-4 border-zinc-100 shadow-lg p-6">
            <SiMongodb className="text-7xl text-green-500"/>
        </motion.div>

        <motion.div 
        whileInView={{opacity: 1, y: 0}}
        initial={{opacity: 0, y:-100}}
        transition={{duration:1, delay:1.1}}      
        
        className="rounded-2xl border-4 border-zinc-100 shadow-lg p-6">
            <DiCss3 className="text-7xl text-blue-600"/>
        </motion.div>
        <motion.div 
          whileInView={{opacity: 1, y: 0}}
          initial={{opacity: 0, y:-100}}
          transition={{duration:1, delay:1.3}}
        
        className="rounded-2xl border-4 border-zinc-100 shadow-lg p-6">
            <DiHtml5 className="text-7xl text-red-700"/>
        </motion.div>

        <motion.div 
           whileInView={{opacity: 1, y: 0}}
           initial={{opacity: 0, y:-100}}
           transition={{duration:1, delay:1.5}}
        
        className="rounded-2xl border-4 border-zinc-100 shadow-lg p-6">
            <DiJavascript className="text-7xl text-yellow-500"/>
        </motion.div>

    </motion.div>
  </div>
}

export default Technologies

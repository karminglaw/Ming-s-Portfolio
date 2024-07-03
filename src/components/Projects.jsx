import { PROJECTS } from "../constants";
import { motion } from "framer-motion"

const Projects = () => {
    return (
      <div className="border-b border-neutral-50 pb-4">
        <motion.h2 
                whileInView={{opacity:1, y: 0}}
                initial={{opacity:0, y:-40}}
                transition={{duration: 0.5}}
        
        
        className="my-20 text-center text-4xl"><span className="bg-gradient-to-r from-blue-400 via-blue-300 to-sky-500 bg-clip-text text-4xl tracking-tight text-transparent">
  Projects
</span></motion.h2>
        <div>
          {PROJECTS.map((project, index) => (
            <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
              <motion.div 
                whileInView={{opacity:1, x: 0}}
                initial={{opacity:0, x:-70}}
                transition={{duration: 1}}       
              
              
              className="w-full lg:w-1/4">
                <img src={project.image} width={150} height={150} className="mb-6 rounded"  alt={project.title} />
              </motion.div>
              <motion.div 
                whileInView={{opacity:1, x: 0}}
                initial={{opacity:0, x:70}}
                transition={{duration: 1}}
                            
              
              className="w-full max-w-xl lg:w-3/4">
                <h6 className="mb-2 font-bold text-zinc-700">{project.title}</h6>
                <p className="mb-4 text-zinc-600">{project.description}</p>
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="mr-2 mt-4 rounded bg-slate-100 px-2 py-1 text-sm font-medium text-sky-700"
                  >
                    {tech}
                  </span>
                ))}
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default Projects;

  <h2 className="my-20 text-center text-4xl"><span className="bg-gradient-to-r from-blue-400 via-blue-300 to-sky-500 bg-clip-text text-4xl tracking-tight text-transparent">
  Technologies
</span></h2>
import { CONTACT } from "../constants";
import { motion } from "framer-motion"

const Contact = () => {
  return (
    <div className="border-b border-slate-50 pb-20">
      <motion.h2 
        whileInView={{opacity:1, y: 0}}
        initial={{opacity:0, y:-40}}
        transition={{duration: 0.5}}
      
      className="my-5 text-center text-4xl"><span className="bg-gradient-to-r from-blue-400 via-blue-300 to-sky-500 bg-clip-text text-4xl tracking-tight text-transparent">
      Contact Me
</span></motion.h2>
      <div className="text-center tracking-tighter">
        <p className="my-4 text-zinc-600">{CONTACT.phoneNo}</p>
        <a href="#" className="border-b text-zinc-600">
          {CONTACT.email}
        </a>
      </div>
    </div>
  );
};

export default Contact;

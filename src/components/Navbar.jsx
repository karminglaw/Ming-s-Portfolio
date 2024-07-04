import logo from "../assets/kevinRushLogo.png";
import "../index.css"; // Ensure this path is correct and it includes your TailwindCSS imports
import {FaLinkedin, FaTwitterSquare} from "react-icons/fa"
import {FaGithub} from "react-icons/fa"
import { MdEmail } from "react-icons/md";

import {FaInstagram} from "react-icons/fa"



const Navbar = () => {
    return (
      <nav className="mb-20 flex items-center justify-between py-6">
        <div className="flex flex-shrink-0 items-center">
          <img className="mx-2 w-10" src={logo} alt="logo" />
        </div>
        <div className="m-8 flex items-center bg-gradient-to-r  text-blue-600 justify-center gap-4 text-2xl">
          <a href="https://www.linkedin.com/in/kar-ming-law-2120952aa/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://github.com/karminglaw" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a href="https://www.instagram.com/kxrming/" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
          <a href="mailto:lawming234@gmail.com" target="_blank" rel="noopener noreferrer">
            <MdEmail />
          </a>
        </div>
      </nav>
    );
  };

export default Navbar;

  
  
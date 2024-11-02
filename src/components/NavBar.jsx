import logo from "../assets/nsLogo.png";
import { FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa";

const NavBar = () => {
  return (
    <nav className="mb-12 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img className="mx-2 w-12 cursor-pointer" src={logo} alt="logo" />
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a 
          href="https://www.linkedin.com/in/niharika-sharma-32757724b/" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <FaLinkedinIn />
        </a>
        <a 
          href="https://github.com/Niharika209" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>
        <a 
          href="https://www.instagram.com/_niharika.9__/" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <FaInstagram />
        </a>
      </div>
    </nav>
  );
};

export default NavBar;

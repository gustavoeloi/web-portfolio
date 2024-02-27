import { motion, useAnimation } from "framer-motion";
import { Menu } from "lucide-react";
import { X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const controls = useAnimation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    controls.start({ opacity: isMenuOpen ? 0 : 1, x: isMenuOpen ? -100 : 0 });
  };

  return (
    <header className="flex flex-wrap sm:justify-center sm:flex-nowrap z-50 w-full text-2xl md:text-3xl text-gray-400 py-8 sm:py-16">
      <nav className="max-w-[85rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between">
        <div className="flex items-center justify-between">
          <a
            className="flex-none text-3xl md:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 font-extrabold"
            href="/"
          >
            Gustavo Eloi
          </a>
          <div className="sm:hidden">
            <button
              className="text-gray-600 focus:outline-none"
              onClick={toggleMenu}
            >
              {!isMenuOpen ? <Menu size={24} /> : <X size={24} />}
            </button>
          </div>
        </div>
        <motion.div
          animate={controls}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="sm:hidden mt-4 sm:mt-0"
        >
          <ul className="flex flex-col gap-16 mt-8 sm:flex-row sm:items-center sm:justify-end sm:mt-0 sm:ps-5">
            <motion.li
              className="font-medium hover:text-gray-200"
              onClick={toggleMenu}
            >
              <Link to="/projects">Projetos</Link>
            </motion.li>
            <motion.li
              className="font-medium hover:text-gray-200"
              onClick={toggleMenu}
            >
              <Link to="/about">Sobre</Link>
            </motion.li>
            <motion.li
              className="font-medium hover:text-gray-200"
              onClick={toggleMenu}
            >
              <Link to="/contact">Contato</Link>
            </motion.li>
          </ul>
        </motion.div>
        <div className="hidden basis-full grow sm:block">
          <ul className="flex flex-col gap-16 sm:flex-row sm:items-center sm:justify-end sm:mt-0 sm:ps-5">
            <li className="font-medium hover:text-gray-200">
              <Link to="/projects">Projetos</Link>
            </li>
            <li className="font-medium hover:text-gray-200">
              <Link to="/about">Sobre</Link>
            </li>
            <li className="font-medium hover:text-gray-200">
              <Link to="/contact">Contato</Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

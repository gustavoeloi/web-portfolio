import { Link } from "react-scroll";

import emojiComputer from "@/assets/images/EmojiComputer.png";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useSpring, animated } from "react-spring";

const navLinks = [
  { id: 1, label: "About", to: "about" },
  { id: 2, label: "Projects", to: "projects" },
  { id: 3, label: "Contact", to: "contact" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuAnimation = useSpring({
    transform: isMenuOpen ? "translateX(0%)" : "translateX(100%)",
    opacity: isMenuOpen ? 1 : 0,
  });

  return (
    <header className="fixed flex items-center justify-between w-full text-base py-4 lg:px-10 backdrop-blur-sm border-b border-teal-300 bg-gradient-to-r bg-black from-transparent via-blue-300/20 to-transparent z-50">
      <div className="flex px-3 items-center">
        <div className="flex items-center justify-center gap-2">
          <img src={emojiComputer} className="w-14 h-14" alt="Emoji Computer" />
          <h1 className="ml-2 font-extrabold text-transparent text-3xl md:text-4xl bg-clip-text bg-gradient-to-r from-cyan-600 to-teal-600 p-2 font-signature">
            Gustavo Eloi
          </h1>
        </div>
      </div>
      <ul className="hidden md:flex">
        {navLinks.map((item) => (
          <Link key={item.id} to={item.to} smooth={true} duration={500}>
            <li className="px-4 cursor-pointer text-2xl capitalize font-medim text-gray-400 hover:scale-105 duration-200">
              {item.label}
            </li>
          </Link>
        ))}
      </ul>

      <div
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
      >
        {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
      </div>

      <animated.ul
        style={menuAnimation}
        className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500 z-100"
      >
        {navLinks.map((item) => (
          <Link
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            key={item.id}
            to={item.to}
            smooth={true}
            duration={500}
            offset={-100}
          >
            <li className="px-4 cursor-pointer capitalize py-6 text-4xl">
              {item.label}
            </li>
          </Link>
        ))}
      </animated.ul>
    </header>
  );
};

export default Header;

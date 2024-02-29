import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-scroll";

const navLinks = [
  { id: 3, label: "About", to: "about" },
  { id: 2, label: "Projects", to: "projects" },
  { id: 4, label: "Contact", to: "contact" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 flex  items-start mx-auto w-full xl:items-center backdrop-blur-sm border-b border-teal-300 bg-gradient-to-r bg-black from-transparent via-blue-300/20 to-transparent z-50">
      <div className="flex justify-between items-center h-32 px-4 py-12 w-full">
        <div className="cursor-pointer">
          <Link to="main" smooth={true} duration={500}>
            <h1 className="ml-2 font-extrabold text-transparent text-4xl md:text-5xl bg-clip-text bg-gradient-to-r from-cyan-600 to-teal-600 p-2 font-signature">
              Gustavo Eloi
            </h1>
          </Link>
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

        {isMenuOpen && (
          <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
            {navLinks.map((item) => (
              <Link
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                key={item.id}
                to={item.to}
                smooth={true}
                duration={500}
              >
                <li className="px-4 cursor-pointer capitalize py-6 text-4xl">
                  {item.label}
                </li>
              </Link>
            ))}
          </ul>
        )}
      </div>
    </header>
  );
};

export default Navbar;

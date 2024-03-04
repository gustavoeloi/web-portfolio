import { Link } from "react-scroll";
import MenuMobile from "./MenuMobile";

const navLinks = [
  { id: 3, label: "About", to: "about" },
  { id: 2, label: "Projects", to: "projects" },
  { id: 4, label: "Contact", to: "contact" },
];

const Header = () => {
  return (
    <header className="flex items-center justify-between w-full text-base py-4 lg:px-10 backdrop-blur-sm border-b border-teal-300 bg-gradient-to-r bg-black from-transparent via-blue-300/20 to-transparent z-50">
      <div className="flex px-3 items-center">
        <h1 className="ml-2 font-extrabold text-transparent text-4xl md:text-5xl bg-clip-text bg-gradient-to-r from-cyan-600 to-teal-600 p-2 font-signature">
          Gustavo Eloi
        </h1>
      </div>

      <div className="lg:hidden">
        <MenuMobile />
      </div>

      <nav className="hidden lg:block">
        <ul className="lg:flex justify-around gap-3">
          {navLinks.map((item) => (
            <Link
              key={item.id}
              to={item.to}
              smooth={true}
              duration={500}
              offset={-70}
            >
              <li className="px-4 cursor-pointer text-2xl capitalize font-medim text-gray-400 hover:scale-105 duration-200">
                {item.label}
              </li>
            </Link>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;

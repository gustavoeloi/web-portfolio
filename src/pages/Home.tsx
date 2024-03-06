import { useState, useEffect } from "react";

import myPicture from "@/assets/images/myPicture.jpg";
import handEmoji from "@/assets/images/EmojiHand.png";
import {
  ArrowRight,
  ChevronsDown,
  Github,
  Linkedin,
  Mails,
  Newspaper,
} from "lucide-react";
import TimeLine from "@/components/TimeLine";
import { motion } from "framer-motion";
import "react-simple-typewriter/dist/index";
import { Typewriter, Cursor } from "react-simple-typewriter/dist/index";
import { Link } from "react-scroll";

import Contact from "./Contact";
import Projects from "./Projects";
import About from "./About";
import Skills from "./Skills";

const Home = () => {
  const [showArrow, setShowArrow] = useState(true);
  const links = [
    {
      id: 1,
      child: {
        platform: "LinkedIn",
        icon: <Linkedin size={30} />,
      },
      href: "https://www.linkedin.com/in/gustavooeloi/",
      style: "rounded-tr-md",
    },
    {
      id: 2,
      child: {
        platform: "Github",
        icon: <Github size={30} />,
      },
      href: "https://github.com/gustavoeloi",
    },
    {
      id: 3,
      child: {
        platform: "E-mail",
        icon: <Mails size={30} />,
      },
      href: "mailto:gustavooeloi@gmail.com",
    },
    {
      id: 4,
      child: {
        platform: "Resume",
        icon: <Newspaper size={30} />,
      },
      href: "https://www.google.com",
      style: "rounded-b-md",
    },
  ];

  const handleScroll = () => {
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    const scrollPosition = window.scrollY;

    if (windowHeight + scrollPosition >= documentHeight - 50) {
      setShowArrow(false);
    } else {
      setShowArrow(true);
    }
  };

  const arrowVariants = {
    initial: { y: 0 },
    animate: {
      y: [0, -10, 0],
      transition: { y: { repeat: Infinity, duration: 1.5 } },
    },
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    // remover o ouvinte de evento ao desmontar o componente
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 text-base">
      <main
        id="main"
        className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full gap-12 px-4 md:flex-row"
      >
        <motion.div
          style={{
            position: "fixed",
            bottom: "1rem",
            left: "50%",
            translateX: "-50%",
            cursor: "pointer",
            zIndex: 0,
            opacity: showArrow ? 0.3 : 0,
          }}
          variants={arrowVariants}
          initial="initial"
          animate="animate"
        >
          <ChevronsDown size={44} color="#ffffff" />
        </motion.div>
        <div className="flex flex-col justify-center h-full">
          <p className="flex text-white font-bold items-center text-xl sm:text-3xl gap-2 ">
            Hi! <img src={handEmoji} alt="handEmoji" className="max-h-10 " />
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold text-bold text-white">
            I'm{" "}
            <span className="bg-clip-text bg-gradient-to-r from-cyan-600 to-teal-600 text-transparent">
              <Typewriter
                words={["Gustavo Eloi", "Web Developer"]}
                loop={5}
                deleteSpeed={50}
                delaySpeed={1000}
                typeSpeed={60}
              />
            </span>
            <Cursor cursorStyle="_" />
          </h1>
          <h2 className="text-gray-500 py-4 max-w-md text-lg ">
            <span className="font-bold">Web Developer</span>. I love to work on
            web application using technologies like React, Angular, Tailwind.
            NextJS, Spring Boot, NodeJS, MongoDB, Firebase and PostgreSQL
          </h2>
          <ul className="md:hidden flex gap-8 py-4">
            {links.map((link) => (
              <li key={link.id} className="text-white">
                <a href={link.href} target="_blank">
                  {link.child.icon}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex gap-4">
            <Link
              to="projects"
              smooth={true}
              duration={500}
              offset={-50}
              className="text-cyan-600 w-2/4 px-6 py-3 my-2 border-2 border-cyan-600 rounded-md"
            >
              <button className="w-full">Projects</button>
            </Link>

            <Link
              to="contact"
              smooth={true}
              duration={500}
              offset={-50}
              className="text-white w-2/4 px-6 py-3 my-2  rounded-md bg-gradient-to-r from-cyan-600 to-teal-600"
            >
              <button className="flex items-center justify-center w-full">
                Contact <ArrowRight size={25} className="ml-1" />
              </button>
            </Link>
          </div>
        </div>
        <div className="hidden md:block">
          <img
            src={myPicture}
            alt="Emoji Man With Computer"
            className="rounded-2xl mx-auto w-2/3 md:w-96"
          />
        </div>
      </main>

      <TimeLine />

      <About />
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
};

export default Home;

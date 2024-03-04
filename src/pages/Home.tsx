import myPicture from "@/assets/images/myPicture.jpg";
import handEmoji from "@/assets/images/EmojiHand.png";
import { ArrowRight, ChevronsDown } from "lucide-react";
import TimeLine from "@/components/TimeLine";
import { motion } from "framer-motion";
import About from "./About";
import "react-simple-typewriter/dist/index";
import { Typewriter, Cursor } from "react-simple-typewriter/dist/index";

import Projects from "./Projects";
import Experience from "./Experience";

const Home = () => {
  const arrowVariants = {
    initial: { y: 0 },
    animate: {
      y: [0, -10, 0],
      transition: { y: { repeat: Infinity, duration: 1.5 } },
    },
  };

  return (
    <div className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 text-base">
      <main
        id="main"
        className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full gap-12 px-4 md:flex-row"
      >
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
            Web Developer. I love to work on web application using technologies
            like React, Angular, Tailwind. NextJS, Spring Boot, NodeJS, MongoDB,
            Firebase and PostgreSQL
          </h2>

          <div className="flex gap-4">
            <button className="text-cyan-600 w-2/4 px-6 py-3 my-2 border-2 border-cyan-600 rounded-md">
              Projects
            </button>
            <button className="group text-white w-2/4 px-6 py-3 my-2 flex items-center justify-center rounded-md bg-gradient-to-r from-cyan-600 to-teal-600">
              Contact <ArrowRight size={25} className="ml-1" />
            </button>
          </div>
        </div>
        <div className="hidden md:block">
          <img
            src={myPicture}
            alt="Emoji Man With Computer"
            className="rounded-2xl mx-auto w-2/3 md:w-96"
          />
        </div>
        <motion.div
          style={{
            position: "fixed",
            bottom: "1rem",
            left: "50%",
            translateX: "-50%",
            cursor: "pointer",
            zIndex: 0,
            opacity: 0.3,
          }}
          variants={arrowVariants}
          initial="initial"
          animate="animate"
        >
          <ChevronsDown size={44} color="#ffffff" />
        </motion.div>
      </main>

      <TimeLine />

      <About />
      <Projects />
      <Experience />
    </div>
  );
};

export default Home;

import myPicture from "@/assets/images/myPicture.jpg";
import handEmoji from "@/assets/images/EmojiHand.png";
import { ArrowRight, ChevronsDown } from "lucide-react";
import TimeLine from "@/components/TimeLine";
import { motion } from "framer-motion";
import About from "./About";

import { Link } from "react-scroll";

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
          <h1 className="text-4xl sm:text-7xl font-bold text-bold text-white">
            I'm{" "}
            <span className="bg-clip-text bg-gradient-to-r from-cyan-600 to-teal-600 text-transparent">
              Gustavo Eloi
            </span>
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
            position: "absolute",
            bottom: "1rem",
            left: "50%",
            translateX: "-50%",
            cursor: "pointer",
          }}
          variants={arrowVariants}
          initial="initial"
          animate="animate"
        >
          <Link to="timeline" smooth={true} duration={500}>
            <ChevronsDown size={64} color="#ffffff" />
          </Link>
        </motion.div>
      </main>

      <TimeLine />

      <About />
    </div>
  );
};

export default Home;

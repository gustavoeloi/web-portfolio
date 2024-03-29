import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

const About = () => {
  const thisYear = new Date().getFullYear();
  const myBirthday = thisYear - 2004;

  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      const aboutSection = document.getElementById("about");
      if (aboutSection) {
        const offset = window.innerHeight * 0.7; // Adjust the offset as needed
        const aboutSectionTop = aboutSection.getBoundingClientRect().top;

        if (aboutSectionTop < offset) {
          controls.start({ opacity: 1, y: 0 });
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup event listener on component unmount
    return () => window.removeEventListener("scroll", handleScroll);
  }, [controls]);

  return (
    <div className="w-full h-screen bg-gradient-to-t from-gray-800 to-black text-white font-base py-32 md:py-0">
      <motion.div
        className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full"
        initial={{ opacity: 0, y: 20 }}
        animate={controls}
        transition={{ duration: 0.6 }}
      >
        <div className="pb-8">
          <p
            id="about"
            className="text-4xl font-bold inline-block border-b-4 border-teal-600"
          >
            About
          </p>
        </div>
        <p className="text-xl mt-20 text-justify">
          Hello! I'm Gustavo Eloi, a {myBirthday}-year-old web development
          enthusiast currently living in Brasília, the capital of Brazil. My
          journey into programming began out of curiosity, and ever since,
          crafting creative solutions for people's everyday needs has become my
          passion. Over time, I've honed my skills in technologies such as
          React, Angular, and delved into backend development with technologies
          like Spring Boot and Node.js, working with various databases,
          including MongoDB, Firebase, and PostgreSQL.
        </p>
        <br />
        <p className="text-xl text-justify">
          I believe in the power of technology to solve problems and enhance our
          lives. Whether it's designing intuitive interfaces or architecting
          robust backend systems, I am committed to delivering high-quality
          solutions that make a positive impact. When I'm not coding, I enjoy
          exploring the latest trends in web development, contributing to
          open-source projects, and savoring a good cup of coffee while
          brainstorming new ideas. Let's connect and create something amazing
          together!
        </p>
      </motion.div>
    </div>
  );
};

export default About;

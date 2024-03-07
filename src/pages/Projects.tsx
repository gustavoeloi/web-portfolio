import { useEffect, useState } from "react";
import geprodHome from "@/assets/images/geprod-home.png";
import sbmProject from "@/assets/images/sbm-project.png";
import ocebHome from "@/assets/images/oceb-home.png";

import { motion, useAnimation } from "framer-motion";

import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

const Projects = () => {
  const portfolioProjects = [
    {
      id: 1,
      src: geprodHome,
      alt: "Screenshot of Geprod website Home",
      href: "https://geprod.mma.gov.br/homepage",
      description:
        "Web development with Angular and Spring Boot for the Ministry of the Environment to manage national and international environmental projects.",
      technologies: [
        {
          id: 1,
          name: "Angular",
        },
        {
          id: 2,
          name: "Spring Boot",
        },
        {
          id: 3,
          name: "PostGreSQL",
        },
        {
          id: 4,
          name: "BootStrap",
        },
      ],
    },
    {
      id: 2,
      src: ocebHome,
      alt: "Screenshot of OCEB website Home",
      href: "https://www.oceb.com.br/",
      description:
        "A SPA (Single Page Application) made for a religious institution to showcase its work and scheduled courses.",
      technologies: [
        {
          id: 5,
          name: "React",
        },
        {
          id: 6,
          name: "Tailwind",
        },
        {
          id: 7,
          name: "Firebase",
        },
        {
          id: 8,
          name: "Shadcn/ui",
        },
      ],
    },
    {
      id: 3,
      src: sbmProject,
      alt: "Screenshot of SBM project",
      href: "https://www.google.com.br/",
      description: "A web application developed to control a small business",
      technologies: [
        {
          id: 9,
          name: "Angular",
        },
        {
          id: 10,
          name: "Spring",
        },
        {
          id: 11,
          name: "PostgreSQL",
        },
        {
          id: 12,
          name: "Angular Material",
        },
      ],
    },
  ];

  const controls = useAnimation();
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const projectsSection = document.getElementById("projects");

      if (projectsSection && !hasAnimated) {
        const sectionTop = projectsSection.offsetTop;
        const sectionBottom = sectionTop + projectsSection.offsetHeight;
        const scrollPosition = window.scrollY + window.innerHeight;

        if (scrollPosition > sectionTop && scrollPosition < sectionBottom) {
          controls.start({ opacity: 1, y: 0 });
          setHasAnimated(true); // Definir o estado para true após a animação
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [controls, hasAnimated]);

  return (
    <div
      id="projects"
      className="bg-gradient-to-t from-black to-gray-800 w-full text-white font-base md:h-screen py-32 md:py-0"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline-block border-b-4 border-teal-600">
            Projects
          </p>
          <p className="py-7">Check out some of my work right here</p>
        </div>

        <motion.div
          className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0"
          initial={{ opacity: 0, y: 20 }}
          animate={controls}
          transition={{ duration: 0.6 }}
        >
          {portfolioProjects.map((project) => (
            <div
              key={project.id}
              className="shadow-md shadow-gray-600 rounded-lg h-full"
            >
              <div className="relative hover:scale-105">
                <Link to={project.href} target="_blank">
                  <motion.img
                    src={project.src}
                    alt={project.alt}
                    className="rounded-mg duration-200  hover:filter hover:brightness-75 h-44 w-full object-cover"
                    whileHover={{ scale: 1.05 }}
                  />
                  <motion.div className="overlay-icon">
                    <ExternalLink size={30} className="text-white" />
                  </motion.div>
                </Link>
              </div>

              <motion.div
                className="w-full p-4 flex flex-wrap items-center gap-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                {project.technologies?.map(({ id, name }) => (
                  <Badge key={id} className="bg-teal-600 text-white">
                    {name}
                  </Badge>
                ))}
              </motion.div>

              <div className="p-4 ">
                <p className="text-justify text-sm text-gray-300">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;

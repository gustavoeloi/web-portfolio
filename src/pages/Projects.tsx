import geprodHome from "@/assets/images/geprod-home.png";
import demoProject from "@/assets/images/demo-project.jpg";
import ocebHome from "@/assets/images/oceb-home.png";

import { Badge } from "@/components/ui/badge";

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
          id: 1,
          name: "React",
        },
        {
          id: 2,
          name: "Tailwind",
        },
        {
          id: 3,
          name: "Firebase",
        },
        {
          id: 4,
          name: "Shadcn/ui",
        },
      ],
    },
    {
      id: 3,
      src: demoProject,
      alt: "DemoImage",
      href: "https://github.com/gustavoeloi",
      description: "Just a mock card to fill my 3 column grid.",
      technologies: [
        {
          id: 1,
          name: "Angular",
        },
        {
          id: 2,
          name: "Spring Boot",
        },
      ],
    },
  ];

  return (
    <div
      id="projects"
      className="bg-gradient-to-t from-black to-gray-800 w-full text-white font-base md:h-screen py-32 md:py-0"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-teal-600">
            Projects
          </p>
          <p className="py-7">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolioProjects.map((project) => (
            <div
              key={project.id}
              className="shadow-md shadow-gray-600 rounded-lg h-full"
            >
              <img
                src={project.src}
                alt={project.alt}
                className="rounded-mg duration-200 hover:scale-105 h-44 w-full object-cover"
              />

              <div className="w-full p-4 flex flex-wrap items-center gap-2">
                {project.technologies?.map(({ id, name }) => (
                  <Badge key={id} className="bg-teal-600 text-white">
                    {name}
                  </Badge>
                ))}
              </div>
              <div className="p-4 justiy">
                <p className="text-justify text-sm text-gray-300">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;

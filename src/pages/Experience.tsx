const Experience = () => {
  const techs = [
    {
      id: 1,
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
      alt: "HTML",
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
      alt: "TailwindCSS",
      title: "TailwindCSS",
      style: "shadow-sky-500",
    },
    {
      id: 3,
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angular/angular-original.svg",
      alt: "Angular",
      title: "Angular",
      style: "shadow-red-500",
    },
    {
      id: 4,
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
      alt: "React",
      title: "React",
      style: "shadow-blue-500",
    },
    {
      id: 5,
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg",
      alt: "NodeJS",
      title: "NodeJS",
      style: "shadow-green-500",
    },
    {
      id: 6,
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg",
      alt: "Spring",
      title: "Spring",
      style: "shadow-lime-400",
    },
    {
      id: 7,
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
      alt: "JavaScript",
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 8,
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg",
      alt: "Firebase",
      title: "Firebase",
      style: "shadow-orange-500",
    },
    {
      id: 9,
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg",
      alt: "Java",
      title: "Java",
      style: "shadow-red-500",
    },
    {
      id: 10,
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
      alt: "Git",
      title: "Git",
      style: "shadow-orange-600",
    },
  ];

  return (
    <div className="bg-gradient-to-t from-gray-800 to-black w-full h-screen font-base">
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <h3 className="text-4xl font-bold border-b-4 border-y-teal-600 p-2 inline-block">
            Skills
          </h3>
          <p>
            These are the technologies I have worked with or have been studying
          </p>

          <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
            {techs.map(({ id, src, title, style, alt }) => (
              <div
                key={id}
                className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
              >
                <img src={src} alt={alt} className="w-20 mx-auto" />
                <p className="mt-4 font-medium font-base ">{title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;

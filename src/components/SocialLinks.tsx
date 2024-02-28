import { Mails, Github, Linkedin, Newspaper } from "lucide-react";

const SocialLinks = () => {
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

  return (
    <div className="hidden lg:flex flex-col top-[35%] left-0 fixed">
      <ul>
        {links.map((link) => (
          <li
            className={
              "flex justify-betweem items-center w-40 h-14 px-4  ml-[-100px] hover:ml-[-10px] hover:rounded-md  duration-300 bg-gray-500 " +
              link.style
            }
            key={link.id}
          >
            <a
              href={link.href}
              className="flex justify-between items-center w-full text-white"
              target="_blank"
              rel="noreferrer"
            >
              {link.child.platform}
              {link.child.icon}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialLinks;

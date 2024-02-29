const About = () => {
  const thisYear = new Date().getFullYear();
  const myBirthday = thisYear - 2004;

  return (
    <div className="w-full h-screen bg-gradient-to-t from-gray-800 to-black text-white font-base">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p
            id="about"
            className="text-4xl font-bold inline border-b-4 border-gray-400"
          >
            About
          </p>
        </div>
        <p className="text-xl mt-20">
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
        <p className="text-xl">
          I believe in the power of technology to solve problems and enhance our
          lives. Whether it's designing intuitive interfaces or architecting
          robust backend systems, I am committed to delivering high-quality
          solutions that make a positive impact. When I'm not coding, I enjoy
          exploring the latest trends in web development, contributing to
          open-source projects, and savoring a good cup of coffee while
          brainstorming new ideas. Let's connect and create something amazing
          together!
        </p>
      </div>
    </div>
  );
};

export default About;

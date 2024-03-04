const Experience = () => {
  return (
    <div className="bg-gradient-to-t from-gray-800 to-black w-full h-screen">
      <div className="mx-w-screen mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <h3 className="text-4xl font-bold border-b-4 border-y-teal-600 p-2 inline">
            Skills
          </h3>
          <p>
            These are the technologies I have worked with or have been studying
          </p>

          <div>
            <div>
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg"
                alt="HTML Icon"
                className="w-7"
              />
              <p>HTML</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;

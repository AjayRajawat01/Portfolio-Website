import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
        Hi, I'm Ajay Singh Rajawat, a Software Developer enthusiast 👨‍💻 from India 🇮🇳
        Currently,I'm a Master's Student of Netaji Subhas University of Technology Delhi. 
        Keen enthusiast to learn new things and love ❤️ building and exploring things. 
        Beside's this,I am highly passinate about Blockchain Technology and loves to talk 
        about its implementation and use cases.<br></br>
        🎯Qualified GATE with 97 percentile and AIR 2822
        </p>

        <br />

        <p className="text-xl">
        💻 Things I love<br></br>
        ✍️ Enjoy Learning Reading & Writing about Technical and Financial Blogs <br></br>

        💡 Talks about crypto and stock market investment.<br></br>

        🌱 I like to explore new technologies and develop software solutions and quick hacks.<br></br><br></br>

        Simply a Computer science student who is always ready to enhance and work on problem-solving skills 
        </p>
      </div>
    </div>
  );
};

export default About;

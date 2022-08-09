import React from "react";
import ajayroomchat from "../assets/portfolio/ajayroomchat.jpg";
import landregistry from "../assets/portfolio/landregistry.jpeg";
import algotrading from "../assets/portfolio/algotrading.jpg";


const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: ajayroomchat,
      href: "https://github.com/AjayRajawat01",
    },
    {
      id: 2,
      src: algotrading,
    },
    {
      id: 3,
      src: landregistry,
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Projects
          </p>
          <p className="py-6">Check out some of my projects right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
            <div key={1} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={ajayroomchat}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
              <form
                action="https://ajay-room-chat.vercel.app/"
                >
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Demo
                </button>
                </form>
                <div className="flex items-center justify-center">
              <form
                action="https://github.com/AjayRajawat01/Real-time-chat-application"
                >
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Code
                </button>
                </form>
                </div>
              </div>
            </div>
            <div key={2} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={algotrading}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
              <form
                action="https://medium.com/@AjayRajawat01"
                >
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Medium
                </button>
                </form>
              <div className="flex items-center justify-center">
              <form
                action="https://github.com/AjayRajawat01/"
                >
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Code
                </button>
                </form>
                </div>
              </div>
            </div>
            <div key={3} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={landregistry}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
              <form
                action="https://medium.com/@AjayRajawat01/land-registry-using-blockchain-dc8bf7e33722"
                >
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Medium
                </button>
                </form>
                <div className="flex items-center justify-center">
              <form
                action="https://github.com/AjayRajawat01/Land_Registry_Contract"
                >
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Code
                </button>
                </form>
                </div>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;

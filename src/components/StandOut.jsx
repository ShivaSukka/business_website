import React from "react";
import bgImage from "../assets/images/bulb.jpg"; // This stays as the background

const StandOut = () => (
  <section
    className="px-4 bg-cover bg-center bg-no-repeat min-h-screen flex items-center"
    style={{
      backgroundImage: `url(${bgImage})`,
    }}
  >
    <div className="max-w-3xl text-left text-white">
      <h1 className="text-3xl font-extrabold mb-5 pl-5">Why We Stand Out</h1>
      <p className="text-lg w-100 font-bold mb-6 pl-5">
        At Websort, we don't just build digital products—we build careers. By joining our team,
        you become part of a creative and collaborative environment that values innovation,
        continuous learning, and personal growth.
      </p>
      <button className="ml-5 relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
        <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
          Explore More
        </span>
      </button>
    </div>
  </section>
);

export default StandOut;

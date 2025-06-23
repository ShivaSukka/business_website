import React from "react";
import bgImage from "../assets/images/old.jpg"; // This stays as the background

const SeeOurWork = () => (
  <section
    className="px-4 bg-cover bg-center bg-no-repeat min-h-screen flex items-start justify-end"
    style={{
      backgroundImage: `url(${bgImage})`,
    }}
  >
    <div className="max-w-3xl text-center text-white mt-5 ">
      <h1 className="text-2xl font-extrabold mb-5">See Our Work</h1>
      <p className="text-lg font-bold mb-6">
        We specialize in building responsive, user-friendly websites tailored to clients' needs.
        Take a look at our recent projects to see how design and functionality come together.
      </p>
      <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
        <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
          Explore More
        </span>
      </button>
    </div>
  </section>
);

export default SeeOurWork;

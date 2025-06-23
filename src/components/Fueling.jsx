import React from "react";
import bgImage from "../assets/images/fueling.jpg"; // This stays as the background
import pipImage from "../assets/images/ai.jpg";     // This image appears inside the content box

const Fueling = () => (
  <section
    className="pt-20 pb-16 text-center px-4 bg-cover bg-center bg-no-repeat min-h-screen flex flex-col justify-center items-center"
    style={{
      backgroundImage: `url(${bgImage})`,
    }}
  >
    <div className="bg-black bg-opacity-50 p-8 rounded-md max-w-3xl">
      <h1 className="text-3xl md:text-2xl font-extrabold text-white">
        Fueling the Future with AI
      </h1>

      {/* 👇 PIP Image added here */}
      <img
        src={pipImage}
        alt="AI illustration"
        className="mt-6 w-full max-w-md mx-auto rounded shadow-lg"
      />

     
    </div>
     <button
        type="button"
        className="mt-6 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-6 py-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
      >
        Know More
      </button>
  </section>
);

export default Fueling;

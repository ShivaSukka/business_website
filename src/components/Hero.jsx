import React from "react";
import bgImage from "../assets/images/hhii.jpg";

const Hero = () => (
  <section
    className="pt-20 pb-16 text-center px-4 bg-cover bg-center bg-no-repeat min-h-screen flex flex-col justify-center items-center"
    style={{
      backgroundImage: `url(${bgImage})`,
    }}
  >
    <div className="bg-black bg-opacity-50 p-8 rounded-md">
      <h1 className="text-3xl md:text-5xl font-extrabold text-white">
        Welcome to WebSort
      </h1>
      <p className="mt-4 max-w-xl mx-auto text-white text-base md:text-lg">
        {/* Insert Figma’s hero subtitle here */}
        Empowering businesses with innovative solutions.
      </p>
      <button className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700">
        Get Started
      </button>
    </div>
  </section>
);

export default Hero;

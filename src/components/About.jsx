import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="py-16 px-6"
      style={{ backgroundColor: "#f5eceb" }}
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">About Us</h2>
        <p className="text-lg font-bold text-gray-700 mb-6">
          Where Innovation Meets Execution
        </p>
        <p className="text-gray-700 text-base md:text-lg">
          WebSort builds websotes,apps, and digital marketing solutions to help you 
          grow online. Based in Bangalore, we focus on smart design,strong tech,and real results.
          We specialize in web development, mobile app development, UI/UX design, and digital marketing-delivering 
          responsive websites, high-performance Android/iOS apps, and visually engaging interfaces. Our digital 
          marketing expertise spans SEO, PPC, social media marketing, and content creation, helping 
          business grow and connect with their ideal audience.
        </p>
        <button type="button" class="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800 p-100">
          Know More
        </button>
      </div>
    </section>
  );
};

export default About;

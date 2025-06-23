import React from "react";
import { features } from "../data/features";
import bgImage from "../assets/images/hhii.jpg"; // ✅ import the image

export default function Features() {
  return (
    <section
      id="features"
      className="py-16 px-8 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <h2 className="text-3xl font-semibold text-center text-white drop-shadow">
        Our Projects
      </h2>
      <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {features.map(({ icon, title, desc }, idx) => (
          <div
            key={idx}
            className="flex flex-col p-6 bg-white bg-opacity-90 rounded-lg shadow-md hover:shadow-lg transition"
          >
            <img
              src={icon}
              alt={title}
              className="h-48 w-full object-cover rounded mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
            <p className="text-gray-600">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

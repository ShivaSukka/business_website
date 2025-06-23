import React from "react";
import logo from "../assets/images/web_sort_logo.jfif";

const Navbar = () => (
  <nav className="flex justify-between items-center py-4 px-6 bg-white shadow-sm fixed top-0 w-full z-50">
    
    {/* Left: Logo + Text */}
    <div className="flex items-center gap-3">
      <img
        src={logo}
        alt="WebSort Logo"
        className="h-12 w-12 object-contain"
      />
      <div className="leading-tight">
        <h1 className="text-xl font-bold" style={{ color: "#0051a2" }}>WebSort</h1>
        <p className="text-sm font-bold" style={{ color: "#0051a2" }}>your vision Our Web</p>
      </div>
    </div>

    {/* Right: Navigation */}
    <ul className="hidden md:flex gap-8 text-gray-700">
      <li><a href="#home" className="hover:text-blue-600">Home</a></li>
      <li><a href="#features" className="hover:text-blue-600">Features</a></li>
      <li><a href="#about" className="hover:text-blue-600">About</a></li>
      <li><a href="#contact" className="bg-blue-500 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded">Contact Us</a></li>
    </ul>

    {/* Hamburger Menu (Mobile) */}
    <button className="md:hidden text-gray-700 text-2xl">☰</button>
  </nav>
);

export default Navbar;

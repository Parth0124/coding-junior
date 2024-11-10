import React, { useState } from "react";
import logo from "../Assets/coding-junior-logo.png";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Top navbar with one line text */}
      <nav className="bg-cyan-100">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-center">
            <h4 className="text-center text-gray-700 font-bold text-sm sm:text-base md:text-lg lg:text-xl">
              Learn coding at the nearby
              <span className="text-blue-800 font-semibold">
                {" "}
                Coding Pro
              </span>{" "}
              Institute.{" "}
              <span className="text-blue-800 underline font-semibold">
                Enquire now
              </span>
            </h4>
          </div>
        </div>
      </nav>

      {/* Second Navbar for Desktop and Mobile */}
      <nav className="bg-white shadow-md sm:hidden">
        <div className="flex items-center justify-between px-4 py-3">
          <a
            href="#"
            className="flex items-center w-[200px] h-[60px]"
            aria-current="page"
          >
            <img src={logo} alt="logo" className="w-full h-auto" />
          </a>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-gray-500 hover:text-gray-700 focus:outline-none focus:text-gray-700"
          >
            {/* Hamburger icon for mobile view */}
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>

        {/* Mobile Menu on openeing hamburger icon */}
        {menuOpen && (
          <div className="px-4 pt-2 pb-4 space-y-1">
            <a
              href="#"
              className="block text-base font-medium text-gray-700 py-2"
            >
              About Us
            </a>
            <a
              href="#"
              className="block text-base font-medium text-gray-700 py-2"
            >
              Virtual Labs
            </a>
            <a
              href="#"
              className="block text-base font-medium text-gray-700 py-2"
            >
              Programs
            </a>
            <a
              href="#"
              className="block text-base font-medium text-gray-700 py-2"
            >
              For Colleges
            </a>
            <button className="w-full h-[50px] text-base font-medium btn btn-outline btn-info mt-2">
              Login
            </button>
            <button className="w-full h-[50px] text-base font-medium btn btn-info mt-2">
              Register
            </button>
          </div>
        )}
      </nav>

      {/* Desktop Second Navbar (hidden on small screens) */}
      <nav className="hidden sm:block">
        <div className="hidden sm:ml-9 sm:block">
          <div className="flex items-center space-x-4 relative w-[1119px] h-[95px] left-[87px] gap-0">
            <a
              href="#"
              className="w-[300px] h-[95px] flex items-center"
              aria-current="page"
            >
              <img src={logo} alt="logo" className="w-full h-auto" />
            </a>
            {/* Navigation Links */}
            <div className="flex space-x-4 whitespace-nowrap">
              <a
                href="#"
                className="text-sm font-medium text-dark-500 px-3 py-2"
              >
                About Us
              </a>
              <a
                href="#"
                className="text-sm font-medium text-dark-500 px-3 py-2"
              >
                Virtual Labs
              </a>
              <a
                href="#"
                className="text-sm font-medium text-dark-500 px-3 py-2"
              >
                Programs
              </a>
              <a
                href="#"
                className="text-sm font-medium text-dark-500 px-3 py-2"
              >
                For Colleges
              </a>
            </div>
            <div className="flex space-x-4 ml-auto">
              <button className="w-[131px] h-[55px] px-[56px] py-[16px] btn btn-outline btn-info">
                Login
              </button>
            </div>
            <div className="ml-4 pl-10 pr-0">
              <button className="w-[179.2px] h-[62.4px] px-[56px] py-[16px] rounded-md btn btn-info">
                Register
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;

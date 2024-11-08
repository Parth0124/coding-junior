import React from "react";
import logo from "../Assets/coding-junior-logo.png";

function Navbar() {
  return (
    <>
      {/* First Navbar (unchanged) */}
      <nav className="bg-cyan-100">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-center">
            <h4 className="text-center text-gray-700 font-bold">
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

      {/* Second Navbar (with dimensions applied) */}
      <nav>
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

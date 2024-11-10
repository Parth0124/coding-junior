import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import bo from "../Assets/business-outreach.png";
import tp from "../Assets/the-print.png";
import sumitMedia from "../Assets/sumit-media.png";
import circle from "../Assets/lined-circle.jpg";

function Media() {
  return (
    <div className="max-w-[1440px] mx-auto flex flex-col justify-center items-center px-3 gap-6 md:gap-10 lg:gap-12 py-12">
      <h1 className="text-gray-600 text-3xl md:text-4xl lg:text-5xl text-center font-medium">
        We’ve Also Been In <span className="text-[#008D8F]">News!</span>
      </h1>
      <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 w-full xl:w-5/6">
        <img
          src={circle}
          className="absolute -z-10 w-40 -top-10 -left-10"
          alt=""
        />
        <img
          src={circle}
          className="absolute -z-10 w-24 -top-8 -right-8"
          alt=""
        />
        <img
          src={circle}
          className="absolute -z-10 w-44 -bottom-12 right-72"
          alt=""
        />

        {/* Meida card 1 */}
        <div className="bg-white w-full flex flex-col justify-center items-center gap-5 border shadow-lg rounded-lg px-3 py-4">
          <div className="flex justify-between items-center w-full">
            <img src={bo} alt="" className="w-1/4" />
            <p className="text-[0.5rem] font-medium">31 March, 2023</p>
          </div>
          <img src={sumitMedia} alt="" />
          <p className="text-sm">
            Coding Jr’s CEO, Sumit Bhat felicitated at Times 40 Under 40
          </p>
          <div className="w-full text-[#2B95ED] flex justify-between items-center">
            <p>Read article</p>
            <FontAwesomeIcon icon={faArrowRight} />
          </div>
        </div>

        {/* Meida card 2 */}
        <div className="bg-white w-full flex flex-col justify-center items-center gap-5 border shadow-lg rounded-lg px-3 py-4">
          <div className="flex justify-between items-center w-full">
            <img src={tp} alt="" className="w-1/4" />
            <p className="text-[0.5rem] font-medium">01 March, 2023</p>
          </div>
          <div className="w-full h-44 md:h-56 bg-black rounded-lg"></div>
          <p className="text-sm">
            Meet Vikas Shukla- The flag bearer of technology and . . .
          </p>
          <div className="w-full text-[#2B95ED] flex justify-between items-center">
            <p>Read article</p>
            <FontAwesomeIcon icon={faArrowRight} />
          </div>
        </div>

        {/* Meida card 3 */}
        <div className="bg-white w-full flex flex-col justify-center items-center gap-5 border shadow-lg rounded-lg px-3 py-4">
          <div className="flex justify-between items-center w-full">
            <img src={tp} alt="" className="w-1/4" />
            <p className="text-[0.5rem] font-medium">01 March, 2023</p>
          </div>
          <div className="w-full h-44 md:h-56 bg-black rounded-lg"></div>
          <p className="text-sm">
            Meet Vikas Shukla- The flag bearer of technology and . . .
          </p>
          <div className="w-full text-[#2B95ED] flex justify-between items-center">
            <p>Read article</p>
            <FontAwesomeIcon icon={faArrowRight} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Media;

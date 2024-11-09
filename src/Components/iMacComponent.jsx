import React from "react";
import iMac from "../Assets/macbook-image.png";
import house from "../Assets/house-image-training-card.png";
import building from "../Assets/building-image-training-card.png";
import school from "../Assets/school.png";
import graduation from "../Assets/graduation.png";
import notes from "../Assets/notes.png";
import location from "../Assets/location.png";
import slantLines from "../Assets/slant-lines-below-institutes.jpg";
import nsdc from "../Assets/nsdc.png"
import ministery from '../Assets/ministery.png'
import startup from '../Assets/startupindia.png'

function MainComponent() {
  return (
    <>
      <div className="hidden md:flex mt-[35px] ml-[150px]">
        {/* Desktop Image Container */}
        <div className="w-[620px] h-[484px]">
          <img src={iMac} alt="imac" className="w-full h-full object-cover" />
        </div>

        {/* Desktop Text Container */}
        <div className="relative w-[500px] h-[164px] ml-[12px]">
          <h2 className="text-[3.5rem] font-bold leading-none">
            Where the world learns to c<span className="text-blue-600">o</span>
            de
          </h2>
        </div>
      </div>

      {/* Desktop Card Container - Hidden on mobile */}
      <div className="hidden md:flex absolute w-[480px] h-[300px] top-[340px] left-[779px] gap-0 border-t-2 border-l-0 border-r-0 border-b-0 rounded-tl-[12px] space-x-4 p-4">
        {/* Box 1 */}
        <div className="w-[235px] h-[250px] p-[2px] rounded-lg bg-gradient-to-r from-[#2B95ED] via-[#2B95ED] to-[#14CBD5]">
          <div className="flex flex-col items-center justify-between w-full h-full bg-white rounded-lg py-4">
            <img src={house} alt="house" className="w-16 h-16 mb-2" />
            <h4 className="text-[#1C408E] font-semibold text-xl mb-1">
              Campus Training
            </h4>
            <p className="text-black text-base text-center mb-2">
              Designed for college students with a focus on xyz, xyz, xyz Lorem
              ipsum dolor
            </p>
            <button className="bg-[#2B95ED] text-white rounded-lg px-6 py-2 mt-auto hover:bg-purple-600 transition-colors duration-300">
              Explore {" >"}
            </button>
          </div>
        </div>

        {/* Box 2 */}
        <div className="w-[235px] h-[250px] p-[2px] rounded-lg bg-gradient-to-r from-[#2B95ED] via-[#2B95ED] to-[#14CBD5]">
          <div className="flex flex-col items-center justify-between w-full h-full bg-white rounded-lg py-4">
            <img src={building} alt="building" className="w-16 h-16 mb-2" />
            <h4 className="text-[#1C408E] font-semibold text-xl mb-1">
              Professional Training
            </h4>
            <p className="text-black text-base text-center mb-2">
              Designed for college students with a focus on xyz, xyz, xyz Lorem
              ipsum dolor
            </p>
            <button className="bg-[#2B95ED] text-white rounded-lg px-6 py-2 mt-auto hover:bg-purple-600 transition-colors duration-300">
              Explore {" >"}
            </button>
          </div>
        </div>
      </div>

      {/* Desktop Stats Cards - Hidden on mobile */}
      <div className="hidden md:grid absolute top-[733px] left-[110px] grid-cols-4 gap-4">
        {/* Card 1 */}
        <div className="w-[280px] h-[122px] bg-gradient-to-r from-[#2B95ED] via-[#2B95ED] to-[#14CBD5] rounded-lg p-[2px]">
          <div className="flex items-center justify-between w-full h-full bg-white rounded-lg p-2">
            <div className="w-1/3">
              <img
                src={location}
                alt="map"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="flex flex-col justify-center w-2/3">
              <h3 className="text-[#2B95ED] font-bold text-2xl mb-1">
                50+ cities
              </h3>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="w-[280px] h-[122px] bg-gradient-to-r from-[#2B95ED] via-[#2B95ED] to-[#14CBD5] rounded-lg p-[2px]">
          <div className="flex items-center justify-between w-full h-full bg-white rounded-lg p-2">
            <div className="w-1/3">
              <img
                src={notes}
                alt="notes"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="flex flex-col justify-center w-2/3">
              <h3 className="text-[#2B95ED] font-bold text-2xl mb-1">
                80+ modules
              </h3>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="w-[280px] h-[122px] bg-gradient-to-r from-[#2B95ED] via-[#2B95ED] to-[#14CBD5] rounded-lg p-[2px]">
          <div className="flex items-center justify-between w-full h-full bg-white rounded-lg p-2">
            <div className="w-1/3">
              <img
                src={graduation}
                alt="students"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="flex flex-col justify-center w-2/3">
              <h3 className="text-[#2B95ED] font-bold text-2xl mb-1">
                10k+ students
              </h3>
            </div>
          </div>
        </div>

        {/* Card 4 with Slant Lines */}
        <div className="relative">
          <div className="w-[280px] h-[122px] bg-gradient-to-r from-[#2B95ED] via-[#2B95ED] to-[#14CBD5] rounded-lg p-[2px]">
            <div className="flex items-center justify-between w-full h-full bg-white rounded-lg p-2">
              <div className="w-1/3">
                <img
                  src={school}
                  alt="school"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex flex-col justify-center w-2/3">
                <h3 className="text-[#2B95ED] font-bold text-2xl mb-1">
                  100+ institutes
                </h3>
              </div>
            </div>
          </div>
          {/* Slant Lines Image for Desktop */}
          <img
            src={slantLines}
            alt="slant lines"
            className="absolute -bottom-12 left-0 w-full h-8 object-cover"
          />
        </div>
      </div>

      {/* New Container with Lines - Desktop */}
      <div className="hidden md:flex relative w-[1180px] h-[200px] mx-auto mt-[250px] bg-[#C5E5FF33]">
        {/* First Vertical Line */}
        <div className="absolute left-[393px] top-0 w-[1px] h-full bg-gray-300"></div>
        {/* Second Vertical Line */}
        <div className="absolute right-[393px] top-0 w-[1px] h-full bg-gray-300"></div>

        {/* Image Sections */}
        <div className="flex justify-between w-full h-full items-center px-8">
          {/* Ministers Image */}
          <div className="flex justify-center w-1/3">
            <img
              src={ministery}
              alt="ministery"
              className="w-30 h-24 object-contain"
            />
          </div>
          {/* NSDC Image */}
          <div className="flex justify-center w-1/3">
            <img src={nsdc} alt="nsdc" className="w-30 h-24 object-contain" />
          </div>
          {/* Startup Image */}
          <div className="flex justify-center w-1/3">
            <img
              src={startup}
              alt="startup"
              className="w-30 h-24 object-contain"
            />
          </div>
        </div>
      </div>

      {/* Mobile View */}
      <div className="md:hidden">
        {/* Mobile Header Section */}
        <div className="px-4 pt-6 pb-8 bg-white">
          <div className="w-full h-[200px] mb-6">
            <img
              src={iMac}
              alt="imac"
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
          </div>
          <h2 className="text-4xl font-bold text-center leading-tight mb-8">
            Where the world learns to c<span className="text-blue-600">o</span>
            de
          </h2>
        </div>

        {/* Mobile Training Cards */}
        <div className="px-4 space-y-4 mb-8">
          {/* Mobile Training Card 1 */}
          <div className="w-full p-[2px] rounded-xl bg-gradient-to-r from-[#2B95ED] via-[#2B95ED] to-[#14CBD5] shadow-lg">
            <div className="flex flex-col items-center bg-white rounded-xl p-6">
              <img src={house} alt="house" className="w-20 h-20 mb-4" />
              <h4 className="text-[#1C408E] font-semibold text-2xl mb-3">
                Campus Training
              </h4>
              <p className="text-gray-700 text-center mb-4 px-2">
                Designed for college students with a focus on xyz, xyz, xyz
                Lorem ipsum dolor
              </p>
              <button className="w-full bg-[#2B95ED] text-white rounded-lg py-3 font-medium hover:bg-blue-600 transition-colors duration-300">
                Explore {" >"}
              </button>
            </div>
          </div>

          {/* Mobile Training Card 2 */}
          <div className="w-full p-[2px] rounded-xl bg-gradient-to-r from-[#2B95ED] via-[#2B95ED] to-[#14CBD5] shadow-lg">
            <div className="flex flex-col items-center bg-white rounded-xl p-6">
              <img src={building} alt="building" className="w-20 h-20 mb-4" />
              <h4 className="text-[#1C408E] font-semibold text-2xl mb-3">
                Professional Training
              </h4>
              <p className="text-gray-700 text-center mb-4 px-2">
                Designed for professionals with a focus on xyz, xyz, xyz Lorem
                ipsum dolor
              </p>
              <button className="w-full bg-[#2B95ED] text-white rounded-lg py-3 font-medium hover:bg-blue-600 transition-colors duration-300">
                Explore {" >"}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Stats Grid */}
        <div className="px-4 pb-8">
          <div className="grid grid-cols-2 gap-4">
            {/* Mobile Stat Card 1 */}
            <div className="p-[2px] rounded-xl bg-gradient-to-r from-[#2B95ED] via-[#2B95ED] to-[#14CBD5] shadow-lg">
              <div className="flex flex-col items-center justify-center bg-white rounded-xl p-4 h-full">
                <img src={location} alt="location" className="w-12 h-12 mb-2" />
                <h3 className="text-[#2B95ED] font-bold text-xl text-center">
                  50+ cities
                </h3>
              </div>
            </div>

            {/* Mobile Stat Card 2 */}
            <div className="p-[2px] rounded-xl bg-gradient-to-r from-[#2B95ED] via-[#2B95ED] to-[#14CBD5] shadow-lg">
              <div className="flex flex-col items-center justify-center bg-white rounded-xl p-4 h-full">
                <img src={notes} alt="notes" className="w-12 h-12 mb-2" />
                <h3 className="text-[#2B95ED] font-bold text-xl text-center">
                  80+ modules
                </h3>
              </div>
            </div>

            {/* Mobile Stat Card 3 */}
            <div className="p-[2px] rounded-xl bg-gradient-to-r from-[#2B95ED] via-[#2B95ED] to-[#14CBD5] shadow-lg">
              <div className="flex flex-col items-center justify-center bg-white rounded-xl p-4 h-full">
                <img
                  src={graduation}
                  alt="graduation"
                  className="w-12 h-12 mb-2"
                />
                <h3 className="text-[#2B95ED] font-bold text-xl text-center">
                  10k+ students
                </h3>
              </div>
            </div>

            {/* Mobile Stat Card 4 with Slant Lines */}
            <div className="relative">
              <div className="p-[2px] rounded-xl bg-gradient-to-r from-[#2B95ED] via-[#2B95ED] to-[#14CBD5] shadow-lg">
                <div className="flex flex-col items-center justify-center bg-white rounded-xl p-4 h-full">
                  <img src={school} alt="school" className="w-12 h-12 mb-2" />
                  <h3 className="text-[#2B95ED] font-bold text-xl text-center">
                    100+ institutes
                  </h3>
                </div>
              </div>
              {/* Slant Lines Image for Mobile */}
              <img
                src={slantLines}
                alt="slant lines"
                className="absolute -bottom-10 left-0 w-full h-6 object-cover"
              />
            </div>
          </div>
        </div>

        {/* New Container with Lines - Mobile */}
        <div className="relative w-full h-[400px] bg-[#C5E5FF33] mt-8 px-4 md:hidden flex flex-col items-center space-y-6">
          {/* First Horizontal Line */}
          <div className="absolute top-[133px] left-0 w-full h-[1px] bg-gray-300"></div>
          {/* Second Horizontal Line */}
          <div className="absolute top-[266px] left-0 w-full h-[1px] bg-gray-300"></div>

          {/* Ministers Image (positioned at the top) */}
          <img
            src={ministery}
            alt="ministery"
            className="absolute top-[0px] w-30 h-24 object-contain"
          />
          {/* NSDC Image (positioned in the middle) */}
          <img
            src={nsdc}
            alt="nsdc"
            className="absolute top-[135px] w-30 h-24 object-contain"
          />
          {/* Startup Image (positioned at the bottom) */}
          <img
            src={startup}
            alt="startup"
            className="absolute top-[280px] w-30 h-24 object-contain"
          />
        </div>
      </div>
    </>
  );
}

export default MainComponent;

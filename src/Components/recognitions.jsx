import React from "react";
import lstar from "../Assets/left-star.png";
import rstar from "../Assets/right-star.png";
import times40 from "../Assets/rakul-image.png";
import nsdcRecognition from "../Assets/nsdc-recognition.jpeg";

function Recognition() {
  return (
    <section className="py-20 px-6 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="max-w-7xl mx-auto relative">

        {/* background gradient to the entire container */}
        <div
          className="relative p-8 rounded-lg"
          style={{
            background:
              "linear-gradient(270deg, #1DDDDF 2.41%, #1C408E 41.9%, #2B95ED 113.04%)",
            borderRadius: "12px",
          }}
        >
          <div className="text-center mb-16 relative">
            <div className="flex items-center justify-center gap-4 mb-8">
              <img src={lstar} alt="decorative-star-left" />
              <h2 className="text-4xl md:text-5xl font-bold text-white">
                Our Efforts To <span className="text-cyan-600">Innovate</span>{" "}
                Have Been
                <br />
                <span className="text-cyan-600">Recognized</span> And{" "}
                <span className="text-cyan-600">Appreciated</span>
              </h2>
              <img src={rstar} alt="decorative-star-right" />
            </div>
          </div>

          {/* Times40 Section */}
          <div className="mb-16 p-8 relative bg-white rounded-lg shadow-lg">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="w-full md:w-1/2">
                <img
                  src={times40}
                  alt="Times40"
                  className="w-full max-w-lg mx-auto rounded-lg shadow-lg"
                />
              </div>
              <div className="w-full md:w-1/2 text-lg text-gray-700">
                <p className="max-w-lg font-bold">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                  vulputate libero et velit interdum.
                </p>
              </div>
            </div>
          </div>

          {/* NSDC Recognition Section */}
          <div className="p-8 relative bg-white rounded-lg shadow-lg">
            <div className="flex flex-col md:flex-row-reverse items-center justify-between gap-8">
              <div className="w-full md:w-1/2">
                <img
                  src={nsdcRecognition}
                  alt="NSDC Recognition"
                  className="w-full max-w-lg mx-auto rounded-lg shadow-lg"
                />
              </div>
              <div className="w-full md:w-1/2 text-lg text-gray-700">
                <p className="max-w-lg font-bold">
                  Honored by{" "}
                  <span className="text-cyan-600">
                    Shri Dharmendra Pradhan ji
                  </span>{" "}
                  Union Minister for Education Govt. of India - 2023.
                </p>
              </div>
            </div>
          </div>

          {/* Left color strap */}
          <div className="absolute left-[-15px] top-[3400px] w-[784px] h-[234px] bg-gradient-to-r from-[#0FDDD0] to-[#087770] opacity-[0.8] z-10"></div>

          {/* Right color strap */}
          <div className="absolute left-[428px] top-[3323px] w-[1321px] h-[257px] bg-gradient-to-r from-[#23A5E3] to-[#135B7D] opacity-[0.8] z-10"></div>
        </div>
      </div>
    </section>
  );
}

export default Recognition;

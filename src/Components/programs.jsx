import React from "react";
import ProgramCard from "../Components/programCard";
import man from "../Assets/holistic-man.png";
import woman from "../Assets/holistic-woman.png";
import binary from "../Assets/0101-image.jpeg";
import dottedDesign from "../Assets/dotted-design.jpg";

function Programs() {
  const programs = [
    {
      title: "Campus Training",
      subtitle: "For students | 24+ Modules | 10 instructors",
      description:
        "The app features in-app coding, eliminating the need for laptops. With cloud-based virtual machines and labs, students can practice freely, cutting hardware and maintenance costs.",
      image: man,
      alt: "Student using mobile app",
    },
    {
      title: "Professional Training",
      subtitle: "For Professionals | 24+ Modules | 10 instructors",
      description:
        "The app features in-app coding, eliminating the need for laptops. With cloud-based virtual machines and labs, students can practice freely, cutting hardware and maintenance costs.",
      image: woman,
      alt: "Professional working on laptop",
    },
  ];

  return (
    <section className="py-20 px-6 relative">
      {/* Background Binary Image (only visible on desktop/tablet) */}
      <div className="absolute inset-y-0 left-0 w-full sm:w-1/3 z-0 hidden sm:block">
        <img
          src={binary}
          alt="Binary Image"
          className="object-cover w-full h-full opacity-50"
        />
      </div>
      <div className="max-w-7xl mx-auto z-10 relative">
        <div className="text-center mb-16">
          <h5 className="text-lg md:text-5xl font-semibold mb-4">
            Check out Our{" "}
            <span className="text-teal-600">Holistic Programs</span> Designed To
            Help You Reach Your{" "}
            <span className="text-teal-600 font-semibold">Goals</span>
          </h5>
        </div>
        <div className="space-y-8 relative">
          {programs.map((program, index) => (
            <div key={index} className="relative">
              {/* Dotted Design behind the cards (only visible on desktop) */}
              {index === 0 && (
                <div
                  className="absolute top-[3px] right-[165px] w-40 h-40 sm:w-48 sm:h-48 lg:w-56 lg:h-56 bg-no-repeat bg-contain hidden sm:block"
                  style={{
                    backgroundImage: `url(${dottedDesign})`,
                    transform: "translate(30%, -30%)",
                    zIndex: 0,
                  }}
                ></div>
              )}
              {index === 1 && (
                <div
                  className="absolute bottom-[3px] right-[165px] w-40 h-40 sm:w-48 sm:h-48 lg:w-56 lg:h-56 bg-no-repeat bg-contain hidden sm:block"
                  style={{
                    backgroundImage: `url(${dottedDesign})`,
                    transform: "translate(30%, 30%)",
                    zIndex: 0,
                  }}
                ></div>
              )}

              {/* Program Card with higher z-index to create overlap feature on binary and dottedDesign images */}
              <div className="relative z-10">
                <ProgramCard {...program} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Programs;

import React from "react";
import arrow from "../Assets/flying-arrow.jpg";
import triangle from "../Assets/traingle.jpg";
import fullElipse from "../Assets/complete-ellipse-green.png";
import lowerEllipse from "../Assets/lower-ellipse-blue.png";
import students from "../Assets/students.png";
import journeyRoad from "../Assets/journey-road.png";
import journeyPoint from "../Assets/journey-point.png";
import journeyArrow from "../Assets/journey-arrow.png";
import downwardArrow from "../Assets/continuous-downward-arrow.jpg";


const steps = [
  {
    id: 1,
    title: "Custom Specialization",
    description:
      "We understand that each student is unique, so we empower you to design your learning and explore a specialization that best suits your goals.",
  },
  {
    id: 2,
    title: "Virtual Labs",
    description:
      "We launch you straight into the experience of accessing a fully equipped lab from anywhere, just with an internet connection.",
  },
  {
    id: 3,
    title: "AI Tests",
    description:
      "We understand that learning alone isn't enough, so we assess your progress with AI-powered tests to validate your progress.",
  },
  {
    id: 4,
    title: "Resume Builder",
    description:
      "We not only support skill development but also ensure its highlighted properly by helping you craft your resume to help you stand out from the crowd.",
  },
  {
    id: 5,
    title: "Placement Preparation",
    description:
      "We prepare you for the future by equipping you with the best tools by providing you with thorough placement preparation.",
  },
  {
    id: 6,
    title: "AI Interviews",
    description:
      "Interviews can be challenging, so we use AI to conduct mock interviews, helping our students build confidence and be fully prepared.",
  },
];

const LearningJourney = () => {
  return (
    <section className="py-20 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold mb-4">
            Because We Offer What You Need
          </h2>
          <h2 className="text-4xl">
            At <span className="text-teal-600">Every Step</span> Of Your
          </h2>
          <div className="flex items-center justify-center gap-2 mt-2">
            <img src={triangle} alt="Triangle" className="w-20 h-20 mr-2" />
            <h2 className="text-4xl font-medium text-teal-600">
              Transformative Learning Journey
            </h2>
          </div>
          <div className="mt-4 ml-[800px]">
            <img src={arrow} alt="Arrow" className="w-40 h-12" />
          </div>
        </div>

        <div className="relative w-full max-w-2xl mx-auto mb-16">
          <div className="flex items-start justify-center relative">
            <div className="relative">
              <img
                src={fullElipse}
                alt="complete-ellipse-green"
                className="relative z-10 w-full h-auto"
              />
              <img
                src={lowerEllipse}
                alt="lower-ellipse-blue"
                className="absolute bottom-0 left-0 w-full h-auto z-20"
              />
              <img
                src={students}
                alt="students"
                className="absolute top-[-30px] left-1/2 transform -translate-x-1/2 w-3/4 h-auto z-10"
              />
            </div>

            <div className="absolute right-[-350px] top-1/2 transform -translate-y-1/2">
              <img
                src={downwardArrow}
                alt="Downward Arrow"
                className="w-12 h-40"
              />
            </div>
          </div>
        </div>

        <div className="relative">
          <div
            className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full"
            style={{
              backgroundImage: `url(${journeyRoad})`,
              backgroundSize: "cover",
            }}
          />

          <div className="space-y-12">
            {steps.map((step, index) => (
              <div
                className={`flex flex-col md:flex-row items-center justify-center gap-8 relative ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
                key={step.id}
              >
                <div
                  className={`w-full md:w-1/2 ${
                    index % 2 === 0 ? "text-right md:pr-8" : "text-left md:pl-8"
                  }`}
                >
                  <div
                    className={`inline-block relative ${
                      index % 2 === 0 ? "ml-auto" : "mr-auto"
                    }`}
                  >
                    {/* Gradient Border Container */}
                    <div
                      className="relative p-[6.23px] rounded-xl"
                      style={{
                        background: `linear-gradient(270deg, #1DDDDF 0.12%, #1C408E 39.12%, #2B95ED 109.37%)`,
                      }}
                    >
                      {/* Number Circle */}
                      <div
                        className="absolute left-1/2 -top-4 transform -translate-x-1/2 w-12 h-12 rounded-full flex items-center justify-center text-white font-bold z-20"
                        style={{ backgroundColor: "#4ABCAE" }}
                      >
                        {step.id}
                      </div>

                      <div className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 max-w-md mx-auto relative z-10">
                        <div
                          className={`flex items-center gap-4 mb-4 ${
                            index % 2 === 0
                              ? "md:flex-row-reverse"
                              : "md:flex-row"
                          }`}
                        >
                          <div className="p-3 bg-gradient-to-br from-blue-500 to-teal-500 rounded-lg"></div>
                          <h3 className="text-xl font-bold text-gray-800">
                            {step.title}
                          </h3>
                        </div>
                        <p className="text-gray-600 leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className="absolute left-1/2 transform -translate-x-1/2 z-20 flex items-center justify-center"
                  style={{ top: "50%" }}
                >
                  <div
                    className="w-8 h-8 bg-cover bg-center rounded-full border-4 border-teal-500 relative shadow-lg"
                    style={{
                      backgroundImage: `url(${journeyPoint})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  >
                    <img
                      src={journeyArrow}
                      alt="journeyArrow"
                      className="absolute w-32 h-4"
                      style={{
                        left: index % 2 === 0 ? "0" : "auto",
                        right: index % 2 === 1 ? "0" : "auto",
                        transform: `${
                          index % 2 === 0
                            ? "translateX(-100%)"
                            : "translateX(100%)"
                        } translateY(-50%) ${
                          index % 2 === 0 ? "rotate(180deg)" : "rotate(0deg)"
                        }`,
                        top: "50%",
                      }}
                    />
                  </div>
                </div>

                <div className="w-full md:w-1/2" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LearningJourney;

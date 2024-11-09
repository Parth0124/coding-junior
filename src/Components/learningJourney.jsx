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
import degree from "../Assets/degree.png";
import online from "../Assets/online.png";
import test from "../Assets/tests.png";
import resume from "../Assets/Resume.png";
import bag from "../Assets/office-bag.png";
import interview from "../Assets/interview.png";
import qatester from "../Assets/qa-tester.png";
import softwareengineer from "../Assets/software-engineer.png";
import aiengineer from "../Assets/ai-engineer.png";
import datascientist from "../Assets/data-scientist.png";

const steps = [
  {
    id: 1,
    title: "Custom Specialization",
    image: degree,
    description:
      "We understand that each student is unique, so we empower you to design your learning and explore a specialization that best suits your goals.",
  },
  {
    id: 2,
    title: "Virtual Labs",
    image: online,
    description:
      "We launch you straight into the experience of accessing a fully equipped lab from anywhere, just with an internet connection.",
  },
  {
    id: 3,
    title: "AI Tests",
    image: test,
    description:
      "We understand that learning alone isn't enough, so we assess your progress with AI-powered tests to validate your progress.",
  },
  {
    id: 4,
    title: "Resume Builder",
    image: resume,
    description:
      "We not only support skill development but also ensure its highlighted properly by helping you craft your resume to help you stand out from the crowd.",
  },
  {
    id: 5,
    title: "Placement Preparation",
    image: bag,
    description:
      "We prepare you for the future by equipping you with the best tools by providing you with thorough placement preparation.",
  },
  {
    id: 6,
    title: "AI Interviews",
    image: interview,
    description:
      "Interviews can be challenging, so we use AI to conduct mock interviews, helping our students build confidence and be fully prepared.",
  },
];

const careerPaths = [
  {
    title: "QA Tester",
    image: qatester,
  },
  {
    title: "Software Engineer",
    image: softwareengineer,
  },
  {
    title: "Data Scientist",
    image: datascientist,
  },
  {
    title: "AI Engineer",
    image: aiengineer,
  },
];

const LearningJourney = () => {
  return (
    <section className="py-20 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
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

        {/* Students Image Section */}
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

        {/* Journey Steps Section */}
        <div className="relative mb-20">
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
                    <div
                      className="relative p-[6.23px] rounded-xl"
                      style={{
                        background: `linear-gradient(270deg, #1DDDDF 0.12%, #1C408E 39.12%, #2B95ED 109.37%)`,
                      }}
                    >
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
                          <div className="p-3 rounded-lg">
                            <img
                              src={step.image}
                              alt={step.title}
                              className="w-12 h-12 object-cover"
                            />
                          </div>
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
                  className="absolute left-1/2 transform -translate-x-1/2 z-20 hidden lg:flex items-center justify-center"
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

        {/* Career Paths Section with Wave Background */}
        <div className="relative mt-20">
          {/* Background Wave SVGs */}
          <div className="absolute inset-0 w-full h-full">
            <svg
              className="absolute top-0 w-full h-full"
              viewBox="0 0 1440 400"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
            >
              {/* Upper turquoise wave */}
              <path
                d="M0 0L120 22.2222C240 44.4444 480 88.8889 720 88.8889C960 88.8889 1200 44.4444 1320 22.2222L1440 0V266.667L1320 288.889C1200 311.111 960 355.556 720 355.556C480 355.556 240 311.111 120 288.889L0 266.667V0Z"
                fill="#4ABCAE"
              />
              {/* Lower blue wave */}
              <path
                d="M0 133.333L120 155.556C240 177.778 480 222.222 720 222.222C960 222.222 1200 177.778 1320 155.556L1440 133.333V400H1320C1200 400 960 400 720 400C480 400 240 400 120 400H0V133.333Z"
                fill="#2B95ED"
              />
            </svg>
          </div>

          {/* Career Paths Content */}
          <div className="relative z-30 pt-20 pb-40">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-4xl font-bold text-center mb-16 text-dark">
                Career Paths
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-4">
                {careerPaths.map((career, index) => (
                  <div
                    key={career.title}
                    className="transform hover:scale-105 transition-transform duration-300"
                  >
                    <div className="bg-white rounded-lg shadow-xl overflow-hidden h-full">
                      <div className="relative h-64">
                        <img
                          src={career.image}
                          alt={career.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="p-4">
                        <h3 className="text-xl font-semibold text-center text-gray-800">
                          {career.title}
                        </h3>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LearningJourney;

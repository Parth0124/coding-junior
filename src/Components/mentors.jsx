import React from "react";
import MentorCard from "./mentorCard";
import vikas from "../Assets/vikas-shukla.png";
import sumit from "../Assets/sumit-bhat.png";
import neelu from "../Assets/neelu-verma.png";
import lastCardPolygon from "../Assets/last-card-polygon.jpg";

const mentors = [
  {
    id: 1,
    firstName: "Vikas",
    lastName: "Shukla",
    role: "Software Engineering",
    institute: "IIT-BHU",
    image: vikas,
    testimonial:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
    bgColor: "from-cyan-400 to-cyan-300",
  },
  {
    id: 2,
    firstName: "Sumit",
    lastName: "Bhatt",
    role: "Software Engineering",
    institute: "IIT-BHU",
    image: sumit,
    testimonial:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
    bgColor: "from-blue-500 to-blue-400",
  },
  {
    id: 3,
    firstName: "Neelu",
    lastName: "Verma",
    role: "Software Engineering",
    institute: "IIT-BHU",
    image: neelu,
    testimonial:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
    bgColor: "from-cyan-400 to-cyan-300",
  },
];

const Mentors = () => (
  <section className="py-20 px-6 bg-gray-50 relative overflow-hidden">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl text-gray-600 mb-4">
          We Know Just Education Is Not Enough Anymore
        </h2>
        <div className="flex flex-col md:flex-row items-center justify-center gap-2 text-4xl md:text-5xl font-bold">
          <span>So We've Got The</span>
          <span className="text-teal-500">Best Mentors</span>
          <span>For You.</span>
        </div>
      </div>
      <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center">
        {mentors.map((mentor) => (
          <MentorCard key={mentor.id} {...mentor} />
        ))}
        {/* Polygon image positioned above the last card */}
        <img
          src={lastCardPolygon}
          alt="Polygon Decoration"
          style={{
            position: "absolute",
            width: "300px",
            height: "300px",
            top: "8371px",
            left: "1231.93px",
            transform: "rotate(29.76deg)",
            clipPath: "inset(0 0 50% 0)", // Show only top half
            zIndex: -1, // Behind the last MentorCard
          }}
        />
      </div>
    </div>
  </section>
);

export default Mentors;

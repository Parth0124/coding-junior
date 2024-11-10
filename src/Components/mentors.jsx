import React from "react";
import MentorCard from "./mentorCard";
import vikas from "../Assets/vikas-shukla.png";
import sumit from "../Assets/sumit-bhat.png";
import neelu from "../Assets/neelu-verma.png";

const mentors = [
  //data for mentor cards
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
        { /* mentor cards mapped */}
        {mentors.map((mentor) => (
          <MentorCard key={mentor.id} {...mentor} />
        ))}
      </div>
    </div>
  </section>
);

export default Mentors;

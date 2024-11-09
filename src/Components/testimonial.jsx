import React, { useState } from "react";
import profilePicture from "../Assets/student-testimonial-pfp.jpeg";
import "@fortawesome/fontawesome-free/css/all.min.css";
import apostrophe from "../Assets/double-apostrophe.png";
import reactjs from "../Assets/reactjs.png";
import flutter from "../Assets/flutter.png";
import js from "../Assets/js.png";
import java from "../Assets/java.png";
import css from "../Assets/css.png";

const testimonials = [
  {
    id: 1,
    avatar: profilePicture,
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
    name: "Saanvi Patel",
    position: "Executive Engineer",
  },
  {
    id: 2,
    avatar: profilePicture,
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
    name: "Saanvi Patel",
    position: "Executive Engineer",
  },
  {
    id: 3,
    avatar: profilePicture,
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
    name: "Saanvi Patel",
    position: "Executive Engineer",
  },
];

const randomImages = [reactjs, flutter, js, java, css];

function Testimonials() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section className="py-16 md:py-32 bg-gradient-to-b from-blue-500 to-blue-600 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center mb-8 md:mb-16">
          And Our Students Agree...
        </h2>

        <div className="relative">
          {/* Testimonials slider */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="w-full flex-shrink-0 px-2 md:px-4"
                >
                  <div className="pt-12 relative">
                    <div className="absolute left-1/2 -top-0 transform -translate-x-1/2 z-10">
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        className="w-20 h-20 md:w-24 md:h-24 rounded-full object-cover border-4 border-white shadow-lg"
                      />
                    </div>

                    <div className="bg-white rounded-xl p-4 md:p-6 shadow-lg mx-auto relative max-w-[90vw] md:max-w-md">
                      <img
                        src={apostrophe}
                        alt="Apostrophe"
                        className="absolute top-6 left-4 opacity-20 w-8 md:w-12 h-auto"
                      />

                      <blockquote className="mt-8 text-gray-600 text-center text-sm md:text-base leading-relaxed">
                        {testimonial.content}
                      </blockquote>
                      <h3 className="mt-4 text-lg font-semibold text-gray-800 text-center">
                        {testimonial.name}
                      </h3>
                      <p className="text-blue-600 text-sm text-center">
                        {testimonial.position}
                      </p>

                      <img
                        src={apostrophe}
                        alt="Apostrophe"
                        className="absolute bottom-6 right-4 opacity-20 w-8 md:w-12 h-auto"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 md:left-2 top-1/2 -translate-y-1/2 p-2 md:p-3 rounded-full bg-white shadow-lg hover:bg-blue-50 transition-colors"
            aria-label="Previous testimonial"
          >
            <i className="fas fa-chevron-left text-blue-600 text-base md:text-lg"></i>
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 md:right-2 top-1/2 -translate-y-1/2 p-2 md:p-3 rounded-full bg-white shadow-lg hover:bg-blue-50 transition-colors"
            aria-label="Next testimonial"
          >
            <i className="fas fa-chevron-right text-blue-600 text-base md:text-lg"></i>
          </button>
        </div>

        {/* Slide indicators */}
        <div className="flex justify-center gap-2 mt-4 md:mt-6">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 md:w-2.5 h-2 md:h-2.5 rounded-full transition-colors ${
                index === currentSlide ? "bg-white" : "bg-white/50"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Static images outside the card in the blue area */}
        <div className="absolute top-4 left-4 z-10 hidden md:block">
          <img
            src={randomImages[0]}
            alt="Technology Image"
            className="w-12 md:w-16 h-12 md:h-16 object-contain"
          />
        </div>
        <div className="absolute top-16 left-1/5 z-10 hidden md:block">
          <img
            src={randomImages[1]}
            alt="Technology Image"
            className="w-12 md:w-16 h-12 md:h-16 object-contain"
          />
        </div>
        <div className="absolute bottom-12 left-1/4 z-10 hidden md:block">
          <img
            src={randomImages[2]}
            alt="Technology Image"
            className="w-12 md:w-16 h-12 md:h-16 object-contain"
          />
        </div>
        <div className="absolute bottom-8 right-1/4 z-10 hidden md:block">
          <img
            src={randomImages[3]}
            alt="Technology Image"
            className="w-12 md:w-16 h-12 md:h-16 object-contain"
          />
        </div>
        <div className="absolute top-12 right-4 z-10 hidden md:block">
          <img
            src={randomImages[4]}
            alt="Technology Image"
            className="w-12 md:w-16 h-12 md:h-16 object-contain"
          />
        </div>
      </div>
    </section>
  );
}

export default Testimonials;

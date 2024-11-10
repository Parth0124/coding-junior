import React from "react";

const MentorCard = ({
  firstName,
  lastName,
  role,
  institute,
  image,
  testimonial,
  bgColor,
}) => (
  <div className="flex justify-center w-full">
    <div
      className={`w-80 overflow-hidden rounded-tr-3xl bg-gradient-to-b ${bgColor}`}
    >
      {/* Name Section */}
      <div className="px-8 pt-8 pb-4">
        <h3 className="text-3xl font-bold text-white">
          {firstName}
          <br />
          {lastName}
        </h3>
      </div>

      {/* Image and Details Section */}
      <div className="relative">
        <div className="px-8 pb-4">
          <img
            src={image}
            alt={`${firstName} ${lastName}`}
            className="w-60 h-50 "
          />
        </div>

        {/* Role and Institute */}
        <div className="bg-black/30 backdrop-blur-sm p-4">
          <p className="text-white text-lg">{role}</p>
          <p className="text-white/90 text-sm">{institute}</p>
        </div>
      </div>

      {/* Testimonial Section */}
      <div className="p-8 bg-gray-700/80">
        <p className="text-white/90 text-sm leading-relaxed italic">
          {testimonial}
        </p>
      </div>
    </div>
  </div>
);

export default MentorCard;

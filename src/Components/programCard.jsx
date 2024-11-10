import React from "react";

function ProgramCard({
  title,
  subtitle,
  description,
  image,
  alt,
  reverse = false,
}) {
  return (
    <div
      className={`flex flex-col ${
        reverse ? "md:flex-row-reverse" : "md:flex-row"
      } gap-8 items-center bg-white rounded-2xl px-4 py-6 shadow-lg transition-all duration-300 group max-w-4xl mx-auto`} // Reduced width and padding for the card
    >
      {/* image for program card */}
      <div className="w-full md:w-1/2 relative">
        <img
          src={image}
          alt={alt}
          className="rounded-2xl w-full h-[300px] object-cover"
        />
      </div>

      {/* text for program card */}
      <div className="w-full md:w-1/2 space-y-4">
        <div className="flex items-center gap-3">
          <h3 className="text-2xl font-bold text-gray-800">{title}</h3>
        </div>

        <p className="text-gray-800 font-medium">{subtitle}</p>

        {/* Applied line-clamp for the description */}
        <p className="text-gray-600 leading-relaxed line-clamp-2">
          {description}
        </p>

        <div className="flex justify-end mt-auto">
          <button className="bg-[#2B95ED] text-white rounded-lg px-8 py-2 mt-auto hover:bg-purple-600 transition-colors duration-300">
            Explore {" >"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProgramCard;

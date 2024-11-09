import React from "react";
import recorder from "../Assets/recorder.png";
import notebook from "../Assets/notebook.png";
import flashcard from "../Assets/flashcard.png";
import ai from "../Assets/ai.png";
import ebook from "../Assets/e-book.png";
import code from "../Assets/code.png";

const FeatureSection = () => {
  const features = [
    {
      icon: notebook,
      title: "Created by IIT-IIM Alumni",
      description:
        "We've learnt from the best and strive to bring you the best.",
    },
    {
      icon: ai,
      title: "A.I. Integration",
      description:
        "We have harnessed the power of A.I. to enhance and assess your knowledge",
    },
    {
      icon: code,
      title: "In-app Coding",
      description:
        "The app features in-app coding, eliminating the need for laptops",
    },
    {
      icon: ebook,
      title: "Extensive E-books",
      description: "Deepen your understanding and mastery of the skills.",
    },
    {
      icon: recorder,
      title: "Recorded Lectures",
      description: "Access lectures anywhere and anytime at your own pace.",
    },
    {
      icon: flashcard,
      title: "Flash cards",
      description: "Make learning convenient and fun using flash cards.",
    },
  ];

  return (
    <section className="bg-gradient-to-br from-blue-500 to-blue-600 py-20 px-6 my-8 min-h-screen relative overflow-hidden">
      <div className="absolute top-10 right-10 w-20 h-20 bg-white/10 rounded-full blur-xl" />
      <div className="absolute bottom-20 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl" />

      <div className="max-w-7xl mx-auto">
        {/* Heading with mobile and large screen responsiveness */}
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-16 text-center md:text-left pl-4">
          What Sets Us Apart?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="w-[372px] h-[280px] bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col items-start relative mx-auto"
            >
              <div className="ml-4 mb-2">
                <img
                  src={feature.icon}
                  alt={feature.title}
                  className="w-[138px] h-[138px]"
                />
              </div>

              {/* Container for title and description positioned below the image */}
              <div className="w-[237px] h-[76px] flex flex-col gap-0 ml-4">
                <h3 className="text-lg font-semibold text-blue-500">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;

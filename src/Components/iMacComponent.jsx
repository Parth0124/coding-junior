import React from "react";
import iMac from "../Assets/macbook-image.png";

function MainComponent() {
  return (
    <div className="flex mt-[35px] ml-[150px]">
      {/* Image Container */}
      <div className="w-[620px] h-[484px]">
        <img src={iMac} alt="imac" className="w-full h-full object-cover" />
      </div>

      {/* Text Container */}
      <div className="relative w-[500px] h-[164px] ml-[12px]">
        <h2 className="text-[3.5rem] font-bold leading-none">
          Where the world learns to c<span className="text-blue-600">o</span>
          de
        </h2>
      </div>
    </div>
  );
}

export default MainComponent;

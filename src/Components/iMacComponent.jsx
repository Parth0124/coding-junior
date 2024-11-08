import React from "react";
import iMac from "../Assets/macbook-image.png";

function MainComponent() {
  return (
    <>
      <div className="relative mt-[35px] ml-[150px] w-[620px] h-[484px]">
        <img
          src={iMac}
          alt="imac"
          className="w-[626px] h-[484px] object-cover"
        />
      </div>
    </>
  );
}

export default MainComponent;

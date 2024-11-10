import React from "react";
import lecture from "../Assets/lectures.png";
import quiz from "../Assets/objective.png";
import code from "../Assets/code-promotion.png";
import report from "../Assets/report.png";
import keyboard from "../Assets/keyboard.png";
import infinity from "../Assets/infinite-project.png";
import cloud from "../Assets/cloud.png";
import magzine from "../Assets/Magazine.png";
import phone from "../Assets/phone.png";
import topRightCurve from "../Assets/top-right-curve.png";
import leftCenterCurve from "../Assets/left-center curve.png";
import leftCenterStrap from "../Assets/left-center-strap.png";
import rightScreenDesign from "../Assets/right-screen-design.png";
import googlePlay from "../Assets/Google Play.png";
import appStore from "../Assets/App Store.png";
import googlePlayArrow from "../Assets/google-play-arrow.png";
import appStoreArrow from "../Assets/app-store-arrow.png";
import googlePoint from "../Assets/googlePointArrow.png";
import appStorePoint from "../Assets/appStorePointArrow.png";

function Services() {
  return (
    <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row justify-center items-center gap-10 px-3 py-12">
      <div className="relative md:w-2/5 lg:w-2/6 w-full flex justify-center md:block">
        <img
          src={phone}
          alt=""
          className="w-50 md:left-[113px] relative z-10"
        />
        {/* Top right curve - hidden on mobile */}
        <img
          src={topRightCurve}
          alt=""
          className="hidden md:block absolute top-[100px] right-[30px] w-1/8"
        />
        {/* Left center strap - hidden on mobile */}
        <img
          src={leftCenterStrap}
          alt=""
          className="hidden md:block absolute top-[160px] left-10 w-1/8-translate-y-1/3 z-0"
        />
        {/* Left center curve - hidden on mobile */}
        <img
          src={leftCenterCurve}
          alt=""
          className="hidden md:block absolute top-[300px] left-[1px] w-1/4 -translate-y-1/2 z-20"
        />
      </div>
      <div className="flex flex-col justify-start items-start gap-8 xl:w-2/5">
        <h1 className="text-3xl xl:text-4xl font-medium text-gray-600">
          Wanna see more? <br />
          Join us!
        </h1>
        <div className="flex flex-col md:flex-row justify-start items-start gap-8">
          <div className="flex flex-col justify-center items-start gap-8">
            <div className="flex justify-start items-center gap-3">
              <img src={lecture} alt="" className="w-10" />
              <p className="text-gray-600">Recorded Lectures</p>
            </div>
            <div className="flex justify-start items-center gap-3">
              <img src={quiz} alt="" className="w-10" />
              <p className="text-gray-600">Online Quizzes</p>
            </div>
            <div className="flex justify-start items-center gap-3">
              <img src={code} alt="" className="w-10" />
              <p className="text-gray-600">In-app Coding</p>
            </div>
            <div className="flex justify-start items-center gap-3">
              <img src={report} alt="" className="w-10" />
              <p className="text-gray-600">Evaluation Reports</p>
            </div>
          </div>
          <div className="flex flex-col justify-center items-start gap-8">
            <div className="flex justify-start items-center gap-3">
              <img src={keyboard} alt="" className="w-10" />
              <p className="text-gray-600">Language-specific keyboard</p>
            </div>
            <div className="flex justify-start items-center gap-3">
              <img src={infinity} alt="" className="w-10" />
              <p className="text-gray-600">Infinite Project Size</p>
            </div>
            <div className="flex justify-start items-center gap-3">
              <img src={cloud} alt="" className="w-10" />
              <p className="text-gray-600">Cloud Computation</p>
            </div>
            <div className="flex justify-start items-center gap-3">
              <img src={magzine} alt="" className="w-10" />
              <p className="text-gray-600">Coding Magazine</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center w-full gap-4">
          <div className="flex items-center justify-center gap-4">
            <div className="flex items-center">
              <img
                src={googlePlayArrow}
                alt="Google Play Arrow"
                className="w-18 h-10"
              />
              <img
                src={googlePoint}
                alt="Google Play Arrow Head"
                className="w-4 -ml-12 mt-8"
              />
            </div>
            <p className="text-gray-600 font-light text-lg">
              50k+ Active Users
            </p>
            <div className="flex items-center">
              <img src={appStoreArrow} alt="App Store Arrow" className="w-14" />
              <img
                src={appStorePoint}
                alt="App Store Arrow Head"
                className="w-4 -ml-3 mt-6"
              />
            </div>
          </div>
          <div className="flex items-center gap-4">
            <img
              src={googlePlay}
              alt="Google Play"
              className="h-12 cursor-pointer hover:opacity-90 transition-opacity"
            />
            <img
              src={appStore}
              alt="App Store"
              className="h-12 cursor-pointer hover:opacity-90 transition-opacity"
            />
          </div>
        </div>
      </div>
      <img
        src={rightScreenDesign}
        alt=""
        className="hidden lg:block lg:w-32 xl:w-44"
      />
    </div>
  );
}

export default Services;

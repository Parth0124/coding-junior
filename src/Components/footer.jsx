import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faMapMarkerAlt,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import facebook from "../Assets/facebook.png";
import linkedin from "../Assets/Linkedin.png";
import instagram from "../Assets/instagram.png";

const Footer = () => {
  return (
    <div className="w-full flex justify-center items-center">
      <div className="w-full grid grid-cols-1 md:grid-cols-5">
        {/* Left container with contact form and methods */}
        <div className="w-full bg-[#164D8C] py-20 md:py-28 px-4 text-white flex flex-col gap-5 md:gap-8 justify-start items-start min-h-full md:px-10 md:col-span-2">
          <h1 className="text-3xl text-white">Let’s keep in touch!</h1>
          <p className="font-thin text-white">
            Request a CodingPro Institute enquiry!
          </p>
          <div className="rounded-3xl outline outline-1 outline-white flex justify-between pl-4 w-3/4">
            <input
              type="text"
              placeholder="Institute Name"
              className="bg-transparent placeholder:text-white/80 w-full"
            />
            <button className="outline outline-1 z-10 outline-[#2B95ED] bg-gradient-to-b from-[#9BFEFF] to-[#9BFEFF] rounded-r-3xl py-2 px-4">
              <FontAwesomeIcon icon={faArrowRight} color="#164D8C" />
            </button>
          </div>
          <a href="" className="font-thin">
            Create Account
          </a>
          <a href="" className="font-thin">
            Sign in
          </a>
          <div className="flex justify-center items-center gap-2">
            <FontAwesomeIcon icon={faPhone} size="lg" />
            <p>+91 97973 59144</p>
          </div>
          <div className="flex justify-center items-center gap-2">
            <FontAwesomeIcon icon={faEnvelope} size="lg" />
            <p>codingjr.in@gmail.com</p>
          </div>
          <div className="flex justify-center items-center gap-2">
            <FontAwesomeIcon icon={faMapMarkerAlt} size="lg" />
            <p>AIC-BHU, Varanasi, 421004</p>
          </div>
        </div>

        {/* Right container with about-us, courses and social media icons */}
        <div className="w-full bg-gradient-to-t from-[#2595F1] to-[#15568B] py-20 px-4 text-white flex flex-col gap-16 justify-start items-start md:py-28 md:pl-10 md:col-span-3 lg:flex-row lg:flex-wrap xl:flex-nowrap">
          <div className="flex flex-col justify-start items-start gap-4 space-y-4">
            <h2 className="font-bold text-xl">Courses</h2>
            <div className="flex flex-col justify-center items-start gap-4 lg:gap-6">
              <a href="">Campus Training Program</a>
              <a href="">Professional Training Program</a>
              <a href="">B. Tech</a>
              <a href="">B. Des.</a>
            </div>
          </div>

          <div className="flex flex-col justify-start items-start gap-4 space-y-4">
            <h2 className="font-bold text-xl">Company</h2>
            <div className="flex flex-col justify-center items-start gap-4 lg:gap-6">
              <a href="">About Us</a>
              <a href="">Blog</a>
              <a href="">Our Team</a>
              <a href="">Privacy</a>
              <a href="">Terms & Conditions</a>
              <a href="">FAQ</a>
            </div>
          </div>

          <div className="flex flex-col justify-start items-start gap-4 space-y-4">
            <h2 className="font-bold text-xl">Follow Us</h2>
            <div className="flex justify-start items-center gap-4 text-lg">
              <a href="">
                <img
                  src={instagram}
                  className="w-10 border rounded-xl"
                  alt="Instagram"
                />
              </a>
              <a href="">
                <img
                  src={facebook}
                  className="w-10 border rounded-xl"
                  alt="Facebook"
                />
              </a>
              <a href="">
                <img
                  src={linkedin}
                  className="w-10 border rounded-xl"
                  alt="LinkedIn"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

import foodify from "../media/foodify.png";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import { RiTwitterXFill } from "react-icons/ri";
import { FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className="flex flex-row w-full justify-center mt-[30px] py-[30px] bg-slate-50">
        <div className="w-8/12">
          <div className="mb-5 flex flex-row flex-wrap justify-between items-center">
            <img className="w-auto h-[60px]" src={foodify} />
            <div className="flex flex-row justify-end items-center gap-3">
              <img
                className="w-auto h-[40px]"
                src="https://seeklogo.com/images/G/get-it-on-google-play-badge-logo-8CDE582776-seeklogo.com.png"
              ></img>
              <img
                className="w-auto h-[40px]"
                src="https://seeklogo.com/images/D/download-on-the-app-store-flat-badge-logo-4582694404-seeklogo.com.png"
              ></img>
            </div>
          </div>
          <div className="grid grid-row-4 grid-flow-col justify-between">
            <div>
              <p className=" text-base font-medium text-gray-900">COMPANY</p>
              <ul className="text-gray-500">
                <li>About</li>
                <li>Career</li>
                <li>Team</li>
              </ul>
            </div>
            <div>
              <p className=" text-base font-medium text-gray-900">
                FOR RESTAURANTS
              </p>
              <ul className="text-gray-500">
                <li>Partner With Us</li>
                <li>Apps For You</li>
              </ul>
            </div>
            <div>
              <p className=" text-base font-medium text-gray-900">LEGAL</p>
              <ul className="text-gray-500">
                <li>Terms & Conditions</li>
                <li>Cookie Policy</li>
                <li>Privacy Policy</li>
              </ul>
            </div>
            <div>
              <p className=" text-base font-medium  text-gray-900">
                SOCIAL LINKS
              </p>
              <div className=" mt-2 flex flex-wrap flex-row gap-2 justify-between">
                <FaInstagram  className=" hover:text-pink-600"/>
                <FaYoutube className=" hover:text-red-600"/>
                <RiTwitterXFill className=" hover:text-cyan-600"/>
                <FaFacebookF className=" hover:text-blue-600"/>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-full justify-center py-[30px] bg-slate-300">
        <p>
          <b>Foodify</b>, made with 🧠 and ⚛ by{" "}
          <b>
            <a href="https://www.linkedin.com/in/saurabhchandra24/">
              Saurabh Chandra
            </a>
          </b>
        </p>
      </div>
    </>
  );
};

export default Footer;

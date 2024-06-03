import React from "react";
import me from "../media/me.jpg";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { skills } from "../utils/constants";
import SkillCard from "./SkillCard";

const About = () => {
  return (
    <div className="my-7 mx-20 min-h-[70vh]">
      <div className="">
        <p className="text-4xl font-semibold">Foodify</p>
        <p className="mt-2 text-lg">
          Foodify Live is a dynamic and user-friendly food delivery application
          developed using modern web technologies to offer an enhanced user
          experience. The application leverages React for its robust and
          efficient component-based architecture, Tailwind CSS for sleek and
          responsive design, Parcel for fast and optimized bundling, and
          Swiggy’s API to fetch real-time, up-to-date restaurant information according to user's current location.
          The project also implements Redux Toolkit to manage the state of the
          application efficiently, ensuring a smooth and seamless user
          experience.<br></br>
          This project was built during the coursework of{" "}
          <Link
            to="https://namastedev.com/learn/namaste-react"
            target="_blank"
            rel="noopener noreferrer"
            className="text-orange-500"
          >
            Namaste React
          </Link>{" "}
          taught by {" "}
          <Link
            to="https://www.linkedin.com/in/akshaymarch7/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-orange-500"
          >
             Akshay Saini
          </Link>
          <p className="mt-4">
            <b>
              <u>Key Features</u>
            </b>
            <ul className="text-base">
              <li>🔸Real-Time Restaurant Information using User's Location</li>
              <li>🔸Shimmer Effects</li>
              <li>🔸Restaurant Lists and Search Functionality</li>
              <li>🔸Accordion Menus</li>
              <li>🔸Cart Functionality</li>
              <li>🔸Error Handling for non-existent pages</li>
            </ul>
          </p>
        </p>
      </div>
      <p className="mt-6 text-4xl font-semibold">Behind the Code</p>
      <div className="my-7 flex flex-wrap flex-row justify-between min-h-[60vh]">
        <div className="w-4/12">
          <img className="w-[180px] h-[180px] rounded-full" src={me}></img>
          <div className="flex flex-wrap flex-row">
            <p className="text-4xl my-[20px]">
              Hi, I'm <br></br>
              <b>SAURABH CHANDRA</b>
            </p>
            <p className="text-lg text-gray-600">
              Learning to Build Responsive and Engaging Web Experiences.
              <br></br>
              📩: saurabhc.work@gmail.com<br></br>
              📍: Bengaluru, Karnataka, India 🇮🇳
            </p>
            <div className="flex flex-wrap flex-row justify-between gap-2 mt-7">
              <Link
                to="https://github.com/saurabhc24"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub
                  size={35}
                  className="text-gray-800 hover:text-gray-600"
                />
              </Link>
              <Link
                to="https://www.linkedin.com/in/saurabhchandra24/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin
                  size={35}
                  className="text-blue-600 hover:text-blue-400"
                />
              </Link>
              <button className=" text-white bg-blue-700 font-bold px-[25px] py-[3px] rounded-[7px] shadow-md border">
                <Link
                  to="https://drive.google.com/file/d/1K6570F_oR91wDJXExNxvY9gtPDUv-OsR/view?usp=drive_link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Resume
                </Link>
              </button>
            </div>
          </div>
        </div>
        <div className="w-7/12">
          <div className="flex flex-col flex-wrap justify-items-start">
            <p className="text-2xl font-semibold">Skills</p>
            {Object.values(skills).map((category) => (
              <div className="flex flex-wrap flex-col mt-[10px]">
                <p className="text-xl font-semibold mb-[10px]">
                  {category.skillTitle}
                </p>
                <div className="flex flex-wrap flex-row">
                  {category.skillList.map((skill) => (
                    <SkillCard key={skill.title} {...skill} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

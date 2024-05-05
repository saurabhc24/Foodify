import React from "react";
import { useRouteError } from "react-router-dom";
import { Link } from "react-router-dom";
import icecream_cry from "../media/icecream_cry.gif"

const Error = () => {
  const err = useRouteError();
  return (
    <div className="flex flex-col items-center absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
      <img className=" w-52 py-11" src={icecream_cry } />
      <h1 className="text-xl font-bold text-gray-900">Sundae gone wrong!</h1>
      <p>This page seems to have slipped off the cone.</p>
      <button className="my-6 mx-3 font-montserrat font-sans bg-orange-200/50 hover:bg-orange-200/80 font-bold text-orange-500 border-0 py-2 px-4 rounded-lg">
        <Link to="/" className="relative flex items-center gap-2">
          <p>Back to home</p>
        </Link>
      </button>
    </div>
  );
};

export default Error;

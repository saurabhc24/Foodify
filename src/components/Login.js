import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleLogin = () => {
    // Handle login logic here
  };

  const handleSignup = () => {
    // Handle signup logic here
  };

  const handleGoogleLogin = () => {
    // Handle Google login logic here
  };

  return (
    <div className="flex items-center justify-center min-h-[75vh] bg-gray-50">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
        <h2 className="mb-4 text-2xl font-bold text-center">
          {isLogin ? "Login" : "Create an account"}
        </h2>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700">Phone Number</label>
            <div className="flex flex-row w-full p-2 mt-1 border rounded">
              <div className=" flex flex-row w-3/12 justify-center items-center mx-[5px]">
                <img src="https://cdn.iconscout.com/icon/premium/png-512-thumb/republic-of-india-11408854-9375483.png?f=webp&w=25"></img>
                🔻
              </div>
              <input
                type="tel"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                className="w-full focus:outline-none"
              ></input>
            </div>
          </div>

          <button
            type="button"
            onClick={isLogin ? handleLogin : handleSignup}
            className="w-full p-2 text-white bg-orange-500 rounded-[10px] hover:bg-orange-600"
          >
            <Link to="/">{isLogin ? "Login" : "Create account"}</Link>
          </button>
          <p className="mt-4 text-center">
            {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
            <span
              onClick={() => setIsLogin(!isLogin)}
              className="text-blue-500 cursor-pointer hover:text-blue-700"
            >
              {isLogin ? "Sign up" : "Log in"}
            </span>
          </p>
        </form>
        <div className="flex flex-row justify-center items-center">
          <div className="my-4 border-t w-full"></div>
          <div className="mx-[10px] font-bold">OR</div>
          <div className="my-auto border-t w-full"></div>
        </div>
        <button
          onClick={handleGoogleLogin}
          className="flex items-center justify-center w-full p-2 my-2 text-gray-700 bg-white border rounded shadow hover:bg-gray-50"
        >
          <FcGoogle className="w-[50px]" />
          Continue with Google
        </button>
      </div>
    </div>
  );
};

export default Login;

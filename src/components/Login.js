import React, { useState } from 'react';
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

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
          {isLogin ? 'Login' : 'Signup'}
        </h2>
        <form>
          
            <div className="mb-4">
              <label className="block text-gray-700">Phone Number</label>
              <input
                type="tel"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                className="w-full p-2 mt-1 border rounded"
              />
            </div>

          
          <button
            type="button"
            onClick={isLogin ? handleLogin : handleSignup}
            className="w-full p-2 text-white bg-blue-500 rounded-[10px] hover:bg-blue-600"
          >
            {isLogin ? 'Login' : 'Sign up'}
          </button>
          <p className="mt-4 text-center">
            {isLogin ? "Don't have an account?" : 'Already have an account?'}{' '}
            <span
              onClick={() => setIsLogin(!isLogin)}
              className="text-blue-500 cursor-pointer hover:underline"
            >
              {isLogin ? 'Sign up' : 'Log in'}
            </span>
          </p>
        </form>
        <div className="my-4 border-t"></div>
        <button
          onClick={handleGoogleLogin}
          className="flex items-center justify-center w-full p-2 mb-2 text-gray-700 bg-white border rounded shadow hover:bg-gray-100"
        >
          <FcGoogle className='w-[50px]'/>
          Continue with Google
        </button>
      </div>
    </div>
  );
};

export default Login;

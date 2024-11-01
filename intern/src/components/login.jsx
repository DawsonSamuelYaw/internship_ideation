import React from 'react';
import { FaEnvelope, FaPhone, FaUser } from 'react-icons/fa';
import Img from '../img/img.png';

const Login = () => {
  return (
    <div className="main bg-[#131619] h-screen p-[5em] font-[poppins] flex items-center justify-center">
      <div className="flex bg-[#1B1F23] w-[1024px] rounded-lg shadow-lg">
        <div className="form-section p-[3em] space-y-[3em] w-[50%]">
          <h1 className="text-white text-2xl font-bold">CarePulse</h1>
          <div className="cons">
            <h1 className="text-white text-3xl">Hi there, ....</h1>
            <p className="text-gray-400">Get Started with Appointments</p>
          </div>
          <div className="space-y-[20px]">
            <div className="inp flex items-center border border-gray-600 rounded-[8px] p-3 bg-transparent">
              <FaUser className="text-gray-500 mr-3" />
              <input 
                type="text" 
                placeholder="Full name" 
                className="w-full bg-transparent text-white focus:outline-none" 
              />
            </div>
            <div className="inp flex items-center border border-gray-600 rounded-[8px] p-3 bg-transparent">
              <FaEnvelope className="text-gray-500 mr-3" />
              <input 
                type="email" 
                placeholder="Email address" 
                className="w-full bg-transparent text-white focus:outline-none" 
              />
            </div>
            <div className="inp flex items-center border border-gray-600 rounded-[8px] p-3 bg-transparent">
              <FaPhone className="text-gray-500 mr-3" />
              <input 
                type="tel" 
                placeholder="Phone number" 
                className="w-full bg-transparent text-white focus:outline-none" 
              />
            </div>
            <div className="inp">
              <button className="w-full h-[48px] bg-[#24AE7C] text-white rounded-[8px]">Get Started</button>
            </div>
          </div>
        </div>

        <div 
          className="pic w-[50%] rounded-r-lg" 
          style={{
            backgroundImage: `url(${Img})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        />
      </div>
    </div>
  );
};

export default Login;

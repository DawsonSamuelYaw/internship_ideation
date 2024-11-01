import React from 'react';
import { FaDatabase, FaEnvelope, FaUser } from 'react-icons/fa';
import Im from '../img/Content.png';
import Img2 from '../img/img2.png';

const Login_2 = () => {
  return (
    <div className="main bg-[#131619] h-screen p-[5em] font-[poppins] flex items-center justify-center">
      <div className="flex bg-[#1B1F23] w-[1024px] rounded-lg shadow-lg">
        <div className="form-section p-[3em] space-y-[3em] w-[50%]">
          <div className="flex space-x-2">
            <img src={Im} alt="" />
            <h1 className="text-white text-2xl font-bold">Swift</h1>
          </div>
          <div className="cons">
            <h1 className="text-white text-3xl">Hi there, ....</h1>
            <p className="text-gray-400">Get Started</p>
          </div>
          <div className="space-y-[15px] text-white">
        <div className="con">
        <label htmlFor="">Admin Name:</label>
            <div className="inp flex items-center border border-gray-600 rounded-[8px] p-3 bg-transparent">
              <FaUser className="text-white mr-3" />
              <input 
                type="text" 
                placeholder="Admin Name" 
                className="w-full bg-transparent text-white focus:outline-none" 
              />
            </div>
        </div>
          <div className="con">
          <label htmlFor="">Email Address:</label>
            <div className="inp flex items-center border border-gray-600 rounded-[8px] p-3 bg-transparent">
              <FaEnvelope className="text-white mr-3" />
              <input 
                type="email" 
                placeholder="Email address" 
                className="w-full bg-transparent text-white focus:outline-none" 
              />
            </div>
          </div>
         <div className="con">
         <label htmlFor="">Department ID:</label>

<div className="inp flex items-center border border-gray-600 rounded-[8px] p-3 bg-transparent">
  <FaDatabase className="text-white mr-3" />
  <input 
    type="text" 
    placeholder="Development ID" 
    className="w-full bg-transparent text-white focus:outline-none" 
  />
</div>
         </div>
            
            <div className="inp">
              <button className="w-full h-[48px] bg-[#0076C1] text-white rounded-[8px]">
                Get Started
              </button>
            </div>

          </div>
        </div>

        <div 
          className="pic w-[50%] rounded-[24px] " 
          style={{
            backgroundImage: `url(${Img2})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        />
      </div>
    </div>
  );
};

export default Login_2;

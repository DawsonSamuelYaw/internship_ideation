import React from 'react';
import { FaEnvelope, FaPhone, FaUser } from 'react-icons/fa';
import Con from '../img/Content.png';
import Img3 from '../img/img3.png';

const PatientForm = () => {
  return (
    <>
      <div className="flex flex-col lg:flex-row min-h-screen bg-[#131619] justify-between font-[poppins] text-white">
        {/* Form Section */}
        <div className="form w-full lg:w-[60%] p-5 lg:p-[5em] space-y-[2em]">
          {/* Header */}
          <div className="head flex items-center space-x-3">
            <img src={Con} alt="" className="w-12 h-12" />
            <h1 className="text-[24px]">Swift</h1>
          </div>

          {/* Welcome Section */}
          <div className="welcome">
            <h1 className="text-[28px] lg:text-[36px]">Welcome 👋</h1>
            <p className="text-[#ABB8C4] text-[16px]">Let us know more about yourself</p>
          </div>

          {/* Form */}
          <form action="" className="space-y-8 lg:space-y-[5em]">
            {/* Personal Information */}
            <div className="inps space-y-6">
              <div className="main">
                <h1 className="text-[24px] lg:text-[30px]">Personal Information</h1>
              </div>

              {/* Full Name */}
              <div className="inp">
                <label htmlFor="" className="text-[#ABB8C4]">Full Name</label>
                <div className="input border border-[#363A3D] flex items-center rounded-[8px] p-2">
                  <FaUser />
                  <input
                    type="text"
                    name=""
                    id=""
                    className="w-full bg-transparent outline-none px-3"
                    placeholder="ex: DAWSON SAMUEL YAW"
                  />
                </div>
              </div>

              {/* Email and Phone */}
              <div className="inp">
                <div className="main-1 flex flex-col lg:flex-row gap-6">
                  {/* Email Address */}
                  <div className="inner w-full lg:w-1/2">
                    <label htmlFor="">Email Address:</label>
                    <div className="input flex border border-[#363A3D] rounded-[8px] p-2 items-center">
                      <FaEnvelope />
                      <input
                        type="email"
                        name=""
                        id=""
                        className="bg-transparent w-full outline-none px-3"
                        placeholder="ex: dawsonsam05595@gmail.com"
                      />
                    </div>
                  </div>

                  {/* Phone Number */}
                  <div className="inner w-full lg:w-1/2">
                    <label htmlFor="">Phone Number:</label>
                    <div className="input flex border border-[#363A3D] rounded-[8px] p-2 items-center">
                      <FaPhone />
                      <input
                        type="text"
                        name=""
                        id=""
                        className="bg-transparent w-full outline-none px-3"
                        placeholder="+233 559 539 493"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Address Information */}
            <div className="second space-y-6">
              <div className="main-1 flex flex-col lg:flex-row gap-6">
                {/* Address */}
                <div className="inner w-full lg:w-1/2">
                  <label htmlFor="">Address:</label>
                  <div className="input flex border border-[#363A3D] rounded-[8px] p-2 items-center">
                    <input
                      type="text"
                      name=""
                      id=""
                      className="bg-transparent w-full outline-none px-3"
                      placeholder="ex: 14 street, New York, NY - 5101"
                    />
                  </div>
                </div>

                {/* Occupation */}
                <div className="inner w-full lg:w-1/2">
                  <label htmlFor="">Occupation:</label>
                  <div className="input flex border border-[#363A3D] rounded-[8px] p-2 items-center">
                    <input
                      type="text"
                      name=""
                      id=""
                      className="bg-transparent w-full outline-none px-3"
                      placeholder="Software Engineer"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Medical Information */}
            <div className="inps space-y-6">
              <div className="main">
                <h1 className="text-[24px] lg:text-[30px]">Medical Information</h1>
              </div>

              {/* Primary Care Physician */}
              <div className="inp">
                <label htmlFor="" className="text-[#ABB8C4]">Primary care physician:</label>
                <div className="input border border-[#363A3D] flex items-center rounded-[8px] p-2">
                  <FaUser />
                  <input
                    type="text"
                    name=""
                    id=""
                    className="w-full bg-transparent outline-none px-3"
                  />
                </div>
              </div>

              {/* Insurance Provider */}
              <div className="main-1 flex flex-col lg:flex-row gap-6">
                {/* Insurance Provider */}
                <div className="inner w-full lg:w-1/2">
                  <label htmlFor="">Insurance Provider:</label>
                  <div className="input flex border border-[#363A3D] rounded-[8px] p-2 items-center">
                    <input
                      type="text"
                      name=""
                      id=""
                      className="bg-transparent w-full outline-none px-3"
                      placeholder="ex: BlueCross"
                    />
                  </div>
                </div>

                {/* Insurance Policy Number */}
                <div className="inner lg:w-1/2">
                  <label htmlFor="">Insurance policy number:</label>
                  <div className="input flex border border-[#363A3D] rounded-[8px] p-2 items-center">
                    <input
                      type="text"
                      name=""
                      id=""
                      className="bg-transparent w-full outline-none px-3"
                      placeholder="ex: ABC1234567"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Identification and Verification */}
            <div className="third space-y-6">
              <div className="main">
                <h1 className="text-[24px] lg:text-[30px]">Identification and Verification</h1>
              </div>

              <div className="inp">
                <label htmlFor="" className="text-[#ABB8C4]">Identification type:</label>
                <div className="input border border-[#363A3D] flex items-center rounded-[8px] p-2">
                  <select name="" id="" className="w-full bg-transparent outline-none">
                    <option value="" className="bg-black">Birth Certificate</option>
                    <option value="" className="bg-black">PASSPORT</option>
                    <option value="" className="bg-black">NHIS</option>
                    <option value="" className="bg-black">GHANA CARD</option>
                  </select>
                </div>
              </div>

              <div className="inp">
                <label htmlFor="" className="text-[#ABB8C4]">Identification Number:</label>
                <div className="input border border-[#363A3D] flex items-center rounded-[8px] p-2">
                  <input
                    type="number"
                    name=""
                    id=""
                    className="w-full bg-transparent outline-none px-3"
                    placeholder="ex 1234567"
                  />
                </div>
              </div>
            </div>

            {/* Consent and Privacy */}
            <div className="form space-y-6">
              <div className="main">
                <h1 className="text-[24px] lg:text-[30px]">Consent and Privacy</h1>
              </div>
              <div className="agreement space-y-3">
                <label className="flex items-center">
                  <input type="checkbox" name="" id="" />
                  <span className="ml-2">I consent to receive treatment for my health condition.</span>
                </label>

                <label className="flex items-center">
                  <input type="checkbox" name="" id="" />
                  <span className="ml-2">I consent to the use and disclosure of my health information for treatment purposes.</span>
                </label>

                <label className="flex items-center">
                  <input type="checkbox" name="" id="" />
                  <span className="ml-2">I acknowledge that I have reviewed and agree to the privacy policy</span>
                </label>
              </div>
            </div>

            {/* Submit Button */}
            <div className="btn">
              <button className="bg-[#24AE7C] w-full py-2 rounded-md text-center text-[20px]">Submit</button>
            </div>
          </form>
        </div>

        {/* Image Section */}
         
         <div className=""></div><div className="w-full lg:w-[40%] hidden lg:block">
          <img src={Img3} alt="content" className="w-full h-full object-cover" />
        </div>
      </div>
    </>
  );
};

export default PatientForm;

import React from 'react';
import { FaArrowLeft, FaArrowRight, FaCheck, FaRegHourglass } from 'react-icons/fa';
import { GoAlert } from "react-icons/go";
import { RxCross2 } from 'react-icons/rx';
import { TbCalendarCheck } from "react-icons/tb";
import Ava from '../img/Avatar.png';
import Ava1 from '../img/Avatar1.png';
import Con from '../img/Content.png';

const Dashboard = () => {

    function opens(){
        const op = document.querySelector('.hello');
        op.style.display="block";
    }
    const exist =()=>{
        const op = document.querySelector('.hello');
        op.style.display="none";
    }
  return (
    <>
    <div className='bg-[#131619] min-h-screen p-4 font-[poppins] text-white'>
        {/* Top Bar */}
        <div className="top-bar bg-[#0D0F10] flex justify-between items-center p-5 rounded-lg mb-6">
            <div className="flex items-center space-x-2">
                <img src={Con} alt="Content Logo" className="w-8 h-8" />
                <h1 className='text-xl md:text-2xl'>CarePulse</h1>
            </div>
            <div className="flex items-center space-x-2">
                <img src={Ava} alt="Admin Avatar" className="w-[32px] h-[32px]" />
                <button className='text-md md:text-lg'>Admin</button>
            </div>
        </div>

        {/* Welcome Section */}
        <div className="px-4 md:px-8 space-y-5">
            <div className="wel">
                <h1 className='text-[18px] md:text-[36px]'>Welcome, Admin</h1>
                <p className='text-[8px] md:text-[16px] text-[#ABB8C4]'>Start your day by managing new appointments</p>
            </div>

            {/* Stats Section */}
            <div className="welcome-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
               {/* Item 1 */}
               <div className="item-1 h-[152px] md:h-[50px] lg:h-[152px] p-5 rounded-lg bg-gradient-to-r from-[#D7EDED26] to-[#00C1CC00]">
                   <div className="flex items-center space-x-3">
                        <TbCalendarCheck className='text-[#FFD147] text-2xl md:text-3xl'/>
                        <h1 className='text-2xl md:text-3xl'>94</h1>
                    </div>
                    <h1 className='text-sm md:text-base'>Total number of scheduled appointments</h1>
               </div>

               {/* Item 2 */}
               <div className="item-2 h-[152px] md:h-[50px] lg:h-[152px] p-5 rounded-lg bg-gradient-to-r from-[#D7EDED26] to-[#00C1CC00]">
                   <div className="flex items-center space-x-3">
                        <FaRegHourglass className='text-[#79B5EC] text-2xl md:text-3xl'/>
                        <h1 className='text-2xl md:text-3xl'>32</h1>
                    </div>
                    <h1 className='text-sm md:text-base'>Total number of pending appointments</h1>
               </div>

               {/* Item 3 */}
               <div className="item-3 h-[152px] md:h-[50px] lg:h-[152px] p-5 rounded-lg bg-gradient-to-r from-[#D7EDED29] to-[#CCEBEB00]">
                   <div className="flex items-center space-x-3">
                        <GoAlert className='text-[#FF4F4E] text-2xl md:text-3xl'/>
                        <h1 className='text-2xl md:text-3xl'>56</h1>
                    </div>
                    <h1 className='text-sm md:text-base'>Total number of cancelled appointments</h1>
               </div>
            </div>

            {/* Table Section */}
            <div className="content mt-8 rounded-[8px] overflow-x-auto">
                <table className="min-w-full table-auto text-left">
                    <thead className="rounded-lg bg-[#0D0F10]">
                        <tr>
                            <th className="py-2 px-4">Patient</th>
                            <th className="py-2 px-4">Date</th>
                            <th className="py-2 px-4">Status</th>
                            <th className="py-2 px-4">Doctor</th>
                            <th className="py-2 px-4">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className='bg-[#1C2023]'>
                            <td className="py-2 px-4 flex items-center space-x-[14px]">
                                <img src={Ava1} alt="" />
                                <h1>Phoenix Baker</h1>
                            </td>
                            <td className="py-2 px-4">Jan 4,2022</td>
                            <td className="py-2 px-4">
                            <div className="pe flex items-center space-x-1 text-[12px] bg-[#0D2A1F] rounded-[12px] text-[#24AE7C] w-[93px] h-[22px] justify-center py-[2px] pr-[2px] pl-[6px]">
                                    <FaCheck/>
                                    <h1>Scheduled</h1>
                                </div>
                            </td>
                            <td className="py-2 px-4">Dr. Philip Odi-asempa</td>
                            <td className="py-2 px-4 space-x-[14px]">
                                <button className="text-[#24AE7C]" onClick={opens}>Schedule</button>
                                <button className="text-white">Cancel</button>
                            </td>
                        </tr>
                        <tr className='bg-[#0D0F10]'>
                            <td className="py-2 px-4 flex items-center space-x-[14px]">
                                <h1 className='w-[32px] h-[32px] rounded-[200px] text-center justify-center flex items-center text-[#0D0F10] bg-[#9CC8F0]'>SD</h1>
                                <h1>Samuel Dawson</h1>
                            </td>
                            <td className="py-2 px-4">Jan 4,2022</td>
                            <td className="py-2 px-4">
                            <div className="pe flex items-center gap-[4px] text-[12px] bg-[#152432] rounded-[12px] text-[#79B5EC] w-[93px] h-[22px] pl-[6px] pr-[2px]  justify-center">
                                    <FaRegHourglass/>
                                    <h1 >Pending</h1>
                                </div>
                            </td>
                            <td className="py-2 px-4">Dr. Clifford Boadzie</td>
                            <td className="py-2 px-4 space-x-[14px]">
                                <button className="text-[#24AE7C]" onClick={opens}>Schedule</button>
                                <button className="text-white">Cancel</button>
                            </td>
                            
                        </tr>
                        <tr className='bg-[#1C2023]'>
                        <td className="py-2 px-4 flex items-center space-x-[14px]">
                                <h1 className='w-[32px] h-[32px] rounded-[200px] text-center justify-center flex items-center text-[#0D0F10] bg-[#9CC8F0]'>HE</h1>
                                <h1>Hudson Emmanuel</h1>
                            </td>
                            <td className="py-2 px-4">Jan 8,2022</td>
                            <td className="py-2 px-4">
                          
                                <div className="pe flex items-center gap-[4px] text-[12px] bg-[#3E1716] rounded-[12px] text-[#F37877] w-[93px] h-[22px] pl-[6px] pr-[2px]  justify-center">
                                    <RxCross2/>
                                    <h1 >Cancelling</h1>
                                </div>
                            </td>
                            <td className="py-2 px-4">Dr. Richmond Fosu</td>
                            <td className="py-2 px-4 space-x-[14px]">
                                <button className="text-[#24AE7C]" onClick={opens}>Schedule</button>
                                <button className="text-white">Cancel</button>
                            </td>
                        </tr>
                        <tr className='bg-[#0D0F10]'>
                        <td className="py-2 px-4 flex items-center space-x-[14px]">
                                <h1 className='w-[32px] h-[32px] rounded-[200px] text-center justify-center flex items-center text-[#0D0F10] bg-[#B6F09C]'>MB</h1>
                                <h1>Mary Boateng</h1>
                            </td>
                            <td className="py-2 px-4">Jan 6,2022</td>
                            <td className="py-2 px-4">
                            <div className="pe flex items-center space-x-1 text-[12px] bg-[#0D2A1F] rounded-[12px] text-[#24AE7C] w-[93px] h-[22px] justify-center py-[2px] pr-[2px] pl-[6px]">
                                    <FaCheck/>
                                    <h1>Scheduled</h1>
                                </div>
                            </td>
                            <td className="py-2 px-4">Dr. George Arthur</td>
                            <td className="py-2 px-4 space-x-[14px]">
                                <button className="text-[#24AE7C]" onClick={opens}>Schedule</button>
                                <button className="text-white">Cancel</button>
                            </td>
                        </tr>
                        <tr className='bg-[#1C2023]'>
                        <td className="py-2 px-4 flex items-center space-x-[14px]">
                                <h1 className='w-[32px] h-[32px] rounded-[200px] text-center justify-center flex items-center text-[#0D0F10] bg-[#D59CF0]'>GA</h1>
                                <h1>Gifty Acheampong</h1>
                            </td>
                            <td className="py-2 px-4">Jan 8,2022</td>
                            <td className="py-2 px-4">
                            <div className="pe flex items-center gap-[4px] text-[12px] bg-[#152432] rounded-[12px] text-[#79B5EC] w-[93px] h-[22px] pl-[6px] pr-[2px]  justify-center">
                                    <FaRegHourglass/>
                                    <h1 >Pending</h1>
                                </div>
                            </td>
                            <td className="py-2 px-4">Dr. Dawson Samuel</td>
                            <td className="py-2 px-4 space-x-[14px]">
                                <button className="text-[#24AE7C]" onClick={opens}>Schedule</button>
                                <button className="text-white">Cancel</button>
                            </td>
                        </tr>
                        
                    </tbody>
                </table>
                <div className='bg-[#0D0F10] flex justify-between pt-[12px] pr-[24px] pb-[16px] pl-[24px]'>
                            <FaArrowLeft className='bg-[#1A1D21] text-[30px] p-[8px] rounded-[8px] text-[#24AE7C]'/>
                            <FaArrowRight className='bg-[#1A1D21] text-[30px] p-[8px] rounded-[8px] text-[#24AE7C]'/>
                        </div>
            </div>
        </div>
    </div>
    <div className="hello fixed inset-0 bg-[#060708A3] bg-opacity-75 flex items-center justify-center z-50" style={{display:"none"}}>
    <div className="bg-[#1A1D21F5] p-8 font-[poppins] rounded-[12px] shadow-lg w-full text-white max-w-[500px] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
            <div className="sub flex justify-between items-center">
            <h2 className="text-[24px]">Schedule Appointment</h2>
                <RxCross2 onClick={exist} className='cursor-pointer'/>
                
            </div>
            <p className="text-[#ABB8C4] text-[16px]">
            Please fill in the following details to schedule
            </p>
            <form action="">
              <div className="form flex flex-col space-y-2">
                <div className="f-1">
                    <label htmlFor="">Doctor</label>
                  <input type="text" placeholder='Doctor' className='p-2 w-full focus:outline-none  bg-transparent border border-[#363A3D] rounded-[8px] '/>
                </div>
                <div className="f-2">
                    <label htmlFor="">Reason for appointment</label>
                  <textarea type="text" placeholder='ex: Annual montly check-up' className='p-2 w-full focus:outline-none  bg-transparent border border-[#363A3D] rounded-[8px] '/>
                </div>
                <div className="f-3">
                  <label htmlFor="">Expected appointment date</label>
                  <input type="date" className='p-2 w-full focus:outline-none  bg-transparent border border-[#363A3D] rounded-[8px]'/>
                </div>
              </div>
            </form>
            <button className="bg-[#24AE7C] text-white px-4 py-2 w-full my-[10px] rounded">
            Schedule appointment
            </button>
            {/* <IoMdClose onClick={closeModal} className='cursor-pointer absolute top-2 right-2 text-2xl'/> */}
          </div>
    </div>
    </>
  );
};

export default Dashboard;

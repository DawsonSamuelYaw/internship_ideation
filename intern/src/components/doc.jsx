import React from 'react'
import { FaSearch } from 'react-icons/fa'
import Img4 from '../img/img4.jpg'
const doc = () => {
  return (
    <>
    <div className='h-[100vh] bg-[#131619] p-[5em]  font-[poppins] text-white'>
        <div className="flex justify-between">
            <div className="first space-y-[2em] w-[860px]">
                <div className="care">
                    <h1>CarePulse</h1>
                </div>
                <div className="hey">
                    <h1>Hey, there👋</h1>
                </div>
                <div className="doc flex flex-col space-y-4 ">
                   <div className="con">
                   <label htmlFor="" className='text-[#ABB8C4] text-[14px]'>Doctor</label>
                    <div className="search flex p-5 space-x-2  items-center border border-gray-600 rounded-[8px] py-2">
                    <FaSearch className=''/>
                    <select name="" id="" className='bg-transparent w-full outline-none '>
                    <option value="" className='bg-black'>Select a Doctor</option>
                        <option value="" className='bg-black'>Dr. Smith</option>
                        <option value="" className='bg-black'>Dr. Johnson</option>
                    </select>
                    </div>
                   </div>

                    <div className="flex  gap-[24px]">
                        <div className="reason flex flex-col w-full lg:w-1/2 ">
                            <label htmlFor="" className='text-[14px] text-[#ABB8C4]'>Reason for visit</label>
                            <div className="sub border border-gray-500 rounded-[8px] p-2">
                            <textarea type="text" name="" id="" className='bg-transparent w-full outline-none' placeholder='ex: Annual montly check-up' />
                            </div>
                        </div>
                        <div className="comment flex flex-col w-full lg:w-1/2 ">
                            <label htmlFor=""  className='text-[14px] lg:text-[14px] text-[#ABB8C4]'>Additional Comments/notes</label>
                            <div className="sub border border-gray-500 rounded-[8px] p-2">
                            <textarea type="text" name="" id="" className='bg-transparent w-full outline-none' placeholder='ex: Prefer afternoon appointments, if possible' />
                            </div>
                        </div>
                    </div>
                    
                    <div className="date flex flex-col   ">
                            <label htmlFor="" className='text-[14px] text-[#ABB8C4]'>Expected appointment date</label>
                            <div className=" border border-gray-500 rounded-[8px] p-2">
                            <input type="date" name="" id="" className='w-full bg-transparent' placeholder='Select your appointment date'/>
                            </div>
                        </div>
                        <div className="sub bg-[#24AE7C] p-2 rounded-[8px] hover:bg-[#23664e]">
                            <button className='w-full '>Submit and Continue</button>
                        </div>
                </div>

            </div>
            <div className="pic w-[50%] rounded-[24px] " 
          style={{
            backgroundImage: `url(${Img4})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
          }}
        />

        </div>

    </div>
    
    </>
  )
}

export default doc
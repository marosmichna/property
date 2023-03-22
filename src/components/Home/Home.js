import React from 'react';
import house from "../../images/House.png"

const Home = () => {
  return (
    <div name="home" className="max-w-[1200px] mx-auto px-2 sm:h-screen">
        <div className="flex flex-col sm:flex-row items-center mt-10 sm:mt-40 justify-center">
            <div className="flex flex-col">
                <div className="sm:w-[65%] sm:text-left text-center">
                    <h1 className="font-pap font-normal text-[40px] leading-[40px] sm:text-[60px] sm:leading-[85px]">Great <br /> <span className="text-[#DADE13]">Home</span>. Made for everyone
                    </h1>
                    <p className="text-[15px] leading-[20px] text-[#C9C9C9] sm:text-[20px] sm:leading-[30px] mt-8 sm:mt-16 uppercase font-pop font-bold sm:mb-0 mb-5">
                    Lore Issue is simply dummy text of the printing and typesetting industry. Lore Issue has been the industry's standard dummy text ever since the 1500s.
                    </p>
                </div>
            </div>
            <div>
                <div>
                    <img className="w-[1400px]" src={house}  alt="My home"/>
                </div>
            </div>
        </div>
        <div className="sm:flex sm:flex-row sm:items-center sm:mt-40 flex flex-col items-center mt-10">
            <div>
                <svg
                 width="60" height="60" viewBox="0 0 60 60" fill="none"     xmlns="http://www.w3.org/2000/svg">
                    <circle cx="30" cy="30" r="30" fill="#D9D9D9"/>
                </svg>
            </div>
            <div className="flex flex-col items-center sm:ml-10 sm:mt-0 mt-5">
                <h2 className="font-pap leading-6 font-normal text-[30px]">499</h2>
                <p className="text-[#C9C9C9] font-medium text-[20px]">Projects</p>
            </div>
            <div className="flex flex-col items-center sm:ml-[80px] sm:mt-0 mt-5">
                <h2 className="font-pap leading-6 font-normal text-[30px]">125</h2>
                <p className="text-[#C9C9C9] font-medium text-[20px]">PreOrders</p>
            </div>
            <div className="flex flex-col items-center sm:ml-[80px] sm:mt-0 mt-5">
                <h2 className="font-pap leading-6 font-normal text-[30px]">027</h2>
                <p className="text-[#C9C9C9] font-medium text-[20px]">Workers</p>
            </div>
            <div className="flex flex-col items-center sm:ml-[80px] sm:mt-0 mt-5">
                <h2 className="font-pap leading-6 font-normal text-[30px]">013</h2>
                <p className="text-[#C9C9C9] font-medium text-[20px]">Offices</p>
            </div>
            <div className="sm:ml-auto sm:flex hidden">
                <svg 
                    width="483" height="1" viewBox="0 0 483 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                <line y1="0.5" x2="483" y2="0.5" stroke="#C9C9C9"/>
                </svg>

            </div>
        </div>
    </div>
  )
}

export default Home
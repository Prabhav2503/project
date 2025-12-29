import React from 'react'
import bg from "../assets/bg.svg";
import scooty from "../assets/scooty.svg";
import logo from "../assets/logo.svg";

const Footer = () => {
  return (
    <div
          className="w-full relative flex flex-col items-center -translate-y-40 px-10 xl:px-0"
          style={{ fontFamily: "Inter" }}
        >
          {/* First Background */}
          <img
            src={bg}
            alt=""
            className="size-[700px] absolute right-0 top-0 xl:-translate-y-25"
          />
            <div className='flex flex-col lg:flex-row items-center justify-evenly w-full gap-6 px-4 lg:px-0'>
            <div className='z-10 flex flex-col items-start justify-start gap-6 lg:gap-10 w-full lg:w-auto'>
              <img src={logo} alt="" />
              <div className='text-black font-bold gap-6 lg:gap-10 justify-end items-start text-center lg:text-left grid grid-cols-1 lg:grid-cols-3 text-2xl lg:text-3xl'>
                <div>
                  <p>Support</p>
                  <p>FAQs</p>
                  <p>Careers</p>
                </div>
                <div>
                  <p>Investor</p>
                  <p>Relations</p>
                </div>
                <div>
                  <p>Follow Us</p>
                </div>
              </div>
            </div>
            <img src={scooty} alt="" className='z-10 w-48 lg:size-128' />
            </div>
    </div>
  )
}

export default Footer
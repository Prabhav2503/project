import React from 'react'
import bg from "../assets/bg.svg";
import scooty from "../assets/scooty.svg";
import logo from "../assets/logo.svg";

const Footer = () => {
  return (
    <div
          className="w-full relative flex flex-col items-center -translate-y-40 "
          style={{ fontFamily: "Inter" }}
        >
          {/* First Background */}
          <img
            src={bg}
            alt=""
            className="size-[700px] absolute right-0 top-0 -translate-y-25"
          />
          <div className='flex items-center justify-evenly w-full '>
            <div className='z-10 flex flex-col items-start justify-start gap-10'>
                <img src={logo} alt="" />
                <div className='text-black font-bold gap-10 justify-end items-start text-center grid grid-cols-3 text-3xl text-left'>
                    <div>
                        <p>Support</p>
                        <p>FAQs</p>
                        <p>Careers</p>
                    </div>
                    <div>
                        <p>Investor</p>
                        <p>Relations</p>
                    </div>
                    <p>Follow Us</p>
                </div>
            </div>
            <img src={scooty} alt="" className='z-10 size-128' />
          </div>
    </div>
  )
}

export default Footer
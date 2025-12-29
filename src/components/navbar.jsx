import React from 'react'
import Logo from    '../assets/logo.svg'
import person from '../assets/person.svg'
import cart from   '../assets/cart.svg'


const Navbar = () => {
  return (
    <div className='flex flex-col lg:flex-row items-center justify-between px-4 lg:px-10 py-5'>
        <div><img src={Logo} alt="Logo" className='h-8 lg:h-auto' /></div>
        <div className='hidden lg:flex items-center justify-center gap-8 text-black font-semibold text-md cursor-pointer' style={{fontFamily:"Inter"}}>
            <p>Home</p>
            <p>About Us</p>
            <p>Service </p>
            <p>Blog</p>
        </div>
        <div className='flex items-center justify-center gap-3 mt-3 lg:mt-0'>
            <div className='rounded-full flex items-center justify-center p-2 border border-2 border-red-500 cursor-pointer'><img src={person} alt="" className='h-4' /></div>
            <div className='rounded-full flex items-center justify-center p-2 border border-2 border-red-500 cursor-pointer'><img src={cart} alt="" className='h-4' /></div>
            <button className='bg-red-500 px-5 py-2 text-white cursor-pointer hidden lg:inline-block' style={{fontFamily:"Inter"}}>Add Listing</button>
        </div>
    </div>
  )
}

export default Navbar
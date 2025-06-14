'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <div className='navbar-bg z-10'>
        <nav className='flex flex-col md:flex-row md:justify-between items-center text-white pt-3 px-4 relative'> {/* Added 'relative' here */}
          <Image src='/logo.png' alt='company logo' width={'280'} height={'280'} />

          <div className='text-center pb-2 hidden md:block'>
            <p className='text-2xl antonio font-bold pr-3 leading-7'>
              Your Leicestershire <br />
              <span className='text-[#fe903b]'>Heating</span> & <span className='text-[#45fbdb]'>Plumbing</span> Experts.
            </p>
            <p className='text-2xl mt-2 font-semibold antonio'>Tel:0121-345-9821</p>
          </div>

          <div className='md:hidden antonio text-2xl bg-gray-900 px-50 py-1 '>
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className='text-white focus:outline-none'>
              {/* <svg
                className='w-8 h-8'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
                xmlns='http://www.w3.org/2000/svg'
              > */}<p className=''> MENU
                {isMenuOpen ? (
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M6 18L18 6M6 6l12 12'
                  ></path>
                ) : (
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M4 6h16M4 12h16M4 18h16'
                  ></path>
                )}
              </p>
            </button>
          </div>
        </nav>

        {/* Dropdown Menu - positioned absolutely at the bottom */}
        <div
          className={`
            md:hidden absolute z-30  left-0 w-full bg-gray-900 transition-all duration-300 ease-in-out
            ${isMenuOpen ? 'block opacity-100' : 'hidden opacity-0'}
          `}
        >
          <div className='flex flex-col space-y-2 py-4 items-center antonio'>
            <Link href='/' className='text-[#dfdddb] hover:text-[#fe903b] text-2xl px-4 py-2'>Home</Link>
            <Link href='/about' className='text-[#dfdddb] hover:text-[#fe903b] text-2xl px-4 py-2'>Plumbing</Link>
            <Link href='/services' className='text-[#dfdddb] hover:text-[#fe903b] text-2xl px-4 py-2'>Heating</Link>
            <Link href='/contact' className='text-[#dfdddb] hover:text-[#fe903b] text-2xl px-4 py-2'>Customer</Link>
            <Link href='/reviews' className='text-[#dfdddb] hover:text-[#fe903b] text-2xl px-4 py-2'>Reviews</Link>
            <Link href='/blog' className='text-[#dfdddb] hover:text-[#fe903b] text-2xl px-4 py-2'>Blog</Link>
            <Link href='/contact' className='text-[#dfdddb] hover:text-[#fe903b] text-2xl px-4 py-2'>Contact</Link>
          </div>
        </div>

        {/* Original Desktop Navigation - hidden on mobile */}
        <div className='bg-gray-900 pb-4 hidden md:block w-full z-30 antonio'>
          <div className='flex justify-around items-center space-x-8'>
            <Link href='/' className='text-[#dfdddb] hover:text-[#fe903b] text-2xl px-4'>Home</Link>
            <Link href='/about' className='text-[#dfdddb] hover:text-[#fe903b] text-2xl px-4'>Plumbing</Link>
            <Link href='/services' className='text-[#dfdddb] hover:text-[#fe903b] text-2xl px-4'>Heating</Link>
            <Link href='/contact' className='text-[#dfdddb] hover:text-[#fe903b] text-2xl px-4'>Customer</Link>
            <Link href='/reviews' className='text-[#dfdddb] hover:text-[#fe903b] text-2xl px-4'>Reviews</Link>
            <Link href='/blog' className='text-[#dfdddb] hover:text-[#fe903b] text-2xl px-4'>Blog</Link>
            <Link href='/contact' className='text-[#dfdddb] hover:text-[#fe903b] text-2xl px-4'>Contact</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
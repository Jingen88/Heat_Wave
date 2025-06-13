import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
// This is a Navbar component for the Heatwave application

const Navbar = () => {
  return (
    <>
    <div className='navbar-bg z-10'>
    <nav className='flex justify-between items-center  text-white pt-3 px-4'>
        <Image src='/logo.png' alt='company logo' width={'280'} height={'280'}/>
       
<div className='text-center pb-2'>
    <p className='text-2xl antonio font-bold pr-3 leading-7'>Your Leicestershire <br/><span className='text-[#fe903b]'>Heating</span> & <span className='text-[#45fbdb]'>Plumbing</span> Experts.</p>
    <p className='text-2xl mt-2 font-semibold antonio'>Tel:0121-345-9821</p>
    
</div>
    </nav>
    <div className='bg-gray-900 pb-4  flex justify-around items-center antonio'>
     <div className='flex space-x-15 '>
               <Link href='/' className='text-[#dfdddb]  hover:text-[#fe903b] text-2xl px-4'>Home</Link>
               <Link href='/about' className='text-[#dfdddb]  hover:text-[#fe903b] text-2xl px-4'>Plumbing</Link>
               <Link href='/services' className='text-[#dfdddb]  hover:text-[#fe903b] text-2xl px-4'>Heating</Link>
               <Link href='/contact' className='text-[#dfdddb]  hover:text-[#fe903b] text-2xl px-4'>Customer</Link>
                <Link href='/reviews' className='text-[#dfdddb]  hover:text-[#fe903b] text-2xl px-4'>Reviews</Link>
                <Link href='/blog' className='text-[#dfdddb]  hover:text-[#fe903b] text-2xl px-4'>Blog</Link>
                <Link href='/contact' className='text-[#dfdddb]  hover:text-[#fe903b] text-2xl px-4'>Contact</Link>
        </div>
        </div>
        </div>
        </>
  )
}

export default Navbar
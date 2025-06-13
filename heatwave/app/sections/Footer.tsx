import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
// This is a Footer component for the Heatwave application

const Footer = () => {
  return (
    <>
    <div className=' relative flex flex-col bg-[#1e2939] px-5 py-7'>
<div className='flex flex-row justify-between items-center antonio  '>
    <div className=' flex flex-col mb-15' >
      <div className='flex flex-row justify-center items-center gap-4 mb-4'>
        <Image className='hover:shadow-lg cursor-pointer
                duration-500 transition-all' src={'/Youtube.png'} alt='' width={60} height={60}/>
        <Image  className='hover:shadow-lg cursor-pointer
                duration-500 transition-all'src={'/fb.png'} alt='' width={60} height={60}/>
        <Image className='hover:shadow-lg cursor-pointer
                duration-500 transition-all' src={'/Linkedin.png'} alt='' width={60} height={60}/>
        <Image className='hover:shadow-lg cursor-pointer
                duration-500 transition-all' src={'/insta.png'} alt='' width={60} height={60}/>
    </div>
      <div className='flex flex-col items-start font-bold text-[#dfdddb] antonio'>
        <p>Email: Costumerservice@Heatwave.co.uk</p>
        <p>Tel: +44 0121-345-9821</p>
      </div>
  </div>

  <div className='flex flex-row justify-between items-start gap-10 antonio text-[#dfdddb]'>
    
       <div className='flex flex-col space-x-3 '>
               <Link href='/' className='text-[#dfdddb] cursor-pointer  hover:text-[#fe903b] text-md4'>Home</Link>
               <Link href='/about' className='text-[#dfdddb] cursor-pointer  hover:text-[#fe903b] text-md'>Plumbing</Link>
               <Link href='/services' className='text-[#dfdddb] cursor-pointer  hover:text-[#fe903b] text-md'>Heating</Link>
               <Link href='/contact' className='text-[#dfdddb] cursor-pointer  hover:text-[#fe903b] text-md'>Customer</Link>
                <Link href='/reviews' className='text-[#dfdddb] cursor-pointer  hover:text-[#fe903b] text-md'>Reviews</Link>
                <Link href='/blog' className='text-[#dfdddb] cursor-pointer  hover:text-[#fe903b] text-md'>Blog</Link>
                <Link href='/contact' className='text-[#dfdddb] cursor-pointer  hover:text-[#fe903b] text-md'>Contact</Link>
        </div>  

    
    <div className='flex flex-col  text-left antonio text-[#dfdddb]'>
      <p className='text-2xl font-bold'>Adress:</p>
      <p className='text-md'>7 Getliffe Road</p>
      <p className='text-md'>LE7 4GY </p>
      <p className='text-md'>Leicestershire</p>
      <p className='text-md'>UK</p>
    </div>
  </div>

</div>
<div className="  absolute bottom-0 left-135 flex flex-col items-center antonio mx-auto text-center text-[#dfdddb] text-lg  w-fullcursor-pointer ">
          <Image  className='mb-0'src={'/logo2.png'} alt='logo' width={100} height={100} />
          <p className="text-sm">© {new Date().getFullYear()} Heatwave. All rights reserved.</p>
          <p className="text-sm">Designed by <a href="https://tamash.netlify.app/" className="text-blue-400 hover:underline">Tamás</a></p>
</div>
</div>
  </>
  )
}

export default Footer
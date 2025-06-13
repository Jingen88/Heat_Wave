'use client'
import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import ServiceHighlights from '../components/ServiceHighlights'
import { QuoteButton } from '../components/Buttons'
// This is a Hero component for the Heatwave application

const Hero = () => {
  return (
    <>
    <div className=' justify-evenly items-start flex flex-col md:flex-row md:justify-between md:items-start pr-1  '>
      <div className='  align-text-top md:text-left'>
        <motion.div
          initial={{ x: -300, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}>
        <h1 className='text-7xl md:text-6xl md:font-bold antonio text-white mt-10 pl-4 md:pl-4 pr-0'>
  Your Trusted Choice for<br />
  <span className='text-[#fe903b] text-8xl md:text-8xl leading-30'>Heating</span> & <span className='text-[#45fbdb] text-8xl leading-30'>Plumbing</span>
  <br />
  in Leicestershire
</h1>
        </motion.div>
         <ServiceHighlights />
       </div>
      
      <div className="relative w-[510px] h-[795px] flex-shrink-0 mt-0 md:mt-[0] z-0 overflow-hidden ">
        <motion.div
          initial={{ x: 300, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="absolute top-0 left-0 w-full h-full scale-[1.2] z-0"
        >
          <Image
            src='/hero/Plumber-Hero-bg.png'
            alt='a plumber working'
            fill
            style={{ objectFit: 'contain' }}
            priority
          />
        </motion.div>
        <motion.div
          initial={{ x: 300, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="absolute top-[-28] left-[16] w-full h-full scale-[1.26]"
        >
          <Image
            src='/hero/Plumber-Hero.png'
            alt='a plumber working'
            fill
            style={{ objectFit: 'contain' }}
            priority
          />
        </motion.div>
      </div>
     
    </div>
    {/* Make this section closer to the above by removing margin and reducing image size */}
    <div className='flex flex-row items-center justify-between '>
      <div className='flex flex-col items-center justify-center gap-6 '>
        <motion.div
          initial={{ x:-300, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}>

         <div className=' leading-12 text-3xl md:text-[2rem] mt-10 text-center text-white font-bold antonio'>
          <div className='pl-25 pr-4 bg-[#1e2939] items-center flex flex-col  pt-3 pb-5 rounded-r-3xl mb-5'>
             <h2 className='pr-28'>Ready for reliable heating and plumbing? 
          </h2>
         
<h3 className='text-5xl md:text-[2.8rem]'><span className='text-[#fe903b]'>Don&apos;t wait!</span> Contact Heat Wave today.</h3>

          </div>
         
        </div>
        </motion.div>
        <div className='pr-35 pt-4'>
          <QuoteButton />
        </div>
        
      </div>
      <div className='pr-30 mt-[-200]'>
        <Image src={'/hero/trusted.png'} alt='trusted by customers logo' width={230} height={230} />
      </div>
    </div>
    </>
  )
}

export default Hero
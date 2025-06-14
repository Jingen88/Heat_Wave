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
   <div className=' justify-evenly items-start flex flex-col md:flex-row md:justify-between md:items-start pr-1 px-3  '>
      <div className='align-text-top md:text-left'>
        <motion.div
          initial={{ x: -300, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0 }}>
        <h1 className=' md:mt-10 mt-15 text-4xl md:text-6xl font-bold antonio text-white text-center md:text-left md:mt-10 md:pl-4 md:pl-4 md:pr-0'>
  Your Trusted Choice for<br />
  <span className='text-[#fe903b] text-6xl md:text-8xl md:leading-30 py-3'>Heating</span> & <span className='text-[#45fbdb] text-6xl md:text-8xl md:leading-30 py-3'>Plumbing</span>
  <br />
  in Leicestershire
</h1>
    
    </motion.div>
         <ServiceHighlights />
       </div>
      
      <div className="relative w-[98%] md:w-[510px] h-[390px] md:h-[795px] flex-shrink-4 mt-10 md:mt-0 z-0 overflow-hidden mx-auto">
        <motion.div
          initial={{ x: 300, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="absolute top-0 left-0 w-full h-full scale-[1.2] z-0"
        >
          <Image
            src='/Hero/Plumber-Hero-bg.png'
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
          className="absolute md:top-[-28] md:left-[16] top-[-17] left-[10] w-full h-full scale-[1.26]"
        >
          <Image
            src='/Hero/Plumber-Hero.png'
            alt='a plumber working'
            fill
            style={{ objectFit: 'contain' }}
            priority
          />
        </motion.div>
      </div>
     
    </div>
    {/* Make this section closer to the above by removing margin and reducing image size */}
    <div className='flex flex-row flex-wrap md:flex-nowrap items-center justify-between '>
      <div className='flex flex-col items-center justify-center gap-6 '>
        <motion.div
          initial={{ x:-300, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}>

         <div className=' leading-12 text-3xl md:text-[2rem] mt-10 text-center text-white font-bold antonio'>
          <div className='md:pl-25 md:pr-4 bg-[#1e2939] items-center flex flex-col md:pt-3 md:pb-5 md:rounded-r-3xl md:mb-5 text-center pt-2 pb-5  px-2 '>
             <h2 className='md:pr-28 pb-3'>Ready for reliable heating and plumbing? 
          </h2>
         
          <h3 className='text-4xl md:text-[2.8rem]  mx-auto'><span className='text-[#fe903b]'>Don&apos;t wait!</span> Contact Heat Wave today.</h3>

          </div>
         
        </div>
        </motion.div>
        <div className='md:pr-35 md:pt-4 pt-0 flex justify-center items-center  pt-7 mx-auto'>
          <QuoteButton />
        </div>
        
      </div>
      <div className='md:pr-5  md:mt-[-200] mx-auto mt-30'>
        <Image src={'/Hero/trusted.png'} alt='trusted by customers logo' width={230} height={230} />
      </div>
    </div>
    </>
  )
}

export default Hero
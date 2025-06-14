'use client'
import React from 'react'
import Image from 'next/image'
import Cards from '../components/Cards'
import { motion } from 'framer-motion'



const Reviews = () => {
  return (
    <div className='flex flex-col items-center justify-center text-center pt-28 pb-16  '>
      <h4 className='text-6xl antonio text-white'>Trusted By Our Clients</h4>
      <div className='flex flex-row flex-wrap md:flex-nowrap items-start justify-center md:justify-evenly w-full md:gap-30 md:mt-5'>

       <motion.div
                 initial={{ x: -300, opacity: 0 }}
                 animate={{ x: 0, opacity: 1 }}
                 transition={{ duration: 1, delay: 0.5 }}>
          <Image src={'/Reviews/Checka.png'} alt='Checkatrade logo and stars' width={400} height={400} className='md:pb-9.5'/>
        </motion.div>

        <motion.div
                  initial={{ x: 300, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 1, delay: 0.5 }}>
        <Image src={'/Reviews/google.png'} alt='Google logo and stars' width={299} height={299} className='md:pt-13'/>
        </motion.div>
      </div>
<div className='mt-3 flex flex-col items-center justify-center'>
<Cards/>
</div>

        
    </div>
  )
}

export default Reviews
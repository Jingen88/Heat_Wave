'use client'
import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.35,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, x: -60 },
  show: { opacity: 1, x: 0, transition: { type: 'spring', stiffness: 60 } },
}

const highlights = [
  {
    title: 'Expert Plumbing:',
    desc: 'From repairs to installations, we ensure your water flows perfectly.',
    width: '',
    pr: '',
  },
  {
    title: 'Reliable Heating:',
    desc: 'Boiler services, installations, and <br />rapid repairs to keep you warm.',
    width: 'w-[95%]',
    pr: 'pr-12',
  },
  {
    title: '24/7 Emergency Service:',
    desc: 'Fast, effective help when <br /> you need it most.',
    width: 'w-[90%]',
    pr: 'pr-8',
  },
  {
    title: 'Free Estimates:',
    desc: 'Transparent, upfront pricing with no <br /> surprises.',
    width: 'w-[85%]',
    pr: 'pr-6',
  },
  {
    title: 'Dedicated Support:',
    desc: 'Our friendly team is always <br /> ready to assist.',
    width: 'w-[80%]',
    pr: 'pr-3',
  },
]

const ServiceHighlights = () => {
  return (
    <motion.div
      className='space-y-5 mt-10 z-20 w-[95%]'
      variants={containerVariants}
      initial="hidden"
      animate="show"
    >
     
      {highlights.map((item) => (
        <motion.div
          key={item.title}
          className='relative flex flex-col antonio text-lg text-white md:text-2xl md:text-xl md:pl-7 md:pl-4 py-2'
          variants={itemVariants}
        >

          <Image
            src='/Hero/tick.png'
            alt='tick'
            width={87}
            height={87}
            className="absolute md:-left-0 md:-top-2 z-10 -left-2 -top-4 hidden md:block"
            style={{ pointerEvents: 'none' }}
          />
          <p
            className={`bg-[#1e2939] py-1 rounded-2xl ${item.width} md:pl-15 pl-20 md:text-left  md:m-0 mx-auto ${item.pr} inline-block`}
            dangerouslySetInnerHTML={{ __html: `<span class='text-[#fe903b] font-bold'>${item.title}</span> ${item.desc}` }}
          />
        </motion.div>
      ))}
    </motion.div>
  )
}

export default ServiceHighlights

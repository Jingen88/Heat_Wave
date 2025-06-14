import React from 'react'
import Image from 'next/image'
import RotatingText from '../components/RotatingText'
  

const Sales = () => {
  return (
    <div className='flex flex-row flex-wrap md:flex-nowrap items-center justify-center pt-0 md:px-2 p-2'>
      <Image className='pt-12' src={'/Van.png'} alt='van with a colleague' width={500} height={1}/>
      <div className='flex flex-col items-center justify-center w-full'>
        <h4 className='md:pb-3 text-5xl md:text-8xl md:text-left font-semibold antonio text-white text-center pt-5'>
          Providing{" "}
          <RotatingText
            texts={['reliable', 'efficient', 'friendly']}
            mainClassName="inline-flex bg-gray-900 text-[#fe903b] px-2 md:py-2 mt-2 rounded-lg items-center"
            staggerFrom={"last"}
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-120%" }}
            staggerDuration={0.025}
            splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
            transition={{ type: "spring", damping: 30, stiffness: 400 }}
            rotationInterval={2000}
          />{" "}
          service across the region.
        </h4>
        <div className='z-6 bg-[#1e2939] text-justify text-white text-xl md:text-xl p-3.5 rounded-lg mt-10'>
<p className='py-1'>Is your home experiencing a broken boiler, leaving you in the cold, or are persistent plumbing issues like dripping faucets, slow drains, and sudden leaks creating daily frustrations and potential damage?</p>
 <p className='py-1'>Heatwave is here to restore your peace of mind and the smooth operation of your home. We proudly provide highly reliable heating solutions and expert plumbing services directly to your Leicestershire home, ensuring you a consistently comfortable and perfectly functional living space year-round, free from worries about your essential systems. As your trusted local team, deeply invested in the community, we offer genuinely prompt, remarkably efficient, and always friendly service, including a crucial 24/7 emergency response for those unexpected critical moments. </p>
 <p className='py-1'>With our commitment to clarity, we provide <span className='font-bold'>free estimates</span> and <span className='font-bold'>transparent pricing</span>  from the outset, so you can experience the Heatwave difference – where quality workmanship and unparalleled customer care are always guaranteed. 
 </p>
 <p className='font-bold text-xl'>Contact us today to reclaim the warmth, convenience, and assurance you truly deserve.</p>
  </div>
      </div>
      
{/* */}
    </div>
  )
}

export default Sales
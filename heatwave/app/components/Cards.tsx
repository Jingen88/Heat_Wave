import React, { useRef, useEffect } from 'react';
// import Image from 'next/image'; // Removed next/image as it's not supported in this environment
import { motion } from 'framer-motion';

const Cards = () => {
  const scrollRef = useRef(null);

  // Define the card content as an array to easily duplicate it
  const cardContent = [
    {
      text: "Absolutely brilliant service from Heatwave! Our boiler broke down on a freezing Saturday, and they had a technician out to us in Leicester within a couple of hours. Fixed it quickly and explained everything clearly. Couldn't be happier with their prompt and reliable emergency service.",
      author: "— Sarah L., Oadby",
      logo: '/Reviews/small-g.png'
    },
    {
      text: "We recently had Heatwave install a new heating system, and the entire process was seamless. From the initial free consultation to the final tidy-up, their team was incredibly professional and efficient. Our home is so much warmer now, and the energy bills are looking better already!",
      author: "— David P., Syston",
      logo: '/Reviews/small-c.png'
    },
    {
      text: "Highly recommend Heatwave for any plumbing work. Had a persistent leak under the sink that several others couldn't fix. Their plumber found the issue right away and sorted it out without any fuss. Expert knowledge and a friendly attitude.",
      author: "— Emily R., Loughborough",
      logo: '/Reviews/small-g.png' // Assuming 'small-g' for the third card as well
    }
  ];

  // Duplicate the content to ensure a smooth, continuous loop
  const duplicatedCards = [...cardContent, ...cardContent, ...cardContent];


  return (
    <>
      {/*
        Custom CSS for the infinite scroll animation.
        - @keyframes defines the scrolling animation.
        - .animate-scroll class applies the animation.
        - :hover pauses the animation.
      */}
      <style jsx>{`
        @keyframes scroll-left {
          0% {
            transform: translateX(0%);
          }
          100% {
            /*
              Calculates the translation percentage based on the number of original cards.
              Since we duplicated content twice (3 sets of original cards),
              we need to translate by 2/3 of the total width to loop smoothly.
              Each set of original cards occupies 1/3 of the total width of 'duplicatedCards' container.
              So, to scroll past two full sets to reveal the beginning of the first set again,
              we translate by -66.66% relative to the combined width of the three sets.
              This value makes the scroll appear infinite when the content repeats.
            */
            transform: translateX(-66.66%);
          }
        }

        .animate-scroll {
          animation: scroll-left 100s linear infinite; /* Adjusted duration to 100s for speed */
        }

        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>

      {/*
        Outer container for the scrolling section.
        - w-screen ensures it takes full viewport width.
        - overflow-x-hidden clips any horizontal content that extends beyond its boundaries.
        - py-10 adds vertical padding.
      */}
      <div className="w-screen overflow-x-hidden py-10">
        {/*
          Inner container that holds all the duplicated cards and is animated.
          - flex: Displays cards in a single row.
          - flex-nowrap: Prevents cards from wrapping to the next line.
          - gap-5: Adds space between cards.
          - animate-scroll: Applies the custom CSS animation for leftward scrolling.
          - min-w-max: Ensures the container is wide enough to hold all cards without shrinking.
                       This is crucial for the translateX percentage animation to work correctly.
        */}
        <div
          ref={scrollRef}
          className="flex flex-nowrap gap-5 animate-scroll min-w-max"
        >
          {duplicatedCards.map((card, index) => (
            <motion.div
              key={index} // Unique key for each duplicated card
              whileHover={{ scale: 1.05 }}
              className={`
                w-[90vw] max-w-[390px] h-[360px] bg-white rounded-lg px-7 py-1
                hover:shadow-lg cursor-pointer
                duration-500 transition-all font-semibold font-roboto
                flex-shrink-0
              `}
              // Removed hover:scale-105 hover:-translate-y-1 from here as it conflicts slightly with the animation pause.
              // The primary hover effect is pausing the scroll.
            >
              <div className='flex flex-row items-center justify-center gap-40 mb-4'>
                  {/* Replaced Next.js Image component with standard <img> tag */}
                  <img src={'/Reviews/stars.png'} alt='stars logo' width={100} height={100}/>
                  <img src={card.logo} alt='company logo' width={50} height={50}/>
              </div>
              <p className='text-gray-800'>
                  {card.text}
              </p>
              <p className='font-bold text-xl pt-3 text-gray-900'>
                  {card.author}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Cards;

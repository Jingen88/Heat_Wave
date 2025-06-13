import React from 'react'
import Navbar from './sections/Navbar'
import Hero from './sections/Hero'
import Reviews from './sections/Reviews'
import Sales from './sections/Sales'
import Footer from './sections/Footer'
// This is the main page component for the Heatwave application
// It imports and uses several sections: Navbar, Hero, Reviews, Sales, and Footer
// Each section is a separate component that is imported from the 'sections' directory
// The page component returns a JSX structure that includes all these sections

const page = () => {
  return (
    <>
   
    <Hero/>
    <Reviews/>
    <Sales/>
    
    </>
  )
}

export default page
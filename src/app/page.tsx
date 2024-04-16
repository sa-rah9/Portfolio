"use client"
import Nav from '@/components/Nav'
import Navmobile from '@/components/Navmobile'
import React, { useState } from 'react'
// import Hero from '@/components/Hero'


const homepage = () => {

  const [showNav, setShowNav] = useState(false);
  const showNavhandler= () =>  setShowNav(true);
const closeNavHandler = () =>  setShowNav(false); 

  return (
    
    <div className='overflow-x-hidden h-[2000px]'>

      {/* <Hero/> */}
      <Navmobile showNav ={showNav} closeNav={closeNavHandler}/>
      <Nav openNav={showNavhandler}/>

    </div>
  )
}

export default homepage
import React from 'react'
import Image from 'next/image'

export default function Hero() {
  return (
    <div className='w-full h-screen bg-black'>
    <div className='flex justify-evenly items-center w-full pt-20 px-20'> <div className='md:flex hidden'><Image src={"/sara.jpg"} alt='image' width={500} height={500} className='rounded-full object-cover w-full h-full'/> </div> 
    <div>
          <h1 className="text-[38px] md:text-[50px] text-white font-bold">
            An Industrial <br />
            Take On Sweaters
          </h1>
          <p className="pt-3 text-lg md:text-2xl md:w-[75%] text-white text-left ">
            Anyone can beat you but no one can beat your outfit as long as you
            wear Dine .
          </p>
          {/* <IoCartOutline className="w-12 h-8" /> */}
         
    </div>
                {/* here we give md:flex hidden to hide the picture and show on responsive mode  */}
    

    </div>
    </div>
  )
}


import { Bars3CenterLeftIcon } from '@heroicons/react/16/solid'
import Image from 'next/image';
import React, { useEffect, useState } from 'react'
interface Props {
  openNav :() => void

}

const Nav = ({openNav}:Props) => {

  // const[navSticky,setNavSticky] = useState(false);
  // useEffect(()=>{
  //   const handler = () => {

  //     if (window.scrollY >= 90){
  //         setNavSticky(true)
  // }

  // if (window.scrollY<=90){
  //         setNavSticky(false);
  //       } 
  //   };
   
  //   window.addEventListener("scroll", handler);

  // },[]);

  // const Stickystyle = navSticky ?'bg-[#212428] shadow-sm':''
  return (
                                    // to make nave bar disapper at $(stickystyle)
    <div className={`fixed w-[100%] z-[1000] bg-black`}>
    <div className= 'flex items-center h-[12vh] justify-between w-[80%] mx-auto'> 
    {/* <div><Image src="/sara.jpg" alt='image' width={80} height={80} className='rounded-full object-cover' /></div> */}
    <div className='text-yellow-400 text-[18px]'> 
        <span className='text-[40px] md:text-[50px] text-yellow-400 '>Sara</span>
        George
    </div>
    <ul className='md:flex hidden items-center space-x-10'>
        <li><a className='nav-effect' href='#'>Home</a> </li>
        <li><a className='nav-effect' href='#'>About</a> </li>
        <li><a className='nav-effect' href='#'>Services</a> </li>
        <li><a className='nav-effect' href='#'>Blog</a> </li>
        <li><a className='nav-effect' href='#'>Contacts</a> </li>
    </ul>
    <Bars3CenterLeftIcon 
    onClick={openNav}
    className='w-[2.3rem]  h-[2.3rem] text-white rotate-180' />

    </div>
    </div>
 
  )
}

export default Nav;
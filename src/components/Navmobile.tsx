
import { XMarkIcon } from '@heroicons/react/16/solid'
import React from 'react'

interface Props{
  showNav:boolean;
  closeNav:()=> void
}



const Navmobile = ({closeNav, showNav}:Props) => {
  
   const navOpenStyle =showNav ? "translate-x-0" : "translate-x-[-100%]";

  
  return (
    <div>
    <div className={`fixed top-0 ${navOpenStyle} transform transition-all duration-100 z-[10000] left-0 ring-0 bottom-0 bg-black opacity-70 w-[100vw] h[100vh]`}>

    </div>
   
    <ul className={`text-white ${navOpenStyle} fixed flex items-center flex-col justify-center h-[100%]  transform transition-all duration-300 delay-300 w-[60%] bg-gray-950 space-y-14 z-[10006]`}>

        <li>  < a className='nav-effect text-[25px] sm:[30px]' href='#'>   Home      </a>  </li>
        <li>  < a className='nav-effect text-[25px] sm:[30px]' href='#'>   About     </a>  </li>
        <li>  < a className='nav-effect text-[25px] sm:[30px]' href='#'>   Services  </a>  </li>
        <li>  < a className='nav-effect text-[25px] sm:[30px]' href='#'>   Blog      </a>  </li>
        <li>  < a className='nav-effect text-[25px] sm:[30px]' href='#'>   Contacts  </a>  </li>
        
        <XMarkIcon 
         onClick={closeNav}
         className='absolute top-[-1.4rem] right-[1.4rem] w-[2.2rem] h-[2.2rem] text-white'/>

    </ul>

    </div>  
    
  );
};
export default Navmobile;
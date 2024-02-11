import React, { FC, useState } from 'react'
import { AiOutlineMenu } from 'react-icons/ai'
import { styled } from 'styled-components'

const NavIcon = styled.div`
font-size:1.5rem;
color:white
`
interface NavbarProps {
    toggleSidebar: () => void; // Define the prop for the callback
  }
// const  Navbar:FC=() =>{
   
//   return (
//     <div className="flex bg-black">
// <div className="flex items-center p-3 ml-2">
//                                 <NavIcon className='cursor-pointer'><AiOutlineMenu  
//             /></NavIcon>
//                             </div>
// </div>
//   )
// }

const Navbar: FC<NavbarProps> = ({ toggleSidebar }) => {
    return (
      <div className="flex bg-black">
        <div className="flex p-3 ml-2">
          <NavIcon className="cursor-pointer" onClick={toggleSidebar}>
            <AiOutlineMenu />
          </NavIcon>
        </div>
      </div>
    );
  };

export default Navbar
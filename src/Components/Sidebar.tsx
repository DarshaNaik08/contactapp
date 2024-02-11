
import React, { FC, useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import styled from 'styled-components'
import { IconContext } from 'react-icons'
import { BiSolidContact } from 'react-icons/bi'
import { BiSolidBarChartSquare } from 'react-icons/bi'
import { AiOutlineMenu } from 'react-icons/ai'
import Navbar from './Navbar'
import Contact from '../pages/Contact'
const Nav = styled(Link)`
background-color: black,
height :3rem
`
    ;

const SidebarNav = styled(Link)`
background-color: black`;

const NavIcon = styled.div`
font-size:1.5rem;
color:white
`


const Sidebar: FC = () => {
    const [isSidebarOpen, setSidebarOpen] = useState(true);
      const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen); 
    // Toggle the state
    console.log('sidebar')
  };
    return (
    <>

{/* <Navbar toggleSidebar={toggleSidebar} /> */}
  
          
{/* <div className="flex bg-black">
<div className="flex items-center p-3 ml-2">
                                <NavIcon className='cursor-pointer'><AiOutlineMenu  
            onClick={toggleSidebar} /></NavIcon>
                            </div>
</div> */}
               
                    <div className={`flex sidebar flex-col h-screen p-3  shadow ${isSidebarOpen ?"w-60":"w-20 "} duration-300 `}>
                    <Navbar toggleSidebar={toggleSidebar} /> 
                        <div className="space-y-3">
                           {isSidebarOpen &&
                            <div className="flex-1">
                                <ul className="pt-2 pb-4 space-y-1 text-sm">
                                    <li className="rounded-sm">
                                        <Link to="/contact"
                                            className="flex items-center p-2 space-x-3 rounded-md text-white-600"
                                        >
                                            <NavIcon><BiSolidContact /></NavIcon>
                                            <span className="text-white">Contact</span>
                                        </Link>

                                        
                                    </li>
                                    {/* <li className="rounded-sm">
                                    <Link to="/ChartsMaps"
                                            className="flex items-center p-2 space-x-3 rounded-md text-white-600"
                                        >
                                            <NavIcon><BiSolidBarChartSquare /></NavIcon>
                                            <span className="text-white">Charts and Map</span>
                                        </Link>
                                    </li> */}
                                   
                                </ul>
                            </div>
}
                        </div>
                                
                    </div>
                 
              
            </>
            )
}

            export default Sidebar
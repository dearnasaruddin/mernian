import React from 'react'
import { Link } from 'react-router-dom'
import { PiListBold } from "react-icons/pi";
import { HiDotsHorizontal } from "react-icons/hi";
import { FaBell, FaSearch, FaShoppingCart, FaSms, FaTools } from "react-icons/fa";

const Header = () => {
    return (
        <div className='flex items-center justify-between px-6 py-4 bg-primary font-poppins text-white'>
            <div>
                <Link to={'/'}><img src="mernianLogo.png" alt="mernianLogo.png" /></Link>
            </div>
            <ul className='flex items-center gap-x-12 font-bold text-sm'>
                <li><PiListBold className='text-xl' /></li>
                <li><Link to={'#'}>Careers</Link></li>
                <li><Link to={'#'}>Store</Link></li>
                <li><Link to={'#'}>FAQ</Link></li>
                <li><HiDotsHorizontal /></li>
            </ul>
            <div className='relative w-[25.5%] text-sm'>
                <input className=' w-full bg-[#4E4AC8] focus:bg-white pl-4 pr-10 py-3.5 focus:outline-none rounded-xl  font-normal text-[#6965E0]' type="text" placeholder='Search here ....' />
                <FaSearch className='absolute top-1/2 -translate-y-1/2 right-4 text-[#6763DF]' />
            </div>

            <div className='flex items-center gap-17.5'>
                <div className=' relative after:absolute after:top-1/2 after:-right-9 after:-translate-y-1/2 after:w-[1px] after:h-8 after:bg-[#7A77FD]'>
                    <div className='flex justify-between items-center font-normal text-xs mb-1'>
                        <span>Next</span>
                        <span>35 EXP</span>
                    </div>
                    <div>
                        <div className='w-28 h-1 bg-[#4E4AC8] rounded-lg'>
                            <div className='h-full w-21 bg-[#41EFFF] rounded-lg'></div>
                        </div>
                    </div>
                </div>

                <div  className='text-lg relative after:absolute after:top-1/2 after:-right-9 after:-translate-y-1/2 after:w-[1px] after:h-8 after:bg-[#7A77FD]'>
                    <ul className='flex items-center gap-x-8 text-lg'>
                        <li className='relative'>
                            <FaShoppingCart className='text-[#7A77FD] hover:text-white cursor-pointer text-lg' />
                        </li>
                        <li className='relative'>
                            <FaSms  className='text-[#7A77FD] hover:text-white cursor-pointer text-lg'/>
                        </li>
                        <li className='relative'>
                            <FaBell className='text-[#7A77FD] hover:text-white cursor-pointer text-lg' />
                            <span className='size-[5px] bg-[#41EFFF] rounded-full absolute bottom-[1px] -right-[1px]'></span>
                        </li>
                    </ul>
                </div>

                <div>
                    <div>
                        <FaTools className='text-[#7A77FD] hover:text-white cursor-pointer text-lg' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
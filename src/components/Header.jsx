import React from 'react'
import { Link } from 'react-router-dom'
import { PiListBold } from "react-icons/pi";
import { HiDotsHorizontal } from "react-icons/hi";
import { FaSearch } from "react-icons/fa";

const Header = () => {
    return (
        <div className='flex items-center justify-center py-4 bg-primary font-poppins text-white'>
            <div>Logo</div>
            <ul className='flex items-center gap-x-12 font-bold text-sm ml-32'>
                <li><PiListBold className='text-xl' /></li>
                <li><Link>Careers</Link></li>
                <li><Link>Store</Link></li>
                <li><Link>FAQ</Link></li>
                <li><HiDotsHorizontal /></li>
            </ul>
            <div className='relative mx-20'>
                <input className='w-104 bg-[#4E4AC8] focus:bg-white px-4 py-3.5 focus:outline-none rounded-xl text-[#6965E0]' type="text" placeholder='Search here ....' />
                <FaSearch className='absolute top-1/2 -translate-y-1/2 right-4 text-[#6763DF]'/>
            </div>
            <div>LeftItems</div>
        </div>
    )
}

export default Header
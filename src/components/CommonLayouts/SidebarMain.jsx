import React from 'react'
import { FaAlgolia, FaAmericanSignLanguageInterpreting, FaGopuram, FaLayerGroup, FaNewspaper, FaSignOutAlt, FaUserFriends } from 'react-icons/fa'
import { Link, useLocation } from 'react-router-dom'

const SidebarMain = () => {

    const location = useLocation()

    return (
        <div className='w-full min-w-75 h-full font-poppins  bg-white'>
            {/* ========== Profile ========== */}
            <div>
                <div className='w-full relative'>
                    <div className='w-full h-19 bg-[#45437F] absolute'>
                        <img src="#" alt="" />
                    </div>
                    <div className='size-30 rounded-full border-[5px] border-white bg-primary mx-auto top-4 relative z-10'>
                        <img src="#" alt="" />
                    </div>
                </div>
                <h3 className='font-bold text-base text-black mt-4 text-center'>A B M Shawon Islam</h3>
                <p className='font-medium text-xs text-[#AFB0C0] text-center'>www.abm.com</p>
            </div>
            <div className='max-w-58 mx-auto mt-10.5 mb-12.5 flex justify-between'>
                <div className='relative after:absolute after:w-[1px] after:h-6 after:bg-[#AFB0C0] after:top-1/2 after:-translate-1/2 after:-right-6 '>
                    <h5 className='font-bold text-sm text-center text-black'>930</h5>
                    <p className='font-medium text-xs text-center text-[#AFB0C0]'>Friends</p>
                </div>
                <div className='relative after:absolute after:w-[1px] after:h-6 after:bg-[#AFB0C0] after:top-1/2 after:-translate-1/2 after:-right-6 '>
                    <h5 className='font-bold text-sm text-center text-black'>87</h5>
                    <p className='font-medium text-xs text-center text-[#AFB0C0]'>Posts</p>
                </div>
                <div>
                    <h5 className='font-bold text-sm text-center text-black'>1k</h5>
                    <p className='font-medium text-xs text-center text-[#AFB0C0]'>Followers</p>
                </div>
            </div>

            {/* ========== Link List ========== */}
            <ul className='flex flex-col gap-y-1 pl-6 pr-2'>
                <li><Link to={'/'} className={` flex items-center gap-x-7 pl-5 py-4 rounded-xl ${location.pathname == '/' ? 'text-white bg-secondary' : 'text-[#AFB0C0]'}`}>
                    <FaNewspaper />
                    <span className='font-semibold text-sm '>Newsfeed</span>
                </Link></li>
                <li><Link to={'/videos'} className={` flex items-center gap-x-7 pl-5 py-4 rounded-xl ${location.pathname == '/videos' ? 'text-white bg-secondary' : 'text-[#AFB0C0]'}`}>
                    <FaGopuram />
                    <span className='font-semibold text-sm '>Videos</span>
                </Link></li>
                <li><Link to={'/groups'} className={` flex items-center gap-x-7 pl-5 py-4 rounded-xl ${location.pathname == '/groups' ? 'text-white bg-secondary' : 'text-[#AFB0C0]'}`}>
                    <FaLayerGroup />
                    <span className='font-semibold text-sm '>Groups</span>
                </Link></li>
                <li><Link to={'/photos'} className={` flex items-center gap-x-7 pl-5 py-4 rounded-xl ${location.pathname == '/photos' ? 'text-white bg-secondary' : 'text-[#AFB0C0]'}`}>
                    <FaAlgolia />
                    <span className='font-semibold text-sm '>Photos</span>
                </Link></li>
                <li><Link to={'/friends'} className={` flex items-center gap-x-7 pl-5 py-4 rounded-xl ${location.pathname == '/friends' ? 'text-white bg-secondary' : 'text-[#AFB0C0]'}`}>
                    <FaUserFriends />
                    <span className='font-semibold text-sm '>Friends</span>
                </Link></li>
                <li><Link to={'/friend-request'} className={` flex items-center gap-x-7 pl-5 py-4 rounded-xl ${location.pathname == '/friend-request' ? 'text-white bg-secondary' : 'text-[#AFB0C0]'}`}>
                    <FaAmericanSignLanguageInterpreting />
                    <span className='font-semibold text-sm '>Friends Request</span>
                </Link></li>
                <li className='flex items-center gap-x-7 pl-5 py-4 rounded-xl  text-[#AFB0C0] cursor-pointer'>
                    <FaSignOutAlt />
                    <span className='font-semibold text-sm '>Logout</span>
                </li>
            </ul>
        </div>
    )
}

export default SidebarMain
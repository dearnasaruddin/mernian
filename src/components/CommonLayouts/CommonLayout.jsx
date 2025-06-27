import React from 'react'
import Header from '../Header'
import SidebarMain from './SidebarMain'
import { Outlet } from 'react-router-dom'
import FriendSidebar from './FriendSidebar'
import { AiFillFacebook } from 'react-icons/ai'
import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'
import TopProfileSection from './TopProfileSection'

const CommonLayout = () => {
    return (
        <>
            <Header />
            <div className='w-full flex gap-x-8 justify-between bg-[#F7F7FB]'>
                <div className='min-w-[18%]'>
                    <SidebarMain />
                </div>
                <div className='grow'>
                    <TopProfileSection />
                    <Outlet />
                </div>
                <div className='min-w-20 bg-white'>
                    <FriendSidebar />
                </div>
            </div>
        </>
    )
}

export default CommonLayout
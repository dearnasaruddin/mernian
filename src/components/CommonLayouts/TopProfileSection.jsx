import React from 'react'
import { Link } from 'react-router-dom'
import { AiFillFacebook } from 'react-icons/ai'
import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'
import Button from './Button'

const TopProfileSection = () => {
    return (
        <div className='rounded-[10px] overflow-hidden my-8'>
            <div className='relative'>
                <div className='min-w-296 w-full h-75 bg-[#45437F]'>
                    <img src="#" alt="" />
                </div>
                <div className='absolute top-55 left-1/2 -translate-x-1/2'>
                    <div className='size-38 rounded-full bg-primary border-[10px] border-white'></div>
                    <div>
                        <h3 className='font-bold text-base text-black -mt-1.5 text-center'>A B M Shawon Islam</h3>
                        <p className='font-medium text-xs text-[#AFB0C0] text-center'>www.abm.com</p>
                    </div>
                </div>
                <div className='absolute -bottom-6 right-7 z-10'>
                    <Button content='Add Friend' className='w-45 h-12.5 rounded-lg bg-primary mr-4' />
                    <Button content='Send Message' className='w-45 h-12.5 rounded-lg bg-secondary' />
                </div>
            </div>
            <div className='pt-16 pb-5 bg-white flex items-center justify-between pl-16 pr-28.5'>
                <div className='w-58 flex justify-between'>
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

                <ul className='flex items-center gap-x-3'>
                    <li><Link className='size-10 rounded-[10px] bg-[#3763D2] flex justify-center items-center text-white'><AiFillFacebook /></Link></li>
                    <li><Link className='size-10 rounded-[10px] bg-[#F8468D] flex justify-center items-center text-white'><FaInstagram /></Link></li>
                    <li><Link className='size-10 rounded-[10px] bg-[#1ABCFF] flex justify-center items-center text-white'><FaTwitter /></Link></li>
                    <li><Link className='size-10 rounded-[10px] bg-[#FD434F] flex justify-center items-center text-white'><FaYoutube /></Link></li>
                </ul>
            </div>
        </div>
    )
}

export default TopProfileSection
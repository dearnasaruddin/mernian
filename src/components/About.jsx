import React from 'react'
import { BsThreeDots } from 'react-icons/bs'

const About = () => {
  return (
    <div className='p-7 bg-white rounded-2xl font-poppins'>
      <h4 className='flex justify-between font-bold text-sm text-[#3E3F5E]'>About Me <BsThreeDots /></h4>
      <p className='max-w-57.5 font-normal text-xs text-[#AFB0C0] mt-7.5 mb-4.5'>Hi! My name is A B M Shawon Islam but some people may know me as GameHuntress! I have a Twitch channel where I stream, play and review all the newest games.</p>
      <ul className='text-[#AFB0C0] text-xs flex flex-col gap-y-4.5'>
        <li className='font-normal flex gap-x-6.5'><span className='font-bold'>Joined:</span>22 November 2008</li>
        <li className='font-normal flex gap-x-6.5'><span className='font-bold'>City:</span>Dhaka</li>
        <li className='font-normal flex gap-x-6.5'><span className='font-bold'>Age:</span>18 years</li>
      </ul>
    </div>
  )
}

export default About
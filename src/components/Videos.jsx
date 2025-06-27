import React from 'react'
import { BsThreeDots } from 'react-icons/bs'
import { FaPlay } from 'react-icons/fa'

const Videos = () => {
    return (
        <div className='p-7 rounded-2xl font-poppins bg-white'>
            <h4 className='flex items-center justify-between font-bold text-xs text-black'><span className='flex gap-x-1'>Videos<span className='text-secondary'>37</span></span><BsThreeDots /></h4>
            <div className='mt-4.5 flex flex-col items-center gap-4.5'>
                <div className='w-56 h-25 rounded-2xl overflow-hidden bg-primary'>
                    <div className='size-full flex justify-center items-center bg-black/50'>
                        <div className='size-10.5 rounded-full bg-black border-2 border-secondary flex justify-center items-center'><FaPlay className='text-white' /></div>
                    </div>
                </div>
                <div className='w-56 h-25 rounded-2xl overflow-hidden bg-primary'>
                    <div className='size-full flex justify-center items-center bg-black/50'>
                        <div className='size-10.5 rounded-full bg-black border-2 border-secondary flex justify-center items-center'><FaPlay className='text-white' /></div>
                    </div>
                </div>
                <div className='w-56 h-25 rounded-2xl overflow-hidden bg-primary'>
                    <div className='size-full flex justify-center items-center bg-black/50'>
                        <div className='size-10.5 rounded-full bg-black border-2 border-secondary flex justify-center items-center'><FaPlay className='text-white' /></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Videos
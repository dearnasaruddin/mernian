import React from 'react'
import { BsThreeDots } from 'react-icons/bs'

const Photos = () => {
    return (
        <div className='p-7 rounded-2xl font-poppins bg-white'>
            <h4 className='flex items-center justify-between font-bold text-xs text-black'><span className='flex gap-x-1'>Photos<span className='text-secondary'>37</span></span><BsThreeDots /></h4>
            <div className='mt-4.5 grid grid-cols-2 justify-center gap-4'>
                <div className='w-26 h-25 rounded-2xl bg-primary overflow-hidden'>
                    <img src="#" alt="" />
                </div>
                <div className='w-26 h-25 rounded-2xl bg-primary overflow-hidden'>
                    <img src="#" alt="" />
                </div>
                <div className='w-26 h-25 rounded-2xl bg-primary overflow-hidden'>
                    <img src="#" alt="" />
                </div>
                <div className='w-26 h-25 rounded-2xl bg-primary overflow-hidden'>
                    <img src="#" alt="" />
                </div>
                <div className='w-26 h-25 rounded-2xl bg-primary overflow-hidden'>
                    <img src="#" alt="" />
                </div>
                <div className='w-26 h-25 rounded-2xl bg-primary overflow-hidden'>
                    <div className='size-full bg-black/50 flex justify-center items-center text-white font-bold text-xs'>32+</div>
                        <img src="#" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Photos
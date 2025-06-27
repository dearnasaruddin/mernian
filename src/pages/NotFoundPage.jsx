import React from 'react'
import { Link } from 'react-router-dom'


const NotFoundPage = () => {
    return (
        <div className='h-screen w-full flex flex-col gap-12 items-center justify-center bg-primary'>
            <h2 className='text-3xl text-[#3F3D56]'>NOT_FOUND</h2>
            <div className='w-1/5'>
                <img src="/images/notFoundImg.svg" alt="notFoundImg.svg" />
            </div>
            <Link to={'/'} className='bg-secondary py-2 px-4 rounded-lg cursor-pointer text-white'>Back to Home</Link>
        </div>
    )
}

export default NotFoundPage
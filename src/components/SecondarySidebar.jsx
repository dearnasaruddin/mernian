import React from 'react'
import About from './About'
import Photos from './Photos'
import Videos from './Videos'

const SecondarySidebar = () => {
    return (
        <div className='flex flex-col gap-3'>
            <About />
            <Photos />
            <Videos />
        </div>
    )
}

export default SecondarySidebar
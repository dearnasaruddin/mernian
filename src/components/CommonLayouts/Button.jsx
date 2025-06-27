import React from 'react'

const Button = ({content='Button', className}) => {
    return (

        <button className={`${className} font-poppins font-semibold text-sm text-white`}>{content}</button>

    )
}

export default Button
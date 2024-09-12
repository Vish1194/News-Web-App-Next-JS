import React from 'react'

const Footer = () => {
  return (
    <div className='bg-gray-900 flex justify-center items-center py-5 flex-col gap-9'>
        <h1 className='text-white text-4xl opacity-75'>Newz Wrld</h1>
        <h2 className='text-white text-xl opacity-75'>Made with ❤️</h2>
        <h2 className='text-white text-xs opacity-75 hover:underline underline-offset-4'><a href="https://github.com/Vish1194">Created by Vish1194</a></h2>
    </div>
  )
}

export default Footer
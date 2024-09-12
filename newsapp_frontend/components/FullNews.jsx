"use client"
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import Loading from './Loading';

const FullNews = () => {
    const [data,setData] = useState(null)
    useEffect(()=>{
        setData(JSON.parse(localStorage.getItem('article')));
    },[])
  return (
    <>
    {   data!==null ?
         <div className='flex justify-center items-center flex-col'>
        <div>
            <img src={data.image} alt="" className='lg:w-[70vw]'/>
        </div>
        <div className='lg:w-[70vw] px-7 bg-white'>
            <div className='font-bold my-4 text-4xl'>{data.title}</div>
            <div className='text-end my-4 opacity-45'>{data.publishedAt}</div>
            <div className='text-xl my-4'>{data.description}</div>
            <div className='text-xl my-4'>{data.content.slice(0,-13)}</div>
            <div className='flex justify-center items-center'>
                <a href={data.url} className='bg-gray-700 text-white font-semibold px-9 py-4 text-lg rounded-full'>
                    Continue Reading
                </a>
            </div>
            <div className='text-end my-4'>
                <div className='mx-4'>Source:
                    <a href={data.source.url} className='text-violet-700 mx-1 underline underline-offset-4'>{data.source.name}</a>
                </div>
            </div>
            <div className='flex justify-center items-center'>
                <Link href='/' className='my-7 text-orange-500 font-semibold text-lg hover:underline underline-offset-4'>
                   {'<'} Go Back 
                </Link>
            </div>
        </div>
    </div> : <Loading/>
    }
    </>
   
  )
}

export default FullNews
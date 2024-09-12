"use client"
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

const NewsCard = ({data}) => {
  const router = useRouter();
  const [imgLoading,setImgLoading] = useState(true);
  function gotoNews() {
    localStorage.setItem('article',JSON.stringify(data));
    router.push('/read')
  }
  return (
    <div onClick={gotoNews} className='w-96 bg-white m-5 rounded-lg hover:shadow-lg hover:shadow-gray-300 hover:cursor-pointer'>
        <div>
            <img onLoad={()=>{
                setImgLoading(false);
            }} src={data.image} alt="Source image" className='rounded-t-lg w-full h-64' />
        </div>
        {
           imgLoading && <div className='w-96 h-3 rounded-t-lg bg-white'></div>
        }
        <div className='relative top-[-70px] px-4 glass'>
            <div className='text-lg font-bold min-h-[100px]'>{data.title}</div>
            <div className='bg-white relative top-5 min-h-[100px]'>{data.description.substring(0,200)}{data.description.length>200 && '....'}</div>
        </div>
        <div className='flex justify-center items-center'>
            <button onClick={gotoNews} className='bg-black text-white my-4 px-9 py-2 text-xl font-semibold rounded-full'>Read More {'>>'}</button>
        </div>
    </div>
  )
}

export default NewsCard
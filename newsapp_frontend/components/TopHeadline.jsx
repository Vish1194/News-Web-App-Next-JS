"use client"
import React, { useContext, useEffect, useState } from 'react'
import Categories from './Categories'
import NewsCard from './NewsCard'
import { UserContext } from '@/context/UserContext'
import Loading from './Loading'


const TopHeadline = ({apiurl}) => {
  const {userSettings} = useContext(UserContext);
  const [news,setNews] = useState([]);
  useEffect(()=>{
    async function getHeadlines() {
      try {
        const response = await fetch(apiurl+"api/top-headlines?category="+ userSettings.headline_category +"&lang="+ userSettings.language +"&country="+userSettings.country);
        const data = await response.json();
        setNews(data.articles);
      } catch (error) {
        
      }
    }
    getHeadlines();
  },[])
  return (
    <>
        <h1 className='text-center text-white font-bold text-4xl mt-11 md:mt-14 mb-4'>Top Headlines</h1>
        <div className='flex justify-center items-center'>
          <hr className='mb-4 w-44 opacity-40'/>
        </div>
        <Categories apiurl={apiurl} sendNews={setNews}/>
        <div className='flex justify-center flex-wrap mt-5 md:px-24'>
          {
            news.length>0 ? news.map((n,index)=>(
              <NewsCard key={index} data={n}/>
            ))
            : 
            <div className='my-11'>
              <Loading/>
              <h1 className="my-4 text-center text-white text-4xl font-semibold">Loading...</h1>
            </div>
          }
        </div>
    </>
  )
}

export default TopHeadline
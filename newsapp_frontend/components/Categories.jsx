"use client"
import { UserContext } from '@/context/UserContext';
import React, { useContext } from 'react'

const Categories = ({sendNews,apiurl}) => {
    const {userSettings,setUserSettings} = useContext(UserContext);
    const categories = ['general', 'world', 'nation', 'business', 'technology', 'entertainment', 'sports', 'science', 'health']
    
    async function getNewsOfCategory(c) {
        setUserSettings({...userSettings,headline_category:c})
        try {
            const response = await fetch(apiurl+"api/top-headlines?category="+ c +"&lang="+ userSettings.language +"&country="+userSettings.country);
            const data = await response.json();
            sendNews(data.articles);
          } catch (error) {
            
          }
    }

    return (
    <>
        <div className="flex lg:justify-center overflow-x-auto px-5">
            {
                categories.map((c,index)=>(
                    <button onClick={()=>{
                        getNewsOfCategory(c)
                    }} key={index} className='bg-white text-lg rounded-lg font-bold p-2 m-2 hover:bg-black hover:text-white focus:bg-gray-500'>{c}</button>
                ))
            }
        </div>
    </>
  )
}

export default Categories
"use client"
import { useEffect, useState } from 'react'
import NewsCard from './NewsCard'

const Pagination = ({newsData,newsPerPage}) => {
    const [currNews,setCurNews] = useState([]);
    const [currIndex,setCurIndex] = useState(0);
    
    useEffect(()=>{
        let arr = [];
        if(currIndex+newsPerPage>newsData.length){
            for(let i=currIndex;i<newsData.length;i++){
                arr.push(newsData[i]);
            }
        }else{
            for(let i=currIndex;i<currIndex+newsPerPage;i++){
                arr.push(newsData[i]);
            }
        }
        setCurNews(arr);
    },[currIndex])
    
  return (
    <div>
        <div className='flex justify-center items-center flex-wrap mt-5 md:px-24'>
          {
            currNews.length>0 && currNews.map((n,index)=>(
              <NewsCard key={index} data={n}/>
            ))
          }
        </div>
        <div className="flex flex-col items-center">
            <div className="inline-flex mt-2 xs:mt-0">
                <button disabled={currIndex>0 ? false : true} onClick={()=>{
                    setCurIndex(currIndex-newsPerPage);
                }} className="flex items-center justify-center px-7 h-11 text-lg font-medium text-white bg-gray-800 rounded-s hover:bg-black disabled:opacity-50 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                    Prev
                </button>
                <button disabled={currIndex<newsData.length-newsPerPage ? false : true} onClick={()=>{
                    setCurIndex(currIndex+newsPerPage);
                }} className="flex items-center justify-center px-7 h-11 text-lg font-medium text-white bg-gray-800 border-0 border-s border-gray-700 rounded-e hover:bg-black disabled:opacity-50 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                    Next
                </button>
            </div>
        </div>
    </div>
  )
}

export default Pagination
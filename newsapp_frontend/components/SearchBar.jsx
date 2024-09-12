"use client"
import { UserContext } from '@/context/UserContext'
import React, { useContext, useState } from 'react'
import Pagination from './Pagination'


const SearchBar = ({apiurl}) => {
    const [searchOptions,setSearchOptions] = useState({
        query:'',
        sortby:'publishedAt',
        resPerPage:'3'
    })
    const {userSettings} = useContext(UserContext);

    const [news,setNews] = useState([]);
    const [isLoading,setIsLoading] = useState(false);

    async function getNews(e) {
        e.preventDefault();
        setNews([]);
        setIsLoading(true);
        try {
            const response = await fetch(apiurl+'api/search?q="'+searchOptions.query+'"&lang='+userSettings.language+'&country='+userSettings.country+'&sortby='+searchOptions.sortby);
            const data = await response.json();
            setNews(data.articles);
        } catch (error) {
            
        }
        setIsLoading(false);
    }
  return (
    <div>
        <form onSubmit={getNews} className="max-w-2xl mx-5 my-9 md:mx-auto">   
            <div className="relative">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                    </svg>
                </div>
                <input onChange={(e)=>{
                    setSearchOptions({...searchOptions,query:e.target.value});
                }} type="search" id="default-search" className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Newz" required />
                {
                    isLoading ? <button type="submit" className="text-white absolute end-2.5 bottom-2.5 bg-gray-700 font-medium rounded-lg text-sm px-4 py-2" disabled>Search</button> 
                    : <button type="submit" className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
                }
                <button type="reset" className="text-Black absolute mr-20 mb-0.5 end-2.5 bottom-2.5 rounded-lg focus:ring-4 focus:outline-none focus:ring-blue-300 font-bold text-lg py-2 px-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    <svg className='opacity-50' xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24"><path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"/></svg>
                </button>
            </div>
            <div className='flex justify-end items-center'>
                {/* <label htmlFor="underline_select4" className='text-white font-semibold'>Search Result/Page</label> */}
                <select onChange={(e)=>{
                    setSearchOptions({...searchOptions,resPerPage:e.target.value})
                }} defaultValue={searchOptions.resPerPage} id="underline_select4" className="w-14 text-center block py-2.5 px-0 text-sm text-black bg-transparent border-0 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer">
                    <option className='bg-gray-700 text-white' disabled>Result/Page</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="5">5</option>
                    <option value="2">10</option>
                </select>
                {/* <label htmlFor="underline_select3" className='text-white font-semibold'>SORT</label> */}
                <select onChange={(e)=>{
                    setSearchOptions({...searchOptions,sortby:e.target.value})
                }} defaultValue={searchOptions.sortby} id="underline_select3" className="w-28 my-2 text-center block py-2.5 px-0 text-sm text-black bg-transparent border-0 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer">
                    <option className='bg-gray-700 text-white' disabled>SORT</option>
                    <option value="publishedAt">Published Time</option>
                    <option value="relevance">Relevance</option>
                </select>
            </div>
        </form>
        {
            news.length>0 && <Pagination newsData={news} newsPerPage={parseInt(searchOptions.resPerPage)}/>
        }
    </div>
  )
}

export default SearchBar
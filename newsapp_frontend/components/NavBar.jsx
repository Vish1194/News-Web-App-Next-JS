"use client"
import { UserContext } from '@/context/UserContext'
import React, { useContext, useState } from 'react'

const NavBar = () => {
    const {userSettings,setUserSettings} = useContext(UserContext);

    // const [userOptions,setUserOptions] = useState({
    //     country : 'in',
    //     language: 'en'
    // })


      const countries = {
        Australia: 'au',
        Brazil: 'br',
        Canada: 'ca',
        China: 'cn',
        Egypt: 'eg',
        France: 'fr',
        Germany: 'de',
        Greece: 'gr',
        HongKong: 'hk',
        India: 'in',
        Ireland: 'ie',
        Israel: 'il',
        Italy: 'it',
        Japan: 'jp',
        Netherlands: 'nl',
        Norway: 'no',
        Pakistan: 'pk',
        Peru: 'pe',
        Philippines: 'ph',
        Portugal: 'pt',
        Romania: 'ro',
        RussianFederation: 'ru',
        Singapore: 'sg',
        Spain: 'es',
        Sweden: 'se',
        Switzerland: 'ch',
        Taiwan: 'tw',
        Ukraine: 'ua',
        UnitedKingdom: 'gb',
        UnitedStates: 'us'
    };
    const languages = {
        Arabic: "ar",
        Chinese: "zh",
        Dutch: "nl",
        English: "en",
        French: "fr",
        German: "de",
        Greek: "el",
        Hebrew: "he",
        Hindi: "hi",
        Italian: "it",
        Japanese: "ja",
        Malayalam: "ml",
        Marathi: "mr",
        Norwegian: "no",
        Portuguese: "pt",
        Romanian: "ro",
        Russian: "ru",
        Spanish: "es",
        Swedish: "sv",
        Tamil: "ta",
        Telugu: "te",
        Ukrainian: "uk"
    };
  return (
    <>
        <nav className="border-gray-200 dark:bg-gray-900">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                <img src="./logo.png" className="size-14" alt="Logo" />
                <span className="text-white italic self-center text-2xl md:text-4xl font-bold whitespace-nowrap dark:text-white">Newz Wrld</span>
            </a>
            <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 bg-gray-50 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                <span className="sr-only">Open main menu</span>
                <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
                </svg>
            </button>
            <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                <li>
                    <form className='flex justify-center items-center'>
                        <svg className='' width="20px" height="20px" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M4 0H6V2H10V4H8.86807C8.57073 5.66996 7.78574 7.17117 6.6656 8.35112C7.46567 8.73941 8.35737 8.96842 9.29948 8.99697L10.2735 6H12.7265L15.9765 16H13.8735L13.2235 14H9.77647L9.12647 16H7.0235L8.66176 10.9592C7.32639 10.8285 6.08165 10.3888 4.99999 9.71246C3.69496 10.5284 2.15255 11 0.5 11H0V9H0.5C1.5161 9 2.47775 8.76685 3.33437 8.35112C2.68381 7.66582 2.14629 6.87215 1.75171 6H4.02179C4.30023 6.43491 4.62904 6.83446 4.99999 7.19044C5.88743 6.33881 6.53369 5.23777 6.82607 4H0V2H4V0ZM12.5735 12L11.5 8.69688L10.4265 12H12.5735Z" fill="#000000"/>
                        </svg>
                        <select onChange={(e)=>{
                            setUserSettings({...userSettings,country:e.target.value})
                        }} defaultValue={userSettings.country} id="underline_select" className="text-center block py-2.5 px-0 w-3/4 text-sm text-gray-500 bg-transparent border-0 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer">
                            <option className='bg-gray-800 text-white opacity-75' disabled>Country</option>
                            {
                                Object.entries(countries).map(([country, code]) => (
                                    <option key={code} value={code}>{country}</option>
                                ))
                            }
                        </select>
                    </form>
                </li>
                <li>
                    <form className='flex justify-center items-center'>
                    <svg width="20px" height="20px" viewBox="0 0 24 24" role="img" xmlns="http://www.w3.org/2000/svg" aria-labelledby="languageIconTitle" stroke="#000000" strokeWidth="1" strokeLinecap="square" strokeLinejoin="miter" fill="none" color="#000000"> <title id="languageIconTitle">Language</title> <circle cx="12" cy="12" r="10"/> <path strokeLinecap="round" d="M12,22 C14.6666667,19.5757576 16,16.2424242 16,12 C16,7.75757576 14.6666667,4.42424242 12,2 C9.33333333,4.42424242 8,7.75757576 8,12 C8,16.2424242 9.33333333,19.5757576 12,22 Z"/> <path strokeLinecap="round" d="M2.5 9L21.5 9M2.5 15L21.5 15"/> </svg>
                    <select onChange={(e)=>{
                        setUserSettings({...userSettings,language:e.target.value})
                    }} defaultValue={userSettings.language} id="underline_select" className="text-center block py-2.5 px-0 w-3/4 text-sm text-gray-500 bg-transparent border-0 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer">
                        <option className='bg-gray-800 text-white opacity-75' disabled>Language</option>
                        {
                            Object.entries(languages).map(([language, code]) => (
                                <option key={code} value={code}>{language}</option>
                            ))
                        }
                    </select>
                    </form>
                </li>
            </ul>
            </div>
        </div>
        </nav>
        <hr className='mx-5'/>
    </>
  )
}

export default NavBar
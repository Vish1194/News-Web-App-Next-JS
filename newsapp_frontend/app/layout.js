"use client"
import NavBar from "@/components/NavBar";
import "./globals.css";
import { UserContext } from "@/context/UserContext";
import { useState } from "react";
import Footer from "@/components/Footer";
import Script from "next/script";


export default function RootLayout({ children }) {

  const [userSettings,setUserSettings] = useState({
    language:'en',
    country:'in',
    headline_category:'general'
  })

  return (
    <html lang="en">
      <head><link href="https://cdn.jsdelivr.net/npm/flowbite@2.5.1/dist/flowbite.min.css" rel="stylesheet" />
      <title>Newz Wrld</title>
      </head>
      <body>
        <UserContext.Provider value={{userSettings,setUserSettings}}>
          <NavBar/>
          {children}
        </UserContext.Provider>
          <Footer/>
        <Script src="https://cdn.jsdelivr.net/npm/flowbite@2.5.1/dist/flowbite.min.js"/>
      </body>
    </html>
  );
}

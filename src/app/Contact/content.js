'use client'
import { createContext, useState } from "react";

export const Check=createContext()

export default function Contact({children}) {

  const [data,Setdata]=useState([{
    Name:'Muhammad Atta',
    class:12, 
    Roll:12324
  }])

  return (
   <>
 <Check.Provider value={{data,Setdata}}>
  {children}
 </Check.Provider>
   </>
  )
}

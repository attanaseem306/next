'use client'
import Image from 'next/image'
import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';
import Link from 'next/link'
import { Data } from '../../public/Data/page';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { useState } from 'react';
import Contact from '@/app/Contact/content'
import { useContext } from 'react';
import { Check } from '@/app/Contact/content';

export default function Home() {
  // const [Spacific,SetSpacific]=useState([])
  // console.log(Data);

  // const Blog = (e) => {
  //   console.log(e);
  //   const copy = [...Data];
  //   const final=copy[e]
  //   console.log(final);
  //   SetSpacific(final)
  // }

  const {data,Setdata} =useContext(Check)
 
  return (
   <>
 <button onClick={()=>{Setdata([{ Name:'Muhammad Faiz',
    class:111, 
    Roll:122224}])}}>Chnage </button>
 <h1>Name:{data[0].Name}</h1><br/>
 <h1>Class:{data[0].class}</h1><br/>
 <h2>Roll:{data[0].Roll}</h2>
   {/* <Link href={'/About'}> <button>About</button></Link>
   <button>Contact Us</button>
   <button>Blog</button> */}
   </>
  )
}

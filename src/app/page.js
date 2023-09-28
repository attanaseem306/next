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

</>
 )
  }
  //  {/* <Link href={'/About'}> <button>About</button></Link>
  //  <button>Contact Us</button>
  //  <button>Blog</button> */}

  // // console.log(Data);
  // // const Blog = (e) => {
  // //   console.log(e);
  // //   const copy = [...Data];
  // //   let final=copy[e]
  //   // setItem(final,'Value')
  // // }
  // // return (
  //  <>
  //  {/* <div style={{ paddingLeft:15,paddingRight:15 ,display:'inline-flex', display:'flex', justifyContent:'space-evenly',flexWrap:'wrap'}}>
  //   {
  //     Data.map((e , index)=>{
  //       return (
  //         <div key={index} className='main
  //         ' style={{marginTop:20}}>
  //             <Card style={{ width: '18rem' }}>
  //               <Card.Img variant="top" src={e.url} />
  //               <Card.Body>
  //                 <Card.Title><h3 style={{fontFamily:'revert-layer'}}>{e.Name}</h3></Card.Title>
  //                 <Card.Title>{e.class}</Card.Title>
  //                 <Card.Title>{e.Roll}</Card.Title>
  //                 <Button onClick={()=> Blog(index)} style={{textAlign:'center'}} variant="primary">Check</Button>
  //               </Card.Body>
  //             </Card> 
  //             </div>
  //       )
  //     })
  //   }
  //  </div> */}
  //  {/* <Link href={'/About'}> <button>About</button></Link>
  //  <Link href={'/Blog'}><button>Blog</button></Link>
  //  <button>Con</button>
  //  </>
  // ) */}


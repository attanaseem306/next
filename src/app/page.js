'use client'
import Image from 'next/image'
import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';
import Link from 'next/link'
import { Data } from '../../public/Data/page';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';



// export default ListGroupExample;

export default function Home() {
  console.log(Data);
  return (
   <>
   <div style={{ paddingLeft:15,paddingRight:15 ,display:'inline-flex', display:'flex', justifyContent:'space-evenly',flexWrap:'wrap'}}>
    {
      Data.map((e)=>{
        return (
          <div className='main' style={{marginTop:20}}>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={e.url} />
                <Card.Body>
                  <Card.Title><h3 style={{fontFamily:'revert-layer'}}>{e.Name}</h3></Card.Title>
                  <Card.Title>{e.class}</Card.Title>
                  <Card.Title>{e.Roll}</Card.Title>

                </Card.Body>
              </Card> 
              </div>
        )
      })
    }
   </div>
   {/* <Link href={'/About'}> <button>About</button></Link>
   <button>Contact Us</button>
   <button>Blog</button> */}
   </>
  )
}

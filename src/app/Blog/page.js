'use client'
import Link from 'next/link'
import dataFetch from  '@/app/UserInfo/UserAllData'

export default async function Second() {
    const fetch = await dataFetch()

    return (
        <div>
            {
                fetch.map((val,index) => {
                    return (
                <>     
                <Link href={`/Blog/${val.id}`}>
                  <div style={{backgroundColor:'black', borderRadius:6, paddingLeft:18, paddingBottom:4}} key={index}>
                        <div>
                        <h1 style={{fontSize:18, color:'white'}}>{val.name}</h1>
                        <h1 style={{fontSize:18, color:'white'}}> {val.email}</h1>
                        </div>
                    </div>
                    </Link>
                 </>     
                    )
                })


            }
        </div>
    )

}
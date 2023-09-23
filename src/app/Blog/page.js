
 async function dataFetch() {
    
  const rest=await fetch('https://jsonplaceholder.typicode.com/users')
  
  if (!rest.ok) {  
      throw new Error("faild")   
  }
  return rest.json()
  }
  

 export default async function Second() {
  const fetch=await dataFetch() 

  return (
      <div>
      {
       fetch.map((val)=>{
        return(
            <h1>{val.id}</h1>
        )
       })
    
  
      }
      </div>
  )

 }
export default async function UserDetail(id) {
    console.log(id);
    
    const rest=await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)

    if (!rest.ok) {
        
        throw new Error (" Failed to fetch data")

    }
 
return rest.json()
}
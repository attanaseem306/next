
export default async function dataFetch() {
    
    const rest=await fetch('https://jsonplaceholder.typicode.com/users')
    
    if (!rest.ok) {  
        throw new Error("faild")   
    }
    return rest.json()
    }
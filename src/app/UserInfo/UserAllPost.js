export default async function UserAllPost(id) {
    
     const res = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
     if (!res.ok) {
       throw new Error('Failed to fetch data')
     }
    
     return res.json()

}
'use client'
import UserAllPost from '@/app/UserInfo/UserAllPost'
import Blog_Show from '@/app/Show/Blog_Show'
import UserDetail from '@/app/UserInfo/UserDetail'
// import { Suspense } from 'react';

export default async function PostUser({params}) {
   console.log(params);
const UserDetails= await UserDetail(params.Id)
const UserAllPosts=await UserAllPost(params.Id)
// const[Detail,Allpost]=await Promise.all([UserDetails,UserAllPosts])
return(
<>
<h1 className="text-center text-3xl font-bold bg-indigo-400 py-5 text-indigo-50">User_All_Blogs_Detail</h1>
            <div className="bmt-5 py-6 cursor-pointer text-indigo-50 rounded-md mx-4 px-6">
                <div className="bg-indigo-500 mt-5 py-6 cursor-pointer text-indigo-50 rounded-md mx-4 px-6">
                <p>Name : {UserDetails.name}</p>
                <p>Email : {UserDetails.email}</p>
                </div>
                {/* <Suspense fallback={<h2 className="text-center text-2xl">loading...</h2>}> */}
                    <Blog_Show promise={UserAllPosts} />
                {/* </Suspense> */}
            </div>
</>
)

}
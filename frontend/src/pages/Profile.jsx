import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import TimelineList from "../_components/TimelineList";
import Nav from "../_components/Nav";

export default function Profile() {

    const [data, setData] = useState(null)
    const [posts, setPost] = useState([])
    const params = useParams();


    useEffect(()=>{
        fetch("http://localhost:3030/getUser?id="+params.id).then(res=>res.json()).then(data=>{
            setData(data.data)
        })


    }, [])
    
    return (
        <>
        <Nav />
        <div className="md:px-[20vw] p-5">
            <div className="flex">
                <img
                className="h-[10rem] rounded mr-5" 
                src="https://avatars.githubusercontent.com/u/68737072"/>
                <div>
                <h2 className="text-3xl font-medium">{(data==null)?"Loading":data.username}</h2>
                <span className="text-sm text-[#888] block">Joined <time>{(data==null)?"Loading":(new Date(data.createdAt).getDate()+"th "+ (new Date(2024, new Date(data.createdAt).getMonth(), 1).toLocaleString('default', { month: 'long' })) +" " + new Date(data.createdAt).getFullYear())}</time></span>
                <small>{(data==null || data.posts.length==0)?"No posts yet!":`${data.posts.length} posts.`}</small>
                </div>
            </div>
            <div className="mt-5">
                <h3 className="text-2xl">Posts</h3>
                <TimelineList data={(data==null?null:data.posts)}/>
            </div>
        </div>
        </>
    )
}
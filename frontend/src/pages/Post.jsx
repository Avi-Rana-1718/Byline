import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import Nav from "../_components/Nav";

export default function Post() {
    const [data, setData] = useState(null);
    const params = useParams();
    console.log("http://localhost:3030/post/get?id="+params.id);
    

    useEffect(()=>{
        fetch("http://localhost:3030/post/get?id="+params.id).then(res=>res.json()).then(data=>{
            setData(data.data)
            console.log(data.data);
            
        })
    }, [])

    if(data==null) {
        return <h3>Loading</h3>
    }


    return (
        <>
        <Nav />
        <div className="px-[20vw] p-5">
            <h3 className="text-3xl">{data.title}</h3>
            <span className="block m-2 mb-0 text-[#c2b8b8]">{data.byline}</span>
            <time className="text-xs text-[#888] m-2 mb-1">{new Date(data.postedAt).getDate()+"th "+ (new Date(2024, new Date(data.postedAt).getMonth(), 1).toLocaleString('default', { month: 'long' })) +" " + new Date(data.postedAt).getFullYear()}</time>
            <p 
            className="mt-5"
            dangerouslySetInnerHTML={{__html: data.content}}
            ></p>
        </div>
        </>
    )
}
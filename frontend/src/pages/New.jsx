import { useRef, useState } from "react";
import Nav from "../_components/Nav";

export default function New() {

    const [title, setTitle] = useState("");
    const [byline, setByline] = useState("");
    const [content, setContent] = useState("");

    const [status, setStatus] = useState(null);

    return (
        <>
        <Nav />

        <div className="md:px-[20vw] p-5">
        <h3 className="text-2xl font-medium mb-4">
                Post
        </h3>
        <div disabled={status==null?true:false} className="block rounded bg-[#34435e] mb-4 p-4 disabled:hidden">
            {(status!=null)?(status.status):null}
            <small>{(status!=null)?(status.message):null}</small>
        </div>
        <div className="md:flex gap-x-5">
        <form 
        className="flex flex-col grow bg-[#FCFCFC] text-[#282828] p-6 rounded"
        onSubmit={(e)=>{-
            e.preventDefault();
            setStatus(null);
            
            let postObj={
                authorID: Number(JSON.parse(localStorage.getItem("user")).userID),
                title: e.target[0].value,
                byline: e.target[1].value,
                content: e.target[2].value,
                postedAt: Date.now(),
                postID: Math.floor(Math.random() * (999999999 - 111111111) + 111111111)
            }

            fetch("http://localhost:3030/post/add", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(postObj)
            }).then(res=>res.json()).then(data=>{
                setStatus(data)
                console.log(data);
                
                
            })
        }}
        >
            <label htmlFor="title">Title<span className="text-red-500">*</span></label>
            <input 
            type="text" 
            required
            onChange={(e)=>{
                setTitle(e.target.value);
                
            }}
            placeholder="Blog #171 - I got a new bike!"
            className="block text-[#0F0F0F] bg-[#E8F0FE] px-4 py-2 rounded-sm my-2 outline-2 focus:outline-[#88909d] disabled:hidden"
            />
            <label htmlFor="byline">Byline<span className="text-red-500">*</span></label>
            <input 
            type="text" 
            required
            placeholder="New bike, new ME!"
            className="block text-[#0F0F0F] bg-[#E8F0FE] px-4 py-2 rounded-sm my-2 outline-2 focus:outline-[#88909d] disabled:hidden"
            onChange={(e)=>{
                setByline(e.target.value);
            }}
            />
            <label htmlFor="data">Data<span className="text-red-500">*</span></label>
            <textarea 
            type="text" 
            required
            rows={4}
            placeholder="Hello guys! I just bought my dream bike."
            className="block text-[#0F0F0F] bg-[#E8F0FE] px-4 py-2 rounded-sm my-2 outline-2 focus:outline-[#88909d] disabled:hidden"
            onChange={(e)=>{
                setContent(e.target.value);
            }}
            ></textarea>
            <input
            type="submit"
            className="bg-[#2e405f] hover:underline cursor-pointer text-white px-2 py-1 rounded inline-block"
            />
        </form>

        <div
        className="flex grow flex-col bg-[#FCFCFC] text-[#282828] p-6 rounded ">
        <h3 className="text-2xl font-medium mb-4">
             Preview
        </h3>
        <h5>{title}</h5>
        <span className="text-sm">{byline}</span>
        <p dangerouslySetInnerHTML={{__html: content}}>
        </p>
        </div>
        </div>

        </div>
        </>
    )
}
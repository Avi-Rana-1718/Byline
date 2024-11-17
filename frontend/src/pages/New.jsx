import { useRef, useState } from "react";
import Nav from "../_components/Nav";

export default function New() {

    const [title, setTitle] = useState("");
    const [byline, setByline] = useState("");
    const [content, setContent] = useState("");

    const inputRef=useRef(null);

    return (
        <>
        <Nav />
        <div className="px-[20vw] p-5 flex gap-x-4 justify-center">
        <form 
        className="flex flex-col bg-[#FCFCFC] text-[#282828] p-6 rounded"
        onSubmit={(e)=>{
            e.preventDefault();
            console.log(e.target);
            
            let postObj={
                authorID: localStorage.getItem("userID"),
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
                console.log(data);
                
            })
        }}
        >
            <h3 className="text-2xl font-medium mb-4">
                Post
            </h3>
            <label htmlFor="title">Title<span className="text-red-500">*</span></label>
            <input 
            type="text" 
            name="title"
            onChange={(e)=>{
                setTitle(e.target.value);
                
            }}
            placeholder="Blog #171 - I got a new bike!"
            className="block text-[#0F0F0F] bg-[#E8F0FE] px-4 py-2 rounded-sm my-2 outline-2 focus:outline-[#88909d] disabled:hidden"
            />
            <label htmlFor="byline">Byline<span className="text-red-500">*</span></label>
            <input 
            type="text" 
            name="byline"
            placeholder="New bike, new ME!"
            className="block text-[#0F0F0F] bg-[#E8F0FE] px-4 py-2 rounded-sm my-2 outline-2 focus:outline-[#88909d] disabled:hidden"
            onChange={(e)=>{
                setByline(e.target.value);
            }}
            />
            <label htmlFor="data">Data<span className="text-red-500">*</span></label>
            <textarea 
            type="text" 
            name="data"
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
        className="flex flex-col bg-[#FCFCFC] text-[#282828] p-6 rounded ">
        <h3 className="text-2xl font-medium mb-4">
             Preview
        </h3>
        <h5>{title}</h5>
        <span className="text-sm">{byline}</span>
        <p dangerouslySetInnerHTML={{__html: content}}>
        </p>
        </div>

        </div>
        </>
    )
}
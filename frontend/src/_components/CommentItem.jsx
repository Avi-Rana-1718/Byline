import { useEffect, useState } from "react"
import { Link } from "react-router-dom";

export function CommentItem({authorID, comment}) {
    const [username, setUsername] = useState(null);

    useEffect(()=>{
        fetch("http://localhost:3030/getUser?id=" + authorID).then(res=>res.json()).then(data=>{
            setUsername(data.data.username)
            
        })
    })

    if(username==null) {
        return <span className="block animate-pulse bg-[#4B3F60] px-3 py-2 rounded text-sm">Loading</span>
    }

    return (
    <li className="bg-[#4B3F60] px-3 py-2 rounded text-sm">
        <h4 className="text-md hover:underline">
            <Link to={"/user/" + authorID}>{username}</Link>
        </h4>
        {comment}
      </li>
    )
}
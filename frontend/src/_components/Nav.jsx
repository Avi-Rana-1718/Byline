import { useState } from "react";
import { Link } from "react-router-dom";

export default function Nav() {
    const [isLoggedIn, setLoggedIn] = useState(false);
    const [data, setData] = useState(null);

    fetch("http://localhost:3030/auth/verify").then(res=>res.json()).then(data=>{
        console.log(data);
        
    })

    return (
        <nav className="mb-4 p-4 flex justify-between items-center">
            <h1 className="text-2xl font-['Faculty_Glyphic'] hover:underline">
                <Link to="/">
                    Byline
                </Link>
            </h1>
            <div>
                <span className="mr-2">
                    {(isLoggedIn)?(data.username):(<Link className="hover:underline" to="/auth">Login</Link>)}
                </span>
                <button
                className="bg-[#EAE7EF]  text-[#2C0D62] px-2 py-1 rounded hover:underline">
                <Link to="/new">
                New
                </Link>
                </button>
            </div>
        </nav>
    )
}
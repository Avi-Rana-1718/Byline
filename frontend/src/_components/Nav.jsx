import { useState } from "react";
import { Link } from "react-router-dom";
import Dropdown from "./Dropdown";

export default function Nav() {
    const [isLoggedIn, setLoggedIn] = useState(localStorage.getItem("user"));
    const [data, setData] = useState(null);

    return (
        <nav className="mb-4 p-4 flex justify-between items-center">
            <h1 className="text-2xl font-['Faculty_Glyphic'] hover:underline">
                <Link to="/">
                    Byline
                </Link>
            </h1>
            {isLoggedIn?(
                <div>
                <span className="mr-2">
                    <Dropdown title={JSON.parse(isLoggedIn).username} list={[{title:"Profile", href:`/user/${JSON.parse(localStorage.getItem("user")).userID}`}, {title:"Setting", href:"/setting"}]}/>
                </span>
                <button
                className="bg-[#EAE7EF]  text-[#2C0D62] px-2 py-1 rounded hover:underline">
                <Link to="/new">
                New
                </Link>
                </button>
            </div>
            ):<Link className="hover:underline" to="/auth">Login</Link>}
        </nav>
    )
}
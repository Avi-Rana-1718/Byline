import { useState } from "react";
import { Navigate, redirect, useNavigate } from "react-router-dom";
import Nav from "../_components/Nav";

export default function Auth() {
    let navigate = useNavigate();
    const [signUp, setSignUp] = useState(true);
    return (
        <>
        <Nav />
        <div className="flex flex-row justify-center items-center">
        <div className="block w-full mx-5 bg-[#FCFCFC] text-[#282828] p-8 rounded md:inline-block md:w-auto">
            <form
            onSubmit={(e)=>{
                e.preventDefault();

                let userObj = {
                    username: e.target[0].value,
                    email: e.target[1].value,
                    password: e.target[2].value,
                    createdAt: Date.now(),
                    userPfp: null,
                    userID: Math.floor(Math.random() * (999999999 - 111111111) + 111111111),
                    posts:[]
                }

                if(!signUp) {
                    delete userObj.username;
                    delete userObj.createdAt;
                    delete userObj.posts;
                }

                let endPoint = (signUp)?"http://localhost:3030/auth/signup":"http://localhost:3030/auth/login";
                
                fetch(endPoint, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(userObj)
                }).then(res=>res.json()).then(data=>{
                    console.log(data);
                    if(data.status=="SUCCESS" && !signUp) {
                        localStorage.setItem("userID", data.data.userID);
                        return navigate("/user/"+ data.data.userID, {replace:true});
                    }
                    
                })
                }
                }
            >
                <h3 className="text-2xl font-medium mb-4">
                    {(signUp)?"Signup":"Login"}
                </h3>
                <label 
                htmlFor="username" 
                className={signUp?"block":"hidden"}
                >Username<span className="text-red-500">*</span></label>
                <input 
                id="username" 
                disabled={!signUp} 
                autoFocus={signUp}
                placeholder="SpongeBob189"
                className="block text-[#0F0F0F] w-[20vw] bg-[#E8F0FE] px-4 py-2 rounded-sm my-2 outline-2 focus:outline-[#88909d] disabled:hidden"
                />
                <label htmlFor="email">Email<span className="text-red-500">*</span></label>
                <input 
                type="email" 
                id="email"
                autoFocus={!signUp}
                placeholder="starfish@pants.com" 
                className="block text-[#0F0F0F] w-[20vw] bg-[#E8F0FE] px-4 py-2 outline-2 focus:outline-[#88909d] rounded-sm my-2 focus:outline-none"
                />
                <label htmlFor="password">Password<span className="text-red-500">*</span></label>
                <input 
                type="password" 
                id="password"
                placeholder="seacert"
                className="block text-[#0F0F0F] w-[20vw] bg-[#E8F0FE] px-4 py-2 outline-2 focus:outline-[#88909d] rounded-sm my-2 focus:outline-none"
                />
            <input
            type="submit"
                className="bg-[#2e405f] hover:underline cursor-pointer text-white px-2 py-1 rounded inline-block"
            />
            </form>
            <button
            type="button"
            className="text-sm mt-2"
            onClick={()=>{
                setSignUp(!signUp)
            }}>{(signUp)?"Already have an account?":"Create a new account!"}
            </button>
        </div>
        </div>
    </>
    )
}
import { useEffect, useState } from "react";
import { Navigate, redirect, useNavigate } from "react-router-dom";
import Nav from "../_components/Nav";
import Footer from "../_components/Footer";

export default function Auth() {
    let navigate = useNavigate();
    const [signUp, setSignUp] = useState(true);

    useEffect(()=>{
        if(localStorage.getItem("user")) {
            return navigate("/user/"+JSON.parse(localStorage.getItem("user")).userID, {replace:true});
        }
    }, [])

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
                    userPfp: "https://i.pinimg.com/736x/b9/c4/7e/b9c47ef70bff06613d397abfce02c6e7.jpg",
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
                        localStorage.setItem("user", JSON.stringify(data.data));
                        return navigate("/user/"+ data.data.userID, {replace:true});
                    } else if(data.status=="ERROR") {
                        alert(data.message)
                    } else {
                        alert("Created new user!")
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
                required
                disabled={!signUp} 
                autoFocus={signUp}
                placeholder="SpongeBob189"
                className="block text-[#0F0F0F] w-[20vw] bg-[#E8F0FE] px-4 py-2 rounded-sm my-2 outline-2 focus:outline-[#88909d] disabled:hidden"
                />
                <label htmlFor="email">Email<span className="text-red-500">*</span></label>
                <input 
                type="email" 
                id="email"
                required
                autoFocus={!signUp}
                placeholder="starfish@pants.com" 
                className="block text-[#0F0F0F] w-[20vw] bg-[#E8F0FE] px-4 py-2 outline-2 focus:outline-[#88909d] rounded-sm my-2 focus:outline-none"
                />
                <label htmlFor="password">Password<span className="text-red-500">*</span></label>
                <input 
                type="password" 
                id="password"
                required
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
        <Footer />
    </>
    )
}
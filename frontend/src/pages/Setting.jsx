import { useRef, useState } from "react";
import Nav from "../_components/Nav";
import Footer from "../_components/Footer";
import { Link, useNavigate } from "react-router-dom";

export default function Setting() {
  let navigate = useNavigate();
  const [aboutVisible, setAboutVisibilty] = useState(false)
  const pfpRef = useRef(null);

  function deleteAccount() {
    fetch("http://localhost:3030/deleteUser?id=" + JSON.parse(localStorage.getItem("user")).userID).then(res=>res.json()).then(data=>{
      console.log(data);
      if(data.status=="SUCCESS") {
        localStorage.clear();
        return navigate("/auth", {replace:true});
      }
    })
  }

  function logoutAccount() {
    localStorage.clear();
    return navigate("/auth", {replace:true})
  }

  function uploadImage() {
    pfpRef.current.innerHTML=`<i class="fa-solid fa-circle-notch animate-spin"></i>`
  }

  return (
    <>
      <Nav />
      <div className="md:px-[20vw] p-5">
        <h3 className="text-2xl font-medium mb-4">Setting</h3>
        <div className="md:flex gap-x-2">
          <ul className="mb-4">
            <li
            className="hover:bg-[#d6d4d4] whitespace-nowrap mb-1 px-2 py-1 bg-[#EAE7EF] text-[#282828] hover:underline cursor-pointer rounded"
            onClick={()=>{
              setAboutVisibilty(false)
            }}
            ><i class="fa-solid fa-circle-user mr-1"></i>Account</li>
            <li
            className="hover:bg-[#d6d4d4] px-2 mb-1 py-1 bg-[#EAE7EF] text-[#282828] hover:underline cursor-pointer rounded"
            onClick={()=>{
              setAboutVisibilty(true)
            }}
            ><i class="fa-solid fa-circle-question mr-1"></i>About</li>
            <li
            onClick={logoutAccount} 
            className="hover:bg-[#c64343] mb-1 px-2 py-1 bg-[#da3131] text-[#E8E8E8] hover:underline cursor-pointer rounded">
              <i class="fa-solid fa-door-open mr-1"></i>Logout
            </li>
          </ul>
          <section className="flex  grow flex-col bg-[#FCFCFC] text-[#282828] p-4 rounded">
            {
              aboutVisible ? (
                <div>
                  <h3 className="text-xl underline">About</h3>
                  <p className="my-1">
                  Byline is a streamlined blogging platform designed for effortless content creation and sharing. It offers a clean, intuitive interface with essential features to help you focus on your writing.
                  </p>

                  <Link to="https://github.com/Avi-Rana-1718/Byline" className="text-[#bc2398] hover:underline">Github</Link>
                </div>
              ): (
              <div>
                <h3 className="text-xl underline mb-3">Account</h3>
                <label ref={pfpRef} onChange={uploadImage} for="pfpUpload" className={`group cursor-pointer flex justify-center items-center bg-blue-400 hover:backdrop-blur-sm w-20 h-20 rounded bg-cover bg-no-repeat bg-[url('https://i.pinimg.com/736x/b9/c4/7e/b9c47ef70bff06613d397abfce02c6e7.jpg')]`}>
                <input id="pfpUpload" type="file" hidden/>
                <i class="group-hover:block hidden fa-solid fa-pen"></i>
                </label>

                <h5 className="mt-4 text-[#444]">Information</h5>
                <small className="text-sm">Username: </small>
                <span>{JSON.parse(localStorage.getItem("user")).username}</span>
                <br />
                <small className="text-sm">User ID: </small>
                <span>{JSON.parse(localStorage.getItem("user")).userID}</span>
                <br />
                <small className="text-sm">Email: </small>
                <span>{JSON.parse(localStorage.getItem("user")).email}</span>
                            
                <div className="bg-[#ec7979] p-3 rounded mt-4">
                  <h4><i class="fa-solid fa-circle-exclamation mr-1"></i>Delete account</h4>
                  <span className="text-xs">Once you delete your account, there is no going back. Please be certain.</span>
                  <button onClick={deleteAccount} className="px-2 py-1 mt-4 rounded block hover:underline bg-[#4d2424] text-[#E8E8E8]">Delete</button>
                </div>
                
              </div>
              )
            }
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
}

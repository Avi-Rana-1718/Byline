import { useState } from "react";
import Nav from "../_components/Nav";
import Footer from "../_components/Footer";
import { Link } from "react-router-dom";

export default function Setting() {
  const [aboutVisible, setAboutVisibilty] = useState(false)
  return (
    <>
      <Nav />
      <div className="md:px-[20vw] p-5">
        <h3 className="text-2xl font-medium mb-4">Setting</h3>
        <div className="md:flex gap-x-2">
          <ul className="mb-4">
            <li
            className="hover:bg-[#d6d4d4] mb-1 px-2 py-1 bg-[#EAE7EF] text-[#282828] hover:underline cursor-pointer rounded"
            onClick={()=>{
              setAboutVisibilty(false)
            }}
            ><i class="fa-solid fa-circle-user mr-1"></i>Account</li>
            <li
            className="hover:bg-[#d6d4d4] px-2 py-1 bg-[#EAE7EF] text-[#282828] hover:underline cursor-pointer rounded"
            onClick={()=>{
              setAboutVisibilty(true)
            }}
            ><i class="fa-solid fa-circle-question mr-1"></i>About</li>
          </ul>
          <section className="flex  grow flex-col bg-[#FCFCFC] text-[#282828] p-4 rounded">
            {
              aboutVisible ? (
                <div>
                  <h3 className="text-xl underline">About</h3>
                  <p>
                    akskasja
                  </p>

                  <Link to="https://github.com/Avi-Rana-1718/Byline" className="text-[#bc2398] hover:underline">Github</Link>
                </div>
              ): (
              <div>
                <h3 className="text-xl underline mb-3">Account</h3>
                <img 
                className="w-20 rounded"
                src={JSON.parse(localStorage.getItem("user")).userPfp}
                />

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
                  <button className="px-2 py-1 mt-4 rounded block hover:underline bg-[#4d2424] text-[#E8E8E8]">Delete</button>
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

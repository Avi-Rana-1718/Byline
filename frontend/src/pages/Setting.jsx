import { useState } from "react";
import Nav from "../_components/Nav";
import Footer from "../_components/Footer";

export default function Setting() {
  const [username, setUsername] = useState("Eren Yeager");
  return (
    <>
      <Nav />
      <div className="md:px-[20vw] p-5">
        <h3 className="text-2xl font-medium mb-4">Setting</h3>
        <section className="flex flex-col bg-[#FCFCFC] text-[#282828] p-6 rounded">
          <div className="grow">
            <label htmlFor="title">
              Username<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              required
              placeholder={username}
              className="block text-[#0F0F0F] bg-[#E8F0FE] px-4 py-2 rounded-sm my-2 outline-2 focus:outline-[#88909d] disabled:hidden"
            />
            <label htmlFor="title">
              Email<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              required
              placeholder={username}
              className="block text-[#0F0F0F] bg-[#E8F0FE] px-4 py-2 rounded-sm my-2 outline-2 focus:outline-[#88909d] disabled:hidden"
            />
          </div>
          <div>
            <span className="">a</span>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}

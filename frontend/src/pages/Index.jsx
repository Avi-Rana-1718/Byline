import { Link } from "react-router-dom";
import Nav from "../_components/Nav";

function Index() {
  return (
    <>
      <Nav />
      <div>
        <header className="flex h-screen items-center justify-center">
          <div className="text-center">
            <h3 className="text-3xl font-medium">Words worth</h3>
            <h3 className="bg-300% pb-4 animate-gradient text-transparent bg-clip-text bg-gradient-to-r from-[#915fe7] via-blue-500 to-green-200 text-6xl font-medium">
              reading
            </h3>
            <button className="bg-[#6740aa] mt-4 hover:underline cursor-pointer text-white px-3 py-2 rounded inline-block text-xl">
              <Link to="/auth">Get Started<i class="fa-solid fa-circle-arrow-right ml-2"></i></Link>
            </button>
          </div>
        </header>
        <div className="bg-[#EAE7EF] text-[#282828] p-8 text-center">
          <h4 className="text-xl font-medium">Share your thoughts with ease</h4>
          <small className="text-[#888]">Blogging made easy</small>
          
        </div>
      </div>
    </>
  );
}

export default Index;

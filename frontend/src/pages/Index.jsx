import { Link } from "react-router-dom";
import Nav from "../_components/Nav";
import EmbeddedImage from "../_components/EmbeddedImage";
import Footer from "../_components/Footer";

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
              <Link to="/auth">
                Get Started<i class="fa-solid fa-circle-arrow-right ml-2"></i>
              </Link>
            </button>
          </div>
        </header>
        <div className="bg-[#fff] flex justify-between items-center text-[#282828] p-8 py-2">
          <div className="md:max-w-[40vw]">
            <h4 className="text-xl font-medium">
              Share your thoughts with ease
            </h4>
            <small className="text-[#413f3f] text-sm">Blogging made easy</small>
            <p className="mt-3 text-xs text-[#888]">
              Unleash your inner writer and share your thoughts with the world.
              Byline allows you to effortlessly create engaging content. Create
              an account and start writing.
            </p>
          </div>
          <div>
            <EmbeddedImage src="/section1.mp4" />
          </div>
        </div>
        <div className="bg-[#EAE7EF] text-[#282828] px-8 py-20">
          <div>
            <h4 className="text-xl font-medium">Supercharge your blog</h4>
            <small className="text-[#413f3f] text-sm">
              Elevate Your Content, Engage Your Audience
            </small>
            <p className="mt-3 text-xs text-[#888] max-w-[50vw]">
              For advanced users, our platform offers the flexibility to
              customize your blog with custom code. Dive deeper into the
              technical aspects of your website and implement personalized
              features. Whether you're integrating third-party scripts or
              creating unique design elements, our platform provides the tools
              and freedom to bring your vision to life.
            </p>
          </div>
        </div>
        <div className="bg-[#fff] flex justify-between items-center text-[#282828] p-8 py-2">
          <div className="md:max-w-[40vw]">
            <h4 className="text-xl font-medium">
            Unveiling the Power of the Written Word
            </h4>
            <small className="text-[#413f3f] text-sm">The Art of Expression</small>
            <p className="mt-3 text-xs text-[#888]">
            Embark on a captivating exploration of the written word, where stories come alive and ideas take flight. From ancient scrolls to modern-day masterpieces, discover the profound impact of literature on human thought and emotion. Unravel the secrets of storytelling, the magic of language, and the power of a single word.
            </p>
          </div>
          <div>
            <EmbeddedImage src="/section2.mp4" />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Index;

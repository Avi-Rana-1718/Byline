import { Link } from "react-router-dom";

export default function Nav() {

    return (
        <nav className="mb-4 flex justify-between items-center">
            <h1 className="text-2xl font-['FacultyGlyphic']">Byline</h1>
            <div>
                <button
                className="bg-[#2e405f] px-2 py-1 rounded hover:underline">
                <Link to="/new">
                New
                </Link>
                </button>
            </div>
        </nav>
    )
}
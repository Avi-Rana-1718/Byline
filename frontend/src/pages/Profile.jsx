import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import TimelineList from "../_components/TimelineList";
import Nav from "../_components/Nav";
import Footer from "../_components/Footer";

export default function Profile() {
  const [data, setData] = useState(null);
  const [posts, setPost] = useState([]);
  const params = useParams();

  useEffect(() => {
    fetch("http://localhost:3030/getUser?id=" + params.id)
      .then((res) => res.json())
      .then((data) => {
        setData(data.data);
      });
  }, []);

  return (
    <>
      <Nav />
      <div className="md:px-[20vw] p-5">
        <div className="flex">
          <img
            className="h-[10rem] rounded mr-5"
            src={data != null ? data.userPfp : null}
          />
          <div className="grow">
            <h2 className="text-3xl font-medium">
              {data == null ? "Loading" : data.username}
            </h2>
            <span className="text-sm text-[#888] block">
              Joined{" "}
              <time>
                {data == null
                  ? "Loading"
                  : new Date(data.createdAt).getDate() +
                    "th " +
                    new Date(
                      2024,
                      new Date(data.createdAt).getMonth(),
                      1
                    ).toLocaleString("default", { month: "long" }) +
                    " " +
                    new Date(data.createdAt).getFullYear()}
              </time>
            </span>
            <small>
              {data == null || data.posts.length == 0
                ? "No posts yet!"
                : `${data.posts.length} posts.`}
            </small>
          </div>
          <div>
          <div className={`border-[#583d85]  text-sm cursor-pointer block hover:underlne hover:bg-[#583d85] border-2 rounded-full px-2 py-1 ${localStorage.getItem("user")?JSON.parse(localStorage.getItem("user")).userID == Number(params.id) ? "block":"hidden":"hidden"}`}>
            <Link to="/setting">
            Edit profile
            </Link>
          </div>
          </div>
        </div>
        <div className="mt-5">
          <h3 className="text-2xl">Posts</h3>
          <TimelineList data={data == null ? null : data.posts} />
        </div>
      </div>
    </>
  );
}

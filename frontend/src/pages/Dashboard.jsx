import { useEffect, useState } from "react";
import Nav from "../_components/Nav";
import TimelineItem from "../_components/TimelineItem";

export default function Dashboard() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3030/getUser?id=" + JSON.parse(localStorage.getItem("user")).userID)
          .then((res) => res.json())
          .then((data) => {
            const fetchPosts = async () => {
                const promises = data.data.posts.map(async (el) => {
                  const response = await fetch("http://localhost:3030/post/get?id=" + el);
                  const nData = await response.json();
                  return nData.data;
                });
          
                const fetchedPosts = await Promise.all(promises);
                setPosts(fetchedPosts.reverse());
              };
          
              fetchPosts();
          });
      }, []);

    return (
        <>
        <Nav />
        <div className="md:px-[20vw] p-5">
            <h3 className="text-2xl font-medium mb-4">Dashboard</h3>
            <div className="flex gap-x-2">
            <section className="grow bg-[#FCFCFC] text-[#282828] p-4 rounded">
            <h3 className="text-xl underline">Posts</h3>
                <ul>
                    {posts.length!=0?(posts.map(el=>{
                            return <TimelineItem title={el.title} byline={el.byline} time={el.postedAt}/>
                    })):null}
                </ul>
            </section>
            <div className="bg-[#FCFCFC] text-[#282828] p-4 rounded">
            <i class="fa-solid fa-circle-user mr-1"></i>Logged in as {JSON.parse(localStorage.getItem("user")).username}
            </div>
            </div>
        </div>
      </>
    )
}
import { useEffect, useState } from "react";
import Nav from "../_components/Nav";
import TimelineItem from "../_components/TimelineItem";
import ListItem from "../_components/ListItem";

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
                console.log(posts);
                
              };
          
              fetchPosts();
          });
      }, []);

    return (
        <>
        <Nav />
        <div className="md:px-[20vw] p-5 ">
            <h3 className="text-2xl font-medium mb-4">Dashboard</h3>
            <div className="md:flex gap-x-2 gap-y-3">
            <section className="grow bg-[#FCFCFC] text-[#282828] p-4 rounded">
            <h3 className="text-xl underline">Posts</h3>
                <ul className="mt-3">
                    {posts.length!=0?(posts.map(el=>{
                            return <ListItem title={el.title} subtitle={el.byline} time={el.postedAt} link={"/post/" + el.postID}/>
                    })):null}
                </ul>
            </section>
            <section>
            <div className="bg-[#FCFCFC] text-[#282828] p-4 rounded">
            <i class="fa-solid fa-circle-user mr-1"></i>Logged in as {JSON.parse(localStorage.getItem("user")).username}
            </div>
            </section>
            </div>
        </div>
      </>
    )
}
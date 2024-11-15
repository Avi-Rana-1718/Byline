import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import TimelineItem from "./TimelineItem";

export default function TimelineList({data}) {
    if(data==null) {
        return <h5>Loading</h5>
    }

    let [posts, setPost] = useState([])
    
    useEffect(()=>{
        const fetchPosts = async () => {
            const promises = data.map(async (el) => {
              const response = await fetch("http://localhost:3030/post/get?id=" + el);
              const nData = await response.json();
              return nData.data;
            });
      
            const fetchedPosts = await Promise.all(promises);
            setPost(fetchedPosts);
          };
      
          fetchPosts();
    }, [])
    return (
    <ul className="m-4 flex flex-col">
        {
        posts.map((el, index)=>{
            console.log(posts);
            
            let isNewYear = index==0||Number(new Date(el.postedAt).getFullYear())!=Number(new Date(posts[index-1].postedAt).getFullYear());
            
            return (
                <>
                <h3 
                className={"p-1.5 my-2 " + (isNewYear)?"":"hidden"}>
                    {(isNewYear)?(new Date(el.postedAt).getFullYear()):null}
                </h3>
                <li>
                    <Link to={"/post/" + el.postID} className="flex">
                    <span className="ml-2 border-l-2  border-[#656565] p-2"></span>
                    <TimelineItem title={el.title} byline={el.byline} time={el.postedAt} />
                    </Link>
                </li>
                </>
            )
        })
        }
    </ul>
    )
}
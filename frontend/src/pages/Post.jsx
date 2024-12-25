import { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Nav from "../_components/Nav";
import ShareBtn from "../_components/ShareBtn";
import Footer from "../_components/Footer";
import { CommentItem } from "../_components/CommentItem";

export default function Post() {
  const [data, setData] = useState(null);
  const navigator = useNavigate();
  const params = useParams();

  const commentRef = useRef(null);

  function addComment() {
    let commentObj = {
      postID: params.id,
      comment: commentRef.current.value,
      authorID: JSON.parse(localStorage.getItem("user")).userID
    }

    fetch("http://localhost:3030/post/comment/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(commentObj)
    }).then(res=>res.json()).then(data=>{
      console.log(data);
      commentRef.current.value=null;
      return navigator(0)

      
    })
  }

  useEffect(() => {
    fetch("http://localhost:3030/post/get?id=" + params.id)
      .then((res) => res.json())
      .then((data) => {
        console.log(data.data);
        
        setData(data.data);
      });
  }, []);

  if (data == null) {
    return <h3>Loading</h3>;
  }

  return (
    <>
      <Nav />
      <div className="md:px-[20vw] p-4">
        <div>
          <div>
            <h3 className="text-3xl font-bold">{data.title}</h3>
            <span className="block mt-2 text-[#c2b8b8]">{data.byline}</span>
            <time className="text-xs text-[#888] mt-2 mb-1">
              {new Date(data.postedAt).getDate() +
                "th " +
                new Date(
                  2024,
                  new Date(data.postedAt).getMonth(),
                  1
                ).toLocaleString("default", { month: "long" }) +
                " " +
                new Date(data.postedAt).getFullYear()}
            </time>
          </div>
          <div className="flex flex-row justify-end">
            <div>
              <ShareBtn />
            </div>
          </div>
          <hr className="my-4 border-t-[#583d85] border-t-2" />
          <p
            className="mt-5"
            dangerouslySetInnerHTML={{ __html: data.content }}
          ></p>
        </div>
        <div className="border-[#583d85] mt-6 border-2 rounded p-3">
          <h3 className="underline text-xl mb-3" id="comments">Comments</h3>
          <ul className="flex flex-col gap-y-2">
          <li className="bg-[#583d85] px-4 py-2 md:w-[20vw] rounded-sm whitespace-nowrap">
            <input 
            required
            ref={commentRef}
            placeholder="Share your opinions"
            className="focus:outline-none bg-transparent w-[90%] md:max-w-[20vw] inline"
            />
            <i onClick={addComment} class="fa-solid fa-paper-plane"></i>
          </li>
          {data.comments.reverse().map(el=>{
            return <CommentItem authorID={el.authorID} comment={el.comment} />
          })}
          </ul>
        </div>
      </div>
    </>
  );
}

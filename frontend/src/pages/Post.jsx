import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Nav from "../_components/Nav";
import ShareBtn from "../_components/ShareBtn";
import Footer from "../_components/Footer";

export default function Post() {
  const [data, setData] = useState(null);
  const params = useParams();

  useEffect(() => {
    fetch("http://localhost:3030/post/get?id=" + params.id)
      .then((res) => res.json())
      .then((data) => {
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
            <span className="block m-2 mb-0 text-[#c2b8b8]">{data.byline}</span>
            <time className="text-xs text-[#888] m-2 mb-1">
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
          <hr className="my-4 border-t-[#888]" />
          <p
            className="mt-5"
            dangerouslySetInnerHTML={{ __html: data.content }}
          ></p>
        </div>
      </div>
    </>
  );
}

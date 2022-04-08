import "./posts.css";
import SinglePost from "../singlepost/SinglePost";
import { useState, useEffect } from "react";
// import Header from "../../component/header/Header";
// import { useState, useEffect } from "react";
import { fetchPosts } from "../../frontend-case-api";
export default function Posts() {
  const [data, setData] = useState(0);
  const [page, setPage] = useState(8);

  useEffect(() => {
    fetchPosts(page, setData);
  }, [page]);

  const increment = () => {
    setPage(page + 4);
    fetchPosts(page, setData);
  };

  return (
    <div className="posts">
      {data.data &&
        data.data.map((post) => {
          return (
            <SinglePost
              title={post.title}
              updated_at={post.updated_at}
              category={post.category.name}
              image={post.img_url}
            />
          );
        })}
      <button onClick={() => increment()} className="meer-laden">
        meer laden
      </button>
    </div>
  );
}

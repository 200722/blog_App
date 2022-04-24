import "./posts.css";
import SinglePost from "../singlepost/SinglePost";
import { useState, useEffect } from "react";
import { fetchPosts } from "../../frontend-case-api";
import ReactPaginate from "react-paginate";
export default function Posts() {
  const [data, setData] = useState(0);
  const [page, setPage] = useState(4);

  useEffect(() => {
    fetchPosts(page, setData);
  }, [page]);

  //   const increment = () => {
  //     setPage(page + 4);
  //     fetchPosts(page, setData);
  //   };
  const handlePageClick = async (data) => {
    console.log(data.selected);
    setPage(page + 4);
    fetchPosts(page, setData);
  };

  return (
    <div className="posts">
      {data.data &&
        data.data.map((post) => {
          console.log(post.img_url);
          return (
            <SinglePost
              title={post.title}
              updated_at={post.updated_at}
              category={post.category.name}
              image={post.img_url}
            />
          );
        })}

      <ReactPaginate
        className="pagination"
        previousLabel={"previous"}
        nextLabel={"next"}
        breakLabel={"..."}
        pageCount={6}
        marginPagesDisplayed={2}
        pageRangeDisplayed={3}
        onPageChange={handlePageClick}
        containerClassName={"pagination justify-content-center"}
        pageClassName={"page-item"}
        pageLinkClassName={"page-link"}
        previousClassName={"page-item"}
        previousLinkClassName={"page-link"}
        nextClassName={"page-item"}
        nextLinkClassName={"page-link"}
        breakClassName={"page-item"}
        breakLinkClassName={"page-link"}
        activeClassName={"active"}
      />
    </div>
  );
}

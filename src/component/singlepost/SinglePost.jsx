import "./SinglePost.css";

export default function SinglePost(props) {
  console.log(props);
  return (
    <>
      <div className="post">
        <img
          className="postImg"
          // src={props.img_url}
          src="./images/Socialbrothers banner1.jpg"
          alt=""
        />

        {/* postinfo */}
        <div className="postInfo">
          <div className="postCats ">
            <span className="postCat">{props.category}</span>
          </div>
          <span className="postTitle">{props.title}</span>
          <hr />
          <span className="postDate">{props.updated_at.substring(0, 10)}</span>
        </div>
      </div>
    </>
  );
}

import Header from "../../component/header/Header";
// import Posts from "../../component/posts/posts";
import Posts2 from "../../component/posts/posts2";
import "./posts.css";

export default function Home() {
  return (
    <>
      <Header />
      <div className="home">
        {/* <Posts /> */}
        <Posts2 />
      </div>
    </>
  );
}

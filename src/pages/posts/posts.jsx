import Header from "../../component/header/Header";
import Posts from "../../component/posts/posts";
// import Sidebar from "../../component/sidebar/Sidebar";
import "./posts.css";
// import TopBar from "../../component/topbar/TopBar";

export default function Home() {
  return (
    <>
      <Header />
      <div className="home">
        <Posts />
      </div>
    </>
  );
}

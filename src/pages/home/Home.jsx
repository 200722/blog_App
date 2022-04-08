import Header from "../../component/header/Header";
import Posts from "../../component/posts/posts";
import Sidebar from "../../component/sidebar/Sidebar";
import "./home.css";
// import TopBar from "../../component/topbar/TopBar";

export default function Home() {
  return (
    <>
      {/* <TopBar /> */}
      <Header />
      <div className="home">
        <Sidebar className="test" />
        <Posts />
      </div>
    </>
  );
}

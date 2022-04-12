import { Link } from "react-router-dom";

import "./topbar.css";

export default function TopBar() {
  return (
    <div className="top">
      <div className="topLeft">
        <img className="topImg" src="./images/SBlogo.svg" alt="" />
      </div>

      <div className="topRight">
        <ul className="topList">
          <li className="toplistItem">
            <Link className="link" to="/">
              HOME
            </Link>
          </li>
          <li className="toplistItem">
            <Link className="link" to="/posts">
              POSTS
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

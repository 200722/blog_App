import "./header.css";
// import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

export default function Header() {
  const navLinkStyles = ({ isActive }) => {
    return {
      fontWeight: isActive ? "bold" : "normal",
      textDecoration: isActive ? "underline red" : "none",
    };
  };
  return (
    <header className="text-center">
      <div className="upper-section">
        <div className="logo">
          <img className="headerImg" src="./images/SBlogo.svg" alt="" />
        </div>
        <div id="title"></div>
        <nav className="main">
          <ul className="mainItem">
            <li className="toplistItem">
              <NavLink className="link" style={navLinkStyles} to="/">
                HOME
              </NavLink>
            </li>

            {/* twee */}
            <li className="toplistItem">
              <NavLink className="link" style={navLinkStyles} to="/posts">
                POSTS
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

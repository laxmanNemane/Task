import React, { useState } from "react";
import Button from "../Component/Button";
import "./Header.css";

const Header = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <a exact to="/" className="nav-logo">
            <img
              src="https://static.canva.com/web/images/12487a1e0770d29351bd4ce4f87ec8fe.svg"
              alt="canva logo"
            />
          </a>

          <div className="searchbar">
            icon
            <input type="text" placeholder="Search..." />
          </div>
          <div className="button-group">
            <Button text="Log in" buttonStyle="btn" buttonType="button" />
            <Button text="Sign up" buttonStyle="btn" buttonType="button" />
          </div>

          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;

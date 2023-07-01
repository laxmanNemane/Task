import React, { useState } from "react";
import Button from "../Component/Button";
import "./Header.css";
import { HiOutlineSearch } from "react-icons/hi";
import { BiChevronDown } from "react-icons/bi";
const Header = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <>
      <div className="Header-section">
        <div className="header-content">
          <div className="logo">
            <img
              src="https://static.canva.com/web/images/12487a1e0770d29351bd4ce4f87ec8fe.svg"
              alt=""
              className="logo"
              title="canva logo"
              width={130}
            />
          </div>
          <div className="menu-list pt-1">
            <ul className="d-flex list-unstyled">
              <li className="mx-2">
                <div>
                  Design spotlight{" "}
                  <span>
                    {" "}
                    <BiChevronDown />
                  </span>
                </div>
              </li>
              <li className="mx-2">
                <div>
                  Bussiness
                  <span>
                    {" "}
                    <BiChevronDown />
                  </span>
                </div>
              </li>
              <li className="mx-2">
                <div>
                  Education
                  <span>
                    {" "}
                    <BiChevronDown />
                  </span>
                </div>
              </li>
              <li className="mx-2">
                <div>
                  Plans and pricing
                  <span>
                    {" "}
                    <BiChevronDown />
                  </span>
                </div>
              </li>
              <li className="mx-2">
                <div>
                  Learn
                  <span>
                    {" "}
                    <BiChevronDown />
                  </span>
                </div>
              </li>
            </ul>
          </div>

          <div className="navlist">{/* this is responsive */}</div>
          <div className="d-flex ">
            <div className="searchbar-section me-3">
              <div className="icon-view">
                <HiOutlineSearch />
              </div>
              <input type="text" placeholder="Try logo, poster, anything!" />
            </div>

            <div className="but-group">
              <button
                className="header-btn me-2"
                style={{ padding: "8px 20px !important" }}
              >
                Log In
              </button>
              <button className="header-btn  canva-primmary-btn">
                Sign up
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;

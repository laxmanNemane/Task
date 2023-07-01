import React, { useState } from "react";
import Button from "../Component/Button";
import "./Header.css";
import { HiOutlineSearch } from "react-icons/hi";
import { BiChevronDown } from "react-icons/bi";
import DropDownMenu from "./DropDownMenu";
const Header = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <>
      <div className="Header-section" style={{ overflow: "scroll" }}>
        <div
          className="header-content"
          style={{ justifyContent: "flex-start" }}
        >
          <div className="logo " style={{ marginRight: "20px" }}>
            <img
              src="https://static.canva.com/web/images/12487a1e0770d29351bd4ce4f87ec8fe.svg"
              alt=""
              className="logo"
              title="canva logo"
              width={130}
            />
          </div>
          <div className=" pt-1 mr-2">
            <ul className="d-flex list-unstyled m-0">
              <DropDownMenu menuName="Design Spotlight" />
              <DropDownMenu menuName="Bussiness" />
              <DropDownMenu menuName="Education" />
              <DropDownMenu menuName=" Plans and pricing" />
              <DropDownMenu menuName="Learn" />
            </ul>
          </div>
          <div
            style={{ width: "100%" }}
            className="ms-2 d-flex justify-content-between"
          >
            <div className=" d-flex border" style={{ flex: 1 }}>
              <div className="p-2">
                <HiOutlineSearch />
              </div>
              <input
                type="text"
                style={{ width: "100%", border: "none", outline: "none" }}
                className="border-none"
                placeholder="Try logo, poster, anything!"
              />
            </div>
            <div
              className="but-group d-flex justify-content-between"
              style={{ marginLeft: "5px" }}
            >
              <button
                className="header-btn me-2"
                style={{ padding: "8px 20px !important", whiteSpace: "nowrap" }}
              >
                Log In
              </button>
              <button
                style={{ whiteSpace: "nowrap" }}
                className="header-btn  canva-primmary-btn"
              >
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

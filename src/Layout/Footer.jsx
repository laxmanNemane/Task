import React from "react";
import { useState } from "react";
import "./Footer.css";
import { BiChevronDown } from "react-icons/bi";

const Footer = () => {
  const [toggle, setToggle] = useState(false);
  const [collapse, setCollapse] = useState();
  const Fetures = [
    { id: 1, name: "Curverd Text genrator" },
    { id: 2, name: "Phote Effects" },
    { id: 3, name: "Image Inhancer" },
    { id: 4, name: "Add Frame photes" },
    { id: 5, name: "Add text to Photos" },
    { id: 6, name: "Online video recorder" },
    { id: 7, name: "Video trimmer" },
    { id: 8, name: "Convert videos to MP4" },
    { id: 9, name: "See more features" },
  ];

  const Explore = [
    { id: 1, name: "  Design ideas" },
    { id: 2, name: "Custom prints" },
    { id: 3, name: "Font pairing" },
    { id: 4, name: "Colors" },
    { id: 5, name: "Color wheel" },
    { id: 6, name: "Color palette generator" },
    { id: 7, name: "Blog" },
    { id: 8, name: "Apps" },
    { id: 9, name: "Template directory" },
  ];

  const Community = [
    { id: 1, name: "    Online communities" },
    { id: 2, name: "Creators" },
    { id: 4, name: "Canva Represents Fund" },
    { id: 5, name: "Developers" },
    { id: 6, name: "Partnerships" },
    { id: 7, name: "Affiliates program" },
  ];

  const Download = [
    { id: 1, name: "ios" },
    { id: 2, name: "Andriod" },
    { id: 4, name: "Windows" },
    { id: 5, name: "Mac" },
  ];

  const Company = [
    { id: 1, name: "  About" },
    { id: 2, name: "Newsroom" },
    { id: 3, name: "Careers" },
    { id: 5, name: "Sustainability" },
    { id: 6, name: "Trust Center" },
    { id: 7, name: "Security" },
    { id: 8, name: "Terms and Privacy" },
    { id: 9, name: "Contact Sales" },
  ];

  const onToogleHandler = (data) => {
    setCollapse(data);
    setToggle((prev) => !prev);
  };
  return (
    <div
      className="footer-section  py-4"
      style={{ borderTop: "1px solid rgba(43,59,74,.3)" }}
    >
      <div className="container">
        <div className="row">
          <div className="col-12 d-none d-lg-block">
            <div className="footer-content  no-toggle">
              <div className="list-element">
                <h3>Features</h3>
                <ul className="list-unstyled ">
                  {Fetures?.map((listName, index) => {
                    return <li key={index}> {listName.name}</li>;
                  })}
                </ul>
              </div>
              <div className="list-element">
                <h3>Explore</h3>
                <ul className="list-unstyled ">
                  {Explore?.map((listName, index) => {
                    return <li key={index}> {listName.name}</li>;
                  })}
                </ul>
              </div>
              <div className="list-element">
                <h3>Community</h3>
                <ul className="list-unstyled ">
                  {Community?.map((listName, index) => {
                    return <li key={index}> {listName.name}</li>;
                  })}
                </ul>
              </div>
              <div className="list-element">
                <h3>Download</h3>
                <ul className="list-unstyled ">
                  {Download?.map((listName, index) => {
                    return <li key={index}> {listName.name}</li>;
                  })}
                </ul>
              </div>
              <div className="list-element">
                <h3>Company</h3>
                <ul className="list-unstyled ">
                  {Company?.map((listName, index) => {
                    return <li key={index}> {listName.name}</li>;
                  })}
                </ul>
              </div>
            </div>
          </div>
          <div className=" toggle">
            <div>
              <div className=" toggle-footer-content d-flex justify-content-between align-items-center">
                <h3>Fetures</h3>
                <div onClick={() => onToogleHandler("Fetures")}>
                  <BiChevronDown />
                </div>
              </div>
              <div className="list-element">
                {collapse === "Fetures" && toggle ? (
                  <ul className="list-unstyled ">
                    {Fetures?.map((listName, index) => {
                      return <li key={index}> {listName.name}</li>;
                    })}
                  </ul>
                ) : (
                  ""
                )}
              </div>
            </div>
            <div>
              <div className="toggle-footer-content d-flex justify-content-between align-items-center">
                <h3>Explore</h3>
                <div onClick={() => onToogleHandler("Explore")}>
                  {" "}
                  <BiChevronDown />
                </div>
              </div>
              <div className="list-element">
                {collapse === "Explore" && toggle ? (
                  <ul className="list-unstyled ">
                    {Explore?.map((listName, index) => {
                      return <li key={index}> {listName.name}</li>;
                    })}
                  </ul>
                ) : (
                  ""
                )}
              </div>
            </div>
            <div>
              <div className="toggle-footer-content d-flex justify-content-between align-items-center">
                <h3>Community</h3>
                <div onClick={() => onToogleHandler("Community")}>
                  {" "}
                  <BiChevronDown />
                </div>
              </div>
              <div className="list-element">
                {collapse === "Community" && toggle ? (
                  <ul className="list-unstyled ">
                    {Community?.map((listName, index) => {
                      return <li key={index}> {listName.name}</li>;
                    })}
                  </ul>
                ) : (
                  ""
                )}
              </div>
            </div>
            <div>
              <div className="toggle-footer-content d-flex justify-content-between align-items-center">
                <h3>Download</h3>
                <div onClick={() => onToogleHandler("Download")}>
                  {" "}
                  <BiChevronDown />
                </div>
              </div>
              <div className="list-element">
                {collapse === "Download" && toggle ? (
                  <ul className="list-unstyled ">
                    {Download?.map((listName, index) => {
                      return <li key={index}> {listName.name}</li>;
                    })}
                  </ul>
                ) : (
                  ""
                )}
              </div>
            </div>
            <div>
              <div className=" toggle-footer-content d-flex justify-content-between align-items-center">
                <h3>Company</h3>
                <div onClick={() => onToogleHandler("Company")}>
                  {" "}
                  <BiChevronDown />
                </div>
              </div>
              <div className="list-element">
                {collapse === "Company" && toggle ? (
                  <ul className="list-unstyled ">
                    {Company?.map((listName, index) => {
                      return <li key={index}> {listName.name}</li>;
                    })}
                  </ul>
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

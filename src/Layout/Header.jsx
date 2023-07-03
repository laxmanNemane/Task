import React, { useEffect, useState } from "react";
import "./Header.css";
import Offcanvas from "react-bootstrap/Offcanvas";
import { HiMenu, HiOutlineSearch } from "react-icons/hi";
import DropDownMenu from "./DropDownMenu";
const Header = () => {
  const [headerState, setHeaderState] = useState({
    menuItems: [
      { id: 1, name: "Design Spotlight" },
      { id: 2, name: "Business" },
      { id: 3, name: "Education" },
      { id: 4, name: "Plans and pricing" },
      { id: 5, name: "Learn" },
    ],
    visibleItems: [],
    show: false,
    showDropdown: false,
  });

  useEffect(() => {
    const handleResize = () => {
      const windowWidth = window.innerWidth;
      let visibleCount;

      if (windowWidth < 756) {
        visibleCount = 0;
      } else if (windowWidth < 876) {
        visibleCount = 2;
      } else if (windowWidth < 920) {
        visibleCount = 3;
      } else if (windowWidth < 1022) {
        visibleCount = 4;
      } else {
        visibleCount = 3;
      }

      setHeaderState({
        ...headerState,
        visibleItems: headerState?.menuItems.slice(0, visibleCount),
        showDropdown: true,
      });
    };

    // Event listener for window resize
    window.addEventListener("resize", handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [window.innerWidth]);

  const handleClose = () => setHeaderState({ ...headerState, show: false });

  const onOpenhandler = () => setHeaderState({ ...headerState, show: true });

  return (
    <>
      <div className="Header-section">
        <div
          className="header-content"
          style={{ justifyContent: "flex-start" }}
        >
          <div className="hamburger">
            <span onClick={onOpenhandler} className="me-2">
              <HiMenu />
            </span>
          </div>

          <div className="logo " style={{ marginRight: "20px" }}>
            <img
              src="https://static.canva.com/web/images/12487a1e0770d29351bd4ce4f87ec8fe.svg"
              alt=""
              className="logo"
              title="canva logo"
              width={130}
            />
          </div>
          <div className=" pt-1 mr-2 div-to-disabl">
            <ul className="d-flex list-unstyled m-0">
              {headerState?.visibleItems?.length !== 0
                ? headerState?.visibleItems.map((item) => (
                    <li key={item.id}>
                      <DropDownMenu menuName={item.name} />
                    </li>
                  ))
                : headerState?.menuItems?.map((item) => (
                    <li key={item.id} className="small-disable">
                      <DropDownMenu menuName={item.name} />
                    </li>
                  ))}
              {headerState?.showDropdown && (
                <li className="dropdown-menu">
                  <button
                    className="dropdown-toggle"
                    type="button"
                    id="dropdownMenuButton"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <span>...</span>
                  </button>
                  <div
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenuButton"
                  >
                    {headerState?.menuItems.slice(-1).map((item) => (
                      <DropDownMenu key={item.id} menuName={item.name} />
                    ))}
                  </div>
                </li>
              )}
            </ul>
          </div>
          <div
            style={{ width: "100%" }}
            className="ms-2 d-flex justify-content-between div-to-disable"
          >
            <div className=" d-flex searchbar-section " style={{ flex: 1 }}>
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
              className="but-group d-flex justify-content-between div-to-disable"
              style={{ marginLeft: "5px" }}
            >
              <button
                className="header-btn me-2 small-disable"
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

          {/* offcanvass body */}
          <Offcanvas
            show={headerState?.show}
            onHide={handleClose}
            style={{ width: "250px" }}
          >
            <Offcanvas.Header closeButton></Offcanvas.Header>
            <Offcanvas.Body>
              <ul className="menu-list list-unstyled d-flex flex-column">
                {headerState?.visibleItems?.length === 0 &&
                  headerState?.menuItems.map((item) => (
                    <DropDownMenu
                      key={item.id}
                      className="my-1 pb-3 navbar-menu"
                      menuName={item.name}
                    />
                  ))}
              </ul>
            </Offcanvas.Body>
          </Offcanvas>
        </div>
      </div>
    </>
  );
};

export default Header;

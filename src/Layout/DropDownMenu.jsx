import React from "react";
import { BiChevronDown } from "react-icons/bi";

const DropDownMenu = ({ menuName }) => {
  return (
    <div>
      <li
        className="mx-2 d-flex justify-content-between align-items-center"
        style={{ whiteSpace: "nowrap" }}
      >
        <div>
          {menuName}
          <span className="p-1">
            <BiChevronDown />
          </span>
        </div>
      </li>
    </div>
  );
};

export default DropDownMenu;

//import { Dropdown } from "bootstrap";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import { FaThLarge } from "react-icons/fa";
import { FaTh } from "react-icons/fa";

import React from "react";

const CustomTitle = () => {
  return (
    <div className="container-fluid px-4">
      <div className="d-flex justify-content-between">
        <div className="d-flex">
          <h2 className="mx-2">TV Shows</h2>

          <DropdownButton
            className="dropdown ml-4 mt-1 mx-3 rounded-0"
            variant="secondary"
            title="Genres"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
            style={{ backgroundColor: "#221f1f" }}
          >
            <Dropdown.Item active className="dropdown text-white bg-dark">
              Comedy
            </Dropdown.Item>
            <Dropdown.Item className="dropdown text-white bg-dark">
              Drama
            </Dropdown.Item>
            <Dropdown.Item className="dropdown text-white bg-dark">
              Thriller
            </Dropdown.Item>
          </DropdownButton>
        </div>

        <div>
          <div className="d-flex">
            <FaThLarge className="icons mx-3" />
            <FaTh className="icons mx-3" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomTitle;

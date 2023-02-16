import { Navbar, Nav } from "react-bootstrap";
import React from "react";
import logo from "../assets/logo.png";
import { FaSearch } from "react-icons/fa";
import { FaBell } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const CustomNavBar = () => {
  return (
    <Navbar expand="lg" variant="dark" className="px-4 py-3">
      <Navbar.Brand>
        <img src={logo} alt="Logo" className="logo" />
      </Navbar.Brand>

      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Link to="/" className="nav-link fw-bold">
            Home <span className="visually-hidden">(current)</span>
          </Link>
          <Link to="/tv-shows" className="nav-link">
            TV Shows
          </Link>
          <Nav.Link href="#">Movies</Nav.Link>
          <Nav.Link href="#">Recently Added</Nav.Link>
          <Nav.Link href="#">My List</Nav.Link>
        </Nav>
      </Navbar.Collapse>
      <div className="d-flex">
        <FaSearch className="icons mx-3" /> <div id="kids">KIDS</div>
        <FaBell className="icons mx-3" />
        <FaUserAlt className="icons mx-3" />
      </div>
    </Navbar>
  );
};

export default CustomNavBar;

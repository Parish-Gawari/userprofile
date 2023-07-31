/* eslint-disable no-unused-vars */
import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import route from "./../../routes/routes.json";
import { NavLink } from "react-router-dom";
import { Nav } from "react-bootstrap";
import styles from "./AppHeader.module.css";

const AppHeader = () => {
  const activeClass = ({ isActive }) =>
    isActive ? styles.activeLink : styles.linkStyle;
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">
            <NavLink className={activeClass} to={route.HOME}>
              User Profiles
            </NavLink>
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link>
              <NavLink className={activeClass} to={route.PROFILES}>
                Profiles
              </NavLink>
            </Nav.Link>
            <Nav.Link>
              <NavLink className={activeClass} to={route.ADD_USER}>
                Add User
              </NavLink>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default AppHeader;

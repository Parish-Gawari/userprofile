/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import route from "./../../routes/routes.json";
import { NavLink } from "react-router-dom";
import { Button, Nav } from "react-bootstrap";
import styles from "./AppHeader.module.css";
import { BsFillSunFill, BsFillMoonStarsFill } from "react-icons/bs";
import { ThemeContext } from "../../contexts/ThemeContext";

const AppHeader = () => {
  const activeClass = ({ isActive }) =>
    isActive ? styles.activeLink : styles.linkStyle;

  const { isDark, toggleTheme } = useContext(ThemeContext);

  const themeClasses = isDark ? <BsFillSunFill /> : <BsFillMoonStarsFill />;
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
          <Nav>
            <Button className="bg-dark border-0" onClick={toggleTheme}>
              {themeClasses}
            </Button>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default AppHeader;

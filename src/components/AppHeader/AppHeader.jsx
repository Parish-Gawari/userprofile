/* eslint-disable no-unused-vars */
import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

const AppHeader = () => {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">UserProfiles</Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
};

export default AppHeader;

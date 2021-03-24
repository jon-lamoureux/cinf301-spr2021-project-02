import React from 'react';
import {Navbar, Nav} from 'react-bootstrap';

const header = () => {
  return (
    <Navbar bg="light" expand="lg">
    <Navbar.Brand href="#home">Home</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link>Service</Nav.Link>
        <Nav.Link>About</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
  )
}

export default header;

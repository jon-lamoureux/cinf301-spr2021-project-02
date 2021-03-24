import React from 'react'
import {Navbar, Nav} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faUser, faWrench} from '@fortawesome/free-solid-svg-icons'

const header = () => {
    return (
        <nav><Navbar bg="light" expand="lg">
            <LinkContainer to="/">
  <Navbar.Brand><FontAwesomeIcon icon={faHome} /> Home</Navbar.Brand>
  </LinkContainer>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
        <LinkContainer to="/profile">
      <Nav.Link><FontAwesomeIcon icon={faUser} /> Profile</Nav.Link>
      </LinkContainer>
      <LinkContainer to="/settings">
      <Nav.Link><FontAwesomeIcon icon={faWrench} /> Settings</Nav.Link>
      </LinkContainer>
    </Nav>
  </Navbar.Collapse>
</Navbar>
</nav>
    )
}

export default header

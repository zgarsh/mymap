import React from 'react';
import {Nav, Navbar, NavDropdown, Button} from 'react-bootstrap';


class Menu extends React.Component{
  render(){
    return(
      <Navbar bg="dark" expand="lg" variant="dark" sticky="top">
        <Navbar.Brand href="#home">zachsmap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          {/*
            <Form inline>
              <FormControl type="text" placeholder="Search" className="mr-sm-2" />
              <Button variant="outline-success">Search</Button>
            </Form>
          */}
          <Button variant="outline-primary">Search</Button>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Menu;

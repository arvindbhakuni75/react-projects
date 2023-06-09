
import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

import { useSelector } from 'react-redux';

function Navigationbar() {

    const cartProduct = useSelector(state => state.cart)

  return (
    <>
      <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Redux-ToolKit</Navbar.Brand>
        
        <Nav className="me-auto">
            <Nav.Link to="/" as = {Link} >Products</Nav.Link>
          </Nav>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className='justify-content-end'>
            <Navbar.Text>
                <Nav.Link to="/cart" as = {Link} >MyCart {cartProduct.length}</Nav.Link>
            </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}

export default Navigationbar;

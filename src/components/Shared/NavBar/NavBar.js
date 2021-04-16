import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
import logo from './marketingLogo.png';

const NavBar = () => {

    const linkStyle={
        textDecoration: 'none',
        color: '#3aafd0',
        fontSize: '16px',
        margin: '0px 20px',
        fontWeight: '700'
    }
  return (
    <>
      <Navbar style={{margin:'0px 5%'}} bg="none" expand="lg">
        <Navbar.Brand href="#home">
            <img style={{
                width: '50px',
            }} src={logo} alt="logo"></img><span style={{fontWeight: '700'}}>eMarketing</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Link style={linkStyle} to="/home">Home</Link>
            <Link style={linkStyle} to="/about-us">About Us</Link>
            <Link style={linkStyle} to="/contact">Contact</Link>
            <Link style={linkStyle} to="/admin">Admin</Link>
          </Nav>
          <Nav>
            <Link style={{
                color: '#063970',
                fontSize: '18px',
                fontWeight: '700',
                textDecoration: 'none'
            }}>UserName</Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default NavBar;

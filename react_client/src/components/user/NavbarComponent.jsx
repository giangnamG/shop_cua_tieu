import React, { useRef, useEffect, useState } from 'react';
import { Container, InputGroup, FormControl, Nav, Navbar, Button, } from 'react-bootstrap';
import config from '../../config';
import OrderLayoutComponent from './OrderLayoutComponent';
export default function NavbarComponent({ navbarRef }) {


  const navbar = {
    backgroundColor: config.styles.backgroundColor,
    fontFamily: config.styles.fontFamily,
  }

  return (
    <div>
      <Navbar ref={navbarRef} expand="lg" className="navbar-light fixed-top shadow " style={navbar}>
        <Container>
          <Navbar.Brand href="/">Shop Của Tiêu</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto" style={{ paddingLeft: 150 }}>
              <Nav.Link href="/">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-house-check-fill" viewBox="0 0 16 16">
                  <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L8 2.207l6.646 6.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293z" />
                  <path d="m8 3.293 4.712 4.712A4.5 4.5 0 0 0 8.758 15H3.5A1.5 1.5 0 0 1 2 13.5V9.293z" />
                  <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7m1.679-4.493-1.335 2.226a.75.75 0 0 1-1.174.144l-.774-.773a.5.5 0 0 1 .708-.707l.547.547 1.17-1.951a.5.5 0 1 1 .858.514" />
                </svg>
                &nbsp;Trang Chủ
              </Nav.Link>
              <Nav.Link href="/profile">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person-fill-check" viewBox="0 0 16 16">
                  <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7m1.679-4.493-1.335 2.226a.75.75 0 0 1-1.174.144l-.774-.773a.5.5 0 0 1 .708-.708l.547.548 1.17-1.951a.5.5 0 1 1 .858.514M11 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                  <path d="M2 13c0 1 1 1 1 1h5.256A4.5 4.5 0 0 1 8 12.5a4.5 4.5 0 0 1 1.544-3.393Q8.844 9.002 8 9c-5 0-6 3-6 4" />
                </svg>
                &nbsp;Thông Tin Cá Nhân
              </Nav.Link>
              <OrderLayoutComponent />

            </Nav>
          </Navbar.Collapse>
        </Container>

      </Navbar>
    </div>

  )
}

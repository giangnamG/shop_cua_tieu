import { Container, Row, Col, Dropdown, DropdownButton } from "react-bootstrap";
import NavbarComponent from "../components/user/NavbarComponent";
import { useRef, useState, useEffect } from "react";
import { getNavbarHeight } from "../components/user/Components";

export default function ProfilePage() {
  const { navbarRef, navbarHeight } = getNavbarHeight();


  return (
    <>
      <NavbarComponent navbarRef={navbarRef} />
      <div style={{ marginTop: navbarHeight + 100 }}>
        <Container>
          <Row>
            <Col xs={3} lg={4}>
              <Row>
                <DropdownButton id="dropdown-basic-button" title="Tài Khoản Của Tôi">
                  <Dropdown.Item href="#/action-1">Hồ Sơ</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Địa Chỉ</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Đổi Mật Khẩu</Dropdown.Item>
                </DropdownButton>
              </Row>
            </Col>
            <Col>
              <Row>
                <Col>2</Col>
                <Col>2</Col>
                <Col>2</Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

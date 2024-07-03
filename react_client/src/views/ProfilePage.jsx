import { Container, Row, Col, Dropdown, DropdownButton, Image } from "react-bootstrap";
import NavbarComponent from "../components/user/NavbarComponent";
import { useRef, useState, useEffect } from "react";
import { getNavbarHeight } from "../components/user/Components";

const MyAccountComponent = () => {
  const options = [
    'Hồ Sơ',
    'Địa Chỉ',
    'Đổi Mật Khẩu',
    'Đơn Hàng'
  ]
  return (
    <Row>
      <Image src="src/assets/icons/person.png" style={{ width: 50 }} />Tài Khoản Của Tôi
      {options.map((option, index) => (
        <Row Row key={index} > <Image src="src/assets/icons/person.png" style={{ width: 50 }} />{option}</Row>
      ))}
    </Row >
  )
}
export default function ProfilePage() {
  const { navbarRef, navbarHeight } = getNavbarHeight();


  return (
    <>
      <NavbarComponent navbarRef={navbarRef} />
      <div style={{ marginTop: navbarHeight + 100 }}>
        <Container>
          <Row>
            <Col xs={3} lg={4}>
              <MyAccountComponent />
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

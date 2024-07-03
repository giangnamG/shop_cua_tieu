import { Container, Row, Col, Dropdown, DropdownButton, Button, Image, Form, InputGroup } from "react-bootstrap";
import NavbarComponent from "../components/user/NavbarComponent";
import { useRef, useState, useEffect } from "react";
import { getNavbarHeight } from "../components/user/Components";
import config from "../config";

const stylesCenter = {
  display: 'flex',
  justifyItems: 'center',
  justifyContent: 'center',
  alignContent: 'center',
  alignItems: 'center',
}
const OptionsComponent = () => {
  return (
    <Row style={{
      paddingTop: 20
    }}>
      <Col>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-check-fill" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M15.854 5.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L12.5 7.793l2.646-2.647a.5.5 0 0 1 .708 0" />
          <path d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
        </svg>
        &nbsp; Tài Khoản Của Tôi
      </Col>
      <Col>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bag-check-fill" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M10.5 3.5a2.5 2.5 0 0 0-5 0V4h5zm1 0V4H15v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4h3.5v-.5a3.5 3.5 0 1 1 7 0m-.646 5.354a.5.5 0 0 0-.708-.708L7.5 10.793 6.354 9.646a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0z" />
        </svg>
        &nbsp; Đơn Hàng Của Tôi
      </Col>
    </Row>
  )
}
const FormCommonComponent = () => {
  return (
    <>
      <Col style={{
        paddingTop: 20
      }}>
        <div><h3>Hồ sơ của tôi</h3></div>
        <hr></hr>
        <InputGroup className="mb-3">
          <Form.Control
            placeholder="Tên đăng nhập"
            aria-label="Username"
            aria-describedby="basic-addon1"
            disabled
          />
        </InputGroup>
        <InputGroup className="mb-3">
          <Form.Control
            placeholder="Địa chỉ Email"
            aria-label="Địa chỉ Email"
            aria-describedby="basic-addon2"
          />
        </InputGroup>
        <InputGroup className="mb-3">
          <Form.Control
            placeholder="Địa Chỉ"
            aria-label="Địa Chỉ"
            aria-describedby="basic-addon1"
          />
        </InputGroup>
        <Button variant="outline-primary">Lưu</Button>
        <hr></hr>
        <div><h3>Đổi mật khẩu</h3></div>
        <InputGroup className="mb-3">
          <Form.Control
            placeholder="Mật khẩu cũ"
            aria-label="Mật khẩu cũ"
            aria-describedby="basic-addon1"
          />
        </InputGroup>
        <InputGroup className="mb-3">
          <Form.Control
            placeholder="Mật khẩu mởi"
            aria-label="Mật khẩu mởi"
            aria-describedby="basic-addon1"
          />
        </InputGroup>
        <Button variant="outline-primary">Lưu</Button>
      </Col>
      <Col style={stylesCenter}>
        <Container className="main-container">
          <Row className="justify-content-center mt-3">
            <Col xs={12} md={6} className="text-center">
              <div className="mt-3">
                <Image src="/assets/avatar/avatar.jpg" roundedCircle style={{ objectFit: 'cover', width: 100, height: 100 }} fluid />
              </div>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col xs={12} md={6} className="text-center">
              <Form>
                <Form.Group controlId="formFile" className="mb-3">
                  <Form.Label><h6><u>Chọn Ảnh</u></h6></Form.Label>
                  <Form.Control
                    type="file"
                    style={{ display: 'none' }}
                  />
                </Form.Group>
                <Button variant="primary" type="button" onClick={() => alert('File uploaded!')} size="md">
                  Tải lên
                </Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </Col>
    </>
  );
}
export default function ProfilePage() {
  const { navbarRef, navbarHeight } = getNavbarHeight();


  return (
    <div style={{
      fontFamily: config.styles.fontFamily,
    }}>
      <NavbarComponent navbarRef={navbarRef} />
      <div style={{ marginTop: navbarHeight + 50, height: '100vh' }}>
        <Container>
          <Row>
            <Col xs={12} sm={12} md={12} lg={12} xl={12}>
              <Row style={stylesCenter}>
                <Col xs={3} sm={3} md={3} lg={2} xl={2}>
                  <div className="mt-3" style={stylesCenter}>
                    <Image src="/assets/avatar/avatar.jpg" style={{ objectFit: 'cover', width: 45, height: 45 }} fluid roundedCircle ></Image>
                  </div>
                </Col>
                <Col xs={3} sm={3} md={3} lg={2} xl={2} style={{ paddingTop: 12 }}>
                  <Row><b>Username</b></Row>
                  <Row><a>Sửa hồ sơ</a></Row>
                </Col>
              </Row>
              <Row>
                <OptionsComponent />
              </Row>
            </Col>
            <Col style={{
              backgroundColor: 'white',
              height: '100%',
              width: '100%',
              marginTop: 12,
              paddingBottom: 15,
            }} xs={12} sm={12} md={12} lg={12} xl={12}>
              <Row className="justify-content-center">
                <FormCommonComponent />
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

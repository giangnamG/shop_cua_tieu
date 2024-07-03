import React from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col, Dropdown, DropdownButton, Image } from "react-bootstrap";
import NavbarComponent from "../components/user/NavbarComponent"
import { getNavbarHeight } from "../components/user/Components";
import config from "../config";
import { ProductGetOne } from '../components/user/ApiProduct';
import OutStandingProduct from '../components/user/OutStandingProduct';

const styleMain = {
  backgroundColor: config.styles.backgroundColor,
  padding: 20,
  borderRadius: '5px',
  boxShadow: '0 0 10px ' + config.styles.mainColor,
  fontFamily: config.styles.fontFamily,
  position: 'relative'
}
export default function ShowProductPage() {
  const { navbarRef, navbarHeight } = getNavbarHeight()
  const { id } = useParams()
  const product = ProductGetOne(id)
  return (
    <>
      <NavbarComponent navbarRef={navbarRef} />
      <div style={{ marginTop: navbarHeight + 10 }}>
        <Row>
          <Col className="d-flex justify-content-center" xs={12} sm={12} md={12} lg={12} xl={12} style={{}}>
            <Row>
              <div style={{
                display: 'flex',
                justifyItems: 'center',
                justifyContent: 'center',
                alignContent: 'center',
                alignItems: 'center',
              }}>
                <Col xs={12} sm={12} md={12} lg={12} xl={9} style={{ padding: 12 }}>
                  <Row >
                    <Col className='d-flex justify-content-center' style={{
                      paddingBottom: 25,
                    }} xs={12} sm={12} md={12} lg={4} xl={4}>
                      <Image src="/assets/images/food/food1.jpg" alt={product.name} style={{ objectFit: 'cover', width: '350px', height: '415px' }} fluid />
                    </Col>
                    <Col className='d-flex justify-content-center' style={{
                      paddingBottom: 25,
                    }} xs={12} sm={12} md={12} lg={4} xl={4}>
                      <Image src="/assets/images/food/food2.jpg" alt={product.name} style={{ objectFit: 'cover', width: '350px', height: '415px' }} fluid />
                    </Col>
                    <Col className='d-flex justify-content-center' style={{
                      paddingBottom: 25,
                    }} xs={12} sm={12} md={12} lg={4} xl={4}>
                      <Image src="/assets/images/food/food3.jpg" alt={product.name} style={{ objectFit: 'cover', width: '350px', height: '415px' }} fluid />
                    </Col>
                  </Row>
                  <Row >
                    <Col className='d-flex justify-content-center' style={{
                      paddingBottom: 25,
                    }} xs={12} sm={12} md={12} lg={4} xl={4}>
                      <Image src="/assets/images/food/food1.jpg" alt={product.name} style={{ objectFit: 'cover', width: '350px', height: '415px' }} fluid />
                    </Col>
                    <Col className='d-flex justify-content-center' style={{
                      paddingBottom: 25,
                    }} xs={12} sm={12} md={12} lg={4} xl={4}>
                      <Image src="/assets/images/food/food2.jpg" alt={product.name} style={{ objectFit: 'cover', width: '350px', height: '415px' }} fluid />
                    </Col>
                    <Col className='d-flex justify-content-center' style={{
                      paddingBottom: 25,
                    }} xs={12} sm={12} md={12} lg={4} xl={4}>
                      <Image src="/assets/images/food/food3.jpg" alt={product.name} style={{ objectFit: 'cover', width: '350px', height: '415px' }} fluid />
                    </Col>
                  </Row>
                </Col>
              </div>
            </Row>
          </Col>
          <Col className="d-flex flex-column justify-content-center" xs={12} sm={12} md={12} lg={12} xl={4} style={{
            position: 'fixed',
            bottom: 0,
            textAlign: 'center',
            backgroundColor: 'white',
            display: 'flex',
            width: '100%',
            height: 200,
            zIndex: 3,
            fontFamily: config.styles.fontFamily,
            padding: 20,
            boxShadow: '0 0 10px' + config.styles.mainColor,
            borderLeft: '1px solid #ced4da',
            marginLeft: '13px',

          }}>
            <div>
              <h2>{product.name}</h2>
              <p>{product.description}</p>
              <h4 style={{ color: config.styles.mainColor }}>Giá: {product.price} VNĐ</h4>
              <Dropdown>
                <DropdownButton variant="primary" title="Cập nhật giá">
                  <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                </DropdownButton>
              </Dropdown>
            </div>
          </Col>
        </Row >
        <Row >
          <Col className="d-flex flex-column justify-content-center" style={{
            width: "100%",
            marginBottom: 300,
            display: 'flex',
            justifyItems: 'center',
            justifyContent: 'center',
            alignContent: 'center',
            alignItems: 'center',
            fontFamily: config.styles.fontFamily
          }} xs={12} sm={12} md={12} lg={12} xl={12}>
            <label>Mô Tả Sản Phẩm</label>
          </Col>
          <Col className="d-flex flex-column justify-content-center" style={{
            width: "100%",
            marginBottom: 200,
            display: 'flex',
            justifyItems: 'center',
            justifyContent: 'center',
            alignContent: 'center',
            alignItems: 'center',
            fontFamily: config.styles.fontFamily
          }} xs={12} sm={12} md={12} lg={12} xl={12}>
            <label> Sản Phẩm Khác</label>
            <OutStandingProduct />
          </Col>
        </Row>
      </div >
    </>
  )
}

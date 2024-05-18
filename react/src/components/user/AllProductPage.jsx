import { Row, Col, Card, Button, ButtonGroup, Container, Form, InputGroup, FormControl } from "react-bootstrap"
import '../../App.css'
import React from "react";
import { useState } from "react";
import config from "../../config";
import { CardProduct, HoverButton, HoverButtonFilter, ButtonStyleMenu, HoverButtonIcon } from "./Components"
import products from "../../data/products";

export default function AllProductPage() {
  console.log("ok")
  const styleMenu = {
    // backgroundColor: '#FFB6C1',
    display: 'flex',
    flexDirection: 'column',
    borderRadius: '10px',
    height: '60%',
  }
  const styleBtnMore = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    width: 100,
  }
  const styleBoxContent = {
    marginLeft: '1rem',

  }
  return (
    <>
      <Container style={{ paddingTop: 20 }} >
        <Row>
          <Col xs={3} sm={3} md={2} lg={2} style={styleMenu}>
            <ButtonGroup vertical style={{ width: '100%' }}>
              <HoverButton>Tất cả</HoverButton>
              <HoverButton>Bánh tráng</HoverButton>
              <HoverButton>Xúc xích</HoverButton>
              <HoverButton>Lạp xưởng</HoverButton>
              <HoverButton>Tăm que cay</HoverButton>
              <HoverButton>Mực cay</HoverButton>
              <HoverButton>Mực cay</HoverButton>
              <HoverButton>Mực cay</HoverButton>
              <HoverButton>Mực cay</HoverButton>
              <HoverButton>Mực cay</HoverButton>
              <p style={{ color: 'black', fontFamily: config.styles.fontFamily }}><b>Giá</b></p>
              <ButtonStyleMenu>Dưới 500k</ButtonStyleMenu>
              <ButtonStyleMenu>Từ 50k - 100k</ButtonStyleMenu>
              <ButtonStyleMenu>Từ 100k - 150k</ButtonStyleMenu>
              <ButtonStyleMenu>Từ 150k - 200k</ButtonStyleMenu>
              <ButtonStyleMenu>Trên 200k</ButtonStyleMenu>
            </ButtonGroup>
          </Col>
          <Col xs={9} sm={9} md={10} lg={10}>
            <div style={styleBoxContent}>
              <Row>
                <Row xs={1} sm={2} md={3} lg={4} style={{ marginLeft: 1, gap: 10 }}>
                  <HoverButtonFilter>{'Hàng Mới'}</HoverButtonFilter>
                  <HoverButtonFilter>{'Bán Chạy'}</HoverButtonFilter>
                  <HoverButtonFilter>{'Rẻ - Đắt'}</HoverButtonFilter>
                  <HoverButtonFilter>{'Đắt - Rẻ'}</HoverButtonFilter>
                </Row>
              </Row>
              <div className="scroll-container">
                <Row xs={2} sm={3} md={4} lg={5}>
                  {products.map(product => (
                    <Col key={product.id}><CardProduct product={product} /></Col>
                  ))}
                </Row>
              </div>
              <div style={styleBtnMore}>
                <HoverButton>Xem Thêm</HoverButton>
              </div>
            </div>
          </Col>
        </Row>
      </Container>

    </>
  )
}

import { Row, Col, Card, Button, ButtonGroup, Container, Form, InputGroup, FormControl } from "react-bootstrap"
import '../App.css'
import React from "react";
import { useState } from "react";
import config from "../config";
import { CardProduct, HoverButton, HoverButtonFilter, ButtonStyleMenu, HoverButtonIcon } from "../components/user/Components"
import products from "../data/products";

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
  const styleSearch = {
    border: '1px solid #ced4da', // Đường viền dưới
    borderRadius: 20,          // Không có bo góc
    boxShadow: 'none',
    outline: true,
    color: 'black',
    backgroundColor: config.styles.backgroundColor,
    minWidth: 100
  }
  const styleBtnSearch = {
    color: 'black',
    border: 0,
    marginTop: 15,
    transform: 'translateY(-50%)',
    backgroundColor: config.styles.backgroundColor,
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
                <Row style={{ justifyContent: 'center' }}>
                  <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    width: '100%', maxHeight: 50,
                  }}>
                    <Col style={{ flex: 4 }}>
                      <InputGroup className="mb-2">
                        <FormControl
                          placeholder="Search Anything..."
                          aria-label="Search"
                          aria-describedby="basic-addon1"
                          style={styleSearch}
                        />

                      </InputGroup>
                    </Col>
                    <Col>
                      <Button style={styleBtnSearch}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                          <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                        </svg>
                      </Button>
                    </Col>

                  </div>
                </Row>
                <Row xs={1} sm={2} md={3} lg={4} style={{ marginLeft: 1, gap: 10 }}>
                  <HoverButtonFilter>{'Hàng Mới'}</HoverButtonFilter>
                  <HoverButtonFilter>{'Bán Chạy'}</HoverButtonFilter>
                  <HoverButtonFilter>{'Rẻ - Đắt'}</HoverButtonFilter>
                  <HoverButtonFilter>{'Đắt - Rẻ'}</HoverButtonFilter>
                </Row>
                <Row>
                  <label>Đang hiện 10/100 sản phẩm</label>
                </Row>
              </Row>
              <div className="scroll-container">
                <Row xs={1} sm={3} md={4} lg={5}>
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

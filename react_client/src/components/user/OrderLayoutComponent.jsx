import { useState } from 'react';
import { Button, Row, Col, Nav, Offcanvas } from 'react-bootstrap';
import config from '../../config';
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from '../../redux/OrderCounter';

export default function OrderLayoutComponent() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <>
      <Nav.Link href="#link" onClick={handleShow}>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cart-check-fill" viewBox="0 0 16 16">
          <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0m7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0m-1.646-7.646-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L8 8.293l2.646-2.647a.5.5 0 0 1 .708.708" />
        </svg>
        &nbsp;Giỏ Hàng
      </Nav.Link>
      <Offcanvas show={show} onHide={handleClose} placement='end' scroll='true' keyboard='true' responsive={"xxl" | "xl" | "lg" | "md" | "sm"} style={{
        fontFamily: config.styles.fontFamily,
        width: 500
      }}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
            <div style={{
              display: 'flex',
              alignItems: 'center',
            }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-bag-fill" viewBox="0 0 16 16">
                <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4z" />
              </svg>
              <label style={{ paddingLeft: 10 }}>0 Sản Phẩm</label>
            </div>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className="scroll-container" style={{
          display: 'flex',
          justifyItems: 'center',
          justifyContent: 'center',
          alignContent: 'center',
        }}>
          <div style={{ width: '100rem', height: 'auto' }}>
            <Row>
              <Col xs={3} sm={3} md={2} lg={2} xl={2}>
                <Button
                  aria-label="Increment value"
                  onClick={() => dispatch(increment())}
                >+
                </Button>
                <span>{count}</span>
                <Button
                  aria-label="Decrement value"
                  onClick={() => dispatch(decrement())}
                > -
                </Button>
              </Col>
              <Col xs={3} sm={3} md={2} lg={2} xl={2}>
                Avatar
              </Col>
              <Col xs={5} sm={5} md={6} lg={6} xl={6}>
                Description
              </Col>
              <Col xs={1} sm={1} md={2} lg={2} xl={2}>
                Action
              </Col>
            </Row>

          </div>

        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}


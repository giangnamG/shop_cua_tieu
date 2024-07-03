import { useState } from 'react';
import { Button, Row, Col, Nav, Offcanvas, Image } from 'react-bootstrap';
import config from '../../config';

const styleCenter = {
  justifyItems: 'center',
  justifyContent: 'center',
  alignContent: 'center',
  alignItems: 'center',
  display: 'flex',
}
export default function OptionProfileComponent() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const options = [
    'Hồ Sơ',
    'Địa Chỉ',
    'Đổi Mật Khẩu',
  ]
  return (
    <div style={{
      margin: 12,
    }}>
      <Nav.Link href="#link" onClick={handleShow}>
        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-tools" viewBox="0 0 16 16">
          <path d="M1 0 0 1l2.2 3.081a1 1 0 0 0 .815.419h.07a1 1 0 0 1 .708.293l2.675 2.675-2.617 2.654A3.003 3.003 0 0 0 0 13a3 3 0 1 0 5.878-.851l2.654-2.617.968.968-.305.914a1 1 0 0 0 .242 1.023l3.27 3.27a.997.997 0 0 0 1.414 0l1.586-1.586a.997.997 0 0 0 0-1.414l-3.27-3.27a1 1 0 0 0-1.023-.242L10.5 9.5l-.96-.96 2.68-2.643A3.005 3.005 0 0 0 16 3q0-.405-.102-.777l-2.14 2.141L12 4l-.364-1.757L13.777.102a3 3 0 0 0-3.675 3.68L7.462 6.46 4.793 3.793a1 1 0 0 1-.293-.707v-.071a1 1 0 0 0-.419-.814zm9.646 10.646a.5.5 0 0 1 .708 0l2.914 2.915a.5.5 0 0 1-.707.707l-2.915-2.914a.5.5 0 0 1 0-.708M3 11l.471.242.529.026.287.445.445.287.026.529L5 13l-.242.471-.026.529-.445.287-.287.445-.529.026L3 15l-.471-.242L2 14.732l-.287-.445L1.268 14l-.026-.529L1 13l.242-.471.026-.529.445-.287.287-.445.529-.026z" />
        </svg>
        &nbsp; Tùy Chọn
      </Nav.Link>
      <Offcanvas show={show} onHide={handleClose} placement='top' keyboard='true' responsive={"xxl" | "xl" | "lg" | "md" | "sm"} style={{
        fontFamily: config.styles.fontFamily,
        width: 250,
        height: 150,
        backgroundColor: config.styles.backgroundColor,
        borderRadius: 15,
        boxShadow: '0 0 10px ' + config.styles.mainColor,
        borderLeft: '1px solid #ced4da',
        marginLeft: '10px',
        marginTop: '10px',
        overflow: 'hidden',
      }}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
            <div style={{
              display: 'flex',
              alignItems: 'center',
            }}>
              Tài Khoản Của Tôi
            </div>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body style={styleCenter}>
          <Row>
            {options.map((option, index) => (
              <Row Row key={index} > <Image src="src/assets/icons/person.png" style={{ width: 50 }} />{option}</Row>
            ))}
          </Row>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
}


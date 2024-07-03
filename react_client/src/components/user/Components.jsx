import { Row, Col, Card, Button, ButtonGroup, Container, Form, InputGroup, FormControl } from "react-bootstrap"
import '../../App.css'
import React from "react";
import { useRef, useState, useEffect } from "react";
import config from "../../config";
import Carousel from 'react-bootstrap/Carousel';
/**
  product = {
    id,title, description,price, image
  }
*/

const CardProduct = ({ product }) => {
  const cardStyle = {
    marginTop: 10,
    borderRadius: 10,
    backgroundColor: '#FFE4E1'
  }
  const containerBtnStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  }
  const cardBodyStyle = {
    paddingBottom: 5,
  }
  const cardImageStyle = {
    width: "100%",
    height: 200,
    borderRadius: 15
  }

  const handleClicked = (productId) => {
    window.location = '/product/' + encodeURIComponent(productId)
  }

  return (
    <Card key={product.id} style={cardStyle}>
      <Card.Body style={cardBodyStyle}>
        <Card.Img src={product.image} style={cardImageStyle} onClick={() => handleClicked(product.id)}></Card.Img>
        <Card.Text style={{ paddingTop: 5, marginBottom: 0 }} onClick={() => handleClicked(product.id)}>
          {product.title}
        </Card.Text>
        <footer className="blockquote-footer" style={{ marginTop: 5, marginBottom: 0 }}>
          <cite title="price">{product.price}</cite>
        </footer>
        <div style={containerBtnStyle}>
          <HoverButtonIcon>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cart-check" viewBox="0 0 16 16">
              <path d="M11.354 6.354a.5.5 0 0 0-.708-.708L8 8.293 6.854 7.146a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0z" />
              <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1zm3.915 10L3.102 4h10.796l-1.313 7zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0m7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0" />
            </svg>
          </HoverButtonIcon>
          <HoverButtonIcon>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cart4" viewBox="0 0 16 16">
              <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5M3.14 5l.5 2H5V5zM6 5v2h2V5zm3 0v2h2V5zm3 0v2h1.36l.5-2zm1.11 3H12v2h.61zM11 8H9v2h2zM8 8H6v2h2zM5 8H3.89l.5 2H5zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0m9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0" />
            </svg>
          </HoverButtonIcon>
          <HoverButtonIcon>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-bookmark-heart" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M8 4.41c1.387-1.425 4.854 1.07 0 4.277C3.146 5.48 6.613 2.986 8 4.412z" />
              <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1z" />
            </svg>
          </HoverButtonIcon>
        </div>
      </Card.Body>
    </Card >
  )
}

const HoverButton = ({ children }) => {
  const [isHovered, setIsHovered] = useState(false);

  const buttonStyle = {
    backgroundColor: isHovered ? '#F08080' : config.styles.mainColor,
    color: 'black',
    border: 'none',
    textAlign: 'left',
    paddingLeft: '1.5rem',
    paddingTop: '10px',
    paddingBottom: '10px',
    width: '100%',
    borderRadius: '10px',
    transition: 'background-color 0.3s',
    marginBottom: '10px',
    fontFamily: config.styles.fontFamily
  };

  return (
    <Button
      style={buttonStyle}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children}
    </Button>
  );
}

const HoverButtonFilter = ({ children }) => {
  const [isHovered, setIsHovered] = useState(false);

  const buttonStyle = {
    backgroundColor: isHovered ? config.styles.mainColor : '#F5DEB3',
    color: 'black',
    border: 1,
    textAlign: 'center',
    paddingLeft: '0.7rem',
    paddingTop: '10px',
    paddingBottom: '10px',
    width: '10%',
    borderRadius: '20px',
    transition: 'background-color 0.3s',
    marginBottom: '10px',
    fontFamily: config.styles.fontFamily,
    flex: 1
  };

  return (
    <Button
      style={buttonStyle}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children}
    </Button>
  );
}

const ButtonStyleMenu = ({ children }) => {
  const [isHovered, setIsHovered] = useState(false);
  const buttonStyle = {
    backgroundColor: isHovered ? '#FF6347' : config.styles.secondColor,
    color: 'white',
    border: 'none',
    textAlign: 'left',
    paddingLeft: '10px',
    paddingTop: '10px',
    paddingBottom: '10px',
    width: '100%',
    borderRadius: '10px',
    transition: 'background-color 0.3s',
    marginBottom: '10px',
    fontFamily: config.styles.fontFamily
  }
  return (
    <Button
      style={buttonStyle}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children}
    </Button>
  )
}

const HoverButtonIcon = ({ children }) => {
  const [isHoveredIcon, setIsHoveredIcon] = useState(false);
  const defaultStyle = {
    borderColor: config.styles.mainColor,
    backgroundColor: isHoveredIcon ? config.styles.mainColor : '#FFE4E1',
    color: 'black',
    border: 1,
    textAlign: 'center',
    paddingLeft: '0.8rem',
    paddingTop: '10px',
    paddingBottom: '10px',
    marginBottom: 0,
    width: '10%',
    borderRadius: '20px',
    transition: 'background-color 0.5s, transform 0.3s', // Thêm hiệu ứng chuyển động
    fontFamily: config.styles.fontFamily,
    flex: 1,

  }
  const hoveredIconAddCard = {
    ...defaultStyle,
    transform: isHoveredIcon ? 'rotate(360deg)' : 'none', // Lật sang trái khi hover
  }
  const iconAddCard = isHoveredIcon ? hoveredIconAddCard : defaultStyle
  return (
    <Button style={iconAddCard}
      onMouseEnter={() => setIsHoveredIcon(true)}
      onMouseLeave={() => setIsHoveredIcon(false)}>
      {children}
    </Button>
  )
}

const getNavbarHeight = () => {
  const navbarRef = useRef(null);
  const [navbarHeight, setNavbarHeight] = useState(0);

  useEffect(() => {
    // Nếu navbarRef tồn tại
    if (navbarRef.current) {
      // Lấy chiều cao của navbar và lưu vào state
      const height = navbarRef.current.offsetHeight;
      setNavbarHeight(height);
    }
  }, [navbarRef]); // Sử dụng dependency array để tránh việc gọi useEffect không cần thiết

  return { navbarRef, navbarHeight };
}

const Slider = ({ navbarHeight }) => {

  return (
    <div style={{ display: 'block', width: '100%', marginTop: navbarHeight }}>
      <Carousel>
        <Carousel.Item interval={2000}>
          <img
            className="d-block w-100"
            src="https://media.geeksforgeeks.org/wp-content/uploads/20210425122739/2-300x115.png"
            alt="Image One"
          />
          <Carousel.Caption>
            <h3>Label for first slide</h3>
            <p>Sample Text for Image One</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={4000}>
          <img
            className="d-block w-100"
            src="https://media.geeksforgeeks.org/wp-content/uploads/20210425122716/1-300x115.png"
            alt="Image Two"
          />
          <Carousel.Caption>
            <h3>Label for second slide</h3>
            <p>Sample Text for Image Two</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  )
}

export { CardProduct, HoverButton, HoverButtonFilter, ButtonStyleMenu, HoverButtonIcon, Slider, getNavbarHeight }

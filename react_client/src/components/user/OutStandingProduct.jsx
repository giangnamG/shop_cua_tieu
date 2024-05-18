import { Row, Col, Image } from "react-bootstrap";
import { CardProduct } from "./Components";
import products from "../../data/products";
import { useEffect, useState } from "react";

export default function OutStandingProduct() {
  const [visibleProducts, setVisibleProducts] = useState([])
  const [position, setPosition] = useState({ 'start': 0, 'end': 6 })
  const productsLength = products.length
  useEffect(() => {
    setTimeout(() => {
      setVisibleProducts(products.slice(position.start, position.end))
      if (position.end === Math.min(position.end + 6, productsLength - Math.floor(productsLength % 6))) {
        setPosition({ 'start': 0, 'end': 6 })
      } else {
        setPosition({
          'start': position.start + 6,
          'end': position.end + 6
        })
      }
      console.log(position.end)
      console.log(productsLength - Math.floor(productsLength % 6))
    }, 3000)
    return () => clearTimeout(3000);
  }, [visibleProducts])
  return (
    <>
      <Row>
        {visibleProducts.map((product) => (
          <Col key={product.id}>
            <CardProduct product={product} />
          </Col>
        ))}
      </Row>
    </>
  );
}

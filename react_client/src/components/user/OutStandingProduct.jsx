import { Row, Col, Spinner } from "react-bootstrap";
import { CardProduct } from "./Components";
import products from "../../data/products";
import { useEffect, useState } from "react";

const SpinnerComponent = () => {
  return (
    <>
      <Spinner animation="grow" variant="primary" />
      <Spinner animation="grow" variant="secondary" />
      <Spinner animation="grow" variant="success" />
      <Spinner animation="grow" variant="danger" />
      <Spinner animation="grow" variant="warning" />
      <Spinner animation="grow" variant="info" />
      <Spinner animation="grow" variant="light" />
    </>
  )
}
export default function OutStandingProduct() {
  const [visibleProducts, setVisibleProducts] = useState([])
  const [showSpinner, setShowSpinner] = useState(true)
  const [position, setPosition] = useState({ 'start': 0, 'end': 6 })
  const productsLength = products.length
  useEffect(() => {
    setTimeout(() => {
      setShowSpinner(false)
      setVisibleProducts(products.slice(position.start, position.end))

      if (position.end === Math.min(position.end + 6, productsLength - Math.floor(productsLength % 6))) {
        setPosition({ 'start': 0, 'end': 6 })
      } else {
        setPosition({
          'start': position.start + 6,
          'end': position.end + 6
        })
      }
    }, 5000)

    return () => clearTimeout(5000);
  }, [visibleProducts])
  return (
    <>
      <Row>

        {!showSpinner ? visibleProducts.map((product) => (
          <Col key={product.id}>
            <CardProduct product={product} />
          </Col>
        )) : <SpinnerComponent />}
      </Row>
    </>
  );
}

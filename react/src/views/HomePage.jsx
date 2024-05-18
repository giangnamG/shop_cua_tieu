import config from '../config'
import AllProductPage from '../components/user/AllProductPage'
import OutStandingProduct from '../components/user/OutStandingProduct'
// import { Slider } from '../components/user/Components'
import { Container } from 'react-bootstrap'

export default function HomePage() {
  const homeStyle = {
    paddingTop: 20,
    fontFamily: config.styles.fontFamily
  }
  return (
    <>
      {/* <Slider /> */}
      <Container>
        <div style={homeStyle}>
          <div className='trend'>
            <p style={{ fontSize: 20, marginBottom: 5, }}><b>Sản phẩm nổi bật</b></p>
            <OutStandingProduct />
          </div>
          <div className='allProducts'>
            <p style={{ fontSize: 20, marginBottom: 0, marginTop: 20 }}><b>Tất cả sản phẩm</b></p>
            <AllProductPage />
          </div>
        </div>
      </Container>
    </>
  )
}

import config from '../config'
import AllProductPage from './AllProductPage'
import OutStandingProduct from '../components/user/OutStandingProduct'
import { Slider } from '../components/user/Components'
import { Container } from 'react-bootstrap'
import NavbarComponent from '../components/user/NavbarComponent'
import { getNavbarHeight } from "../components/user/Components";

export default function HomePage() {
  const { navbarRef, navbarHeight } = getNavbarHeight();

  const homeStyle = {
    paddingTop: 20,
    fontFamily: config.styles.fontFamily
  }
  return (
    <>
      <NavbarComponent navbarRef={navbarRef} />
      <Slider navbarHeight={navbarHeight} />
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

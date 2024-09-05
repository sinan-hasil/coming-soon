import { Container } from "react-bootstrap"
import { Outlet } from "react-router-dom"
import "../css/Navbar/navbar.css"

const Root = () => {
  return (
    <>
        <Container>
        <nav>
          <div className="logo">logo</div>
          <div className="link">
            <ul>
              <li>Anasayfa</li>
              <li>Hakkımızda</li>
              <li>İletişim</li>
            </ul>
          </div>
        </nav>
        </Container>
        <Outlet />
    </>
  )
}

export default Root
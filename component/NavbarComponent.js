import { Navbar,Container,Nav } from "react-bootstrap";
import navbar from '../styles/navbar.module.scss'
import Image from 'next/image'
import { useSelector } from "react-redux";
import {FaBell} from "react-icons/fa"

const NavbarComponent = ()=>{
  const {auth} = useSelector(state=>state)
  // const dispatch = useDispatch()

    return(
      <Navbar collapseOnSelect expand="lg" className={navbar.navbarLight} variant="dark">
        <Container>
        <Navbar.Brand className={navbar.navbarBrand} href="/home">On-Wallet</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#deets">
              <div className="d-flex justify-content-end">
                <Image src={auth.user!==null ? (auth.user.picture == null ?'/images/profile.png' : auth.user.picture) : '/images/profile.png'} width={52} height={52} alt='profile' layout="intrinsic" className="img-fluid rounded"/>
                <div>
                  <div className={`${navbar.textName} fw-bold ms-3`}>{auth.user!==null && auth.user.fullName}</div>
                  <div className="fs-6 ms-3">
                    {
                      auth.user!==null && (auth.phone!==null ? auth.phone :"-")
                    }
                  </div>
                </div>
              </div>
            </Nav.Link>
            <Nav.Link>
              <div className="align-items-center fs-3 ms-3">
              <FaBell/> 
              </div> 
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>
    )
}

export default NavbarComponent
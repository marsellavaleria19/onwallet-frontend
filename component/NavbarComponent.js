import { Navbar,Container } from "react-bootstrap";
import navbar from '../styles/navbar.module.scss'
import Image from 'next/image'
import { useSelector } from "react-redux";
import { useEffect } from "react";

const NavbarComponent = ()=>{
  const auth = useSelector(state=>state.auth)
  // const dispatch = useDispatch()

    return(
        <Navbar className={navbar.navbarLight} variant="dark">
        <Container>
          <Navbar.Brand className={navbar.navbarBrand} href="#home">On-Wallet</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Image src={auth.user!==null ? (auth.user.picture == null ?'/images/profile.png' : auth.user.picture) : '/images/profile.png'} width={70} height={50} alt='profile' className="me-3 img-fluid rounded"/>
            <Navbar.Text>
              <div className={navbar.textName}>{auth.user!==null && auth.user.fullName}</div>
              {/* <div className={variables.textPhone}>{auth.user.}</div> */}
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
}

export default NavbarComponent
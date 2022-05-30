import { Navbar,Container } from 'react-bootstrap';
import Link from 'next/link';
import navbar from '../styles/navbar.module.scss';
import Image from 'next/image';
import CButton from './CButton';

const NavbarHomepage = ()=>{
   return(
      <Navbar className={navbar.NavbarHomepage} expand="lg" variant='dark'>
         <Container className='pt-3'>
            <Navbar.Brand className={navbar.navbarBrand} href="#home">On-Wallet</Navbar.Brand>
            <Navbar.Toggle/>
            <Navbar.Collapse className="justify-content-end">
               <Link href="/login"><a className={`btn ${navbar.buttonLogin} me-3`}>Login</a></Link>
               <Link href="/register/form"><a className={`btn ${navbar.buttonRegister} me-3`}>Register</a></Link>
               {/* <Link href="/register"><a className={`btn ${navbar.buttonRegister}`}></a>Sign Up</Link> */}
            </Navbar.Collapse>
         </Container>
      </Navbar>
   );
};

export default NavbarHomepage;
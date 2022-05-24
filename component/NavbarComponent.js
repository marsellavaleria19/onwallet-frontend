import { Navbar,Container,Nav,Offcanvas } from 'react-bootstrap';
import navbar from '../styles/navbar.module.scss';
import Image from 'next/image';
import { useSelector } from 'react-redux';
import {FaBell} from 'react-icons/fa';
import { useState } from 'react';
import canvas from '../styles/canvas.module.scss';
import CButton from './CButton';
import menu from '../styles/menu.module.scss';
import Link from 'next/link';
import {IoGridOutline} from 'react-icons/io5';
import {VscArrowUp} from 'react-icons/vsc';
import {HiPlus} from 'react-icons/hi';
import {RiUser3Line} from 'react-icons/ri';

const NavbarComponent = ()=>{
   const {auth} = useSelector(state=>state);
   const [show,setShow] = useState(false);
   const handleShow = ()=>setShow(true);
   const handleClose = ()=>setShow(false);
   const listMenu = [
      {menu:'Dashboard',link:'/home',icon: IoGridOutline},
      {menu:'Transfer',link:'/transaction/receiver',icon: VscArrowUp},
      {menu:'Topup',link:'/transaction/topup',icon: HiPlus},
      {menu:'Profile',link:'/profile',icon: RiUser3Line},];
    
   const [activeMenu,setActiveMenu] = useState('/home');
   // const dispatch = useDispatch()
   
   const handleLogout = (event)=>{
      event.preventDefault();
      dispatch({
         type : 'LOGOUT'
      });
   };

   return(
      <Navbar collapseOnSelect expand="lg" className={navbar.navbarLight} variant="dark">
         <Container>
            <Navbar.Brand className={navbar.navbarBrand} href="/home">On-Wallet</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" onClick={handleShow}/>
            <Navbar.Collapse id="responsive-navbar-nav">
               <Nav className="ms-auto d-none d-lg-flex">
                  <Nav.Link href="#deets">
                     <div className="d-flex justify-content-end">
                        {auth!==null && auth.user!==null && <Image src={auth.user.picture == null ?'/images/profile.png' : auth.user.picture} width={52} height={52} alt='profile' layout="intrinsic" className="img-fluid rounded"/>}
                        <div>
                           <div className={`${navbar.textName} fw-bold ms-3`}>{auth.user!==null && auth.user.fullName}</div>
                           <div className="fs-6 ms-3">
                              {
                                 auth.user!==null && (auth.phone.length>0 ? auth.phone :'-')
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
            <Offcanvas show={show} onHide={handleClose} className={'bg-secondary'}>
               <Offcanvas.Header closeButton>
                  {/* <div>
                     {auth!==null && auth.user!==null && <Image src={auth.user.picture == null ?'/images/profile.png' : auth.user.picture} width={52} height={52} alt='profile' layout="intrinsic" className="img-fluid rounded"/>}
                     <div>
                        <div className={`${navbar.textName} fw-bold ms-3`}>{auth!==null && auth.user!==null && auth.user.fullName}</div>
                        <div className="fs-6 ms-3">
                           {
                              auth!==null && auth.user!==null && (auth.phone.length>0 ? auth.phone :'-')
                           }
                        </div>
                     </div>
                  </div> */}
                  <Offcanvas.Title></Offcanvas.Title>
               </Offcanvas.Header>
               <Offcanvas.Body>
                  <div className='text-center mt-5'>
                     {auth!==null && auth.user!==null && <Image src={auth.user.picture == null ?'/images/profile.png' : auth.user.picture} width={100} height={100} alt='profile' layout="intrinsic" className="img-fluid rounded"/>}
                     <div className='mt-3'>
                        <div className={`${canvas.textName} fw-bold ms-3`}>{auth!==null && auth.user!==null && auth.user.fullName}</div>
                        <div className={`${canvas.textPhone} fs-6 ms-3`}>
                           {
                              auth!==null && auth.user!==null && (auth.phone.length>0 ? auth.phone :'-')
                           }
                        </div>
                     </div>
                  </div>
                  <ul className={`${menu.menuItem}`}>
                     {
                        listMenu.map(item => {
                           const Icon = item.icon;
                           return (
                              <li key={item.menu}>
                                 <Link href={item.link}>
                                    <a className={activeMenu===item.link?'active':''}>
                                       <Icon className='me-3' />
                                       {item.menu}
                                    </a>
                                 </Link>
                              </li>
                           );
                        })}
                  </ul>
                  <div className="text-center">
                     <CButton onClick={handleLogout}>Logout</CButton>
                  </div>
               </Offcanvas.Body>
            </Offcanvas>
         </Container>
      </Navbar>
      
   );
};

export default NavbarComponent;
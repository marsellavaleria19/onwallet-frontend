import { Nav } from 'react-bootstrap';
// import {MdOutlineDashboard} from "react-icons/md";
import menu from '../styles/menu.module.scss';
import Link from 'next/link';
import {IoGridOutline} from 'react-icons/io5';
import {VscArrowUp} from 'react-icons/vsc';
import {HiPlus} from 'react-icons/hi';
import {FiLogOut} from 'react-icons/fi';
import {RiUser3Line} from 'react-icons/ri';
import { useEffect,useState } from 'react';
import { useRouter } from 'next/dist/client/router';
import CButton from './CButton';
import { useDispatch,useSelector } from 'react-redux';
import { ScatterController } from 'chart.js';

const Menu = ()=>{
   const {auth} = useSelector(state=>state);
   const listMenu = [
      {menu:'Dashboard',link:'/home',icon: IoGridOutline},
      {menu:'Transfer',link:'/transaction/receiver',icon: VscArrowUp},
      {menu:'Topup',link:'/transaction/topup',icon: HiPlus},
      {menu:'Profile',link:'/profile',icon: RiUser3Line},];
    
   const [activeMenu,setActiveMenu] = useState('/home');
   const router = useRouter();
   const dispatch = useDispatch();
   const [control,setControl] = useState(false); 

   useEffect(()=>{
      console.log(router.pathname);
      setActiveMenu(router.pathname);
   },[router.pathname]);

   const handleLogout = (event)=>{
      event.preventDefault();
      dispatch({
         type : 'LOGOUT'
      });
   };

   return(
      <div className='position-relative'>
         <div className={`${menu.menu}`}>
            <ul className={`${menu.menuItem}`}>
               {
                  listMenu.map(item => {
                     const Icon = item.icon;
                     return (
                        <li key={item.menu}>
                           <Link href={item.link}>
                              <a className={activeMenu===item.link?'active':''}>
                                 <Icon className={`${menu.iconMenu} me-3`} />
                                 {item.menu}
                              </a>
                           </Link>
                        </li>
                     );
                  })}
               <div className={`${menu.layoutButtonLogout}`}>
                  <FiLogOut className={menu.iconMenu}/>
                  <CButton onClick={handleLogout} className={menu.buttonLogout}>Logout</CButton>
               </div>
            </ul>
            
         </div>
      </div>
      
    
   // <Nav defaultActiveKey="/home" className={`${menu.menu} flex-column`}>
   //     <Nav.Link className={`${menu.navLink} mt-5 mb-5`} href="/home">Dashboard</Nav.Link>
   //     <Nav.Link className={`${menu.navLink} mb-5`} eventKey="link-1">Transfer</Nav.Link>
   //     <Nav.Link className={`${menu.navLink} mb-5`} eventKey="link-2">Topup</Nav.Link>
   //     <Nav.Link className={`${menu.navLink} mb-5`} eventKey="link-2">Profile</Nav.Link>
   //     <Nav.Link className={`${menu.navLink} mb-5`} eventKey="link-2">Logout</Nav.Link>
   // </Nav>
   );
};

export default Menu;

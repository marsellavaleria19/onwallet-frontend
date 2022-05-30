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
      <>
         <style jsx>
            {`
            .menu {
               background-color: #FFFFFF;
               box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.5);
               border-radius: 25px;
               width : 100%;
               min-height: 830px;
               border: 1px solid  #F73D93;
               display: flex;
               flex-direction: column;
               justify-content: space-between;
            }
            .menuItem{
               margin-top: 70px;
               list-style: none;
            }
            
            .menuItem li{
                font-size: 18px;
                margin-top: 52px;
            }
            
            
            .menuItem li:hover{
                font-size: 18px;
                padding-left: 45px;
                font-weight: 600;
            }
            
            .menuItem li a{
                font-size: 18px;
                margin-top: 52px;
                width:100%;
            }
            
            .menuItem li a.active{
                font-weight: 700;
                border-left: 2px solid #F73D93;
                padding-left:15px;
            }
        `}
         </style>
         <div className='menu'>
            <div className='me-5 ms-5'>
               <ul className='menuItem'>
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
               </ul>
            </div>
            <div className={`${menu.layoutButtonLogout} me-auto ms-auto mb-5`}>
               <FiLogOut className={menu.iconMenu}/>
               <CButton onClick={handleLogout} className={menu.buttonLogout}>Logout</CButton>
            </div>
         </div>
      </>
   );
};

export default Menu;

import NavbarComponent from './NavbarComponent';
import Footer from './Footer';
import { Col, Container,Row } from 'react-bootstrap';
import Menu from './Menu';
import { useSelector,useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import CModal from './CModal';
import { getListHistory } from '../redux/actions/history';
import { getAllDataUser } from '../redux/actions/user';
import { getDataUser,getBalance,getListPhoneProfile } from '../redux/actions/auth';

const Layout = ({children})=>{

   const auth = useSelector(state=>state.auth);
   const router = useRouter();
   const dispatch = useDispatch();
   
   useEffect(()=>{
      if(auth.isLogout==true){
         router.push('/');
      }
   },[auth.isLogout]);


   useEffect(()=>{
      if(auth.token){
         dispatch({
            type:'CLEAR_HISTORY'
         });
         dispatch(getAllDataUser(auth.token));
         dispatch(getDataUser(auth.token));
         dispatch(getBalance(auth.token));
         dispatch(getListPhoneProfile(auth.token));
         dispatch(getListHistory(auth.token));
      }
   },[auth.token]);
   
   return(
      <div>
         {auth.token!==null &&
            <>
               <NavbarComponent/>
               <Container>
                  <Row className="mt-5 mb-3">
                     <Col className='d-none d-lg-block' lg="4" xl="3">
                        <Menu/>
                     </Col>
                     <Col lg="8" xl="9">
                        {children}
                     </Col>
                  </Row>
               </Container>
               <Footer/>
            </> 
         }
      </div>
            
   );
};

export default Layout;
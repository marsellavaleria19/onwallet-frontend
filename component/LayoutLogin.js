// import { Button } from "bootstrap";
import { Col, Container, Row } from 'react-bootstrap';
import CButton from '../component/CButton';
import Input from '../component/Input';
import login from '../styles/form-login.module.scss';
import input from '../styles/input.module.scss';
import {MdOutlineMailOutline} from 'react-icons/md';
import {BiLockAlt,} from 'react-icons/bi';
import Image from 'next/image';
// import NavbarComponent from "../component/NavbarComponent";

const LayoutLogin = (props) =>{
   return (
      <Container fluid className="g-0 vh-100">
         <Row className="g-0 w-100 h-100">
            <Col sm={6} className={login.background}>
               <div className="p-5">
                  <div className="fs-1 fw-bold text-white mt-5">On-Wallet</div>
                  <Image src="/images/cover-login.png" width={700} height={700} alt="phone"/>
                  <div className={login.footer}>
                     <div className="fs-3 text-white fw-bold">App that Covering Banking Needs.</div>
                     <div className="fs-5 text-white mt-3 mb-5">Zwallet is an application that focussing in banking needs for all users
                                in the world. Always updated and always following world trends.
                                5000+ users registered in On-Wallet everyday with worldwide
                                users coverage.
                     </div>
                  </div>
               </div>  
            </Col>
            <Col sm={12} md={6} xl={5}>
               {props.children}
            </Col>
         </Row>
      </Container>    
   );
};

export default LayoutLogin;
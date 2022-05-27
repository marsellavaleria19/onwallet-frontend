// import { Button } from "bootstrap";
import { Col, Container, Row } from 'react-bootstrap';
import CButton from '../../component/CButton';
import Layout from '../../component/Layout';
import information from '../../styles/information.module.scss';
import Image from 'next/image';
import Input from '../../component/Input';
import { useSelector } from 'react-redux';
import Link from 'next/link';
import CList from '../../component/CList';
// import NavbarComponent from "../component/NavbarComponent";

const PersonalInformation= () =>{
   const {auth,phone} = useSelector(state=>state);

   return (
      <Layout>          
         <div className={information.information}>
            <Container className="pt-3">
               <div className="ms-3 me-3">
                  <div className="fs-5 mb-3 fw-bold mt-5 text-primary ms-3 me-3">Personal Information</div>
                  <p className="ms-3 me-3 mb-5 text-primary">We got your personal information from the sign up proccess. If you want to make changes on your information, contact our support.</p>
                  <CList>
                     <div className="ms-3 me-3">
                        <div className="fs-5 fw-bold text-primary">First Name</div>
                        <div className="fs-5 text-primary">{auth.user!==null && auth.user.fullName.split(' ')[0]}</div>
                     </div>
                  </CList>
                  <CList>
                     <div className="ms-3 me-3">
                        <div className="fs-5 fw-bold text-primary">Last Name</div>
                        <div className="fs-5 text-primary">{auth.user!==null && auth.user.fullName.split(' ').filter((item,index)=>index>0).join(' ')}</div>
                     </div>
                  </CList>
                  <CList>
                     <div className="ms-3 me-3">
                        <div className="fs-5 fw-bold text-primary">Verified E-mail </div>
                        <div className="fs-5 text-primary">{auth.user!==null && auth.user.email}</div>
                     </div>
                  </CList>
                  <CList variant="justify-content-between">
                     <div>
                        <div className="fs-5 fw-bold text-primary ms-3">Phone Number</div>
                        <div className="fs-5 text-primary ms-3">{auth.phone!==null ? auth.phone : '-'}</div>
                     </div>
                     <Link href="/profile/manage-phone-number"><a className="fs-5 text-primary me-3">Manage</a></Link>
                  </CList>
               </div>
            </Container>
         </div>          
      </Layout>
   );
};

export default PersonalInformation;
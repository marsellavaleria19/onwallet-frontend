// import { Button } from "bootstrap";
import { Col, Container, Row } from 'react-bootstrap';
import {FaTrash} from 'react-icons/fa';
import Layout from '../../component/Layout';
import information from '../styles/information.module.scss';
import variables from '../styles/transaction.module.scss';
import input from '../styles/input.module.scss';
import Image from 'next/image';
import Input from '../../component/Input';
import CButton from '../../component/CButton';
import { useSelector } from 'react-redux';
// import NavbarComponent from "../component/NavbarComponent";

const InputTransfer= () =>{
   return (
      <Layout>          
         <div className={information.information}>
            <Container className="pt-3">
               <div className="fs-5 mb-3 fw-bold">Tranfer Money</div>
               <Row className={`${information.list} mt-3 mb-3 ms-3`}>
                  <Col xs={2}>
                     <Image src="/images/2.png" width={50} height={50}/>
                  </Col>
                  <Col xs={5}>
                     <div className="fs-4 fw-bold">Jessica Keen</div>
                     <div className="fs-6">+62 811-3452-5252</div>
                  </Col>
               </Row>
               <div className="mt-5">
                  <p>Type the amount you want to transfer and then press continue to the next steps.</p>
               </div>
               <form className="text-center mt-5">
                  <div className="mb-5">
                                Rp.<Input className={variables.textTransfer} type="number" value="100.000" disabled/>
                  </div>
                  <div className="fs-6 fw-bold mb-5">Rp120.000 Available</div>
                  <div className="mb-4">
                     <Input className={input.text} type="text" placeholder="Add some notes" value="For buying some socks" disabled/>
                  </div>
                  <div className="text-end mb-4">
                     <CButton>Continue</CButton>
                  </div>
               </form>
            </Container>
         </div>          
      </Layout>
   );
};

export default InputTransfer;
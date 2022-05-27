// import { Button } from "bootstrap";
import { Col, Container, Row,Modal } from 'react-bootstrap';
import CButton from '../../component/CButton';
import CList from '../../component/CList';
import Layout from '../../component/Layout';
import information from '../../styles/information.module.scss';
import Image from 'next/image';
import { useDispatch, useSelector } from 'react-redux';
import CModal from '../../component/CModal';
import { useState } from 'react';
import PinInput from 'react-pin-input';
import { transactionProcess } from '../../redux/actions/transaction';
import { useRouter } from 'next/router';
import inputStyle from '../../styles/input.module.scss';
import moment from 'moment';
// import NavbarComponent from "../component/NavbarComponent";

const ConfirmationTransaction= () =>{
   const {transaction,auth} = useSelector(state=>state);
   const [show, setShow] = useState(false);
   const [pin,setPin] = useState();
   const handleShow = () => setShow(true);
   const handleClose = () => setShow(false);
   const dispatch = useDispatch();
   const router = useRouter();
   
   const handleConfirmationTransaction = (event)=>{
      event.preventDefault();
      const data = {
         amount : transaction.dataTransaction.amount,
         recipient : transaction.dataReceiver.user.id,
         pin : pin,
         notes : transaction.dataTransaction.notes
      };
      console.log(auth.token);
      dispatch(transactionProcess(data,auth.token));
      router.push('/transaction/status');
   };
   return (
      <Layout>          
         <div className={information.information}>
            <Container className="pt-3">
               <div className="ms-3 me-3">
                  <div className="fs-5 mb-3 mt-3 fw-bold text-primary">Transfer to</div>
                  <CList>
                     <div className="ms-3 me-4">
                        <Image src={transaction.dataReceiver==null || transaction.dataReceiver.user===null || transaction.dataReceiver.user.picture==null || transaction.dataReceiver.user.picture=='undefined' ? '/images/profile.png' : transaction.dataReceiver.user.picture} width={50} height={50}/>
                     </div>
                     <div>
                        <div className="fs-4 text-primary fw-bold">{transaction.dataReceiver!==null && transaction.dataReceiver.user!==null && transaction.dataReceiver.user.fullName}</div>
                        <div className="fs-6 text-primary">{transaction.dataReceiver!==null && transaction.dataReceiver.user!==null && transaction.dataReceiver.phone}</div>
                     </div>
                  </CList>
                  {/* <div className={`${information.list} mt-3 mb-3 d-flex align-items-center`}>
                            <div className="ms-3 me-4">
                                <Image src={transaction.dataReceiver==null || transaction.dataReceiver.user===null || transaction.dataReceiver.user.picture==null || transaction.dataReceiver.user.picture=="undefined" ? "/images/profile.png" : transaction.dataReceiver.user.picture} width={50} height={50}/>
                            </div>
                            <div>
                                <div className="fs-4 text-primary fw-bold">{transaction.dataReceiver!==null && transaction.dataReceiver.user!==null && transaction.dataReceiver.user.fullName}</div>
                                <div className="fs-6 text-primary">{transaction.dataReceiver!==null && transaction.dataReceiver.user!==null && transaction.dataReceiver.phone}</div>
                            </div>
                        </div> */}
                  {/* <Row className={`${information.list} mt-3 mb-3 g-0`}>
                            <Col xs={2}>
                            <Image src={transaction.dataReceiver==null || transaction.dataReceiver.user===null || transaction.dataReceiver.user.picture==null || transaction.dataReceiver.user.picture=="undefined" ? "/images/profile.png" : transaction.dataReceiver.user.picture} width={50} height={50}/>
                            </Col>
                            <Col xs={10}>
                                <div className="fs-4 text-primary">{transaction.dataReceiver!==null && transaction.dataReceiver.user!==null && transaction.dataReceiver.user.fullName}</div>
                                <div className="fs-6 text-primary">{transaction.dataReceiver!==null && transaction.dataReceiver.user!==null && transaction.dataReceiver.phone}</div>
                            </Col>
                        </Row> */}
                  <div className="fs-5 mb-3 fw-bold text-primary">Details</div>
                  <CList>
                     <div className="ms-3">
                        <div className="fs-5 fw-bold text-primary mb-2">Amount</div>
                        <div className="fs-5 text-primary">Rp.{transaction.dataTransaction!==null && parseFloat(transaction.dataTransaction.amount).toLocaleString('id-ID')}</div>
                     </div>
                  </CList>
                  <CList>
                     <div className="ms-3">
                        <div className="fs-5 fw-bold text-primary mb-2">Balance Left</div>
                        <div className="fs-5 text-primary">Rp.{auth.balance!==null && transaction.dataTransaction!==null && transaction.dataTransaction.amount!==null && (auth.balance - parseFloat(transaction.dataTransaction.amount)).toLocaleString('id-ID')}</div>
                     </div>
                  </CList>
                  <CList>
                     <div className="ms-3">
                        <div className="fs-5 fw-bold text-primary mb-2">Date&Time</div>
                        <div className="fs-5 text-primary">{moment(new Date().toString()).format('MMM DD YYYY - HH:MM')}</div>
                     </div>
                  </CList>
                  <CList>
                     <div className="ms-3">
                        <div className="fs-5 fw-bold text-primary mb-2">Notes</div>
                        <div className="fs-5 text-primary">{transaction.dataTransaction!==null && transaction.dataTransaction.notes}</div>
                     </div>
                  </CList>
                  <div className="text-end mb-3 mt-4">
                     <CButton onClick={handleShow} className={`${inputStyle.buttonTransaction} btn-primary`}>Continue</CButton>
                     <CModal show={show} functionShow={handleShow} functionClose={handleClose} functionSave={handleConfirmationTransaction} button="Continue" title="Enter PIN to Transfer">
                        <p>Enter your 6 digits PIN for confirmation to continue transferring money.</p> 
                        <PinInput 
                           length={6} 
                           initialValue=""
                           secret
                           onChange={(value, index) => {}} 
                           type="numeric" 
                           inputMode="number"
                           onComplete={(value, index) => {
                              setPin(value);
                           }}
                           autoSelect={true}
                           inputStyle={{border:'1px solid #F73D93',borderRadius:'8px',color:'#F73D93'}}
                           regexCriteria={/^[ A-Za-z0-9_@./#&+-]*$/}
                        />
                     </CModal>
                  </div>
               </div>
            </Container>
         </div>          
      </Layout>
   );
};

export default ConfirmationTransaction;
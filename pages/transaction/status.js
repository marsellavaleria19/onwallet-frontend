// import { Button } from "bootstrap";
import { Col, Container, Row } from 'react-bootstrap';
import CButton from '../../component/CButton';
import Layout from '../../component/Layout';
import information from '../../styles/information.module.scss';
import Image from 'next/image';
import transactionStyle from '../../styles/transaction.module.scss';
import Input from '../../component/Input';
import { useSelector } from 'react-redux';
import {FaCheckCircle} from 'react-icons/fa';
import {VscError} from 'react-icons/vsc';
import Link from 'next/link';
import CList from '../../component/CList';
import inputStyle from '../../styles/input.module.scss';
import { useRouter } from 'next/router';
import moment from 'moment';

// import transaction from "../../redux/reducers/transaction";
// import NavbarComponent from "../component/NavbarComponent";

const Status= () =>{
   const {transaction,auth} = useSelector(state=>state);
   const router = useRouter();

   return (
      <Layout>          
         <div className={information.information}>
            <Container className="pt-3">
               <div className="me-3 ms-3">
                  {
                     !transaction.isError ?
                        <div className="text-center mb-5">
                           <div className={`${transactionStyle.iconStatus} text-primary mt-5`}>
                              <FaCheckCircle/>
                           </div>
                           <h1 className="mt-3 text-primary">Transfer Success</h1>
                        </div> 
                        : 
                        <div className="text-center mb-5">
                           <div className={`${transactionStyle.iconStatus} text-primary mt-5`}>
                              <VscError/>
                           </div>
                           <h1 className="mt-3 text-primary">Transfer Failed</h1>
                           <p className='text-primary mt-3'>We can’t transfer your money at the moment, we recommend you to check your internet connection and try again.</p>
                        </div>
                        
                  }
                  <CList>
                     <div className="ms-3">
                        <div className="fs-5 fw-bold text-primary">Amount</div>
                        <div className="fs-5 text-primary">Rp. {transaction.dataTransaction!==null && Number(transaction.dataTransaction.amount).toLocaleString('id-ID')}</div>
                     </div>
                  </CList>
                  <CList>
                     <div className="ms-3">
                        <div className="fs-5 fw-bold text-primary">Balance Left</div>
                        <div className="fs-5 text-primary">Rp. {auth.balance!==null && Number(auth.balance).toLocaleString('id-ID')}</div>
                     </div>
                  </CList>
                  <CList>
                     <div className="ms-3">
                        <div className="fs-5 fw-bold text-primary">Date&Time</div>
                        <div className="fs-5 text-primary">{moment(new Date().toString()).format('MMM DD YYYY - HH:MM')}</div>
                     </div>
                  </CList>
                  <CList>
                     <div className="ms-3">
                        <div className="fs-5 fw-bold text-primary">Notes</div>
                        <div className="fs-5 text-primary">{transaction.dataTransaction!==null && transaction.dataTransaction.notes}</div>
                     </div>
                  </CList>
                  <div className="fs-5 ms-3 fw-bold text-primary mb-4">Transfer</div>
                  <CList>
                     <div className="ms-3 me-3">
                        <Image src={transaction.dataReceiver===null || transaction.dataReceiver.user==null || transaction.dataReceiver.user.picture===null || transaction.dataReceiver.user.picture==='undefiend' ? '/images/profile.png' : transaction.dataReceiver.user.picture} width={50} height={50}/>
                     </div>
                     <div>
                        <div className="fs-5 text-primary fw-bold">{transaction.dataReceiver!==null && transaction.dataReceiver.user!==null && transaction.dataReceiver.user.fullName }</div>
                        <div className="fs-5 text-primary">{transaction.dataReceiver!==null && transaction.dataReceiver.user!==null && transaction.dataReceiver.phone}</div>
                     </div>
                  </CList>
                  <div className="text-end mb-3 me-3">
                     {
                        transaction.isError ? <CButton className={`${inputStyle.buttonTransaction} btn-primary`} onClick={()=>router.push('/transaction/confirmation')}>Try Again</CButton> :
                           <div className='d-sm-flex justify-content-end'>
                              <CButton className={`${inputStyle.buttonTransaction} me-2`} >Download PDF</CButton>
                              <CButton className={inputStyle.buttonTransaction} onClick={()=>router.push('/home')}>Back to Home</CButton>
                           </div>
                     }   
                  </div>
               </div>
            </Container>
         </div>          
      </Layout>
   );
};

export default Status;
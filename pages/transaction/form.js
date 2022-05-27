// import { Button } from "bootstrap";
import { Col, Container, Row } from 'react-bootstrap';
import {FaTrash} from 'react-icons/fa';
import Layout from '../../component/Layout';
import information from '../../styles/information.module.scss';
import transactionStyle from '../../styles/transaction.module.scss';
import input from '../../styles/input.module.scss';
import Image from 'next/image';
import Input from '../../component/Input';
import CButton from '../../component/CButton';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { getAllDataUser } from '../../redux/actions/user';
import { useSelector,useDispatch } from 'react-redux';
import {FaPencilAlt} from 'react-icons/fa';
import { Form } from 'react-bootstrap';
import { getDataTransaction } from '../../redux/actions/transaction';
import { validation } from '../../helpers/validation';
// import NavbarComponent from "../component/NavbarComponent";

const InputTransfer= () =>{
   const {auth,transaction} = useSelector(state=>state);
   const route = useRouter();
   const [error,setError] = useState({});
   const [amount,setAmount] = useState(0);
   const dispatch = useDispatch();
    
   const handleTransaction = (event)=>{
      event.preventDefault();
      const data = {amount:amount.toString()};
      const requirement = {
         amount:'required|number'
      };
      var notes =  event.target.elements['notes'].value;
      var validate = validation(data,requirement);
      if(Object.keys(validate).length==0){
         if(amount<10000){
            validate.amount = 'amount must be grather than 10.000';
         }
         if(auth.balance!==null){
            if(amount > auth.balance){
               validate.amount = 'the balance is not sufficient';
            }
         }
      }
      if(Object.keys(validate).length > 0){
         setError(validate);
      }else{
         dispatch(getDataTransaction(amount,notes,transaction.dataReceiver.user.id));
         route.push('/transaction/confirmation');
         setError({});
      }
   };

   const handleChange = (event) =>{
      console.log('masuk!!');
      let value = event.target.value;
      if(event.target.name=='amount'){
         setAmount(value);
      }
   };


   return (  
      <Layout>          
         <div className={information.information}>
            <Container className="pt-5">
               <div className="ms-3 me-4">
                  <div className="fs-4 mb-5 fw-bold text-primary">Transfer Money</div>
                  <div className={`${information.list} mt-3 mb-3 ms-2 me-2 d-flex align-items-center`}>
                     <div className="ms-3 me-4">
                        <Image src={transaction.dataReceiver==null || transaction.dataReceiver.user===null || transaction.dataReceiver.user.picture==null || transaction.dataReceiver.user.picture=='undefined' ? '/images/profile.png' : transaction.dataReceiver.user.picture} width={50} height={50}/>
                     </div>
                     <div>   
                        <div className="fs-5 text-primary fw-bold">{transaction.dataReceiver!==null && transaction.dataReceiver.user!==null && transaction.dataReceiver.user.fullName}</div>
                        <div className="fs-6 text-primary mt-2">{transaction.dataReceiver!==null && transaction.dataReceiver.user!==null && transaction.dataReceiver.phone}</div>
                     </div>
                  </div>
                  {/* <Row className={`${information.list} m-3`}>
                        <Col xs={2}>
                            <Image src={transaction.dataReceiver==null || transaction.dataReceiver.user===null || transaction.dataReceiver.user.picture==null || transaction.dataReceiver.user.picture=="undefined" ? "/images/profile.png" : transaction.dataReceiver.user.picture} width={50} height={50}/>
                        </Col>
                        <Col xs={5}>
                            <div className="fs-4 fw-bold text-primary">{transaction.dataReceiver!==null && transaction.dataReceiver.user!==null && transaction.dataReceiver.user.fullName}</div>
                            <div className="fs-6 text-primary">{transaction.dataReceiver!==null && transaction.dataReceiver.user!==null && transaction.dataReceiver.phone}</div>
                        </Col>
                    </Row> */}
                  <div className="mt-5 mb-5 ms-3">
                     <p className="fs-6 text-primary">Type the amount you want to transfer and then press continue to the next steps.</p>
                  </div>
                  <Form className="text-center mt-5 ms-3" onSubmit={handleTransaction}>
                     <div className="mb-5">
                        <Input name="amount" className={transactionStyle.textTransfer} type="number" value={amount} onChange={handleChange}/>
                     </div>
                     {error!==null && error.amount ? <div className={input.error}>{error.amount}</div> : '' }
                     <div className="fs-5 fw-bold mb-5 text-primary">Rp {auth.balance!==null? auth.balance.toLocaleString('id-ID') : 0} Available</div>
                     <div className={`${input.inputContainer} mt-5 mb-5 me-3`}>
                        <FaPencilAlt/>
                        <Input type="text" name="notes" className={input.textLoginSignup} placeholder="Add some note"/>
                     </div>
                     <div className="text-end mb-4">
                        <CButton type="submit" className={input.buttonTransaction}>Continue</CButton>
                     </div>
                  </Form>
               </div>
                    
            </Container>
         </div>          
      </Layout>
   );
};

export default InputTransfer;
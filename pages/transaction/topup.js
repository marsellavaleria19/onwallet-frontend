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
import {addTopup } from '../../redux/actions/transaction';
import CModalError from '../../component/CModalError';
import CModalLoading from '../../component/CModalLoading';
import CModalSuccess from '../../component/CModalSuccess';
import { validation } from '../../helpers/validation';
// import NavbarComponent from "../component/NavbarComponent";

const Topup= () =>{
   const {transaction,auth} = useSelector(state=>state);
   const route = useRouter();
   const [error,setError] = useState({});
   const dispatch = useDispatch();
   const [showModalError,setShowModalError] = useState(false);
   const [showModalSuccess,setShowModalSuccess] = useState(false);
   const [showModalLoading,setShowModalLoading] = useState(false);
   const handleCloseLoading = () => setShowModalLoading(false);
   const handleCloseError = () => setShowModalError(false);
   const handleCloseSuccess = () => setShowModalSuccess(false);
   var [messageError,setMessageError] = useState('');
   var [messageSuccess,setMessageSuccess] = useState('');
   const [control,setControl] = useState(false);
    
   useEffect(()=>{
      setShowModalLoading(transaction.isLoading);
      if(transaction.isLoading==false && control==true){
         if(transaction.isError){
            messageError = transaction.errMessage;
            setMessageError(messageError);
            setShowModalError(true);
         }else{
            messageSuccess = transaction.message;
            setMessageSuccess(messageSuccess);
            setShowModalSuccess(true);
         }
         setControl(false);
      }
   },[transaction.isLoading]);

   const handleTopup = (event)=>{
      event.preventDefault();
      var amount =  event.target.elements['amount'].value;
      const data = {
         amount : amount
      };

      const requirement = {
         amount : 'required|number'
      };

      var validate = validation(data,requirement);
      if(Object.keys(validate).length == 0){
         if(amount<=10000){
            validate.amount = 'amount must be grather than 10000';
         }
      }
      
      if(Object.keys(validate).length > 0){
         setError(validate);
      }else{
         dispatch(addTopup(amount,auth.token));
         setControl(true);
         setError({});
      }
   };

   const goToHomepage = ()=>{
      route.push('/home');
   };
   // const handleChange = (event) =>{
   //     console.log("masuk!!")
   //     let value = event.target.value
   //     if(event.target.name=="amount"){
   //         setAmount(value)
   //     }
   // }


   return (  
      <Layout>          
         <div className={information.information}>
            <Container className="pt-4">
               <div className="ms-3 me-3">
                  <div className="fs-4 mb-5 fw-bold text-primary">Topup</div>
                  <div className="mt-5 mb-5 ms-3">
                     <p className="fs-6 text-primary">Type the amount you want to topup.</p>
                  </div>
                  <CModalLoading show={showModalLoading} close={handleCloseLoading}/>
                  {
                     messageError!=='' && <CModalError message={messageError} show={showModalError} close={handleCloseError}/> 
                  }
                  {
                     messageSuccess!=='' && <CModalSuccess message={messageSuccess} show={showModalSuccess} close={handleCloseSuccess} button="Go to home" functionHandle={goToHomepage}/>
                  }
                  <Form className="text-center mt-5 ms-3 me-3" onSubmit={handleTopup}>
                     <div className={`${input.inputContainer} mt-5 mb-5`}>
                        <Input type="text" name="amount" className={input.textLoginSignup} placeholder="Amount"/>
                     </div>
                     {error!==null && error.amount ? <div className={input.error}>{error.amount}</div> : '' }
                     <div className="text-end mb-4">
                        <CButton type="submit" className={input.buttonTransaction}>Topup</CButton>
                     </div>
                  </Form>
               </div>
              
            </Container>
         </div>          
      </Layout>
   );
};

export default Topup;
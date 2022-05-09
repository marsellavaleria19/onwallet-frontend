// import { Button } from "bootstrap";
import { Col, Container, Row,Form, Alert } from 'react-bootstrap';
import CButton from '../../component/CButton';
import Layout from '../../component/Layout';
import information from '../../styles/information.module.scss';
import input from '../../styles/input.module.scss';
import Image from 'next/image';
import Input from '../../component/Input';
import {AiOutlinePhone} from 'react-icons/ai';
import { useEffect, useState } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { addPhoneNumber } from '../../redux/actions/phone';
import { useRouter } from 'next/router';
import CModalError from '../../component/CModalError';
import CModalLoading from '../../component/CModalLoading';
import CModalSuccess from '../../component/CModalSuccess';
import { validation } from '../../helpers/validation';
// import NavbarComponent from "../component/NavbarComponent";

const AddPhoneNumber= () =>{
   const {auth,phone} = useSelector(state=>state);
   const [error,setError] = useState({});
   const [control,setControl] = useState(false);
   const [showModalError,setShowModalError] = useState(false);
   const [showModalSuccess,setShowModalSuccess] = useState(false);
   const [showModalLoading,setShowModalLoading] = useState(false);
   const handleCloseLoading = () => setShowModalLoading(false);
   const handleCloseError = () => setShowModalError(false);
   const handleCloseSuccess = () => setShowModalSuccess(false);
   var [messageError,setMessageError] = useState('');
   var [messageSuccess,setMessageSuccess] = useState('');
   const route = useRouter();
   const dispatch = useDispatch();

   useEffect(()=>{
      setShowModalLoading(phone.isLoading);
      if(phone.isLoading==false && control==true){
         if(phone.isError){
            messageError = phone.errMessage;
            setMessageError(messageError);
            setShowModalError(true);
         }else{
            messageSuccess = phone.message;
            setMessageSuccess(messageSuccess);
            setShowModalSuccess(true);
         }
         setControl(false);
      }
   },[phone.isLoading]);

   const goToLManagePhoneNumber = ()=>{
      route.push('/profile/manage-phone-number');
   };

   const handlePhoneNumber = (event)=>{
      event.preventDefault();
      var phoneNumber = event.target.elements['phone'].value;
      const data = {
         'phone number' : phoneNumber
      };

      const requirement = {
         'phone number' : 'required|phone'
      };

      var validate = validation(data,requirement);
      console.log(validate);
      if(Object.keys(validate).length > 0){
         setError(validate);
      }else{
         dispatch(addPhoneNumber(data['phone number'],auth.token));
         setControl(true);
      }
   };

   return (
      <Layout>          
         <div className={`${information.information}`}>
            <Container className="pt-3">
               <div className="ms-5 me-5">
                  <div className="fs-5 mb-3 fw-bold text-primary mt-5">Add Phone Number</div>
                  <p className="text-primary">Add at least one phone number for the transfer ID so you can start transfering your money to another user.</p>
                  <Form className="text-center mt-5" onSubmit={handlePhoneNumber}>
                     <CModalLoading show={showModalLoading} close={handleCloseLoading}/>
                     {
                        messageError!=='' && <CModalError message={messageError} show={showModalError} close={handleCloseError}/> 
                     }
                     {
                        messageSuccess!=='' && <CModalSuccess message={messageSuccess} show={showModalSuccess} close={handleCloseSuccess} button='Go to manage number phone' functionHandle={goToLManagePhoneNumber}/>
                     }
                     <div className={`${input.inputContainer} mt-5`}>
                        <AiOutlinePhone/>
                        <Input type="text" name="phone" className={input.textLoginSignup} placeholder="Phone"/>
                     </div>
                     {error!==null && error['phone number'] ? <div className={input.error}>{error['phone number']}</div> : '' }
                     <div className="mt-5">
                        <CButton type="submit" className={`${input.button} btn-primary mb-5`}>Change Phone Number</CButton>
                     </div>
                  </Form>
               </div>
            </Container>
         </div>          
      </Layout>
   );
};

export default AddPhoneNumber;
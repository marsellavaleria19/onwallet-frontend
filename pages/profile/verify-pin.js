// import { Button } from "bootstrap";
import { Col, Container, Row,Form,Alert } from 'react-bootstrap';
import CButton from '../../component/CButton';
import Layout from '../../component/Layout';
import information from '../../styles/information.module.scss';
import PinInput from 'react-pin-input';
import { useState,useEffect } from 'react';
import { changePinProcess,saveOldPin } from '../../redux/actions/changePin';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import CModalLoading from '../../component/CModalLoading';
import CModalError from '../../component/CModalError';
import CModalSuccess from '../../component/CModalSuccess';
// import NavbarComponent from "../component/NavbarComponent";

const VerifyPin= () =>{
   const {auth,changePin} = useSelector(state=>state);
   const [pin,setPin] = useState(0);
   const [complete,setComplete] = useState(false);
   const [error,setError] = useState('');
   const dispatch = useDispatch();
   const route  = useRouter();
   const [control,setControl] = useState(false);
   const [showModalError,setShowModalError] = useState(false);
   const [showModalSuccess,setShowModalSuccess] = useState(false);
   const [showModalLoading,setShowModalLoading] = useState(false);
   const handleCloseLoading = () => setShowModalLoading(false);
   const handleCloseError = () => setShowModalError(false);
   const handleCloseSuccess = () => setShowModalSuccess(false);
   var [messageError,setMessageError] = useState('');
   var [messageSuccess,setMessageSuccess] = useState('');

   useEffect(()=>{
      setShowModalLoading(changePin.isLoading);
      if(changePin.isLoading==false && control==true){
         if(changePin.isError){
            messageError = changePin.errMessage;
            setMessageError(messageError);
            console.log(messageError);
            setShowModalError(true);
         }else{
            dispatch(saveOldPin(pin));
            route.push('/profile/change-pin');
         }
         setControl(false);
      }
     
   },[changePin.isLoading]);

   const handlePin = (event)=>{
      event.preventDefault();
      dispatch(changePinProcess(pin,pin,auth.token));
      setControl(true);
   };

   return (
      <Layout>          
         <div className={information.information}>
            <Container className="pt-5">
               <div className="fs-5 mb-3 ms-4 fw-bold text-primary">Change Pin</div>
               <p className="ms-4 text-primary">Enter your current 6 digits On-wallet PIN below to continue to the next steps.</p>
               <Form className="text-center mt-5" onSubmit={handlePin}>
                  <CModalLoading show={showModalLoading} close={handleCloseLoading}/>
                  {
                     messageError!=='' && <CModalError message={messageError} show={showModalError} close={handleCloseError}/> 
                  }
                  <PinInput 
                     length={6} 
                     initialValue=""
                     onChange={(value, index) => {
                        setComplete(false);
                     }} 
                     type="numeric" 
                     secret
                     inputMode="number"
                     onComplete={(value, index) => {
                        console.log('complete!!');
                        setPin(value);
                        setComplete(true);
                     }}
                     autoSelect={true}
                     regexCriteria={/^[ A-Za-z0-9_@./#&+-]*$/}
                  />
                  <div className="mt-5">
                     <CButton disabled={!complete} type="submit">Continue</CButton>
                     {/* {
                                    !complete ? <CButton disabled>Change Pin</CButton> : <CButton type="submit">Continue</CButton>
                                } */}
                  </div>
               </Form>
            </Container>
         </div>          
      </Layout>
   );
};

export default VerifyPin;
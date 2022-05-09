// import { Button } from "bootstrap";
import { Col, Container, Row,Form,Alert } from 'react-bootstrap';
import CButton from '../../component/CButton';
import Layout from '../../component/Layout';
import information from '../../styles/information.module.scss';
import PinInput from 'react-pin-input';
import { useState,useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changePinProcess } from '../../redux/actions/changePin';
import CModalError from '../../component/CModalError';
import CModalLoading from '../../component/CModalLoading';
import CModalSuccess from '../../component/CModalSuccess';
// import NavbarComponent from "../component/NavbarComponent";

const ChangePin= () =>{
   const {auth} = useSelector(state=>state);
   const {changePin} = useSelector(state=>state);
   const [pin,setPin] = useState(0);
   const [complete,setComplete] = useState(false);
   const [error,setError] = useState('');
   const [showModalError,setShowModalError] = useState(false);
   const [showModalSuccess,setShowModalSuccess] = useState(false);
   const [showModalLoading,setShowModalLoading] = useState(false);
   const handleCloseLoading = () => setShowModalLoading(false);
   const handleCloseError = () => setShowModalError(false);
   const handleCloseSuccess = () => setShowModalSuccess(false);
   var [messageError,setMessageError] = useState('');
   var [messageSuccess,setMessageSuccess] = useState('');
   const [control,setControl] = useState(false);
   const dispatch = useDispatch();

   useEffect(()=>{
      setShowModalLoading(changePin.isLoading);
      if(changePin.isLoading==false && control==true){
         if(changePin.isError){
            messageError = changePin.errMessage;
            setMessageError(messageError);
            setShowModalError(true);
         }else{
            messageSuccess = changePin.message;
            setMessageSuccess(messageSuccess);
            setShowModalSuccess(true);
         }
         setControl(false);
      }
   },[changePin.isLoading]);

   const handlePin = (event)=>{
      event.preventDefault();
      dispatch(changePinProcess(changePin.data,pin,auth.token));
      setControl(true);
   };

   return (
      <Layout>          
         <div className={information.information}>
            <CModalLoading show={showModalLoading} close={handleCloseLoading}/>
            {
               messageError!=='' && <CModalError message={messageError} show={showModalError} close={handleCloseError}/> 
            }
            {
               messageSuccess!=='' && <CModalSuccess message={messageSuccess} show={showModalSuccess} close={handleCloseSuccess}/>
            }
            <Container className="pt-5">
               <div className="fs-5 mb-3 ms-4 fw-bold text-primary">Change Pin</div>
               <p className="ms-4 text-primary">Type your new 6 digits security PIN to use in On-wallet..</p>
               <Form className="text-center mt-5" onSubmit={handlePin}>
                  <PinInput 
                     length={6} 
                     initialValue=""
                     onChange={(value, index) => {
                        setComplete(false);
                     }} 
                     type="numeric" 
                     inputMode="number"
                     secret
                     onComplete={(value, index) => {
                        console.log('complete!!');
                        setPin(value);
                        setComplete(true);
                     }}
                     autoSelect={true}
                     regexCriteria={/^[ A-Za-z0-9_@./#&+-]*$/}
                  />
                  <div className="mt-5">
                     <CButton disabled={!complete} type="submit">Change Pin</CButton> 
                     {/* {
                                    !complete ? <CButton disabled>Change Pin</CButton> : <CButton type="submit">Change Pin</CButton>
                                } */}
                  </div>
               </Form>
            </Container>
         </div>          
      </Layout>
   );
};

export default ChangePin;
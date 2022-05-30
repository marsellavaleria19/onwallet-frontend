// import { Button } from "bootstrap";
import React,{useEffect, useState} from 'react';
import CButton from '../../component/CButton';
import input from '../../styles/input.module.scss';
import LayoutLogin from '../../component/LayoutLogin';
import PinInput from 'react-pin-input';
import { registrationProcess } from '../../redux/actions/registration';
import {useSelector,useDispatch} from 'react-redux';
import { useRouter } from 'next/router';
import CModalError from '../../component/CModalError';
import CModalLoading from '../../component/CModalLoading';
import { ScatterController } from 'chart.js';
// import NavbarComponent from "../component/NavbarComponent";

const VerifyPin = () =>{
   const {registration} = useSelector(state=>state);
   const [pin,setPin] = useState(null);
   const [error,setError] = useState(false);
   const router = useRouter();
   var [messageError,setMessageError] = useState('');
   const handleCloseError = () => setShowModalError(false);
   const [showModalError,setShowModalError] = useState(false);
   const [showModalLoading,setShowModalLoading] = useState(false);
   const handleCloseLoading = () => setShowModalLoading(false);
   const[control,setControl] = useState(false);
   const [complete,setComplete] = useState(false);
   const dispatch = useDispatch();

   useEffect(()=>{
      setShowModalLoading(registration.isLoading);
      if(registration.isLoading==false && control==true){
         if(registration.isError){
            messageError = registration.errMessage;
            setMessageError(messageError);
            setShowModalError(true);
         }
         setControl(false);
      }
   },[registration.isLoading]);

   const handlePin = (event)=>{
      event.preventDefault();
      if(pin!==null){
         dispatch(registrationProcess(registration.data,pin));
         router.push('/register/success-verify');
         setControl(true);
      }else{
         setMessageError('Pin must be filled.');
         setShowModalError(true);
      }
   };

   return (
      <LayoutLogin>
         <div className="vh-100 overflow-auto">
            <form onSubmit={handlePin} className="overflow-auto p-5 me-5 mt-5">
               <CModalLoading show={showModalLoading} close={handleCloseLoading}/>
               {
                  messageError!=='' && <CModalError message={messageError} show={showModalError} close={handleCloseError}/> 
               }
               <div className="fs-1 text-primary fw-bold">Secure Your Account, Your Wallet,
                        and Your Data With 6 Digits PIN That You Created Yourself.</div>
               <div className="fs-5 text-primary mt-5">Create 6 digits pin to secure all your money and your data in On-wallet app. 
                        Keep it secret and don’t tell anyone about your On-wallet account password and the PIN.</div>
               <div className="mt-5 text-center">
                  <PinInput 
                     length={6} 
                     initialValue=""
                     secret
                     onChange={(value, index) => {}} 
                     type="numeric" 
                     inputMode="number"
                     onComplete={(value, index) => {
                        setPin(value);
                        setComplete(true);
                     }}
                     autoSelect={true}
                     inputStyle={{border:'1px solid #F73D93',borderRadius:'8px',color:'#F73D93'}}
                     regexCriteria={/^[ A-Za-z0-9_@./#&+-]*$/}
                  />
               </div>
               <div className="mt-5">
                  <CButton type="submit" disabled={!complete} className={input.button}>Confirm</CButton>
               </div>
            </form>
         </div>
      </LayoutLogin>
   );
};

export default VerifyPin;
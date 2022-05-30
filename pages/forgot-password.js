// import { Button } from "bootstrap";
import {Form,Alert} from 'react-bootstrap';
import CButton from '../component/CButton';
import Input from '../component/Input';
// import login from "../styles/form-login.module.scss";
import input from '../styles/input.module.scss';
// import {MdOutlineMailOutline} from "react-icons/md"
import {BiLockAlt} from 'react-icons/bi';
import LayoutLogin from '../component/LayoutLogin';
import { validation } from '../helpers/validation';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { forgotPasswordProcess } from '../redux/actions/forgotPassword';
import CModalError from '../component/CModalError';
import CModalLoading from '../component/CModalLoading';
// import NavbarComponent from "../component/NavbarComponent";

const ForgotPassword = () =>{
   const {auth,forgotPassword} = useSelector(state=>state);
   const [error,setError] = useState({});
   const [success,setSuccess] = useState({});
   const dispatch = useDispatch();
   const route = useRouter();
   const [dataOtp,setDataOtp] = useState(route.query.otp);
   const [control,setControl] = useState(false);
   const [showModalError,setShowModalError] = useState(false);
   const [showModalLoading,setShowModalLoading] = useState(false);
   const handleCloseLoading = () => setShowModalLoading(false);
   const handleCloseError = () => setShowModalError(false);
   var [messageError,setMessageError] = useState('');
   var [messageSuccess,setMessageSuccess] = useState('');

   useEffect(()=>{
      setDataOtp(route.query.otp);
   },[route.query]);

   useEffect(()=>{
      if(forgotPassword.isLoading==false && control==true){
         if(forgotPassword.isError){
            messageError= forgotPassword.errMessage;
            setMessageError(messageError);
            setShowModalError(true);
         }else{
            route.push('/forgot-password/success-verify');
         }
      }
   },[forgotPassword.isLoading]);

   const handleForgotPassword = (event)=>{
      event.preventDefault();
      var data = {};
      data['new password'] = event.target.elements['newPassword'].value;
      data['confirm password'] = event.target.elements['confirmPassword'].value;
      const requirement = {
         'new password' :'required',
         'confirm password' : 'required'
      };

      var validate = validation(data,requirement);
      console.log(data);

      if(Object.keys(validate).length > 0){
         setError(validate);
      }else{
         if(data['new password']!==data['confirm password']){
            messageError = 'New password and confirm password not match';
            setMessageError(messageError);
            setShowModalError(true);
         }else{
            data.otp = dataOtp;
            dispatch(forgotPasswordProcess(data));
            setControl(true);
         }
      }
   };

   return (
      <LayoutLogin>
         <div className="vh-100 overflow-auto">
            <Form className="overflow-auto p-5 ms-3 me-5 mt-5" onSubmit={handleForgotPassword}>
               <div className="fs-1 text-primary fw-bold">Did You Forgot Your Password? Don’t Worry, You Can Reset Your Password In a Minutes.</div>
               <div className="fs-5 text-primary mt-5">Now you can create a new password for your On-Wallet account. Type your password twice so we can confirm your new passsword.</div>
               <div className="mt-5">
                  <CModalLoading show={showModalLoading} close={handleCloseLoading}/>
                  {
                     messageError!=='' && <CModalError message={messageError} show={showModalError} close={handleCloseError}/> 
                  }
                  <div className={`${input.inputContainer} mt-5`}>
                     <BiLockAlt/><Input type="password" name="newPassword" className={input.textLoginSignup} placeholder="Enter your password"/>
                  </div>
                  {error!==null && error['new password'] ? <div className={input.error}>{error['new password']}</div> : '' }
                  <div className={`${input.inputContainer} mt-5`}>
                     <BiLockAlt/><Input type="password" name="confirmPassword" className={input.textLoginSignup} placeholder="Confirm your password"/>
                  </div>
                  {error!==null && error['confirm password'] ? <div className={input.error}>{error['confirm password']}</div> : '' }
                  <div className="mt-5">
                     <CButton type="submit" className={input.button}>Reset</CButton>
                  </div>
               </div>
            </Form>
         </div>   
      </LayoutLogin>   
   );
};

export default ForgotPassword;
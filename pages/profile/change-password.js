// import { Button } from "bootstrap";
import { Col, Container, Row,Form,Alert } from 'react-bootstrap';
import CButton from '../../component/CButton';
import Layout from '../../component/Layout';
import information from '../../styles/information.module.scss';
import input from '../../styles/input.module.scss';
import { changePasswordProcess } from '../../redux/actions/changePassword';
import Image from 'next/image';
import Input from '../../component/Input';
import  {BiLockAlt} from 'react-icons/bi';
import { validationPassword } from '../../helpers/validation';
import { useState,useEffect } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import CModalError from '../../component/CModalError';
import CModalLoading from '../../component/CModalLoading';
import CModalSuccess from '../../component/CModalSuccess';
import { validation } from '../../helpers/validation';
// import NavbarComponent from "../component/NavbarComponent";

const ChangePassword= () =>{
   const {changePassword,auth} = useSelector(state=>state);
   const [error,setError] = useState({});
   const dispatch = useDispatch();
   const [success,setSuccess] = useState(false);
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
      setShowModalLoading(changePassword.isLoading);
      if(changePassword.isLoading==false && control==true){
         if(changePassword.isError){
            messageError = changePassword.errMessage;
            setMessageError(messageError);
            setShowModalError(true);
         }else{
            messageSuccess = changePassword.message;
            setMessageSuccess(messageSuccess);
            setShowModalSuccess(true);
         }
         setControl(false);
      }
   },[changePassword.isLoading]);

   //  useEffect(()=>{
   //     if(success){
   //         setSuccess(true)
   //     }
   //  },[success])

   const handlePassword = (event)=>{
      event.preventDefault();
      var data = {};
      data['current password'] = event.target.elements['currentPassword'].value;
      data['new password'] = event.target.elements['newPassword'].value;
      data['repeat password'] = event.target.elements['repeatPassword'].value;
      const requirement = {
         'current password' : 'required',
         'new password' : 'required',
         'repeat password' : 'required'
      };

      var validate = validation(data,requirement);
      console.log(data);
      if(Object.keys(validate).length > 0){
         setError(validate);
      }else if(data['new password']!==data['repeat password']){
         messageError = 'New password and repeat password not match';
         setMessageError(messageError);
         setShowModalError(true);
      }else{
         dispatch(changePasswordProcess(data,auth.token));
         setControl(true);
         setError({});
      }
   };

   return (
      <Layout>          
         <div className={information.information}>
            <Container className="pt-5">
               <div className="fs-5 mb-3 ms-4 fw-bold text-primary">Change Password</div>
               <p className="ms-4 text-primary">You must enter your current password and then type your new password twice.</p>
               <Form className={`${input.formPassword} pe-5 ps-5`} onSubmit={handlePassword}>
                  <CModalLoading show={showModalLoading} close={handleCloseLoading}/>
                  {
                     messageError!=='' && <CModalError message={messageError} show={showModalError} close={handleCloseError}/> 
                  }
                  {
                     messageSuccess!=='' && <CModalSuccess message={messageSuccess} show={showModalSuccess} close={handleCloseSuccess}/>
                  }
                  <div className={`${input.inputContainer} mt-5`}>
                     <BiLockAlt/>
                     <Input type="password" name="currentPassword" className={input.textLoginSignup} placeholder="Current Password "/>
                  </div>
                  {error!==null && error['current password'] ? <div className={input.error}>{error['current password']}</div> : '' }
                  <div className={`${input.inputContainer} mt-5`}>
                     <BiLockAlt/>
                     <Input type="password" name="newPassword" className={input.textLoginSignup} placeholder="New Password "/>
                  </div>
                  {error!==null && error['new password'] ? <div className={input.error}>{error['new password']}</div> : '' }
                  <div className={`${input.inputContainer} mt-5`}>
                     <BiLockAlt/>
                     <Input type="password" name="repeatPassword" className={input.textLoginSignup} placeholder="Repeat New Password "/>
                  </div>
                  {error!==null && error['repeat password'] ? <div className={input.error}>{error['repeat password']}</div> : '' }
                  <div>
                     <CButton className={`${input.buttonPassword}`} type="submit">Change Password</CButton>
                  </div>
               </Form>
            </Container>
         </div>          
      </Layout>
   );
};

export default ChangePassword;
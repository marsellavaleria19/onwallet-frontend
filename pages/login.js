// import { Button } from "bootstrap";
import { Col, Container, Row } from 'react-bootstrap';
import CButton from '../component/CButton';
import Input from '../component/Input';
import input from '../styles/input.module.scss';
import {MdOutlineMailOutline} from 'react-icons/md';
import {BiLockAlt,} from 'react-icons/bi';
import LayoutLogin from '../component/LayoutLogin';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Form,Alert} from 'react-bootstrap';
import { useSelector,useDispatch } from 'react-redux';
import { loginProcess } from '../redux/actions/auth';
import { useRouter } from 'next/router';
import CModalLoading from '../component/CModalLoading';
import CModalError from '../component/CModalError';
import CModalSuccess from '../component/CModalSuccess';
import { validation } from '../helpers/validation';
// import NavbarComponent from "../component/NavbarComponent";

const Login = () =>{

   const {auth} = useSelector(state=>state);
   const dispatch = useDispatch();
   const [error,setError] = useState({});
   const router = useRouter();
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
      dispatch({
         type:'CLEAR_AUTH'
      });
      setError({});
      setControl(false);
   },[]);

   useEffect(()=>{
      setShowModalLoading(auth.isLoading);
      if(auth.isLoading==false && control==true){
         if(auth.isError){
            messageError = auth.errMessage;
            setMessageError(messageError);
            setShowModalError(true);
         }else{
            console.log(auth.message);
            messageSuccess = auth.message;
            setMessageSuccess(messageSuccess);
            setShowModalSuccess(true);
         }
         setControl(false);
      }
   },[auth.isLoading]);

   //handle show success modal after close
   useEffect(()=>{
      if(showModalSuccess==false || showModalError==false){
         if(auth.token!==null){
            router.push('/home');
         }
      }
   },[showModalSuccess,showModalError]);
  

   const loginHandle = (event)=>{
      console.log('masuk!!');
      event.preventDefault();
      var email = event.target.elements['email'].value;
      var password =  event.target.elements['password'].value;
      const data = {email,password};
      const requirement = {
         email : 'required|email',
         password : 'required'
      };
      
      var validate = validation(data,requirement);

      if(Object.keys(validate).length > 0){
         setError(validate);
      }
      else{
         dispatch(loginProcess(email,password));  
         setControl(true);         
      }
         
   };
    
   return (
      <LayoutLogin>
         <div className="vh-100 overflow-auto">
            <Form className="overflow-auto p-5 me-5 mt-5" onSubmit={loginHandle}>
               <div className="ms-3 me-3 mt-5">
                  <div className="fs-1 text-primary fw-bold">Start Accessing Banking Needs
                            With All Devices and All Platforms With 30.000+ Users</div>
                  <div className="fs-5 text-primary mt-5">Transfering money is eassier than ever, you can access Zwallet wherever you are. Desktop, laptop, mobile phone? we cover all of that for you!</div>
                  <div className="mt-5">
                     <CModalLoading show={showModalLoading} close={handleCloseLoading}/>
                     {
                        messageError!=='' && <CModalError message={messageError} show={showModalError} close={handleCloseError}/> 
                     }
                     {
                        messageSuccess!=='' && <CModalSuccess message={messageSuccess} show={showModalSuccess} close={handleCloseSuccess}/>
                     }
                     <div className={`${input.inputContainer}`}>
                        <MdOutlineMailOutline/>
                        <Input type="text" name="email" className={input.textLoginSignup} placeholder="Enter your e-mail"/>
                     </div>
                     {error!==null && error.email ? <div className={input.error}>{error.email}</div> : '' }
                     <div className={`${input.inputContainer} mt-5`}>
                        <BiLockAlt/>
                        <Input type="password" name="password" className={input.textLoginSignup} placeholder="Enter your password"/>
                     </div>
                     {error!==null && error.password ? <div className={input.error}>{error.password}</div> : '' }
                     <div className="mt-3 text-end">
                        <Link href="/forgot-password/type-email"><a className="text-primary">Forgot password?</a></Link>
                     </div>
                     <div className="mt-5">
                        <CButton type="submit" className={`${input.button}`}>Login</CButton>
                     </div>
                     <div className="text-primary mt-5 text-center">Don&apos;t have an account? Let&apos;s <Link href="/register/form"><a className="fw-bold">Signup</a></Link></div>
                  </div>
               </div>
            </Form>
         </div>   
      </LayoutLogin>   
   );
};

export default Login;
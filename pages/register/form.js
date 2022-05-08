// import { Button } from "bootstrap";
import { Col, Container, Row } from 'react-bootstrap';
import CButton from '../../component/CButton';
import Input from '../../component/Input';
import input from '../../styles/input.module.scss';
import {MdOutlineMailOutline} from 'react-icons/md';
import {BiLockAlt,} from 'react-icons/bi';
import {AiOutlineUser} from 'react-icons/ai';
import LayoutLogin from '../../component/LayoutLogin';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import { getDataRegistration } from '../../redux/actions/registration';
import { useEffect, useState } from 'react';
import { Form } from 'react-bootstrap';
import { useRouter } from 'next/router';
import CModalSuccess from '../../component/CModalSuccess';
import CModalError from '../../component/CModalError';
import CModalLoading from '../../component/CModalLoading';
import { validation } from '../../helpers/validation';
// import NavbarComponent from "../component/NavbarComponent";

const Register = () =>{
   const {password,registration} = useSelector(state=>state);
   const [error,setError] = useState({});
   const dispatch = useDispatch();
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
    
   // const validation = (data)=>{
   //    const newErrors = {};
   //    if(!data.firstname || data.firstname===''){
   //       newErrors.firstname = 'Firstname must be filled';
   //    }
   //    if(!data.lastname || data.lastname===''){
   //       newErrors.lastname = 'Lastname must be filled';
   //    }
   //    if(!data.email || data.firstnam===''){
   //       newErrors.email = 'Email must be filled';
   //    }
   //    if(!data.password || data.password===''){
   //       newErrors.password = 'Password must be filled';
   //    }
   //    return newErrors;
   // };
   
   const handleRegistration = (event)=>{
      event.preventDefault();
      var data = {};
      data.firstname = event.target.elements['firstname'].value;
      data.lastname = event.target.elements['lastname'].value;
      data.email = event.target.elements['email'].value;
      data.password = event.target.elements['password'].value;
      const requirement = {
         firstname:'required',
         lastname : 'required',
         email : 'required|email',
         password : 'required'
      };

      var validate = validation(data,requirement);
      if(Object.keys(validate).length > 0){
         setError(validate);
      }else{
         dispatch(getDataRegistration(data));
         setMessageSuccess(registration.message);
         setShowModalSuccess(true);
      }
   };

   const goToVerifyPin = ()=>{
      router.push('/register/verify-pin');
   };

   return (
      <LayoutLogin>
         <div className="vh-100 overflow-auto">
            <Form className="overflow-auto p-5 mt-5 ms-3 me-3" onSubmit={handleRegistration}>
               {
                  messageError!=='' && <CModalError message={messageError} show={showModalError} close={handleCloseError}/> 
               }
               {
                  messageSuccess!=='' && <CModalSuccess message={messageSuccess} show={showModalSuccess} close={handleCloseSuccess} button="Verify pin" functionHandle={goToVerifyPin}/>
               }
               <div className="fs-1 text-primary fw-bold">Start Accessing Banking Needs
                        With All Devices and All Platforms With 30.000+ Users</div>
               <div className="fs-5 text-primary mt-5">Transfering money is eassier than ever, 
                        you can access On-wallet wherever you are. Desktop, laptop, mobile phone? we cover all of that for you!</div>
               <div className="mt-5">
                  <div className={input.inputContainer}>
                     <AiOutlineUser/>
                     <Input type="text" name="firstname" className={input.textLoginSignup} placeholder="Enter your first name"/>
                  </div>
                  {error!==null && error.firstname ? <div className={input.error}>{error.firstname}</div> : '' }
                  <div className={`${input.inputContainer} mt-5`}>
                     <AiOutlineUser/>
                     <Input type="text" name="lastname" className={input.textLoginSignup} placeholder="Enter your last name"/>
                  </div>
                  {error!==null && error.lastname ? <div className={input.error}>{error.lastname}</div> : '' }
                  <div className={`${input.inputContainer} mt-5`}>
                     <MdOutlineMailOutline/>
                     <Input type="text" name="email" className={input.textLoginSignup} placeholder="Enter your e-mail"/>
                  </div>
                  {error!==null && error.email ? <div className={input.error}>{error.email}</div> : '' }
                  <div className={`${input.inputContainer} mt-5`}>
                     <BiLockAlt/>
                     <Input type="password" name="password" className={input.textLoginSignup} placeholder="Create your password"/>
                  </div>
                  {error!==null && error.password ? <div className={input.error}>{error.password}</div> : '' }
                  <div className="mt-5">
                     <CButton type="submit" className={input.button}>Signup</CButton>
                  </div>
                  <div className="text-primary mt-5 text-center">Already have an account? Let&apos;s <Link href="/login"><a className="fw-bold">Login</a></Link></div>
               </div>
            </Form>
         </div>
      </LayoutLogin>
   );
};

export default Register;
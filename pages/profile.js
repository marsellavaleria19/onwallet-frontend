// import { Button } from "bootstrap";
import { Col, Container, Row } from 'react-bootstrap';
import CButton from '../component/CButton';
import Layout from '../component/Layout';
import information from '../styles/information.module.scss';
import profile from '../styles/profile.module.scss';
import Image from 'next/image';
import {FaPencilAlt,FaArrowRight} from 'react-icons/fa';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import { getListPhoneUser } from '../redux/actions/phone';
import { useEffect,useState } from 'react';
import {AiOutlineArrowRight} from 'react-icons/ai';
import { useRouter } from 'next/router';
import imageProfile from '../public/images/profile.png';
import { updateDataUser } from '../redux/actions/auth';
import CModalError from '../component/CModalError';
import CModalLoading from '../component/CModalLoading';
import CModalSuccess from '../component/CModalSuccess';
// import NavbarComponent from "../component/NavbarComponent";

const PersonalInformation= () =>{
   const {auth,phone} = useSelector(state=>state);
   const [image,setImage] = useState(imageProfile);
   const dispatch = useDispatch();
   const [control,setControl] = useState(false);
   const route = useRouter();
   const [showModalError,setShowModalError] = useState(false);
   const [showModalSuccess,setShowModalSuccess] = useState(false);
   const [showModalLoading,setShowModalLoading] = useState(false);
   const handleCloseLoading = () => setShowModalLoading(false);
   const handleCloseError = () => setShowModalError(false);
   const handleCloseSuccess = () => setShowModalSuccess(false);
   var [messageError,setMessageError] = useState('');
   var [messageSuccess,setMessageSuccess] = useState('');

   useEffect(()=>{
      if(auth.user.picture!==null){
         setImage(auth.user.picture);
      }
      dispatch(getListPhoneUser(auth.token));
   },[]);

   
   useEffect(()=>{
      setShowModalLoading(auth.isLoading);
      if(auth.isLoading==false && control==true){
         if(auth.isError){
            messageError = auth.errMessage;
            setMessageError(messageError);
            setShowModalError(true);
         }else{
            messageSuccess = auth.message;
            setMessageSuccess(messageSuccess);
            setShowModalSuccess(true);
         }
      }
   },[auth.isLoading]);

   useEffect(()=>{
      if(auth.user!==null && control==true){
         setImage(auth.user.picture);
         setControl(false);
      }
   },[auth.user]);

   const chooseFiles = (e)=> {
      e.preventDefault();
      document.getElementById('fileUpload').click();
   };

   const selectedFile = (e)=>{
      e.preventDefault();
      const file = e.target.files[0];
      dispatch(updateDataUser(auth.token,file));
      setControl(true);
   };

   const handleLogout = (event)=>{
      event.preventDefault();
      dispatch({
         type : 'LOGOUT'
      });
   };
 
   return (
      <Layout>          
         <div className={information.information}>
            <Container className="pt-3">
               <div className="mb-5 ms-3">
                  <CModalLoading show={showModalLoading} close={handleCloseLoading}/>
                  {
                     messageError!=='' && <CModalError message={messageError} show={showModalError} close={handleCloseError}/> 
                  }
                  {
                     messageSuccess!=='' && <CModalSuccess message={messageSuccess} show={showModalSuccess} close={handleCloseSuccess}/>
                  }
                  <div className="text-center mt-5">
                     <Image src={image} width={80} height={80} className="img-fluid rounded"/>
                     {/* <div><Button href="/profile/personal-information"><a className="fs-5"><FaPencilAlt className="me-2"/>Edit</a></Link></div> */}
                     <input id="fileUpload" type="file" name="picture" hidden onChange={selectedFile}/>   
                     <div><CButton className={profile.buttonEdit} onClick={chooseFiles}><FaPencilAlt className="me-2"/>Edit</CButton></div>
                     <div className="fs-4 mb-2 mt-5 text-primary fw-bold">{auth.user!==null && auth.user.fullName}</div>
                     {auth.phone.length > 0 ? <div className="fs-5 text-primary">{auth.phone[0]}</div> :  <div className="fs-5 text-primary">-</div>}                        
                  </div>
               </div>
               <div className="text-center">
                  <div><CButton className={`${profile.button} btn-primary mb-3`} onClick={()=>route.push('/profile/personal-information')}><div className='d-flex justify-content-between align-items-center'>Personal Information <FaArrowRight className={`${profile.icon} me-4`}/></div></CButton></div>
                  <div><CButton className={`${profile.button} btn-primary mb-3`} onClick={()=>route.push('/profile/change-password')}><div className='d-flex justify-content-between align-items-center'>Change Password<FaArrowRight className={`${profile.icon} me-4`}/></div></CButton></div>
                  <div><CButton className={`${profile.button} btn-primary mb-3`} onClick={()=>route.push('/profile/verify-pin')}><div className='d-flex justify-content-between align-items-center'>Change PIN <FaArrowRight className={`${profile.icon} me-4`}/></div></CButton></div>
                  <div><CButton className={`${profile.button} btn-primary mb-3`} onClick={handleLogout}>Logout</CButton></div>
               </div>
            </Container>
         </div>          
      </Layout>
   );
};

export default PersonalInformation;
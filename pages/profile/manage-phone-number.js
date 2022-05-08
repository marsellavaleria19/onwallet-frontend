// import { Button } from "bootstrap";
import { Col, Container, Row } from 'react-bootstrap';
import {FaTrash} from 'react-icons/fa';
import Layout from '../../component/Layout';
import information from '../../styles/information.module.scss';
import Image from 'next/image';
import CButton from '../../component/CButton';
import { useDispatch, useSelector,connect } from 'react-redux';
import { useRouter } from 'next/router';
import { getListPhoneUser,deletePhoneNumber } from '../../redux/actions/phone';
import { useEffect, useState } from 'react';
import PhoneNumber from './add-phone-number';
import CModalConfirmation from '../../component/CModalConfirmation';
import CModalError from '../../component/CModalError';
import CModalLoading from '../../component/CModalLoading';
import CModalSuccess from '../../component/CModalSuccess';
// import NavbarComponent from "../component/NavbarComponent";

const ManagePhoneNumber= ({getListPhoneUser,deletePhoneNumber}) =>{
   const {phone,auth} = useSelector(state=>state);
   const route = useRouter();
   const [control,setControl] = useState(false);
   const dispatch = useDispatch();
   const [show, setShow] = useState(false);
   const [deleteId,setDeleteId] = useState(null);
   const handleShow = (id)=>{
      setShow(true);
      setDeleteId(id);
   };
   const handleClose = () => setShow(false);
   const [showModalError,setShowModalError] = useState(false);
   const [showModalSuccess,setShowModalSuccess] = useState(false);
   const [showModalLoading,setShowModalLoading] = useState(false);
   const handleCloseLoading = () => setShowModalLoading(false);
   const handleCloseError = () => setShowModalError(false);
   const handleCloseSuccess = () => setShowModalSuccess(false);
   var [messageError,setMessageError] = useState('');
   var [messageSuccess,setMessageSuccess] = useState('');

   useEffect(()=>{
      getListPhoneUser(auth.token);
   },[]);

    
   // useEffect(()=>{
   //    if(phone.listPhone && control){
   //       //    const token = window.localStorage.getItem("token")
   //       getListPhoneUser(auth.token);
   //    }
   // },[phone.listPhone,control]);

   useEffect(()=>{
      setShowModalLoading(phone.isLoading);
      if(phone.isLoading==false && control==true){
         getListPhoneUser(auth.token);
         if(auth.isError){
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

   const handleDeletePhone = (id)=>{
      // event.preventDefault()
      deletePhoneNumber(id,auth.token);
      setShow(false);
      setControl(true);
   };

   return (
      <Layout>          
         <div className={information.information}>
            <Container className="pt-5">
               <CModalLoading show={showModalLoading} close={handleCloseLoading}/>
               {
                  messageError!=='' && <CModalError message={messageError} show={showModalError} close={handleCloseError}/> 
               }
               {
                  messageSuccess!=='' && <CModalSuccess message={messageSuccess} show={showModalSuccess} close={handleCloseSuccess}/>
               }
               <div className="ms-5 me-5">
                  <div className="fs-5 mb-3 fw-bold text-primary">Manage Phone Number</div>
                  <p className="text-primary">You can only delete the phone number and then you must add another phone number.</p>
                  {phone !==null && phone.listPhone && phone.listPhone.map((item)=>{
                    
                     return(
                        <Row className={`${information.list} mt-5 mb-3`} key={item.id}>
                           <Col xs={6} className="text-start">
                              {
                                 item.isPrimary ? <div className="fs-5 text-primary">Primary</div> : ''
                              }
                              <div className="fs-5 text-primary fw-bold">{item.number}</div>
                           </Col>
                           <Col xs={6} className="text-end text-primary">
                              <div className="pe-3 fs-4" onClick={()=>handleShow(item.id)}>
                                 <FaTrash/>
                              </div>
                           </Col>
                        </Row>
                     );
                  })
               
                  }
                  <CModalConfirmation title={'Delete'} show={show} message={'Do you really want to delete this data? This data cannot restore.'} functionHandle={()=>handleDeletePhone(deleteId)} close={handleClose} button={'Delete'}/>  
                  <CButton className="btn-primary" onClick={()=>route.push('/profile/add-phone-number')}>Add phone number</CButton>
               </div>
            </Container>
         </div>          
      </Layout>
   );
};


const mapStateToProps = state => ({phone:state.phone,auth:state.auth});
const mapDispatchToProps = {getListPhoneUser,deletePhoneNumber};
export default connect(mapStateToProps,mapDispatchToProps)(ManagePhoneNumber);
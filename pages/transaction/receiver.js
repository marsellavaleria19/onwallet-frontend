// import { Button } from "bootstrap";
import { Col, Container, NavItem, Row } from 'react-bootstrap';
import CButton from '../../component/CButton';
import Layout from '../../component/Layout';
import information from '../../styles/information.module.scss';
import variables from '../../styles/transaction.module.scss';
import Image from 'next/image';
import Input from '../../component/Input';
import { getAllDataUser } from '../../redux/actions/user';
import { getDataReceiver } from '../../redux/actions/transaction';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { Router, useRouter } from 'next/router';
import {FaSearch,FaAngleDoubleDown} from 'react-icons/fa';
import CNotFound from '../../component/CNotFound';
// import NavbarComponent from "../component/NavbarComponent";

const Receiver = () => {
   const {user,auth} = useSelector(state=>state);
   const [listReceiver,setListReceiver] = useState([]);
   const dispatch = useDispatch();
   const route = useRouter();
   var [page,setPage] = useState(1);
   const [limit,setLimit] = useState(4);
   const [defaultLimit,setDefaultLimit] = useState(4);
   var [next,setNext] = useState(null);

   useEffect(()=>{
      dispatch(getAllDataUser(auth.token));
      setListReceiver(user.listUser);
   },[]);

   const handleReceiver = (item,phone=null)=>{
      dispatch(getDataReceiver(item,phone));
      route.push('/transaction/form');
   };

   const handleReceiverSearch = (event) =>{
      event.preventDefault();
      setListReceiver(listReceiver.splice(listReceiver,0));
      listReceiver  = [...user.listUser];
      setListReceiver(listReceiver);
      const search = event.target.value;
      const result = listReceiver.filter((item)=>item.fullName.toLowerCase().includes(search));
      setListReceiver(result);
   };

   const pagination = (page=null)=>{
      if(page!==null){
         setPage(page);
         var countLimit = defaultLimit*page;
         console.log(countLimit);
         console.log(listReceiver.length);
         setLimit(countLimit);
         setNext(countLimit);
      }
   };
  
   return (
      <Layout>          
         <div className={information.information}>
            <Container className="pt-4">
               <div className="ms-3 me-3">
                  <div className="fs-4 mb-3 fw-bold text-primary ms-2 me-2">Search Receiver</div>
                  <form onSubmit={handleReceiverSearch} id="form-search" className="mb-5">
                     <div className="d-flex position-relative">
                        <input className={`form-control ${information.formSearch}`} type="search" name="search" placeholder="Search receiver here" aria-label="Search" onChange={handleReceiverSearch}/>
                        <button className={`${information.btnSearch} position-absolute`} type="submit" disabled={true}><FaSearch/></button>
                     </div>
                  </form> 
                  <div className='mt-3'>
                     {
                        listReceiver.length>0 && auth.user!==null ? listReceiver.filter((item)=>item.id!==auth.user.id).filter((item,index)=>index<limit).map((item)=>{
                           return(
                              <>
                                 {
                                    item.phone.length > 0 ?
                                       item.phone.map((itemPhone)=>{
                                          return(
                                             <div className={`${information.list} mt-3 mb-3 d-flex align-items-center`} key={itemPhone.id} onClick={()=>handleReceiver(item,itemPhone)}>
                                                <div className="ms-3 me-4">
                                                   <Image src={item.picture===null ? '/images/profile.png' : item.picture} width={50} height={50}/>
                                                </div>
                                                <div>   
                                                   <div className="fs-5 text-primary fw-bold">{item.fullName}</div>
                                                   <div className="fs-6 text-primary mt-2">{itemPhone.number}</div>
                                                </div>
                                             </div>
                                          ); 
                                       }) 
                                       :
                                       <div className={`${information.list} mt-3 mb-3 d-flex align-items-center`} key={item.id} onClick={()=>handleReceiver(item)}>
                                          <div className="ms-3 me-4">
                                             <Image src={item.picture===null ? '/images/profile.png' : item.picture} width={50} height={50}/>
                                          </div>
                                          <div>        
                                             <div className="fs-5 text-primary fw-bold">{item.fullName}</div>
                                             <div className="fs-6 text-primary">-</div>
                                          </div>
                                            
                                       </div>
                                        
                                 //       <Row className={`${information.list} mt-3 mb-3 ms-2 me-2`} key={item.id} onClick={()=>handleReceiver(item)}>
                                 //       <Col xs={2}>
                                 //             <Image src={item.picture===null || item.picture=="undefined" ? "/images/profile.png" : item.picture} width={50} height={50}/>
                                 //         </Col>
                                 //       <Col xs={5}>
                                 //           <div className="fs-5 text-primary">{item.fullName}</div>
                                 //           <div className="fs-6 text-primary">-</div>
                                 //       </Col>
                                 //   </Row>
                                 }
                              </>
                           );
                        }): <CNotFound />
                     }
                     {next < listReceiver.length-1 ? <div className='text-center mt-5 mb-5'>
                        <CButton onClick={()=>pagination(page+1)} className={information.btnNext}>Load more <FaAngleDoubleDown/></CButton>
                     </div> :''
                     }
                  </div>
               </div>
                   
                    
                    
               {/* <Row className={`${information.list} mt-3 mb-3 ms-3`}>
                        <Col xs={2}>
                            <Image src="/images/2.png" width={50} height={50}/>
                        </Col>
                        <Col xs={5}>
                            <div className="fs-4">Jessica Keen</div>
                            <div className="fs-6">+62 811-3452-5252</div>
                        </Col>
                    </Row>
                    <Row className={`${information.list} mb-3 ms-3`}>
                        <Col xs={2}>
                            <Image src="/images/2.png" width={50} height={50}/>
                        </Col>
                        <Col xs={5}>
                            <div className="fs-4">Jessica Keen</div>
                            <div className="fs-6">+62 811-3452-5252</div>
                        </Col>
                    </Row>
                    <Row className={`${information.list} mb-3 ms-3`}>
                        <Col xs={2}>
                            <Image src="/images/2.png" width={50} height={50}/>
                        </Col>
                        <Col xs={5}>
                            <div className="fs-4">Jessica Keen</div>
                            <div className="fs-6">+62 811-3452-5252</div>
                        </Col>
                    </Row>
                    <Row className={`${information.list} mb-3 ms-3`}>
                        <Col xs={2}>
                            <Image src="/images/2.png" width={50} height={50}/>
                        </Col>
                        <Col xs={5}>
                            <div className="fs-4">Jessica Keen</div>
                            <div className="fs-6">+62 811-3452-5252</div>
                        </Col>
                    </Row> */}
            </Container>
         </div>          
      </Layout>
   );
};

export default Receiver;
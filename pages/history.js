// import { Button } from "bootstrap";
import { Container } from 'react-bootstrap';
import Layout from '../component/Layout';
import information from '../styles/information.module.scss';
import Image from 'next/image';
import {useSelector } from 'react-redux';
import {FaSearch} from 'react-icons/fa';
import CList from '../component/CList';
// import NavbarComponent from "../component/NavbarComponent";

const History = () => {
   const {user,auth,history} = useSelector(state=>state);
  

   return (
      <Layout>          
         <div className={information.information}>
            <Container className="pt-4">
               <div className="ms-3 me-3">
                  <div className='d-flex justify-content-between'>
                     <div className="fs-4 mb-3 fw-bold text-primary ms-2 me-2">Transaction History</div>
                     <form id="form-search" className="mb-4">
                        <div className="d-flex position-relative">
                           <input className="form-control" type="search" name="search" placeholder="Search history" aria-label="Search"/>
                        </div>
                     </form> 
                  </div>
                 
                  {
                     auth.user!==null && history.listHistory.length > 0 ? history.listHistory.map((itemHistory)=>{
                        return(
                           <>
                              {itemHistory.typeId==3 && itemHistory.anotherUserId!==null && itemHistory.userId==auth.user.id && <CList>
                                 <div className="ms-3 me-3">
                                    <Image src={auth.user.picture!==null ? auth.user.picture : '/images/profile.png'} width={50} height={50}/>
                                 </div>
                                 <div>
                                    <div className="fs-5 fw-bold text-primary">{auth.user.fullName}</div>
                                    <div className="fs-6 text-primary">{itemHistory.mutation_type.name}</div>
                                 </div>
                                 <div className="ms-auto me-3 text-danger fw-bold">-Rp. {Number(itemHistory.amount).toLocaleString('id-ID')}</div>
                              </CList>}
                              {
                                 itemHistory.typeId==3 && itemHistory.anotherUserId!==null && itemHistory.anotherUserId==auth.user.id && user.listUser.map((item)=>{
                                    return(               
                                       item.id===itemHistory.userId && <CList key={item.id}>
                                          <div className="ms-3 me-3">
                                             <Image src={item.picture!==null ? item.picture : '/images/profile.png'} width={50} height={50}/>
                                          </div>
                                          <div>
                                             <div className="fs-5 text-primary fw-bold">{item.fullName}</div>
                                             <div className="fs-6 text-primary">Accept</div>
                                          </div>
                                          <div className="ms-auto me-3 text-success fw-bold">+Rp. {Number(itemHistory.amount).toLocaleString('id-ID')}</div>
                                       </CList>
                                    );
                                 })         
                              }
                              {itemHistory.typeId==1 && <CList>
                                 <div className="ms-3 me-3">
                                    <Image src={auth.user.picture!==null ? auth.user.picture : '/images/profile.png'} width={50} height={50}/>
                                 </div>
                                 <div>
                                    <div className="fs-5 fw-bold text-primary">{auth.user.fullName}</div>
                                    <div className="fs-6 text-primary">{itemHistory.mutation_type.name}</div>
                                 </div>
                                 <div className="ms-auto me-3 text-success fw-bold">+Rp. {Number(itemHistory.amount).toLocaleString('id-ID')}</div>
                              </CList>}
                           </>
                        ); 
                     }) :
                        <div>No History</div>
                  }                
               </div>
            </Container>
         </div>          
      </Layout>
   );
};

export default History;
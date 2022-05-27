// import { Button } from "bootstrap";
import { Container,Col,Row,Form } from 'react-bootstrap';
import Layout from '../component/Layout';
import information from '../styles/information.module.scss';
import Image from 'next/image';
import {useSelector } from 'react-redux';
import CList from '../component/CList';
import { useEffect, useState } from 'react';
import CNotFound from '../component/CNotFound';
import CAccordion from '../component/CAccordion';
import Select from '../component/Select';
import historyStyle from '../styles/history.module.scss';
import CButton from '../component/CButton';
import input from '../styles/input.module.scss';
import {FaAngleDoubleDown,FaSearch} from 'react-icons/fa';
// import NavbarComponent from "../component/NavbarComponent";

const History = () => {
   const {user,auth,history} = useSelector(state=>state);
   const [listHistory,setListHistory] = useState([]);
   const [listAllHistory,seListAllHistory] = useState([]);
   const [listTransaction,setListTransaction] = useState([{
      value:1,name:'Topup'
   },{value:3,name:'Transfer'}]);
   const [listMutationType,setListMutationType] = useState([{value:'+',name:'Admission Fee'},{value:'-',name:'Money Out'}]);
   const [listSort,setListSort] = useState([{value:1,name:'Sort By Amount Highest'},{value:2,name:'Sort By Amount Lowest'}]);
   var [page,setPage] = useState(1);
   const [limit,setLimit] = useState(5);
   const [defaultLimit,setDefaultLimit] = useState(5);
   var [next,setNext] = useState(null);

   useEffect(()=>{
      var result  = history.listHistory.map((item)=>{
         if(item.typeId==3 && item.userId==auth.user.id){
            item = {...item,typeMutation:'-',user:auth.user};
         }
         if(item.typeId==3 && item.anotherUserId==auth.user.id){
            var anotherUser = user.listUser.filter((itemUser)=>itemUser.id==item.userId)[0];
            item = {...item,typeMutation:'+',user:anotherUser};
         }
         if(item.typeId==1){
            item = {...item,typeMutation:'+',user:auth.user};
         }
         return item;
      });
      setListHistory(result);
      seListAllHistory(result);
   },[]);

   const filterHandle = (event)=>{
      event.preventDefault();
      setListHistory(listHistory.splice(listHistory,0));
      listHistory  = [...listAllHistory];
      setListHistory(listHistory);
      const transaction = event.target.elements['transaction'].value;
      const mutation = event.target.elements['mutation'].value;
      const sorting = event.target.elements['sort'].value;
      var result  = listHistory;
     
      console.log(listAllHistory.length,listHistory.length,transaction,mutation);
      if(transaction){
         result = result.filter((item)=>item.typeId==transaction);
      }
      if(mutation){
         result = result.filter((item)=>item.typeMutation==mutation);
      }
      setListHistory(result);

      if(sorting){
         if(sorting==1){
            result.sort((history1,history2) => (history2.amount<history1.amount) ? -1 : 0);
         }else{
            result.sort((history1,history2)=>(history1.amount < history2.amount) ? -1 : 0);
         }
      }
   };

   const resetHandle = (event)=>{
      event.preventDefault();
      document.getElementById('form-filter').reset();
      setListHistory(listAllHistory);
   };

   const pagination = (page=null)=>{
      if(page!==null){
         setPage(page);
         var countLimit = defaultLimit*page;
         setLimit(countLimit);
         setNext(countLimit);
      }
   };

   const handleHistorySearch = (event) =>{
      event.preventDefault();
      setListHistory(listHistory.splice(listHistory,0));
      listHistory  = [...listAllHistory];
      setListHistory(listHistory);
      const search = event.target.value;
      const result = listHistory.filter((item)=>item.user.fullName.toLowerCase().includes(search));
      setListHistory(result);
   };
   return (
      <Layout>          
         <div className={information.information}>
            <Container className="pt-4">
               <div className="ms-3 me-3">
                  <Row>
                     <Col xl={4}>
                        <div className="fs-4 mb-3 fw-bold text-primary ms-2 me-2">Transaction History</div>
                     </Col>
                     <Col xl={4}>
                        <form id="form-search" className="mb-3">
                           <div className="d-flex position-relative">
                              <input className={`form-control ${information.formSearch}`} type="search" name="search" placeholder="Search history here" aria-label="Search" onChange={handleHistorySearch}/>
                              <button className={`${information.btnSearch} position-absolute`} type="submit" disabled={true}><FaSearch/></button>
                           </div>
                        </form> 
                     </Col>
                     <Col xl={4}>
                        <div className='position-relative'>
                           <CAccordion classVariantHeader={historyStyle.accordionHeader} classVariantBody={historyStyle.accordionStyle} title={'--Select Filter--'}>
                              <Form id="form-filter" onSubmit={filterHandle}>
                                 <div className={'position-relative d-inline'}>
                                    <Select 
                                       options={listTransaction} 
                                       classVariantForm={historyStyle.selectForm} 
                                       classVariantArrow={historyStyle.iconSelectForm} 
                                       defaultOptions="Transaction Type" name="transaction"/>
                                 </div>
                                 <div className='mt-3'>
                                    <div className={'position-relative d-inline'}>
                                       <Select 
                                          options={listMutationType} 
                                          classVariantForm={historyStyle.selectForm} 
                                          classVariantArrow={historyStyle.iconSelectForm} 
                                          defaultOptions="Mutation Type" 
                                          name="mutation"/>
                                    </div>
                                 </div>
                                 <div className='mt-3'>
                                    <div className={'position-relative d-inline'}>
                                       <Select 
                                          options={listSort} 
                                          classVariantForm={historyStyle.selectForm} 
                                          classVariantArrow={historyStyle.iconSelectForm} 
                                          defaultOptions="Sort" name="sort"/>
                                    </div>
                                 </div>
                                 <div className='mt-3'>
                                    <Row>
                                       <Col>
                                          <CButton type="submit" className={input.button}>Filter</CButton>
                                       </Col>
                                       <Col>
                                          <CButton type="Reset" className={input.button} onClick={resetHandle}>Reset</CButton>
                                       </Col>
                                    </Row> 
                                 </div>
                              </Form>
                           </CAccordion>
                        </div>
                     </Col>
                  </Row>
                  <div className='mt-4'>
                     {
                        listHistory.length > 0 ? listHistory.filter((item,index)=>index<limit).map((item)=>{
                           return(
                              <CList key={item.id}>
                                 <div className="ms-3 me-3">
                                    <Image src={item.user.picture!==null ? item.user.picture : '/images/profile.png'} width={50} height={50}/>
                                 </div>
                                 <div>
                                    <div className="fs-5 fw-bold text-primary">{item.user.fullName}</div>
                                    <div className="fs-6 text-primary">{item.mutation_type.name}</div>
                                 </div>
                                 {item.typeMutation=='-' ? 
                                    <div className="ms-auto me-3 text-danger fw-bold">{item.typeMutation} Rp. {Number(item.amount).toLocaleString('id-ID')}</div> :   
                                    <div className="ms-auto me-3 text-success fw-bold">{item.typeMutation} Rp. {Number(item.amount).toLocaleString('id-ID')}</div>}
                              
                              </CList>
                           );
                        }) : <CNotFound/>
                     }          
                  </div>
                  {listHistory.length > limit && next < listHistory.length-1 ? <div className='text-center mt-3 mb-2'>
                     <CButton onClick={()=>pagination(page+1)} className={information.btnNext}>Load more <FaAngleDoubleDown/></CButton>
                  </div> :''
                  }    
               </div>
            </Container>
         </div>          
      </Layout>
   );
};

export default History;
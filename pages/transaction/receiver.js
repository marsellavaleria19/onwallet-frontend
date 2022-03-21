// import { Button } from "bootstrap";
import { Col, Container, NavItem, Row } from "react-bootstrap";
import CButton from "../../component/CButton";
import Layout from "../../component/Layout";
import information from "../../styles/information.module.scss";
import variables from "../../styles/transaction.module.scss";
import Image from 'next/image';
import Input from "../../component/Input";
import { getAllDataUser } from "../../redux/actions/user";
import { getDataReceiver } from "../../redux/actions/transaction";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { Router, useRouter } from "next/router";
// import NavbarComponent from "../component/NavbarComponent";

const Receiver = () => {
    const {user,auth} = useSelector(state=>state)

    const dispatch = useDispatch()
    const route = useRouter()


    useEffect(()=>{
       dispatch(getAllDataUser(auth.token))
    },[])

    const handleReceiver = (item,phone=null)=>{
        dispatch(getDataReceiver(item,phone))
        route.push('/transaction/form')
    }

    // const listAllDataUser = ()=>{
    //     // dispatch(getAllDataUser(auth.token))
    //     // var listTemp = setuser.listUser.length>0 && auth.user!==null && user.listUser.filter((item)=>item.id!==auth.user.id).map((item)=>{
    //     //     return item
    //     // })

    //     // setListUser(listTemp)
    // }
    return (
        <Layout>          
            <div className={information.information}>
                <Container className="pt-4">
                    <div className="ms-3 me-3">
                    <div className="fs-4 mb-3 fw-bold text-primary ms-2 me-2">Search Receiver</div>
                    <Input type="text" placeholder="Search" className={`${variables.search}`}/>   
                    {
                       user.listUser.length>0 && auth.user!==null && user.listUser.filter((item)=>item.id!==auth.user.id).map((item)=>{
                            return(
                                <>
                                    {
                                        item.phone.length > 0 ?
                                        item.phone.map((itemPhone)=>{
                                            return(
                                                <div className={`${information.list} mt-3 mb-3 ms-2 me-2 d-flex align-items-center`} key={itemPhone.id} onClick={()=>handleReceiver(item,itemPhone)}>
                                                    <div className="ms-3 me-4">
                                                        <Image src={item.picture===null ? "/images/profile.png" : item.picture} width={50} height={50}/>
                                                    </div>
                                                    <div>   
                                                        <div className="fs-5 text-primary fw-bold">{item.fullName}</div>
                                                        <div className="fs-6 text-primary mt-2">{itemPhone.number}</div>
                                                    </div>
                                                </div>
                                            ) 
                                        }) 
                                        :
                                        <div className={`${information.list} mt-3 mb-3 ms-2 me-2 d-flex align-items-center`} key={item.id} onClick={()=>handleReceiver(item)}>
                                                <div className="ms-3 me-4">
                                                    <Image src={item.picture===null ? "/images/profile.png" : item.picture} width={50} height={50}/>
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
                            )
                        })
                    }
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
    )
}

export default Receiver
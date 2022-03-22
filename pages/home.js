// import { Button } from "bootstrap";
import { Col, Container, Row } from "react-bootstrap";
import CButton from "../component/CButton";
import Layout from "../component/Layout";
import home from "../styles/home.module.scss";
import Image from 'next/image';
import { useDispatch, useSelector } from "react-redux";
import {VscArrowUp,VscArrowDown} from 'react-icons/vsc'
import {HiPlus} from 'react-icons/hi'
import { useRouter } from "next/router";
import BarChart from "../component/BarChart";
import CList from "../component/CList";
import Link from "next/link";
import { getAllDataUser } from "../redux/actions/user";
import { useEffect } from "react";
import { getListHistory } from "../redux/actions/history";
// import NavbarComponent from "../component/NavbarComponent";

const Home = () =>{
    const {auth,history,user} = useSelector(state=>state)
    const route = useRouter()
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getAllDataUser(auth.token))
    },[])
  
    return (
        <Layout>    
            <div className={home.balance}>
                <Row>
                    <Col xs="5" > 
                        <div className="ms-5 mt-4">
                            <div className="fs-4 text-secondary mb-2">Balance</div>
                            <div className="fs-1 fw-bold text-secondary mb-2">{auth.user!==null &&`Rp.${auth.balance!==null &&auth.balance.toLocaleString('id-ID')}`}</div>
                            <div className="fs-5 text-secondary">{auth.user!==null && auth.phone}</div>
                        </div>
                    </Col>
                        <Col className="text-end me-3 me-md-3 me-xl-5">
                            <div className="mt-4">
                                <CButton className={`${home.button} btn-secondary text-primary fw-bold`} onClick={()=>route.push("/transaction/receiver")}><VscArrowUp className="me-2 fs-5 fw-bold"/>Transfer</CButton>
                            </div>
                            <div className="mt-3">
                                <CButton className={`${home.button} btn-secondary text-primary fw-bold`} onClick={()=>route.push("/transaction/topup")}><HiPlus className="me-2 fs-5 fw-bold"/>Top Up</CButton>
                            </div>
                        </Col>                        
                    </Row>
            </div>
                    <Row className="mt-3">
                        <Col md>
                            <div className={home.information}>
                                <Container>
                                    <Row className="mt-4">
                                        <Col xs={6}>
                                            <div className="mt-3 ms-5">
                                                <VscArrowDown className="me-2  mb-2 fs-4 fw-bold text-success"/>
                                                <div className="fs-6 text-primary mb-2">Income</div>
                                                <div className="fs-5 text-primary fw-bold">Rp. 1.200.000</div>
                                            </div>
                                        </Col>
                                        <Col xs={6}>
                                            <div className="mt-3 ms-3">
                                                <VscArrowUp className="me-2 mb-2 fs-4 fw-bold text-danger"/>
                                                <div className="fs-6 text-primary mb-2">Expanse</div>
                                                <div className="fs-5 text-primary fw-bold">Rp. 1.156.000</div>
                                            </div>
                                        </Col>
                                        <Col xs={12} className="mt-5">
                                            <BarChart data={[10,100,200,300,200,100]} labels={['Jan','Feb','Mar','Apr','May','June']}/>
                                        </Col>
                                    </Row>
                                </Container>
                            </div>
                        </Col>
                        <Col md>
                            <div className={home.information}>
                                <div className="ms-4 me-4 mt-3">
                                    <div className="d-flex justify-content-between mb-4">
                                        <div className="fs-5 fw-bold text-primary">Transaction History</div>
                                        <Link href="#"><a className="fs-6 text-primary">See all</a></Link>
                                    </div>
                                    {
                                        auth.user!==null && history.listHistory.length > 0 ? history.listHistory.filter((item,index)=>index<4).map((itemHistory)=>{
                                            return(
                                              <>
                                                {
                                                    itemHistory.typeId==3 && itemHistory.anotherUserId!==null ? user.listUser.filter(item=>item.id!==auth.user.id).map((item)=>{
                                                        return(
                                                            
                                                            item.id===itemHistory.anotherUserId || item.id===itemHistory.userId && <CList key={item.id}>
                                                                <div className="ms-3 me-3">
                                                                    <Image src={item.picture!==null ? item.picture : '/images/profile.png'} width={50} height={50}/>
                                                                </div>
                                                                <div>
                                                                    <div className="fs-5">{item.fullName}</div>
                                                                    <div className="fs-6">{itemHistory.mutation_type.name}</div>
                                                                </div>
                                                                <div className="ms-auto me-3">Rp. {Number(itemHistory.amount).toLocaleString("id-ID")}</div>
                                                            </CList>
                                                        )
                                                    }) 
                                                   :
                                                   <CList>
                                                        <div className="ms-3 me-3">
                                                            <Image src={auth.user.picture!==null ? auth.user.picture : '/images/profile.png'} width={50} height={50}/>
                                                        </div>
                                                        <div>
                                                            <div className="fs-5">{auth.user.fullName}</div>
                                                            <div className="fs-6">{itemHistory.mutation_type.name}</div>
                                                        </div>
                                                        <div className="ms-auto me-3">Rp. {Number(itemHistory.amount).toLocaleString("id-ID")}</div>
                                                    </CList>
                                                
                                                }
                                              </>
                                            ) 
                                        }) :
                                        <div>No History</div>
                                    }                 
                                    
                                </div>
                            </div>
                        </Col>
                    </Row>
        </Layout>
    )
}

export default Home
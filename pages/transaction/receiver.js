// import { Button } from "bootstrap";
import { Col, Container, Row } from "react-bootstrap";
import CButton from "../../component/CButton";
import Layout from "../../component/Layout";
import information from "../../styles/information.module.scss";
import variables from "../../styles/transaction.module.scss";
import Image from 'next/image';
import Input from "../../component/Input";
import { getAllDataUser } from "../../redux/actions/user";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
// import NavbarComponent from "../component/NavbarComponent";

const Receiver = () => {
    const {user,auth} = useSelector(state=>state)
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getAllDataUser(auth.token))
    },[])

    return (
        <Layout>          
            <div className={information.information}>
                <Container className="pt-3">
                    <div className="fs-4 mb-3 fw-bold text-primary">Search Receiver</div>
                    <Input type="text" placeholder="Search" className={variables.search}/>   
                    {
                       user.listUser.length>0 && auth.user!==null && user.listUser.filter((item)=>item.id!==auth.user.id).map((item)=>{
                           return(
                                <Row className={`${information.list} mt-3 mb-3 ms-3`} key={item.id}>
                                    <Col xs={2}>
                                        <Image src={item.picture===null ? "/images/profile.png" : item.picture} width={50} height={50}/>
                                    </Col>
                                    <Col xs={5}>
                                        <div className="fs-4 text-primary">{item.fullName}</div>
                                        <div className="fs-6 text-primary">+62 811-3452-5252</div>
                                    </Col>
                                </Row>
                           )
                       })
                    }
                    
                    
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
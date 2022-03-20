// import { Button } from "bootstrap";
import { Col, Container, Row } from "react-bootstrap";
import CButton from "../../component/CButton";
import Layout from "../../component/Layout";
import information from "../../styles/information.module.scss";
import Image from 'next/image';
import transactionStyle from '../../styles/transaction.module.scss'
import Input from "../../component/Input";
import { useSelector } from "react-redux";
import {FaCheckCircle} from 'react-icons/fa'
import Link from "next/link";
import inputStyle from '../../styles/input.module.scss'
// import transaction from "../../redux/reducers/transaction";
// import NavbarComponent from "../component/NavbarComponent";

const Status= () =>{
    const {transaction,auth} = useSelector(state=>state)
    return (
        <Layout>          
            <div className={information.information}>
                <Container className="pt-3">
                    {
                        !transaction.isError ?
                        <div className="text-center">
                            <div className={`${transactionStyle.iconStatus} text-primary mt-5`}>
                                <FaCheckCircle/>
                            </div>
                            <h1 className="mt-3 text-primary">Transfer Success</h1>
                        </div> 
                       : 
                        <div className="text-center">
                            <div className="fs-1 text-primary mt-5">
                                <FaCheckCircle/>
                            </div>
                            <p>We can’t transfer your money at the moment, we recommend you to check your internet connection and try again.</p>
                        </div>
                      
                    }
                    <Row className={`${information.list} mb-3 ms-3 me-3 mt-5`}>
                        <div>
                            <div className="fs-5 fw-bold text-primary">Amount</div>
                            <div className="fs-4 text-primary">Rp. {transaction.dataTransaction!==null && transaction.dataTransaction.amount}</div>
                        </div>
                    </Row>
                    <Row className={`${information.list} mb-3 ms-3 me-3`}>
                        <div>
                            <div className="fs-5 fw-bold text-primary">Balance Left</div>
                            <div className="fs-4 text-primary">Rp. {auth.balance!==null && auth.balance}</div>
                        </div>
                    </Row>
                    <Row className={`${information.list} mb-3 ms-3 me-3`}>
                        <div>
                            <div className="fs-5 fw-bold text-primary">Date&Time</div>
                            <div className="fs-4 text-primary">{new Date().toString()}</div>
                        </div>
                    </Row>
                    <Row className={`${information.list} mb-3 ms-3 me-3`}>
                        <div>
                            <div className="fs-5 fw-bold text-primary">Notes</div>
                            <div className="fs-4 text-primary">{transaction.dataTransaction!==null && transaction.dataTransaction.notes}</div>
                        </div>
                    </Row>
                    <div className="fs-5 ms-3 fw-bold text-primary mb-4">Transfer</div>
                    <Row className={`${information.list} mb-5 ms-3 me-3`}>
                        <Col xs={2}>
                            <Image src={transaction.dataReceiver===null || transaction.dataReceiver.user==null || transaction.dataReceiver.user.picture===null || transaction.dataReceiver.user.picture==='undefiend' ? "/images/profile.png" : transaction.dataReceiver.user.picture} width={50} height={50}/>
                        </Col>
                        <Col xs={5}>
                            <div className="fs-4 text-primary">{transaction.dataReceiver!==null && transaction.dataReceiver.user!==null && transaction.dataReceiver.user.fullName }</div>
                            <div className="fs-6 text-primary">{transaction.dataReceiver!==null && transaction.dataReceiver.user!==null && transaction.dataReceiver.phone}</div>
                        </Col>
                    </Row>
                    <div className="text-end mb-3 me-3">
                        <CButton className="btn-primary me-3">Download PDF</CButton>
                        <Link href="/home"><a className="btn btn-primary">Back to Home</a></Link>
                    </div>
                </Container>
            </div>          
        </Layout>
    )
}

export default Status
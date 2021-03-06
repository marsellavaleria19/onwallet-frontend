import Image from 'next/image';
import { Container, Row,Col } from 'react-bootstrap';
import homepage from '../styles/homepage.module.scss';
import NavbarHomepage from '../component/NavbarHomePage';
import CButton from '../component/CButton';
import {AiOutlinePhone} from 'react-icons/ai';
import {BiLockAlt,} from 'react-icons/bi';
import {BsDownload} from 'react-icons/bs';
import Carousel,{ consts } from 'react-elastic-carousel';
import {IoChevronBack,IoChevronForward} from 'react-icons/io';
// import styles from '../styles/Home.module.css'
const Homepage = ()=> {
   const myArrow = ({ type, onClick, isEdge }) => {
      const pointer = type === consts.PREV ? <div className={homepage.iconCarousel}>{'<'}</div> : <div className={homepage.iconCarousel}>{'>'}</div>;
      return (
         <CButton onClick={onClick} disabled={isEdge} className={homepage.buttonCarousel}>
            {pointer}
         </CButton>
      );
   };

   return (
      <>
         <header className={homepage.header}> 
            <NavbarHomepage/>
            <Container>
               <div className='d-flex justify-content-center align-items-center'>
                  <h1 className={`${homepage.titleHeader} text-center fw-bolder text-white`}>Awesome App For Saving Time.</h1>
               </div>
               <div className={`mt-5 text-center fs-4 ${homepage.textHeader} text-white`}>
                  We bring you a mobile app for banking problems that oftenly wasting much of your times.
               </div>
               <div className='mt-5 text-center'>
                  <CButton className={homepage.button}>Try It Free</CButton>
               </div>
            </Container>
         </header>
         <section>
            <Container>
               <h1 className={`text-center mt-5 ${homepage.title} fw-bolder text-primary`}>Why Choose On-Wallet?</h1>
               <div className={'text-center mt-5 text-primary fs-5'}>We have some great features from the application and it’s totally free to use by all users around the world.</div>
               <Row className='mt-5 mb-5'>
                  <Col md>
                     <div className='d-flex flex-column justify-content-center align-items-center text-center'>
                        <div className={`${homepage.icon} text-center`}><AiOutlinePhone/></div>
                        <h4 className='text-primary mt-4 fs-4 fw-bold'>24/7 Support</h4>
                        <p className='text-primary mt-4 fs-5'>We have 24/7 contact support so you can contact us whenever you want and we will respond it.</p>
                     </div>
                  </Col>
                  <Col md>
                     <div className={'d-flex flex-column justify-content-center align-items-center text-center'}>
                        <div className={`${homepage.icon}`}><BiLockAlt/></div>
                        <h4 className='text-primary mt-4 fs-4 fw-bold'>Data Privacy</h4>
                        <p className='text-primary mt-4 fs-5'>We make sure your data is safe in our database and we will encrypt any data you submitted to us.</p>
                     </div>
                  </Col>
                  <Col md>
                     <div className='d-flex flex-column justify-content-center align-items-center text-center'>
                        <div className={`${homepage.icon}`}><BsDownload/></div>
                        <h4 className='text-primary mt-4 fs-4 fw-bold'>Easy Download</h4>
                        <p className='text-primary mt-4 fs-5'>On-wallet is 100% totally free to use it’s now available on Google Play Store and App Store.</p>
                     </div>
                  </Col>
               </Row>
            </Container>
         </section>
         <section className={homepage.sectionAboutWallet}>
            <Container>
               <Row className='d-flex justify-content-center align-items-center'>
                  <Col xs="4" md="3" lg="2">
                     <Image src="/images/microsoft.png" width={300} height={200} alt="microsoft" className='align-items-center'/>
                  </Col>
                  <Col xs="4" md="3" lg="2">
                     <Image src="/images/dropbox.png" width={300} height={200} alt="dropbox"/>
                  </Col>
                  <Col xs="4" md="3" lg="2">
                     <Image src="/images/h&m.png" width={300} height={200} alt="h&m"/>
                  </Col>
                  <Col xs="4" md="3" lg="2">
                     <Image src="/images/air-bnb.png" width={300} height={200} alt="air-bnb"/>
                  </Col>
                  <Col xs="4" md="3" lg="2">
                     <Image src="/images/canon.png" width={300} height={200} alt="canon"/>
                  </Col>
                  <Col xs="4" md="3" lg="2">
                     <Image src="/images/dell.png" width={300} height={200} alt="dell"/>
                  </Col>
               </Row>
            </Container>
         </section>
         <section className='mb-5'>
            <Container>
               <div>
                  <div className={'d-flex justify-content-center align-items-center mt-5'}>
                     <div className={homepage.balance}>
                        <p className={`${homepage.textBalance} text-center mt-3`}>Rp. 390.736.500</p>
                     </div>
                   
                  </div>
                  <h1 className={`${homepage.title} text-primary text-center mt-4`}>Money has Been Transfered.</h1>
                  <p className='text-center fs-4 text-primary mt-3'>That amount of money has been transfered from all users. We still counting and going strong!</p> 
               </div>
                     
            </Container>
         </section>
         <section className={homepage.sectionFeatureWallet}>
            <Row style={{width: '100%', height: '100%'}}>
               <Col className='d-none d-lg-block pt-3 my-3' lg xl={5}>
                  <div className={homepage.imgFeature}>
                     <Image src="/images/phone-cover.png" alt="phone1" layout='responsive' width={600} height={700} objectFit='fill'/>
                  </div>
               </Col>
               <Col lg xl={5}>
                  <Container>
                     <div className='d-flex flex-column align-items-center justify-content-center'>
                        <div className='my-5 pt-5'>
                           <h1 className={homepage.title}>All The Great On-Wallet Features</h1>
                           <div className={`${homepage.detailFeature} mt-3 pt-2 ps-3 pb-3 pt-3`}>
                              <div className='fs-4 text-primary fw-bold'>1. Small Fee</div>
                              <div className='fs-6 text-primary mt-2'>We only charge 5% of every success transaction done in On-Wallet app.</div>
                           </div>
                           <div className={`${homepage.detailFeature} mt-3 pt-2 ps-3 py-3`}>
                              <div className='fs-4 text-primary fw-bold'>2. Data Secured</div>
                              <div className='fs-6 text-primary mt-2'>All your data is secured properly in our system and it’s encrypted.</div>
                           </div>
                           <div className={`${homepage.detailFeature} mt-3 pt-2 ps-3 py-3`}>
                              <div className='fs-4 text-primary fw-bold'>3. User Friendly</div>
                              <div className='fs-6 text-primary mt-2 mb-3'>Zwallet come up with modern and sleek design and not complicated..</div>
                           </div>
                        </div>
                     </div>
                  </Container>
               </Col>
            </Row>  
         </section>
         <section>
            <Container>
               <h1 className={`text-center mt-5 ${homepage.title} fw-bolder text-primary`}>What users are Saying </h1>
               <div className={`mt-5 text-center fs-4 ${homepage.textHeader} text-primary`}>
              We have some great features from the application and it’s totally free to use by all users around the world.
               </div>
               <div className='d-flex flex-row align-items-center'>
                  <Carousel itemsToShow={1} pagination={false} renderArrow={myArrow}>
                     <div className="d-flex justify-content-center align-items-center mt-5">
                        <div className={`${homepage.testimony} d-flex justify-content-center align-items-center text-center mb-5`}>
                           <div>
                              <Image src="/images/profile-testimony.png" width={120} height={120} alt="image-profile"/>
                              <div className='mt-3 fs-3 fw-bold text-primary'>Alex Hansinburg</div>
                              <div className='mt-3 fs-3 text-primary'>Designer</div>
                              <div className="fs-5 mt-5 px-5 text-primary">“This is the most outstanding app that I’ve ever try in my live, this app is such an amazing masterpiece and it’s suitable for you who is 
                          bussy with their bussiness and must transfer money to another person aut there. Just try this app and see the power!”
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className="d-flex justify-content-center align-items-center mt-5">
                        <div className={`${homepage.testimony} d-flex justify-content-center align-items-center text-center mb-5`}>
                           <div>
                              <Image src="/images/profile-testimony.png" width={120} height={120} alt="image-profile"/>
                              <div className='mt-3 fs-3 fw-bold text-primary'>Alex Hansinburg</div>
                              <div className='mt-3 fs-3 text-primary'>Designer</div>
                              <div className="fs-5 mt-5 px-5 text-primary">“This is the most outstanding app that I’ve ever try in my live, this app is such an amazing masterpiece and it’s suitable for you who is 
                          bussy with their bussiness and must transfer money to another person aut there. Just try this app and see the power!”
                              </div>
                           </div>
                        </div>
                     </div>
                  </Carousel>   
               </div>
              
            </Container>
         </section>
         <footer className={homepage.footer}>
            <Container>
               <Row className='mb-5 pt-5'>
                  <Col md={3}>
                     <div className='mt-4'>
                        <h1>On-Wallet</h1>
                        <div className='mt-4'>
                    Simplify financial needs and saving much time in banking needs with one single app.
                        </div>    
                     </div>  
                  </Col>
               </Row>
               <hr className={homepage.line}/>
               <div>
                  <Row>
                     <Col md={3}>
                        <div>2020 On-Wallet. All right reserved.</div>
                     </Col>
                     <Col>
                        <div className='text--md-end'>+62 5637 8882 9901</div>
                     </Col>
                     <Col md={3}>
                        <div>contact@onwallet.com</div>
                     </Col>
                  </Row>
               </div>
            </Container>
         </footer>
      </>
   );
};

export default Homepage;

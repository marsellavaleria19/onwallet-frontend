import { Row,Col,Container } from 'react-bootstrap';
import footer from '../styles/footer.module.scss';

const Footer = ()=>{
   return(
      <footer className={footer.footerHome}>
         <Container>
            <div className="d-flex justify-content-between">
               <div className="text-secondary">2020 On-Wallet. All right reserved.</div>
               <div className="text-secondary">+62 5637 8882 9901 contact@on-wallet.com</div>
            </div>
         </Container>
      </footer>
   );
};

export default Footer;
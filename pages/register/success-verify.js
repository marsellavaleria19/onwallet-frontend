// import { Button } from "bootstrap";
import CButton from '../../component/CButton';
import input from '../../styles/input.module.scss';
import {FaCheckCircle} from 'react-icons/fa';
import LayoutLogin from '../../component/LayoutLogin';
import { useRouter } from 'next/router';
// import NavbarComponent from "../component/NavbarComponent";

const SuccessVerify = () =>{

   const router = useRouter();

   const toLoginPage = ()=>{
      router.push('/login');    
   };

   return (
      <LayoutLogin>
         <div className="vh-100 overflow-auto">
            <div className="p-5">
               <div className="fs-1 text-primary mt-5">
                  <FaCheckCircle/>
               </div>
               <div className="fs-1 text-primary fw-bold mt-5">Your PIN Was Successfully Created</div>
               <div className="fs-5 text-primary mt-5">Your PIN was successfully created and you can now access all the features in On-Wallet. Login to your new account and start exploring!</div>
               <div className="mt-5">
                  <CButton className={input.button} onClick={toLoginPage}>Login Now</CButton>
               </div>
            </div>
         </div>
      </LayoutLogin>
   );
};

export default SuccessVerify;
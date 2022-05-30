import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import Dashboard from '../component/Dashboard';
import Homepage from '../component/Homepage';
// import styles from '../styles/Home.module.css'

const Home = ()=> {
   const {auth} = useSelector(state=>state);
      
   const route = useRouter();
   return(
      <>
         {
            auth.token!==null ? <Dashboard/> : <Homepage/>
         }
      </>
   );
};

export default Home;

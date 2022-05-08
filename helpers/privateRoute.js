import {useRouter} from 'next/router';

const privateRoute = (WrappedComponent) => {
   return (props)=>{
      const router = useRouter();
      const token = window.localStorage.getItem('token');
      if(!token){
         router.replace('/login');
      }
      <WrappedComponent {...props}/>;
   };
};

export default privateRoute;
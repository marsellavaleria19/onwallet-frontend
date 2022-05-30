import axios from 'axios';

const AxiosCostum = (token) =>{
   const headers = {};
   if(token){
      headers['Authorization'] = `Bearer ${token}`;
   }

   return axios.create({
      baseURL : process.env.NEXT_PUBLIC_APP_URL,
      headers
   });
};

export default AxiosCostum;
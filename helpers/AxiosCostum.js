import axios from 'axios';

const {NEXT_PUBLIC_APP_URL} = process.env;
console.log(NEXT_PUBLIC_APP_URL);

const AxiosCostum = (token) =>{
   const headers = {};
   if(token){
      headers['Authorization'] = `Bearer ${token}`;
   }

   return axios.create({
      baseURL : NEXT_PUBLIC_APP_URL,
      headers
   });
};

export default AxiosCostum;
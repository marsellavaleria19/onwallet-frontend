import qs from 'qs';
import AxiosCostum from '../../helpers/AxiosCostum';

const login = async(data)=>{
   const result = await AxiosCostum().post('/auth/login', qs.stringify(data));
   if(result.data.success==false){
      return Promise.reject(result);
   }
   return result;
};

export const loginProcess = (email, password) => {
   const data = { 'email': email, 'password': password };
   
   return {
      type: 'LOGIN',
      payload: login(data)
   };
};

export const getDataUser = (token) => {
   return {
      type: 'LOGIN_PROFILE',
      payload: AxiosCostum(token).get('/profile')
   };
};

export const updateDataUser = (token,file=null) => {
   const formData = new FormData();
   if(file!==null){
      formData.append('picture', file);
   }
   return {
      type: 'UPDATE_USER',
      payload: AxiosCostum(token).patch('/profile',formData)
   };
};

export const getBalance = (token) => {
   return {
      type: 'BALANCE',
      payload: AxiosCostum(token).get('/profile/balance')
   };
};


export const getListPhoneProfile = (token) => {
   return {
      type: 'PHONE_AUTH',
      payload: AxiosCostum(token).get('/profile/phones')
   };
};
import { default as axios } from 'axios';
import qs from 'qs';
import AxiosCostum from '../../helpers/AxiosCostum';

export const registrationProcess = (data,pin) => {
   data.pin = pin;
   return {
      type: 'REGISTER',
      payload: AxiosCostum().post('/auth/register', qs.stringify(data))
   };
};

export const getDataRegistration = (dataRegister) => {
   console.log(dataRegister);
   const fullName = `${dataRegister.firstname} ${dataRegister.lastname}`;
   const data = { 'fullName': fullName, 'email':dataRegister.email, 'password': dataRegister.password };
   return {
      type: 'DATA_REGISTRATION',
      payload : data
   };
};
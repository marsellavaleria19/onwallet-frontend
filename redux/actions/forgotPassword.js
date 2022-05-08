import { default as axios } from 'axios';
import qs from 'qs';
import AxiosCostum from '../../helpers/AxiosCostum';

const {NEXT_PUBLIC_CALLBACK_URL} = process.env;

export const emailProcess = (dataEmail) => {
   const data = {email:dataEmail};
   return {
      type: 'FORGOT_PASSWORD',
      payload: AxiosCostum().post('/auth/forgot-password?callback_url=http://localhost:3000', qs.stringify(data))
   };
};

export const forgotPasswordProcess = (dataSend) => {
   console.log('masuk forgot password');
   const data = {otp:dataSend.otp,newPassword:dataSend['new password'],confirmPassword : dataSend['confirm password']};
   console.log(data);
   return {
      type: 'FORGOT_PASSWORD',
      payload: AxiosCostum().post('/auth/forgot-password', qs.stringify(data))
   };
};

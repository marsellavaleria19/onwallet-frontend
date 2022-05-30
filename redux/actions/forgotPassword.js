import { default as axios } from 'axios';
import qs from 'qs';
import AxiosCostum from '../../helpers/AxiosCostum';

export const emailProcess = (dataEmail) => {
   const data = {email:dataEmail};
   return {
      type: 'FORGOT_PASSWORD',
      payload: AxiosCostum().post(`/auth/forgot-password?callback_url=${process.env.NEXT_PUBLIC_CALLBACK_URL}`, qs.stringify(data))
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

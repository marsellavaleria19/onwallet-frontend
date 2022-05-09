import { default as axios } from 'axios';
import qs from 'qs';
import AxiosCostum from '../../helpers/AxiosCostum';


export const changePasswordProcess = (dataSend,token) => {
   const data = {oldPassword:dataSend['current password'],newPassword:dataSend['new password'],confirmPassword:dataSend['repeat password']};
   return {
      type: 'CHANGE_PASSWORD',
      payload: AxiosCostum(token).patch('/profile/change-password', qs.stringify(data))
   };
};

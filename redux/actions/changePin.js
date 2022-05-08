import { default as axios } from 'axios';
import qs from 'qs';
import AxiosCostum from '../../helpers/AxiosCostum';

const {NEXT_PUBLIC_CALLBACK_URL} = process.env;

export const changePinProcess = (oldPin=null,newPin=null,token) => {
   var data = {};
   if(oldPin!==null){
      data.oldPin = oldPin;
      if(newPin!==null){
         data.newPin = newPin;
      }
   }
  

   return {
      type: 'CHANGE_PIN',
      payload: AxiosCostum(token).patch('/profile/change-pin', qs.stringify(data))
   };
};

export const saveOldPin = (oldPin) => {
   return {
      type: 'GET_OLD_PIN',
      payload: oldPin
   };
};
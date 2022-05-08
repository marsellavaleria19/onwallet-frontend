import qs from 'qs';
import AxiosCostum from '../../helpers/AxiosCostum';

export const getDataReceiver = (user,phone) => {
   var data = null;
   if(phone!==null){
      data = {user,phone:phone.number};
   }else{
      data = {user,phone:'-'};
   }
   return {
      type: 'DATA_RECEIVER',
      payload : data
   };
};

export const getDataTransaction = (amount,notes,recipient) => {
   const data = {amount,recipient,notes};
   return {
      type: 'DATA_TRANSACTION',
      payload : data
   };
};

export const addTopup = (amount,token) => {
   const data = {amount};
   return {
      type: 'TOPUP',
      payload : AxiosCostum(token).post('/transactions/topup', qs.stringify(data))
   };
};

export const transactionProcess = (data,token) => {
   return {
      type: 'TRANSACTION',
      payload: AxiosCostum(token).post('/transactions/transfer', qs.stringify(data))
   };
};
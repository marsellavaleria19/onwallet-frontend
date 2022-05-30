import { default as axios } from 'axios';
import qs from 'qs';
import AxiosCostum from '../../helpers/AxiosCostum';


export const getListHistory = (token) => {
   return {
      type: 'HISTORY',
      payload: AxiosCostum(token).get('/transactions/history')
   };
};

import qs from 'qs';
import AxiosCostum from '../../helpers/AxiosCostum';


export const addPhoneNumber = (phoneNumber,token) => {
    
   const data = {number:phoneNumber};
   return {
      type: 'PHONE',
      payload: AxiosCostum(token).post('/profile/phones', qs.stringify(data))
   };
};

export const deletePhoneNumber = (id,token) => {
   // const data = {number:phoneNumber};
   return {
      type: 'PHONE',
      payload: AxiosCostum(token).delete(`/profile/phones/${id}`)
   };
};

export const getListPhoneUser = (token) => {
   return {
      type: 'PHONE',
      payload: AxiosCostum(token).get('/profile/phones')
   };
};

import qs from 'qs'
import AxiosCostum from '../../helpers/AxiosCostum'


// export const loginProcess = (email, password) => {
//     const data = { 'email': email, 'password': password };
//     return {
//         type: 'LOGIN',
//         payload: AxiosCostum().post('/auth/login', qs.stringify(data))
//     }
// }

export const getListPhoneUser = (token) => {
    return {
        type: 'PHONE',
        payload: AxiosCostum(token).get('/profile/phones')
    }
}

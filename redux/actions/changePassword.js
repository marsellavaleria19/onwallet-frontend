import { default as axios } from 'axios'
import qs from 'qs'
import AxiosCostum from '../../helpers/AxiosCostum'


export const changePinProcess = (dataSend,token) => {
    const data = {oldPassword:dataSend.currentPassword,newPassword:dataSend.newPassword,confirmPassword:dataSend.repeatPassword}
    return {
        type: 'CHANGE_PASSWORD',
        payload: AxiosCostum(token).post('/profile/change-password', qs.stringify(data))
    }
}

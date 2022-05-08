import { default as axios } from 'axios'
import qs from 'qs'
import AxiosCostum from '../../helpers/AxiosCostum'


export const changePasswordProcess = (dataSend,token) => {
    const data = {oldPassword:dataSend.currentPassword,newPassword:dataSend.newPassword,confirmPassword:dataSend.repeatPassword}
    return {
        type: 'CHANGE_PASSWORD',
        payload: AxiosCostum(token).patch('/profile/change-password', qs.stringify(data))
    }
}

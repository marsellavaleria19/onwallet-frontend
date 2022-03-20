import { default as axios } from 'axios'
import qs from 'qs'
import AxiosCostum from '../../helpers/AxiosCostum'

const {NEXT_PUBLIC_CALLBACK_URL} = process.env

export const changePasswordProcess = (dataSend) => {
    const data = {oldPassword:dataSend.currentPassword,newPassword:dataSend.newPassword,confirmPassword:dataSend.repeatPassword}
    return {
        type: 'CHANGE_PASSWORD',
        payload: AxiosCostum().post('/profile/change-password', qs.stringify(data))
    }
}

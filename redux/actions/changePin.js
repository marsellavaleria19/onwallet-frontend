import { default as axios } from 'axios'
import qs from 'qs'
import AxiosCostum from '../../helpers/AxiosCostum'

const {NEXT_PUBLIC_CALLBACK_URL} = process.env

export const changePinProcess = (oldPin,newPin,token) => {
    var data = {}
    if(oldPin!==null){
        data.oldPin = oldPin
    }
    if(newPin!==null){
        data.newPin = newPin
    }

    return {
        type: 'CHANGE_PIN',
        payload: AxiosCostum(token).post('/profile/change-pin', qs.stringify(data))
    }
}
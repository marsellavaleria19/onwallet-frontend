import qs from 'qs'
import AxiosCostum from '../../helpers/AxiosCostum'


export const getAllDataUser = (token) => {
    console.log(token)
    return {
        type: 'USER',
        payload: AxiosCostum(token).get('/users')
    }
}
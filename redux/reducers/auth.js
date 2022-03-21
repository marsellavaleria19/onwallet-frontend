const dataLogin = {
    token: null,
    message: null,
    user: null,
    balance : null,
    isError: false,
    isLoading: false,
    isAuthenticated: false,
    isVerify: false,
    errMessage: null,
    phone : null
}

const auth = (state = dataLogin, action) => {
    switch (action.type) {
        case 'LOGIN_PENDING':
            {
                state.isLoading = true
                return {...state }
            }
        case 'LOGIN_FULFILLED':
            {
                const { data } = action.payload
                state.token = data.results.token
                state.isLoading = false
                state.isError = false
                window.localStorage.setItem('token', state.token)
                state.isAuthenticated = true
                return {...state }
            }
        case 'LOGIN_REJECTED':
            {
                const { data } = action.payload.response
                state.isLoading = false
                state.isError = true
                state.errMessage = data.message
                return {...state }
            }
        case 'LOGIN_PROFILE_PENDING':
            {
                state.isLoading = true
                return {...state }
            }
        case 'LOGIN_PROFILE_FULFILLED':
            {
                const { data } = action.payload
                state.isLoading = false
                state.user = data.results
                return {...state }
            }
            case 'LOGIN_PROFILE_REJECTED':
                {
                    const { data } = action.payload.response
                    state.isLoading = false
                    state.isError = true
                    state.errMessage = data.message
                    return {...state }
                }
            case 'BALANCE_PENDING':
                {
                    state.isLoading = true
                    return {...state }
                }
            case 'BALANCE_FULFILLED':
                {
                    const { data } = action.payload
                    state.isLoading = false
                    state.balance = data.results
                    return {...state }
                }
            case 'BALANCE_REJECTED':
                {
                    const { data } = action.payload.response
                    state.isLoading = false
                    state.isError = true
                    state.errMessage = data.message
                    return {...state }
                }
            case 'PHONE_AUTH_PENDING':
                {
                    state.isLoading = true
                    return {...state }
                }
            case 'PHONE_AUTH_FULFILLED':
                {
                    const { data } = action.payload
                    state.phone = data.results.filter(item=>item.isPrimary==1).map((item)=>item.number)
                    state.isLoading = false
                    return {...state }
                }
            case 'PHONE_AUTH_REJECTED':
                {
                    const { data } = action.payload.response
                    state.isLoading = false
                    state.isError = true
                    state.errMessage = data.message
                    return {...state }
                }
        case 'LOGOUT':
            {
                state.token = null
                window.localStorage.removeItem('token')
                state.isAuthenticated = false
                state.isVerify = false
                return {...state }
            }
        default:
            {
                return {...state }
            }
    }
}

export default auth
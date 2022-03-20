const dataChangePassword = {
    data : null,
    message : null,
    isError : false,
    isLoading : false,
    errMessage : null
}

const changePassword = (state=dataChangePassword,action)=>{
    
    switch(action.type){
        case 'CHANGE_PASSWORD_PENDING' : {
            state.isLoading = true
            return {...state}
        }
        case 'CHANGE_PASSWORD_FULFILLED' : {
            const{data} = action.payload
            state.isLoading = false
            state.message = data.message
            state.isError = false
            return {...state}
        }
        case 'CHANGE_PASSWORD_REJECTED':{
            const {data} = action.payload.response
            state.isLoading = false
            state.isError = true
            state.errMessage = data.message
        }
        default : {
            return {...state}
        }
    }
}

export default changePassword
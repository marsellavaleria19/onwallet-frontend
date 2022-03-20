const dataTransaction = {
    dataReceiver : null,
    dataTransaction:null,
    message : null,
    isError : false,
    isLoading : false,
    errMessage : null
}

const transaction = (state=dataTransaction,action)=>{
    switch(action.type){
        case 'DATA_RECEIVER' : {
            state.dataReceiver = action.payload
            return {...state}
        }
        case 'DATA_TRANSACTION' : {
            state.dataTransaction = action.payload
            return {...state}
        }
        default : {
            return {...state}
        }
    }
}

export default transaction
const dataTransaction = {
   dataReceiver : null,
   dataTransaction:null,
   message : null,
   isError : false,
   isLoading : false,
   errMessage : null
};

const transaction = (state=dataTransaction,action)=>{
   switch(action.type){
   case 'DATA_RECEIVER' : {
      state.dataReceiver = action.payload;
      return {...state};
   }
   case 'DATA_TRANSACTION' : {
      state.dataTransaction = action.payload;
      return {...state};
   }
   case 'TRANSACTION_PENDING' : {
      state.isLoading = true;
      return {...state};
   }
   case 'TRANSACTION_FULFILLED' : {
      const{data} = action.payload;
      state.isLoading = false;
      state.message = data.message;
      state.isError = false;
      return {...state};
   }
   case 'TRANSACTION_REJECTED':{
      const {data} = action.payload.response;
      state.isLoading = false;
      state.isError = true;
      state.errMessage = data.message;
   }
   case 'TOPUP_PENDING' : {
      state.isLoading = true;
      return {...state};
   }
   case 'TOPUP_FULFILLED' : {
      const{data} = action.payload;
      state.isLoading = false;
      state.message = data.message;
      state.isError = false;
      return {...state};
   }
   case 'TOPUP_REJECTED':{
      const {data} = action.payload.response;
      state.isLoading = false;
      state.isError = true;
      state.errMessage = data.message;
   }
   default : {
      return {...state};
   }
   }
};

export default transaction;
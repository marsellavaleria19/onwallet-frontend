const dataUser = {
   message: null,
   errMessage: null,
   isLoading:false,
   isError:false,
   listUser: []
};

const user = (state=dataUser,action)=>{
   switch(action.type){
   case 'USER_PENDING' : {
      state.isLoading = true;
      return {...state};
   }
   case 'USER_FULFILLED' : {
      const{data} = action.payload;
      state.listUser = data.results;
      state.isLoading = false;
      state.message = data.message;
      state.isError = false;
      return {...state};
   }
   case 'USER_REJECTED':{
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

export default user;

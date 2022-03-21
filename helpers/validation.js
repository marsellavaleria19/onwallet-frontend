
    export const validationPassword = (data)=>{
        const newErrors = {}
        if(!data.currentPassword || data.currentPassword===''){
            newErrors.currentPassword = 'Current password must be filled'
        }
        if(!data.newPassword || data.newPassword===''){
            newErrors.newPassword = 'New password must be filled'
        }
        if(!data.repeatPassword || data.repeatPassword===''){
            newErrors.repeatPassword = 'Repeat new password must be filled'
        }
        return newErrors;
    }

    export const validationUser = (data)=>{
        const newErrors = {}
        if(!data.currentPassword || data.currentPassword===''){
            newErrors.currentPassword = 'Current password must be filled'
        }
        if(!data.newPassword || data.newPassword===''){
            newErrors.newPassword = 'New password must be filled'
        }
        if(!data.repeatPassword || data.repeatPassword===''){
            newErrors.repeatPassword = 'Repeat new password must be filled'
        }
        return newErrors;
    }

        
    export const validationForgotPassword = (data)=>{
        const newErrors = {}
        var cek = false
        if(!data.newPassword || data.newPassword===''){
            newErrors.newPassword = 'Password must must be filled'
            cek = true
        }
        if(!data.confirmPassword || data.confirmPassword===''){
            newErrors.confirmPassword = 'Confirm password must be filled'
            cek = true
        }

        if(!cek){
            if(data.newPassword !==data.confirmPassword){
                newErrors.errMessage = "Password not match"
            }
        }

        return newErrors;
    }

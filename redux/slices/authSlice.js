import { createSlice } from "@reduxjs/toolkit";
 const authSlice = createSlice({
    name:"auth",
    initialState:{
        error:{
            isError:false,
            code:""
        },
        loading:null,
        user:null
    },
    reducers:{
        signinRequst:(state)=>{
            state.loading = true
        },
        singinSucess:(state,action)=>{
           state.user= action.payload
           state.loading = false
           state.error={
            isError:false,
            code:""
           }
        },
        signinError:(state,action)=>{
            state.error = {...state.error,isError:true,code:action.payload}
            state.loading = false    
        },
        setUser:(state,action)=>{
        state.user= action.payload
        },
        signOut:(state,action)=>{
            state.user=null
            state.loading = false  
            state.error={
                isError:false,
                code:""
            }
        }
    }
 })

 export const {
    signinRequst,
    singinSucess,
    signinError,
    setUser,
    signOut
 } = authSlice.actions

 export default authSlice.reducer
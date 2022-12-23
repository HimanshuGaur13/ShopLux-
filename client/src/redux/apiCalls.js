import { loginFailure, loginStart, loginSuccess } from "./userRedux"
import { RegisterFailure, RegisterStart, RegisterSuccess } from "./userRedux"
import { publicRequest } from "../requestMethods";

export const login = async (dispatch, user)=>{
    dispatch(loginStart());
    try{
        const res = await publicRequest.post('/login', user)
        dispatch(loginSuccess(res.data));
    }catch(err){
        dispatch(loginFailure())
    }
}
export const register = async (dispatch, user)=>{
    dispatch(RegisterStart());
    try{
        const res = await publicRequest.post('/register', user)
        dispatch(RegisterSuccess(res.data));
        alert("Success")
    }catch(err){
        dispatch(RegisterFailure())
        alert("Failure")
    }
}


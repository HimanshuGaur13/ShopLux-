import { loginFailure, loginStart, loginSuccess } from "./userRedux"
import { 
    deleteProductFailure, deleteProductStart, 
    deleteProductSuccess, getProductFailure, 
    getProductStart, getProductSuccess,
    updateProductFailure, updateProductStart, 
    updateProductSuccess, addProductFailure, 
    addProductStart, addProductSuccess,
} from "./productRedux"

import { publicRequest, userRequest } from "../requestMethods";

export const login = async (dispatch, user)=>{
    dispatch(loginStart());
    try{
        const res = await publicRequest.post('/auth/login', user)
        dispatch(loginSuccess(res.data));
    }catch(err){
        dispatch(loginFailure())
    }
}

export const getProducts = async (dispatch)=>{
    dispatch(getProductStart());
    try{
        const res = await publicRequest.get('/products')
        dispatch(getProductSuccess(res.data));
    }catch(err){
        dispatch(getProductFailure())
    }
}

export const deleteProducts = async (id,dispatch)=>{
    
    dispatch(deleteProductStart());
    try{
        const res = await userRequest.delete(`/products/${id}`)
        dispatch(deleteProductSuccess(res,id));
        alert("Product Deleted Successfully")
    }catch(err){
        dispatch(deleteProductFailure())
    }
}

export const updateProducts = async (id,product, dispatch)=>{
    dispatch(updateProductStart());
    try{
        const res = await userRequest.put(`/products/${id}`);
        dispatch(updateProductSuccess({res,product,id}));
        alert("Product Updated Successfully")
    }catch(err){
        dispatch(updateProductFailure())
    }
}

export const addProduct = async (product,dispatch)=>{
    dispatch(addProductStart());
    try{
        const res = await userRequest.post(`/products`, product)
        dispatch(addProductSuccess(res.data));
        alert("Product Added Successfully")
    }catch(err){
        dispatch(addProductFailure())
    }
}

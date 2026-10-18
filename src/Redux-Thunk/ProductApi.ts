import axios from "axios"
import {type AppDispatch } from "./ProductRedux"

function getProducts(){
   return async function(dispatch:AppDispatch) {
        try {
            dispatch({type:'loading',payload:true})

            const response = await axios.get(
            " https://fakestoreapi.com/products?utm_source=chatgpt.com"
        )
        dispatch({
            type: 'setData',
            payload: response.data
        })
        dispatch({type:'loading', payload:false})

        } catch (error) {
            dispatch({type:'loading', payload:false})
            dispatch({type:'error',payload:error instanceof Error ? error.message : 'Failed to fetch product'})
        }
    }
}


export default getProducts;
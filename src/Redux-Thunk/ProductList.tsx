import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {ProductApi} from '../ReduxToolKit/ProductReducer'
import type{ RootState, AppDispatch } from "../ReduxToolKit/store";

function ProductList(){
    const dispatch = useDispatch<AppDispatch>()

    const {data,loading,error} = useSelector((state:RootState)=>state.productReducer)
    
    console.log(data)

    useEffect(()=>{
        dispatch(ProductApi())
    },[dispatch])

    if(loading) return <h1>Loading...</h1>
    if(error) return <h1>{error}</h1>

    return (
        <>
            <h1>Product List</h1>
            {
                data.map((users)=>{
                    return (
                        <h3 key={users.id}>{users.title}</h3>
                    )
                })
            }
        </>
    )
}

export default ProductList;
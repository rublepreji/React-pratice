import { legacy_createStore } from "redux";
import { thunk } from "redux-thunk";
import { applyMiddleware } from "redux";

type Product ={
    id:number;
    title:string;
    price:number;
    description:string;
    category:string
}
type ProductState ={
    data: Product[],
    loading:boolean,
    error:string
}
const intialState ={
    data:[],
    loading: false,
    error:''
}

type ActionType = {type:'setData',payload:[]} | {type:'loading', payload:boolean} | {type:'error', payload:''}

function productReducer(state:ProductState=intialState, action:ActionType){
    switch(action.type){
        case 'setData':
            return {
                ...state,
                data: action.payload
            }
        case 'loading':
            return {
                ...state,
                loading: action.payload
            }
        case 'error':
            return {
                ...state,
                error: action.payload
            }
        default:
            return state
    }
}


const productStore = legacy_createStore(productReducer,applyMiddleware(thunk))

export type RootState = ReturnType<typeof productStore.getState>;

export type AppDispatch = typeof productStore.dispatch

export default productStore;

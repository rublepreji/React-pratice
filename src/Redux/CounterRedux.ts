import { combineReducers } from "redux"


type Action = {type:'increment'} |{type: 'decrement'}


export const appReducer = combineReducers({
    value: CounterReducer,
    products: ProductReducer
})


function CounterReducer(prevState= 0,action: Action){
    switch(action.type){
        case 'increment':
            return  prevState+1
        case 'decrement':
            return prevState-1
        default: return prevState
    }
}

type ProductActionType = {type:'setData', payload:[]} | {type:'loading',payload:boolean} | {type:'error',payload:''}

function ProductReducer(prevState= {
    data:[],
    loading:false,
    error:''
}, action:ProductActionType){
    switch(action.type){
        case 'setData':
            return {
                ...prevState,
                data: action.payload
            }
        case 'loading':
            return {
                ...prevState,
                loading: action.payload
            }
        case 'error':
            return {
                ...prevState,
                error: action.payload
            }
    }
}


function increment(){
    return {
        type:'increment'
    }
}

function decrement (){
    return {
        type:'decrement'
    }
}
export {
    increment,
    decrement
}

export default CounterReducer;
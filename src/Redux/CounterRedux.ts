import { combineReducers } from "redux"


type Action = {type:'increment'} |{type: 'decrement'}


export const appReducer = combineReducers({
    value: CounterReducer
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
import { legacy_createStore } from "redux"

const intialValue = {
    value: 0
}
type Action = {type:'increment'} |{type: 'decrement'}

function CounterReducer(prevState= intialValue,action: Action){
    switch(action.type){
        case 'increment':
            return {
                ...prevState,
                value: prevState.value+1
            }
        case 'decrement':
            return {
                ...prevState,
                value: prevState.value-1
            }
        default: return prevState
    }
}

export const store = legacy_createStore(CounterReducer)

export default CounterReducer;
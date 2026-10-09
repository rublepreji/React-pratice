import { useReducer } from "react";

function valueReducer(state,action){
    switch(action){
        case 'increment':
            return {
                ...state,
                value: state.value +1
            }
        
        case 'decrement':
            return {
                ...state,
                value: state.value -1
            }
        
        case 'red':
            return {
                ...state,
                color: 'red'
            }
        case 'blue' :
            return {
                ...state,
                color: 'blue'
            }
    }
}

function Counter(){

    const intiallState= {
        value: 0,
        color:'grey'
    }
  
    const [value, dispatch] = useReducer(valueReducer,intiallState)
    return (
        <>
            <button onClick={()=>dispatch('decrement')}>-</button>
            <p style={{background:value.color}}>{value.value}</p>
            <button onClick={()=>dispatch('increment')}>+</button>

            <button onClick={()=>dispatch('red')}>red</button>
            <button onClick={()=>dispatch('blue')}>blue</button>
        </>
    )
}

export default Counter;

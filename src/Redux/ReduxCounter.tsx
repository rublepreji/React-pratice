import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "./CounterRedux";

function Counter(){
    interface counterState {
        value : number
    }

    const value = useSelector((state: counterState)=>state.value)
    const dispact = useDispatch()
    function increament(){
        dispact(increment())
    }
    function decreament(){
        dispact(decrement())
    }
    return (
        <>
            <button onClick={decreament}>-</button>
            <p>{value}</p>
            <button onClick={increament}>+</button>
        </>
    )
}

export default Counter;
import { useDispatch, useSelector } from "react-redux";

function Counter(){
    interface counterState {
        value : number
    }
    
    const value = useSelector((state: counterState)=>state.value)
    const dispact = useDispatch()
    function increament(){
        dispact({
            type:'increment'
        })
    }
    function decrement(){
        dispact({
            type:'decrement'
        })
    }
    return (
        <>
            <button onClick={decrement}>-</button>
            <p>{value}</p>
            <button onClick={increament}>+</button>
        </>
    )
}

export default Counter;
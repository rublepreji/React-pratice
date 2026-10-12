import { useReducer, useState } from "react";


interface todo {
    id:number;
    text: string;
    completed: boolean
}

type State = todo[]

type Action = {type:"Add-todo", payload:todo} | 
            {type:"Remove-todo", payload:number} | 
            {type:'toggle-complete',payload:number} | 
            {type: "Clear"}

function todoReducer(state:State,action:Action){
    switch(action.type){
        case "Add-todo":
            return [...state,action.payload]
        case "Clear":
            return state.filter((todo)=>!todo.completed)
        case "Remove-todo":
            return state.filter((todo)=>todo.id !== action.payload)
        case "toggle-complete":
            return state.map((todo)=>todo.id === action.payload ? {...todo,completed:!todo.completed}: todo)
        default:
            return state
    }
}

function Todo(){
    const initialState:State= []
    const [state, dispatch] = useReducer(todoReducer,initialState)
    const [text, setText] = useState('')

    function handleText(){
        const trimmedText = text.trim()
        if(!trimmedText) return 
        dispatch({
            type:"Add-todo",
            payload:{
                id: Date.now(),
                text: text,
                completed:false
            }
        })
    }

    function handleClear(){
        dispatch({
            type:"Clear"
        })
    }

    function handleRemove(id:number){
        dispatch({
            type:"Remove-todo",
            payload: id
        })
    }

    return (
        <>
            //  add a new todo
            <input onChange={(e)=>setText(e.target.value)} type="text" placeholder="Add new todo" />
            <button onClick={handleText}>Add</button>

            {
                state.map((text)=>{
                    return (
                        <>
                            <p>{text.text}</p>
                            <input checked={text.completed} onChange={()=>dispatch({type:'toggle-complete',payload:text.id})} type="checkbox" />
                            <button onClick={()=>handleRemove(text.id)}>delete</button>
                        </>
                    )
                })
            }

            //clear all completed todo list
            <button onClick={handleClear}>Clear all completed todo</button>
        </>
    )
}

export default Todo;

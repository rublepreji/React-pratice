import { useReducer, useState } from "react";


type Name = {
    name: string;
    id: number
}

type State = Name[]

type Action = 
 {type:'Add-ITEM' , payload: Name} 
| {type: 'REMOVE-NAME', payload: number}
| {type: 'CLEAR-LIST'}

function reducerFunction(state:State, action:Action){
    switch(action.type){
        case "Add-ITEM":
            return [
                ...state,
                action.payload
            ]
        case "REMOVE-NAME" :
            return state.filter((state)=>state.id !== action.payload)
        
        case "CLEAR-LIST":
            return []
        default: return state
    }
}

function NameList(){
    const [nameList, dispatch] = useReducer(reducerFunction,[])
    const [inputName, setInputName] = useState('')

    function addName(){
        const trimmedName = inputName.trim()
        if(!trimmedName) return
        dispatch({
            type: "Add-ITEM",
            payload: {
                name: trimmedName,
                id: Date.now()
            }
        })
    }

    function removeName(id:number){
        dispatch({
            type:"REMOVE-NAME",
            payload: id
        })
    }

    function clearList(){
        dispatch({
            type:"CLEAR-LIST",
        })
    }

    return (
        <>
            <input onChange={(e)=>setInputName(e.target.value)} type="text" placeholder="+ Add name" />
            <button onClick={addName}>add</button>

            {
                nameList.map((name)=>{
                    return (
                        <>
                            <p>{name.name}</p>
                            <button onClick={()=>removeName(name.id)}>remove name</button>
                        </>
                    )
                })
            }

            <button onClick={clearList}>Clear the entire list</button>
        </>
    )

}


export default NameList;
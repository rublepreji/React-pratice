import { useState } from "react"
import {produce} from "immer"

const intialState = [
    {
        name: 'house',
        rooms: [
            {
                name: 'room1',
                text: 'Room1'
            }
        ]
    },
    {
        name: 'Car',
        text: 'i20'
    }
]

function ChangeRoom({name, onChange}){
    return (
        <>
        <input type="text" value={name} onChange={onChange} />
        </>
    )
}

function ChangeCar({name, onChange}){
    return (
        <>
            <input type="text" value={name} onChange={onChange} />
        </>
    )
}


function Parent(){
    const [info, setInfo] = useState(intialState)

    function chaRoom(e){
        
        setInfo((state)=>{

            const newState = produce(state, (draft)=>{
                draft[0].rooms[0].text =  e.target.value
            })

            return newState;

            // return [
            //     {
            //         ...state[0],
            //         rooms:[
            //             {
            //                 ...state[0].rooms[0],
            //                 text: e.target.value
            //             }
            //         ]
            //     },
            //     state[1]
            // ]
        })
    }

    function chaCar(e){
        setInfo((state)=>{
            const newState = produce(state, (draft)=>{
            draft[1].text = e.target.value;
        })

        return newState;

            // return [
            //     state[0],
            //     {
            //         ...state[1],
            //         text: e.target.value
            //     }
            // ]
        })
    }

console.log(info)
    return (
        <>
        <ChangeCar name ={info[0].rooms[0].text} onChange={chaRoom}/>
        <ChangeRoom name={info[1].text} onChange={chaCar}/>
        </>
    )
}

export default Parent;



import { useState } from "react"

export default function LudoBoard (){

    let [moves, setMoves]= useState({blue: 0, red: 0, green: 0, yellow: 0})

    const rollDice = () => Math.floor(Math.random() * 6) + 1;

    let updateBlue=()=>{
        setMoves({...moves, blue: moves.blue + rollDice()});
    }
    let updateRed=()=>{
        setMoves({...moves, red: moves.red + rollDice()});
    }
    let updateGreen=()=>{
        setMoves({...moves, green: moves.green + rollDice()});
    }
    let updateYellow=()=>{
        setMoves({...moves, yellow: moves.yellow + rollDice()});
    }
    return (
        <div>
            <p>Game Start!</p>
            <div>
                <p>Blue moves ={moves.blue}</p>
                <button style={{backgroundColor: "blue"}} onClick={updateBlue}>Click </button>

                <p>red moves = {moves.red}</p>
                <button style={{backgroundColor: "red"}} onClick={updateRed}>Click</button>

                <p>green moves = {moves.green}</p>
                <button style={{backgroundColor: "green"}} onClick={updateGreen}>Click</button>

                <p>yellow moves = {moves.yellow}</p>
                <button style={{backgroundColor: "yellow"}} onClick={updateYellow}>Click</button>
                
            </div>
        </div>
    )
    
};
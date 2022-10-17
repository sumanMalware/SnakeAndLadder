import React, { useState } from 'react'
import './App1.css'
import dice from './dice.png'


const App1 = () => {
    function Dfr(props) {
        return (<h1>{props.nums}</h1>)

    }
    let numberArr = []
    for (let i = 100; i >= 1; i--) {
        numberArr.push(i)
    }

    let snakes = [23, 34, 52, 80, 99]
    let ladders = [10, 16, 21, 35, 44, 85]

    function classAssign(num) {

        if (snakes.includes(num)) {
            return 'snakeClass'

        } else if (ladders.includes(num)) {
            return 'laddersClass'

        } else {
            return 'normal'
        }
    }
    
    const [turn, setturn] = useState("Player 1 Turn")
    const PlayerTurn = () => {
        
        setturn("Player 2 Turn")
        
        let player = turn
        if (player === "Player 2 Turn") {
            setturn("Player 1 Turn")
        }
        document.getElementById("turn").innerHTML = turn
    }
    const [player1, setplayer1] = useState(1);
    const [player2, setplayer2] = useState(1);
    const diceNumber = () => {
        PlayerTurn()

        
        let dice = Math.ceil(Math.random() * 6)
        document.getElementById("display").innerHTML = dice
        
        
        
        if(turn==="Player 1 Turn"){
            setplayer1(player1 + dice)
            
        }
        else if(turn==="Player 2 Turn"){
            setplayer2(player2 + dice)
            
        }
        document.getElementById(`${player1}`).style.backgroundColor="orange"
        document.getElementById(`${player2}`).style.backgroundColor="black"
        // classAssign(player1)
        
        if (player1 === 10) {
            
            setplayer1(33)
        }

        else if (player1 === 16) {
            setplayer1(37);

        }
        else if (player1 === 21) {
            setplayer1(41);

        }
        else if (player1 === 23) {

            setplayer1(2);

        } else if (player1 === 35) {

            setplayer1(54);

        } else if (player1 === 34) {
            setplayer1(15);

        } else if (player1 === 44) {
            setplayer1(76);

        } else if (player1 === 52) {
            setplayer1(31);

        } else if (player1 === 80) {
            setplayer1(58);

        } else if (player1 === 85) {
            setplayer1(98);

        } else if (player1 === 99) {
            setplayer1(77);

        }
        else if (player2 === 10) {
            
            setplayer2(33)
        }

        else if (player2 === 16) {
            setplayer2(37);

        }
        else if (player2 === 21) {
            setplayer2(41);

        }
        else if (player2 === 23) {

            setplayer2(2);

        } else if (player2 === 35) {

            setplayer2(54);

        } else if (player2 === 34) {
            setplayer2(15);

        } else if (player2 === 44) {
            setplayer2(76);

        } else if (player2 === 52) {
            setplayer2(31);

        } else if (player2 === 80) {
            setplayer2(58);

        } else if (player2 === 85) {
            setplayer2(98);

        } else if (player2 === 99) {
            setplayer2(77);
        }
        if (player1 === 100) {
            alert("Player1 Won")
        }
        if (player2 === 100) {
            alert("Player2 Won")
        }
        if (player1 > 100) {
            setplayer1(player1-dice)
        }
        if (player2 > 100) {
            setplayer2(player2-dice)
        }


    }
    return (
        <div id='main'>

            <div className="gridcdclass">
                {numberArr.map(value => <div className={classAssign(value)} id={value.toString()} ><Dfr nums={value} />
                </div>)}
            </div>
            <div id='container'>
                <div className="dicepoint"><h1 id='display'>0</h1></div>
                <div className="tv"><h1 id='turn'>Start</h1></div>
                <div><img src={dice} alt="dice" id='diceimg' onClick={diceNumber} /></div>
                <div><h1>Player 1 position :{player1}</h1></div>
                <div><h1>Player 2 position :{player2}</h1></div>
                
            </div>
        </div>
    )
}

export default App1
import React, { useState } from 'react'
import './App1.css'
import diceimg from './dice.png'
import snakeladder from './snakeandladder.png'
// import ladder from './ladder.png'
const App1 = () => {


    const refreshPage = ()=>{
        window.location.reload();
     }


    function Dfr(props) {

        return (<h1>{props.nums}</h1>)

    }
    let numberArr = []
    for (let i = 100; i >= 1; i -= 10) {
        if (i % 20 === 0) {
            for (let j = i; j > (i - 10); j--) {
                numberArr.push(j)

            }
        } else {
            for (let j = (i - 9); j <= i; j++) {
                numberArr.push(j)

            }
        }
    }

    let snakes = [23, 34, 52, 80, 99]
    let ladders = [10, 16, 21, 35, 44, 85]
    let toLadders = [33, 37, 41, 54, 70, 90]
    let toSnakes = [2, 15, 31, 58, 77]

    function classAssign(num) {

        // let r = num.currentTarget.className

        if (snakes.includes(num)) {
            return 'snakeClass'

        } else if (ladders.includes(num)) {
            return 'laddersClass'

        } else {
            return 'normal'
        }

    }

    const [turn, setturn] = useState("Start Game")
    const PlayerTurn = () => {

        setturn("Player 1 Turn")

        let player = turn
        if (player === "Player 1 Turn") {
            setturn("Player 2 Turn")

        }
    }
    const [player1, setplayer1] = useState(1);
    const [player2, setplayer2] = useState(1);

    const diceNumber = () => {
        PlayerTurn()

        let dice = Math.ceil(Math.random() * 6)
        document.getElementById("display").innerHTML = dice

        if (turn === "Player 1 Turn") {
            document.getElementById("turn").style.color = "orange"
        } else {
            document.getElementById("turn").style.color = "black"

        }


        if (turn === "Player 1 Turn") {

            document.getElementById(player1).style.backgroundColor = 'rgb(37, 126, 126)'

            if (ladders.includes(player1 + dice)) {
                let index = ladders.indexOf(player1 + dice)
                document.getElementById(toLadders[index]).style.backgroundColor = 'orange'
                setplayer1(toLadders[index])

            }
            else if (snakes.includes(player1 + dice)) {
                let index = snakes.indexOf(player1 + dice)
                document.getElementById(toSnakes[player1 + dice]).style.backgroundColor = 'orange'
                setplayer1(toSnakes[index])

            }
            else {
                document.getElementById(`${player1 + dice}`).style.backgroundColor = "orange"
                setplayer1(player1 + dice)
            }
            if (player2 === 100) {
                alert("Player : 2 won")
                refreshPage()
            }
            else if (player2 > 100) {
                setplayer2(player2 - dice)
            }
            // if(player1===player2){
            //     document.getElementById(player2).style.background = 'linear-gradient(to right,orange 0%,orange 50%,black 50%,black 100%)'

            // }

        }
        else if (turn === "Player 2 Turn") {
            document.getElementById(player2).style.backgroundColor = 'rgb(37, 126, 126)'

            if (snakes.includes(player2 + dice)) {
                let index = snakes.indexOf(player2 + dice)
                document.getElementById(toSnakes[index]).style.backgroundColor = 'black'
                setplayer2(toSnakes[index])

            }
            else if (ladders.includes(player2 + dice)) {
                let index = ladders.indexOf(player2 + dice)
                document.getElementById(toLadders[index]).style.backgroundColor = 'black'
                setplayer2(toLadders[index])

            }
            else {
                document.getElementById(`${player2 + dice}`).style.backgroundColor = "black"
                setplayer2(player2 + dice)

                // if(player1===player2){
                //     document.getElementById(player1).style.background = 'linear-gradient(to right,orange 0%,orange 50%,black 50%,black 100%)'

                // }
            }

            if (player1 === 100) {
                alert("Player : 1 won")
                refreshPage()

            }
            else if (player1 > 100) {
                setplayer1(player1 - dice)
            }

        }
    }
    return (
        <div id='main'>

            <div className="gridcdclass">
                {numberArr.map(value => <div className={classAssign(value)} id={value.toString()} ><Dfr nums={value} />
                </div>)}
                {/* <div><img src={ladder} alt="ladder" id='ladder' /></div> */}
            </div>
            <div id='container'>
                <div className="one">
                    <div><h1>Player <span className="num1">1</span> position : <span className='playerpoint'>{player1}</span></h1></div><br />
                    <div><h1>Player <span className="num2">2</span> position : <span className='playerpoint'>{player2}</span></h1></div>
                    <div className="tv"><h2 id='turn'>{turn}</h2>


                    </div>
                </div>
                <div className="two">
                    <div><img src={snakeladder} alt="snakel" id='laddersnake' /></div>
                </div>
                <div className="three">
                    <div className="dicepoint"><h1 id='display'>0</h1></div>
                    <div className="dicepoint2" ><img src={diceimg} alt="dice" id='diceimg' onClick={diceNumber} /></div>
                </div>
                <button onClick={refreshPage} id="refresh"><h2>RESET GAME</h2></button> 




            </div>


        </div>
    )
}

export default App1
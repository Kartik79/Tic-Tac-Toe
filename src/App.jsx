import './style.scss'
import { useState } from 'react'
import Board from "./components/Board"
import {calculateWinner} from "./winner"

function App() {
  const[squares,setSquares]=useState(Array(9).fill(null))
  const[isNext,setisNext]=useState(false)
  const winner=calculateWinner(squares)
  const nextPlayer=isNext?'X':'0'
  const statusMessage=winner?`Winner is ${winner}`:`Next Player is ${nextPlayer}`
  const handleSquareclick=position=>{
      if(squares[position]||winner){
          return
      }
      setSquares(currentSquares=> {
          return currentSquares.map((squarevalue,pos)=>{
          if(pos==position){
              return isNext?'X':'0'
          }
          else 
              return squarevalue;
          })
      })
      setisNext(currentisNext=> !currentisNext)
  }

  return (
      <div className='app'>
        <h2>{statusMessage}</h2>
        <Board squares={squares} handleSquareclick={handleSquareclick}/>  
      </div>
  )
}

export default App

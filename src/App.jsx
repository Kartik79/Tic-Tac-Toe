import './style.scss'
import { useState } from 'react'
import Board from "./components/Board"
import {calculateWinner} from "./winner"
import History from './components/history'
import StatusMessage from './components/StatusMessage'

function App() {
  const[history,setHistory]= useState([{squares:Array(9).fill(null),isNext:false}])
  const[currentMove,setcurrentMove]=useState(0)
  const gamingboard=history[currentMove]
  const winner=calculateWinner(gamingboard.squares)
  
  const handleSquareclick=position=>{
      if(gamingboard.squares[position]||winner){
          return
      }
      setHistory(currentHistory=> {
        const isTraversing=currentMove+1!==currentHistory.length
        const lastgamingstate=isTraversing?currentHistory[currentMove]:currentHistory[currentHistory.length-1]
          const nextsquarestate=lastgamingstate.squares.map((squarevalue,pos)=>{
          if(pos==position){
              return lastgamingstate.isNext?'X':'0'
          }
          else 
              return squarevalue;
          })
          const base= isTraversing?currentHistory.slice(0,currentHistory.indexOf(lastgamingstate)+1):currentHistory
          return base.concat({squares:nextsquarestate,isNext:!lastgamingstate.isNext}) 
      })
      setcurrentMove(move=>move+1)
  }
  const moveTo=move=> {
    setcurrentMove(move)
  }
  return (
      <div className='app'>
        <StatusMessage winner={winner} gamingboard={gamingboard}/>
        <Board squares={gamingboard.squares} handleSquareclick={handleSquareclick}/>  
        <h2>CURRENT GAME HISTORY</h2>
        <History history={history} moveTo={moveTo} currentMove={currentMove}/>
      </div>
  )
}

export default App

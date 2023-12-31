import './style.scss'
import { useState } from 'react'
import Board from "./components/Board"
import {calculateWinner} from "./winner"
import History from './components/history'
import StatusMessage from './components/StatusMessage'
const NewGame=[{squares:Array(9).fill(null),isNext:false}]

function App() {
  const[history,setHistory]= useState(NewGame)
  const[currentMove,setcurrentMove]=useState(0)
  const gamingboard=history[currentMove]
  const {winner,winningSquare}=calculateWinner(gamingboard.squares)
  
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
  const onNewgamestart=()=> {
    setHistory(NewGame)
    setcurrentMove(0)
  } 
  return (
      <div className='app'>
        <h1>TIC <span className='text-green'>TAC</span> TOE</h1>
        <StatusMessage winner={winner} gamingboard={gamingboard}/>
        <Board squares={gamingboard.squares} handleSquareclick={handleSquareclick} winningSquare={winningSquare}/>  
        <div className='bg-balls'></div>
        <button type='button' className={`btn-reset ${currentMove!=0?'active':''}`} onClick={onNewgamestart}>GAME RESET</button>
        <h2 style={{fontWeight:'normal'}}>Current Game History</h2>
        <History history={history} moveTo={moveTo} currentMove={currentMove}/>
      </div>
  )
}

export default App

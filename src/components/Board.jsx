import Square from './Square';
import { useState } from 'react';
const Board= () => {
        const[squares,setSquares]=useState(Array(9).fill(null))
        const[isNext,setisNext]=useState(false)
        const handleSquareclick=position=>{
            if(squares[position]){
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

        const rendersquare=position=> {
            return(
                <Square value={squares[position]} onClick={()=> handleSquareclick(position)}/>
            )
        }
    return(
        <div className='board'>
            <div className='board-row'>
                {rendersquare(0)}
                {rendersquare(1)}
                {rendersquare(2)}
            </div>
            <div className='board-row'>
                {rendersquare(3)}
                {rendersquare(4)}
                {rendersquare(5)}
            </div>
            <div className='board-row'>
                {rendersquare(6)}
                {rendersquare(7)}
                {rendersquare(8)}
            </div>
        </div>
    );
};
export default Board;
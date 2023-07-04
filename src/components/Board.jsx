import Square from './Square';

const Board= ({squares,handleSquareclick,winningSquare}) => {

        const rendersquare=position=> {
            const iswinningSquare=winningSquare.includes(position)
            return(
                <Square value={squares[position]} onClick={()=> handleSquareclick(position)} iswinningSquare={iswinningSquare}/>
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
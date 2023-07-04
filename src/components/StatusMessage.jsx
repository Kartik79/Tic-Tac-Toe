const StatusMessage=({winner,gamingboard})=>{
    const {squares,isNext}=gamingboard
    const noMovesleft=squares.every(squareValue => squareValue!=null)
    const nextPlayer=isNext?'X':'0'
    const renderStatusMessage=()=>{
        if(winner) {
            return <div>Winner is <span className={winner==="0"?"text-orange":"text-green"}>{winner}</span></div>
        }
        if(!winner && noMovesleft) {
            return (
                <div>
                    <span className="text-orange">0</span> and {" "}
                    <span className="text-green">X</span> tied
                </div>
            )
        }
        if(!winner && !noMovesleft) {
            return <div>Next Player is <span className={isNext?"text-green":"text-orange"}>{nextPlayer}</span></div>
        }
        return null
    }
    return <h2 className="status-message">{renderStatusMessage()}</h2>
}
export default StatusMessage
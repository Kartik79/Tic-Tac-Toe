const Square = ({value,onClick,iswinningSquare})=> {
    return (
        <button type="button" className={`square ${value==='X'? 'text-green':'text-orange'} ${iswinningSquare?'winning':''}`} onClick={onClick}>
        {value}
        </button>
    );
}
export default Square
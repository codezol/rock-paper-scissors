import scissors from "./images/icon-scissors.svg"
const Scissors = ({handleChoiceClick}) => {
    return ( 
        <div className="scissors">
                    <img className="circle" id="scissors" onClick={handleChoiceClick}  src={scissors} alt="scissors" />
        </div>
     );
}
 
export default Scissors;
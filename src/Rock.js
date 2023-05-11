import rock from "./images/icon-rock.svg"
const Rock = ({handleChoiceClick}) => {
    return ( 
        <div className="rock" >
                    <img  className="circle" id="rock" onClick={handleChoiceClick}  src={rock} alt="rock" />
        </div>
     );
}
 
export default Rock;
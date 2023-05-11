
import paper from "./images/icon-paper.svg"
const Paper = ({handleChoiceClick}) => {
    return ( 
        <div className="paper">
            <img className="circle" id="paper" onClick={handleChoiceClick} src={paper}  alt="paper" />
        </div>
     );
}
 
export default Paper;
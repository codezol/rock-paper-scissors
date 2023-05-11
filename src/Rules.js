import RulesModle from "../src/images/image-rules.svg";
import close from "./images/icon-close.svg"

const Rules = ({showRules, handleRulesClick}) => {
    

    
    return ( 
       <div className={showRules? "rulesContainer ":"rulesContiner hide"}>
             <div className="rules" >
                <div><h3>Rules</h3><span><img src={close} alt="close-icon" onClick={handleRulesClick} /></span></div>
                <img className="rules-img"src={RulesModle} alt="rulesModle" />
            </div>
       </div>
     );
}
 
export default Rules;
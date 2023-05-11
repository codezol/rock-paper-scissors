import rock from "./images/icon-rock.svg"
import scissors from "./images/icon-scissors.svg"
import paper from "./images/icon-paper.svg"
import Paper from "./Paper"
import Scissors from "./Scissors"
import Rock from "./Rock"
import Rules from "./Rules"
import RulesButton from "./RulesButton"
const MainPage = ({handleRulesClick,choosed,setchoosed,showRules}) => {
    
    
    const handleChoiceClick = (e) => {
        setchoosed(e.target.id);
      
        
    }
    return ( 
    
        <main className={choosed? "hide":""}>
           <div className="game-tools-container">
                <div className="upper-row">
                    < Paper handleChoiceClick={handleChoiceClick} paper={paper} />
                    <Scissors handleChoiceClick={handleChoiceClick} scissors={scissors} />
                    
                </div>
            <Rock handleChoiceClick={handleChoiceClick} rock={rock}/>
           </div>
            <RulesButton showRules={showRules} handleRulesClick={handleRulesClick}/>
        </main>
     );
}
 
export default MainPage;
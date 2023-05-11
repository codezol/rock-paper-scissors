const RulesButton = ({handleRulesClick,showRules}) => {
   
    return ( 
        <button className={showRules?"hide":"rules-button"} onClick={handleRulesClick}>Rules</button>
     );
}
 
export default RulesButton;
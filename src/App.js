import './App.css';
import MainPage from './MainPage';
import Rules from './Rules';
import { useState } from 'react';
import ScoreBlock from './ScoreBlock';
import Game from './Game';
function App() {

  const [showRules, setShowRules] = useState(false);
  const [choosed, setchoosed] = useState();
  const [score, setScore] = useState(0);
  const handleRulesClick = () => {
    setShowRules(!showRules);
}
  return (
   <div className="App">
    
    <ScoreBlock score={score} />
    <Rules showRules={showRules}  handleRulesClick={handleRulesClick}/>
    <MainPage showRules={showRules} choosed={choosed} setchoosed={setchoosed} handleRulesClick={handleRulesClick}/>
    <Game showRules={showRules} choosed={choosed} setScore={setScore} score={score} setchoosed={setchoosed} handleRulesClick={handleRulesClick}/>
   </div>
  );
}

export default App;

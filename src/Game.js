import { useState } from "react";
import Paper from "./Paper";
import Rock from "./Rock";
import Scissors from "./Scissors";
import RulesButton from "./RulesButton";

const Game = ({choosed, setScore,score,setchoosed,handleRulesClick,showRules}) => {
    const [playAgain, setPlayAgain] = useState(false)
    const [resulte, setResult] = useState("")
    const tools = ["rock", "paper", "scissors"];
    const [theHouseisClikced, setTheHouseisClicked] =useState(false)
    const [TheHouse, setTheHouse] = useState("")
 
    function whoWins() {
         const tool = tools[Math.floor(Math.random() * tools.length)]
        setTheHouse(tool)
        console.log(tool)
        
        setTheHouseisClicked(true)
        if((tool === "rock" && choosed === "paper") || (tool === "paper" && choosed === "scissors") || (tool === "scissors" && choosed === "rock")){
            setResult("YOU WIN")
            setScore(score += 1)
        }else if ((tool === "paper" && choosed ==="rock") || (tool === "scissors"&& choosed === "paper") || (tool=== "rock" && choosed === "scissors")){
            setResult("YOU LOSE")
            setScore(score -= 1)
        }else if(tool === choosed){
            setResult("DRAW")
        }
    
    }
    const handlePlayAgain = () =>  {
        setResult("")
        setPlayAgain(true)
        setTheHouseisClicked(false)
        setchoosed("")
    }

    return ( 
        <main  className={choosed?"bickedTool":"hide"}>
            {/* the user choice setting */}

            <div className="player">
                <h2>YOU PICKED</h2>
            {/* check the value of choosed passed from the app */}
                <div className={resulte === "YOU WIN"? "winner" : ""}>
                    {choosed === "rock"? <Rock />:choosed === "paper"? <Paper />:<Scissors />}
                </div>
            </div>

            {/* the house choice setting */}

            <div className={theHouseisClikced?"playing-stauts":"hide"}>
                <h1>{resulte}</h1>
                    <button className="play-again" onClick={handlePlayAgain} >
                        PLAY AGAIN
                    </button>
            </div>

            <div className="the-house">
                <h2>THE HOUSE PICKED</h2>
               <div className="the-house">
                <div onClick={whoWins} onChange={  whoWins} className={theHouseisClikced?"":"empty-house-tool"}>

                </div>

                
                <div className={resulte === "YOU LOSE"? "winner":""}>
                {
                  
                  theHouseisClikced? TheHouse === "rock"? <Rock />:TheHouse === "scissors"?<Scissors />: TheHouse === "paper"? <Paper />:"":""
                
              }
                </div>
                
          
           
               </div>
            </div>
            <RulesButton showRules = {showRules} handleRulesClick={handleRulesClick}/>
        </main>
     );
}
 
export default Game;
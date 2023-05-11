
const ScoreBlock = ({score}) => {
  
    return (  
        
        <div className="score-block">
                <div className="names">
                    <h1>ROCK</h1>
                    <h1>PAPER</h1>
                    <h1>SCISSORS</h1>
                </div>
                <div className="score">
                        <div>score</div>
                        <span>{score}</span>
                    </div>
            </div>
    );
}
 
export default ScoreBlock;
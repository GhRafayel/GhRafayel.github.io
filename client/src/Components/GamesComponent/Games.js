import './Games.css'
import {Link} from 'react-router-dom'
function Games(){
  return (
    <div id="games">
        <div className="game-container">
            <h4 className="game-title">My Games</h4>
            <div className="game-work-list">
                <div className="game-work">
                    <div>
                        <h4 className="game-work-h4">Game 1</h4>
                    </div>
                    
                    <Link to='/Game1' className="game-work-a">
                        <img src={require("../public/img/game-1.jpeg")} alt="Game-1" className="game-work-img"/>
                    </Link>
                </div>
                <div className="game-work">
                    <div>
                        <h4 className="game-work-h4">Game 2</h4>
                    </div>
                    <Link to="/game2" className="game-work-a">
                        <img src={require("../public/img/game-2.jpeg")} alt="game-2" className="game-work-img"/>
                    </Link>
                </div>
                <div className="game-work">
                    <div>
                        <h4 className="game-work-h4">Memory Game</h4>
                    </div>
                    <Link to="/game3" className="game-work-a">
                        <img src={require("../public/img/memory-game.jpg")} alt="game-memory" className="game-work-img"/>
                    </Link>
                </div>
               
            </div>
        </div>
    </div>
  )
}
export default Games;
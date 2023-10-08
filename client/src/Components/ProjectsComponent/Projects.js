import "./Projects.css"
import {Link} from 'react-router-dom'
function Projects(){
  return (
    <div id="Projects">
    <div className="Projects-container">
        <h4 className="Projects-title">My works</h4>
        <div className="Projects-work-list">
            <div className="Projects-work">
                <div>
                    <h4 className="Projects-work-h4">Weather</h4>
                </div>
                <Link to="/Weather" className="Projects-work-a">
                    <img src={require("../public/img/Weather.jpg")} alt="Weather" className="Projects-work-img"/>
                </Link>
            </div>
            <div className="Projects-work">
                <div>
                    <h4 className="Projects-work-h4">Stop_Watch</h4>
                </div>
                <Link to="/Timer" className="Projects-work-a">
                    <img src={require("../public/img/Stop_Watch.jpg")} alt="Stop_Watch" className="Projects-work-img"/>
                </Link>
            </div>
            <div className="Projects-work">
                <div>
                    <h4 className="Projects-work-h4">Bill_total</h4>
                </div>
                <Link to="/Calculation" className="Projects-work-a">
                    <img src={require("../public/img/Bill_total.jpg")} alt="/Bill_total" className="Projects-work-img"/>
                </Link>
            </div>
        </div>
    </div>
</div>
  )
}
export default Projects;
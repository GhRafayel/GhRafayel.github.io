import Data from "../components/data";
import TechConstellation from "./three/TechConstellation";

const skills = Data.skills;

const Skills = ({darkMode}) =>
{
	return (
		<div id="skills" className="w-full">
			<TechConstellation darkMode={darkMode} skills={skills} />
		</div>
	)
}

export default Skills;

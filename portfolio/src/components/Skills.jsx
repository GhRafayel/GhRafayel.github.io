import html			from "../assets/Html.png"
import css			from "../assets/Css.png"
import js			from "../assets/Js.png"
import regular		from "../assets/expressions.png"
import nodeJS		from "../assets/Nodejs.png"
import reactJS		from "../assets/React-js.png"
import docker		from "../assets/docker.png"
import linux		from "../assets/Terminal.png"
import cpp			from "../assets/C.png"
import c			from "../assets/C.png"
import Bootstrap	from "../assets/bootstrap.png"
import tailwind		from "../assets/icons8-tailwind-css-48.png"
import expres 		from "../assets/Express-js.png"

const skills = [
	{name: 'Html 5' , icon: html},
	{name: 'Css 3' , icon: css},
	{name: 'Bootstrap ' , icon: Bootstrap },
	{name: 'TalWind' , icon: tailwind},
	{name: 'JavaScrpt' , icon: js},
	{name: 'React JS' , icon: reactJS},
	{name: 'Node JS' , icon: nodeJS},
	{name: 'Expres JS' , icon: expres},
	{name: 'C' , icon: c},
	{name: 'C++' , icon: cpp},
	{name: 'Regular Expretion' , icon: regular},
	{name: 'Docker' , icon: docker,},
	{name: 'Linux' , icon: linux}
];

const Skills = ({darkMode}) => 
{
	const color = darkMode ? 'text-gray-100' : 'text-gray-900';
	return (
		<section id="skills" 
				className={`${color} py-4 relative overflow-hidden`}
		>
			<div className="py-14  relative overflow-hidden">
				<div className=" container px-5 py-4 mx-auto">
					<div className="text-center mb-20" data-aos='fade-up'>
						<h1 className={`${color} sm:text-4xl text-3xl font-bold title-font mb-4`}>
								My Skills
						</h1>
						<p className={`text-lg max-w-2xl mx-auto leading-relaxed ${color} `}>
							I have experience in these areas and enjoy learning new technologies to solve problems efficiently.
						</p>
					</div>
					<div className="flex flex-wrap -m-4" data-aos='fade-up' data-aos-delay='200'>
						{
							skills.map((item,i ) => (
								<div key={i} className={`${color}  p-4 lg:w-1/4 md:w-1/2 w-full`} data-aos='fade-up' data-aos-delay={`${100 + i * 150}`}>
									<div  className="h-full p-4  rounded-2xl border border-gray-600 hover:border-green-700 hover:border-2 transition-all duration-300  hover:-translate-y-2 group hover:shadow-[0_0_30px_rgb(255, 165, 0, 0.15)]">
											<div className="flex items-center  mb-6">
												<div 
													className={`bg-linear-to-r  from-gray-300 to-gray-100 w-16 h-16 rounded-xl p-3 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
													<img src={item.icon} alt={item.name} className="w-full h-full object-contain"/>
												</div>
												<h3 className={`text-2xl font-bold ml-4 ${color} `}>{item.name} </h3>
											</div>
									</div>
								</div>
							))
						}
					</div>
				</div>
			</div>
			
		</section>
	)
}

export default Skills;
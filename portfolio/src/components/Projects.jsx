import {FaExternalLinkAlt, FaGithub} from 'react-icons/fa';
 
import Data	from "../components/data";

const projects = Data.projects.low_level;

const Projects = ({darkMode}) => {
	const colors = darkMode ? 'text-gray-100' : 'text-gray-900';
	const code_dome_buttons = `flex-1 flex items-center justify-center gap-1.5 px-3 py-2 text-sm rounded-lg transition-all duration-500 cursor-pointer ${darkMode ? "hover:text-gray-900" :"hover:text-white"}`;
	return (
		<section id="projects" className={`${colors} relative px-24 text-center`}>
			
			<div className="container mx-auto px-4">
				<div className="text-center mb-10" data-aos='fade-up'>
					<h2 className={`sm:text-4xl font-bold mb-3 ${darkMode ? 'white' : '#1f2937'}`} > My Projects </h2>
					<p className={`max-w-xl mx-auto ${darkMode ? '#d1d5db' : '#6b7280'}`}>
						A show case of my recent projects.
					</p>
				</div>
				<div className="grid justify-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-12`">
					{projects.map((project, index) => 
					(
						<div key={index} className={`${colors} justify-items-center`} data-aos="fade-up" data-aos-delay={`${300 + index * 100} min-w-70`} >
							<div className="h-full max-w-90 min-w-60 p-4 overflow-hidden rounded-2xl flex flex-col border border-green-600 hover:border-green-500/50 transition-all duration-300 hover:-translate-y-2">
								{/* Image */}
								<div className="w-full  h-58 overflow-hidden rounded-t-xl">
									<img src={project.image} alt={project.title} className="w-full h-full object-center" />
								</div>

								{/* Content */}
								<div className="p-4 flex flex-col">
									<h3 className={`${colors} text-lg font-bold mb-2`}> {project.title} </h3>

									<p className={`${colors} text-sm mb-3 line-clamp-3`}> {project.desc} </p>

									<div className={`${colors} flex flex-wrap gap-1.5 mb-4`}>
										{project.tags.map((item, i) => (
											<span key={i} className="px-3 py-1 text-xs rounded-full border border-gray-400 hover:border-green-600  hover:scale-110  transition-all duration-100">
												{item}
											</span>
										))}
									</div>
									

									{/* Buttons */}
									<div className="mt-auto flex flex-col min-[450px]:flex-row gap-2 justify-center">
										<a href={project.href} target="_blank" className={`${code_dome_buttons} bg-blue-400`}> 
											<FaGithub />
											Code
										</a>

										<a href={project.href} target="_blank" className={`${code_dome_buttons} bg-green-500`}>
											<FaExternalLinkAlt />
											Demo
										</a>
									</div>
								</div>

							</div>
						</div>
					))}
				</div>

				{/* <div className="text-center mt-10">
						<a href="#" className={`inline-flex items-center font-semibold gap-2 px-7 py-4  
												text-white text-sm rounded-lg hover:shadow-lg
												hover:shadow-green-500/25
												transition-all bg-green-700 ${colors}`}
									data-aos='zoom-in'
									data-aos-delay='400'
						>
							<FaGithub className="text-sm"/>
							<span>View All Projects </span>
						</a>
				</div> */}
			</div>
		</section>
	)
}

export default Projects
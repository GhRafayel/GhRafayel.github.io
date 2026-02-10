import {FaExternalLinkAlt, FaGithub} from 'react-icons/fa'

import Philosopher		from "../assets/project/Philosopher.png"
import Inception		from "../assets/project/Inception.png"
import Get_next_line	from "../assets/project/Get_next_line.png"
import Minishell		from "../assets/project/Minishell.png"
import Minitalk			from "../assets/project/Minitalk.png"
import NetPractice		from "../assets/project/NetPractice.png"
import Web_server		from "../assets/project/WebServer_project.png"
import Push_swap		from "../assets/project/push_swap.png"
import Cub3D			from "../assets/project/Cub3D.png"
import Solong			from "../assets/project/soLong.png"
 
const projects = [
	{
		title: 'Web Server',
		desc: 'A custom web server implemented in C and C++, handling HTTP requests, responses, and basic networking concepts.',
		image: Web_server,
		tags: ['C', 'C++', 'Networking', 'HTTP'],
		href: "https://github.com/GhRafayel/webserv",
	},
	{
		title: 'Minishell',
		desc: 'A Unix shell implemented in C, supporting command execution, pipes, redirections, environment variables, and built-in commands.',
		image: Minishell,
		tags: ['C', 'Unix', 'Shell', 'Processes'],
		href: "https://github.com/GhRafayel/minishell",
	},
	{
		title: 'Philosophers',
		desc: 'A concurrency project solving the Dining Philosophers problem using threads, mutexes, and synchronization techniques.',
		image: Philosopher,
		tags: ['C', 'Threads', 'Mutex', 'Concurrency'],
		href: "https://github.com/GhRafayel/Philosopher",
	},
	{
		title: 'Cub3D',
		desc: 'A 3D raycasting game engine developed in C, inspired by Wolfenstein 3D, using MiniLibX for rendering.',
		image: Cub3D,
		tags: ['C', 'Raycasting', 'Game Engine', 'MiniLibX'],
		href: "https://github.com/GhRafayel/Cub_3d",
	},
	{
		title: 'So_long',
		desc: 'A small 2D game written in C using the MiniLibX library, featuring player movement, collectibles, and map validation.',
		image: Solong,
		tags: ['C', 'Game Dev', 'MiniLibX', '2D'],
		href: "https://github.com/GhRafayel/so_long",
	},
	
	
	{
		title: 'Push_swap',
		desc: 'A sorting algorithm project in C focused on stack manipulation and optimizing the number of operations.',
		image: Push_swap,
		tags: ['C', 'Algorithms', 'Data Structures', 'Stacks'],
		href: 'https://github.com/GhRafayel/push_swap',
	},
	
	{
		title: 'Minitalk',
		desc: 'A client-server communication project in C using UNIX signals to transmit data bit by bit between processes.',
		image: Minitalk,
		tags: ['C', 'Signals', 'IPC', 'Processes'],
		href: "https://github.com/GhRafayel/minitalk",
	},
	{
		title: 'Get Next Line',
		desc: 'A C function that reads a file line by line from a file descriptor, handling memory management efficiently.',
		image: Get_next_line,
		tags: ['C', 'Memory Management', 'File Descriptors'],
		href: "https://github.com/GhRafayel/Get_next_line",
		
	},
	{
		title: 'NetPractice',
		desc: 'A networking project focused on IP addressing, subnetting, and understanding TCP/IP communication.',
		image: NetPractice,
		tags: ['Networking', 'TCP/IP', 'Subnetting'],
		href: "#",
	},
	{
		title: 'Inception',
		desc: 'A DevOps project using Docker to build and manage multiple services with containers and Docker Compose.',
		image: Inception,
		tags: ['Docker', 'Docker Compose', 'DevOps'],
		href: "https://github.com/GhRafayel/Inception",
	},
];

const Projects = ({darkMode}) => {
	const colors = darkMode ? 'text-gray-100' : 'text-gray-900';
	return (
		<section id="projects" className={`${colors} relative px-24 justify-items-center`}>
			
			<div className="container max-auto px-4">
				<div className="text-center mb-10" data-aos='fade-up'>
					<h2 className={`sm:text-4xl font-bold mb-3 ${darkMode ? 'white' : '#1f2937'}`} > My Project </h2>
					<p className={`max-w-xl mx-auto ${darkMode ? '#d1d5db' : '#6b7280'}`}>
						A showcase of my recent projects.
					</p>
				</div>
				
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
					{projects.map((project, index) => 
					(
						<div key={index} className={`${colors} flex items-center justify-center`} data-aos="fade-up" data-aos-delay={`${300 + index * 100} `} >
							<div className="h-full max-w-90 p-4 overflow-hidden rounded-2xl flex flex-col border border-green-600 hover:border-green-500/50 transition-all duration-300 hover:-translate-y-2">
								{/* Image */}
								<div className="w-full  h-48 overflow-hidden rounded-t-xl">
									<img src={project.image} alt={project.title} className="w-full h-full object-center" />
								</div>

								{/* Content */}
								<div className="p-4 flex flex-col flex-grow">
									<h3 className={`${colors} text-lg font-bold mb-2`}> {project.title} </h3>

									<p className={`${colors} text-sm mb-3 line-clamp-3`}> {project.desc} </p>

									<div className={`${colors} flex flex-wrap gap-1.5 mb-4`}>
										{project.tags.map((item, i) => (
											<span key={i} className="px-3 py-1 text-xs rounded-full border border-gray-400 hover:border-green-600 transition">
												{item}
											</span>
										))}
									</div>

									{/* Buttons */}
									<div className="mt-auto flex gap-2">
										<a href={project.href} target="_blank" className={`flex-1 flex items-center justify-center gap-1.5 px-3 py-2 text-sm rounded-lg bg-blue-400 ${colors} cursor-pointer`}>
											<FaGithub />
											Code
										</a>
										<a className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 text-sm rounded-lg bg-green-500">
											<FaExternalLinkAlt />
											Demo
										</a>
									</div>
								</div>

							</div>
						</div>
					))}
				</div>

				<div className="text-center mt-10">
						<a href="#" className={`inline-flex items-center font-semibold gap-2 px-7 py-4  
												text-white text-sm rounded-lg hover:shadow-lg
												hover:shadow-green-500/25
												transition-all bg-green-700 ${colors}` }
									data-aos='zoom-in'
									data-aos-delay='400'
						>
							<FaGithub className="text-sm"/>
							<span>View All Projects </span>
						</a>
				</div>
			</div>
		</section>
	)
}

export default Projects
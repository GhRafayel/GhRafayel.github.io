import { useState } from "react";
import { motion} from "framer-motion"
import { Sun, Moon , Menu, X} from 'lucide-react';

import data from "./data";

const Navbar = ({darkMode, toggleDarkMode}) => {

	const [isMonuOpen, setIsMonuOpen] = useState(false);
	const [activeSection, setActiveSection] = useState('Home');
	const colors = darkMode ?  data.darkColors : data.lightColors;
	
	const handleNavClick = (itemName) => {
		setActiveSection(itemName.toLocaleLowerCase());
		setIsMonuOpen(false);
	}

	return (
				<div className="flex justify-center w-full fixed z-50 mt-4">
					<motion.nav	initial={{ y: -100 }}  animate={{ y: 0 }} transition={{ duration: 0.5 }}
					className= {`flex items-center justify-center backdrop-blur-lg rounded-2xl px-4 lg:px-8 py-2 shadow-lg`}>
						<div className="flex items-center justify-between w-full space-x-6 lg:space-x-8 mr-3">
							<motion.a  href="/"  whileHover={{ scale: 1.05 }} className="flex items-center space-x-2">
								<span className={`text-xl font-bold  ${darkMode ? "text-gray-100" : "text-gray-900"}`}>
									Portfolio 
									<span className="text-green-700" >. </span>
								</span>
							</motion.a>
						</div>

						<div className="hidden lg:flex items-center space-x-6 ">
							{
								data.navItems.map((item) => (
									<a key={item.name} href={item.link} onClick={() => handleNavClick(item.name)} className="relative" >
										<motion.span	className={`font-medium transition-colors duration-300 ${darkMode ? "text-gray-100" : "text-gray-900"} hover:text-green-700` }
														whileHover={{scale : 1.05}}	whileTap={{scale : 0.95}}
										>
												{item.name}
										</motion.span>
										{
											activeSection === item.name.toLocaleLowerCase() && (
												<motion.div loaoutId="navbar-indicator" 
															className={`absolute -bottom-1 left-0 right-0 h-0.5 bg-linear-to-r rounded-full bg-green-700` }>

												</motion.div>
											)
										}
									</a>
								))
							}
						</div>

						<div className="flex items-center space-x-2 ml-2">
							<motion.button
								whileHover={{scale: 1.1 }}
								whileTap={{ scale: 0.9 }}
								onClick={toggleDarkMode}
								className={`p-2 rounded-lg ${colors} transition-colors`}
								aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
							>
								{
									darkMode ? (<Sun className={`w-8 h-8  text-yellow-300 cursor-pointer`}/>) : (<Moon className="w-8 h-8 ml-5 text-gray-500 cursor-pointer" />)
								}
							</motion.button>
						</div>

						<div className="flex lg:hidden items-center space-x-4 px-2">
							<motion.button  whileTap={{scale: 0.9}} 
											className={`p-2 rounded-lg ${darkMode ? 'bg-gray-500' : 'bg-gray-300'}`}
											onClick={() => setIsMonuOpen(!isMonuOpen)}>
								{
									isMonuOpen  ? (<X className={`w-5 h-5 ${colors}`}/>) : (<Menu className={`w-5 h-5 ${colors}`}/>)
								}
							</motion.button>
						</div>
						{
							isMonuOpen && (
								<motion.div 
									initial={{opacity: 0, height: 0}}
									animate={{opacity: 1, height: 'auto'}}
									exit={{opacity: 0, height: 0.3}}
									className={`absolute top-full left-0 right-0 mt-2 lg:hidden 
												${!darkMode ? 'bg-white/95' : 'bg-gray-900/95'}
												backdrop-blur-lg rounded-x1 shadow-lg border
												${'border-gray-' + darkMode ? 700 : 200}`}>
										<div className="px-4 py-3 space-y-2">
										{
											data.navItems.map((item) => (
												<a	key={item.name} href={item.link} onClick={() => setActiveSection(item.name.toLocaleLowerCase())} className={`block`}>
													<motion.div whileHover={{x: 5}}
														className={`py-3 px-4 rounded-lg text-center ${activeSection === item.name.toLocaleLowerCase() ? "bg-green-700 text-white" : ' '}`}>
														<span className={`font-medium ${colors}`}>
															{item.name}
														</span>
													</motion.div>
												</a>
											))}
											<motion.a 
											href="#contact"
											onClick={() => setIsMonuOpen(false)}
											whileTap={{scale: 0.95}}
											className={`block py-3 px-4 text-center font-semibold rounded-lg shadow-md border-2 border-green-700 hover:bg-blue-400 hover:text-white`}>
												Hire Me
											</motion.a>
										</div>
								</motion.div>
							)
						}
					</motion.nav>
				</div>
			);
}

export default Navbar;
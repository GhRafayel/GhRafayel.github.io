import { useCallback, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub, FaChevronLeft, FaChevronRight } from "react-icons/fa";

import Data from "../components/data";
import ProjectsHeaderScene from "./three/ProjectsHeaderScene";

const allProjects = Data.projects.low_level;
const SWIPE_THRESHOLD = 60;

function shuffle(list) {
	const copy = [...list];
	for (let i = copy.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[copy[i], copy[j]] = [copy[j], copy[i]];
	}
	return copy;
}

const Projects = ({ darkMode }) => {
	const colors = darkMode ? "text-gray-100" : "text-gray-900";
	const arrowBtn = `shrink-0 w-11 h-11 sm:w-13 sm:h-13 rounded-full border-2 border-green-700 flex items-center justify-center cursor-pointer shadow-md ${colors} hover:bg-green-700 hover:text-white transition-colors duration-300`;

	// opaque surfaces so cards behind never bleed through the text
	const cardSurface = darkMode
		? "bg-gray-900 border-white/10"
		: "bg-white border-gray-200";
	const centerAccent = darkMode
		? "ring-1 ring-green-500/40 shadow-green-500/10"
		: "ring-1 ring-green-600/30 shadow-green-600/10";
	const tagStyle = darkMode
		? "bg-green-400/10 text-green-300"
		: "bg-green-600/10 text-green-700";
	const codeBtnStyle = darkMode
		? "border border-white/20 text-gray-100 hover:bg-white/10"
		: "border border-gray-300 text-gray-800 hover:bg-gray-100";

	const [projects] = useState(() => shuffle(allProjects));
	const count = projects.length;
	const [active, setActive] = useState(0);

	const goPrev = useCallback(() => setActive((a) => (a - 1 + count) % count), [count]);
	const goNext = useCallback(() => setActive((a) => (a + 1) % count), [count]);

	// keyboard navigation
	useEffect(() => {
		const onKey = (e) => {
			if (e.key === "ArrowLeft") goPrev();
			else if (e.key === "ArrowRight") goNext();
		};
		window.addEventListener("keydown", onKey);
		return () => window.removeEventListener("keydown", onKey);
	}, [goPrev, goNext]);

	// swipe navigation
	const dragStartX = useRef(null);
	const onPointerDown = (e) => {
		dragStartX.current = e.clientX;
	};
	const onPointerUp = (e) => {
		if (dragStartX.current == null) return;
		const dx = e.clientX - dragStartX.current;
		dragStartX.current = null;
		if (dx < -SWIPE_THRESHOLD) goNext();
		else if (dx > SWIPE_THRESHOLD) goPrev();
	};

	// circular offset from the centered card ( -count/2 .. count/2 )
	const offsetOf = (i) => {
		let raw = i - active;
		if (raw > count / 2) raw -= count;
		if (raw < -count / 2) raw += count;
		return raw;
	};

	return (
		<section id="projects" className={`${colors} relative px-4 sm:px-8 lg:px-16 xl:px-24 text-center`}>
			<ProjectsHeaderScene darkMode={darkMode} />
			<div className="container mx-auto px-4">
				<div className="text-center mb-10" data-aos="fade-up">
					<h2 className={`sm:text-4xl font-bold mb-3 ${colors}`}> My Projects </h2>
					<p className={`max-w-xl mx-auto ${colors} opacity-80`}>
						A show case of my recent projects.
					</p>
				</div>

				<div className="flex items-center justify-center gap-2 sm:gap-6 mb-6">
					<motion.button
						onClick={goPrev}
						aria-label="Previous project"
						className={arrowBtn}
						whileHover={{ scale: 1.08 }}
						whileTap={{ scale: 0.92 }}
					>
						<FaChevronLeft />
					</motion.button>

					<div
						className="relative w-full max-w-5xl h-125 sm:h-135 select-none"
						style={{ perspective: "1600px" }}
						onPointerDown={onPointerDown}
						onPointerUp={onPointerUp}
					>
						<div className="absolute inset-0" style={{ transformStyle: "preserve-3d" }}>
							{projects.map((project, i) => {
								const offset = offsetOf(i);
								const abs = Math.abs(offset);
								const isCenter = offset === 0;
								const isHidden = abs > 2;

								const rotateY = isCenter ? 0 : offset < 0 ? 44 : -44;
								const translateZ = isCenter ? 0 : -260 - (abs - 1) * 120;
								const scale = isCenter ? 1 : 0.9;
								const opacity = isHidden ? 0 : abs === 2 ? 0.4 : 1;

								return (
									<div
										key={project.title}
										className="absolute left-1/2 top-1/2 w-72 h-115 sm:h-122.5"
										style={{
											transform: `translate(-50%, -50%) translateX(${offset * 56}%) translateZ(${translateZ}px) rotateY(${rotateY}deg) scale(${scale})`,
											opacity,
											zIndex: 100 - abs,
											pointerEvents: isHidden ? "none" : "auto",
											transition:
												"transform 0.6s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.6s ease",
										}}
										onClick={() => {
											if (!isCenter) setActive(i);
										}}
									>
										<div
											className={`h-full w-full overflow-hidden rounded-3xl flex flex-col border shadow-2xl ${cardSurface} ${
												isCenter ? centerAccent : "cursor-pointer"
											}`}
										>
											{/* Image */}
											<div className="w-full h-48 overflow-hidden shrink-0">
												<img
													src={project.image}
													alt={project.title}
													draggable={false}
													className="w-full h-full object-cover"
												/>
											</div>

											{/* Content */}
											<div className="p-5 flex flex-col flex-1 min-h-0">
												<h3 className={`${colors} text-lg font-bold mb-2`}> {project.title} </h3>

												<p className={`${colors} opacity-80 text-sm mb-4 line-clamp-3`}> {project.desc} </p>

												<div className="flex flex-wrap gap-1.5 mb-5">
													{project.tags.map((item, idx) => (
														<span key={idx} className={`px-2.5 py-1 text-[11px] font-medium rounded-md ${tagStyle}`}>
															{item}
														</span>
													))}
												</div>

												{/* Buttons */}
												<div className="mt-auto flex gap-2">
													<a
														href={project.href}
														target="_blank"
														rel="noreferrer"
														onClick={(e) => e.stopPropagation()}
														tabIndex={isCenter ? 0 : -1}
														className={`flex-1 inline-flex items-center justify-center gap-1.5 py-2 rounded-xl text-sm font-medium transition-colors duration-300 cursor-pointer ${codeBtnStyle}`}
													>
														<FaGithub />
														Code
													</a>

													<a
														href={project.href}
														target="_blank"
														rel="noreferrer"
														onClick={(e) => e.stopPropagation()}
														tabIndex={isCenter ? 0 : -1}
														className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 rounded-xl text-sm font-medium bg-green-600 text-white hover:bg-green-700 transition-colors duration-300 cursor-pointer"
													>
														<FaExternalLinkAlt />
														Demo
													</a>
												</div>
											</div>
										</div>
									</div>
								);
							})}
						</div>
					</div>

					<motion.button
						onClick={goNext}
						aria-label="Next project"
						className={arrowBtn}
						whileHover={{ scale: 1.08 }}
						whileTap={{ scale: 0.92 }}
					>
						<FaChevronRight />
					</motion.button>
				</div>

				<div className="flex flex-wrap justify-center items-center gap-2 max-w-md mx-auto">
					{projects.map((_, i) => (
						<button
							key={i}
							onClick={() => setActive(i)}
							aria-label={`Go to project ${i + 1}`}
							className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
								i === active ? "w-6 bg-green-700" : `w-2 ${darkMode ? "bg-gray-500" : "bg-gray-400"}`
							}`}
						/>
					))}
				</div>
			</div>
		</section>
	);
};

export default Projects;

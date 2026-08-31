import { DownloadCloud, GraduationCap, MapPin, Terminal, Rocket } from "lucide-react";
import CV			from "../assets/document/CV-Rafayel-Ghazaryan.pdf"
import Lebenslauf   from "../assets/document/CV-Rafayel-Ghazaryan-DE.pdf"
import data         from "../components/data";

const languages = data.languages;

const Btn = "w-full sm:w-auto inline-flex items-center justify-center rounded-full border-2 border-green-700 py-3 px-6 sm:px-8 text-base sm:text-lg font-semibold hover:bg-green-700 transition-all duration-300 cursor-pointer";

const darkstyle = {
	textPrimary: "text-white",
	textSecondary: "text-gray-300",
	buttonSecondary: "text-white hover:text-gray-900 " + Btn,
	card: "bg-white/[0.04] border-white/10",
	chip: "bg-green-400/10 text-green-300",
	label: "text-gray-400",
};
const lightstyle = {
	textPrimary: "text-gray-900",
	textSecondary: "text-gray-700",
	buttonSecondary: "text-gray-900 hover:text-white " + Btn,
	card: "bg-white border-gray-200",
	chip: "bg-green-600/10 text-green-700",
	label: "text-gray-500",
};

const highlights = [
	{ Icon: GraduationCap, title: "42 Vienna", text: "Peer-to-peer coding school" },
	{ Icon: Terminal, title: "Systems", text: "C / C++ · shells, servers, threads" },
	{ Icon: Rocket, title: "Web stack", text: "React · Node.js · NestJS · PostgreSQL" },
	{ Icon: MapPin, title: "Vienna, AT", text: "Open to work & collaboration" },
];

const stack = ["C", "C++", "JavaScript", "React", "Node.js", "NestJS", "PostgreSQL", "Docker"];

const About = ({ darkMode }) => {
	const style = darkMode ? darkstyle : lightstyle;

	return (
		<section id="about" className="bofy-font relative z-10 scroll-mt-28 px-4 sm:px-8 lg:px-14 pt-28 pb-12 lg:pt-32 lg:pb-24">
			<div className="container mx-auto">
				{/* Heading */}
				<div className="max-w-3xl" data-aos="fade-up" data-aos-delay="200">
					<p className="text-sm font-semibold uppercase tracking-widest mb-3 text-green-600">
						About me
					</p>
					<h1 className={`title-font text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 ${style.textPrimary}`}>
						Hi, I&apos;m Rafayel Ghazaryan
					</h1>
				</div>

				{/* Two full-width columns */}
				<div className="mt-10 grid gap-8 lg:gap-14 lg:grid-cols-2 lg:items-start">
					{/* Left — story */}
					<div className="space-y-5" data-aos="fade-right" data-aos-delay="300">
						<p className={`text-lg leading-relaxed ${style.textSecondary}`}>
							I&apos;m a full-stack developer training at 42 Vienna. Its project-based
							curriculum took me deep into systems programming — I built a Unix shell,
							a web server, threading and IPC projects, and a raycasting engine, all
							in C and C++.
						</p>
						<p className={`text-lg leading-relaxed ${style.textSecondary}`}>
							On top of that foundation I build for the modern web with React, Node.js
							and NestJS. I like clean architecture, real performance, and shipping
							projects that hold up outside the classroom — and I&apos;m looking for
							the next challenge to keep learning on.
						</p>

						{/* Languages */}
						<div className="pt-2">
							<h3 className={`text-xs font-semibold uppercase tracking-widest mb-3 ${style.label}`}>
								Languages
							</h3>
							<div className="flex flex-wrap gap-x-5 gap-y-3">
								{languages.map((item, i) => (
									<div key={i} className="flex items-center gap-2">
										<img
											src={item.icon}
											alt={item.alt}
											className={`w-6 h-6 object-contain ${darkMode ? "" : "brightness-90"}`}
										/>
										<span className={`text-sm ${style.textSecondary}`}>{item.alt}</span>
									</div>
								))}
							</div>
						</div>
					</div>

					{/* Right — highlight grid */}
					<div className="grid sm:grid-cols-2 gap-4" data-aos="fade-left" data-aos-delay="300">
						{highlights.map(({ Icon, title, text }) => (
							<div key={title} className={`rounded-2xl border p-5 shadow-sm ${style.card}`}>
								<span className="inline-flex w-10 h-10 items-center justify-center rounded-xl bg-green-600/10 text-green-600 mb-3">
									<Icon className="w-5 h-5" />
								</span>
								<h4 className={`font-semibold ${style.textPrimary}`}>{title}</h4>
								<p className={`text-sm mt-1 ${style.textSecondary}`}>{text}</p>
							</div>
						))}
					</div>
				</div>

				{/* Core stack — full width */}
				<div className="mt-10" data-aos="fade-up" data-aos-delay="350">
					<h3 className={`text-xs font-semibold uppercase tracking-widest mb-3 ${style.label}`}>
						Core stack
					</h3>
					<div className="flex flex-wrap gap-2">
						{stack.map((tech) => (
							<span key={tech} className={`px-3 py-1 text-xs font-medium rounded-full ${style.chip}`}>
								{tech}
							</span>
						))}
					</div>
				</div>

				{/* Buttons — full width */}
				<div
					className="mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4"
					data-aos="fade-up"
					data-aos-delay="400"
				>
					<a href={CV} download className="w-full sm:w-auto">
						<button className={style.buttonSecondary}>
							<DownloadCloud className="w-4 h-4 sm:h-5 sm:w-5 mr-2" />
							Download CV
						</button>
					</a>
					<a href={Lebenslauf} download className="w-full sm:w-auto">
						<button className={style.buttonSecondary}>
							<DownloadCloud className="w-4 h-4 sm:h-5 sm:w-5 mr-2" />
							Herunterladen Lebenslauf
						</button>
					</a>
				</div>
			</div>
		</section>
	);
};

export default About;

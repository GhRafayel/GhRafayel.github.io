import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaFacebook, FaPhoneVolume, FaArrowUp } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

import Data from "../components/data";

const EMAIL = "ghazarysnrafayel@gmail.com";

const socials = [
	{ Icon: FaPhoneVolume, href: "tel:+436505484898", label: "Phone" },
	{ Icon: SiGmail, href: `mailto:${EMAIL}`, label: "Email" },
	{ Icon: FaGithub, href: "https://github.com/GhRafayel", label: "GitHub" },
	{ Icon: FaLinkedin, href: "https://www.linkedin.com/in/rafayel-ghazaryan-b1623426a/", label: "LinkedIn" },
	{ Icon: FaFacebook, href: "https://www.facebook.com/rafo.ghazaryan.52", label: "Facebook" },
];

const Footer = ({ darkMode }) => {
	const heading = darkMode ? "text-white" : "text-gray-900";
	const muted = darkMode ? "text-gray-400" : "text-gray-600";
	const iconBtn = darkMode
		? "border-white/15 text-gray-300 hover:text-white hover:border-green-500 hover:bg-green-500/10"
		: "border-gray-300 text-gray-600 hover:text-green-700 hover:border-green-600 hover:bg-green-600/10";
	const linkStyle = `${muted} hover:text-green-600 transition-colors duration-300 cursor-pointer`;

	const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

	return (
		<footer id="contact" className={`relative mt-16 scroll-mt-28 ${heading}`}>
			{/* gradient hairline */}
			<div className="h-px w-full bg-gradient-to-r from-transparent via-green-600/60 to-transparent" />

			<div className="container mx-auto px-4 sm:px-8 lg:px-14 py-12">
				<div className="grid gap-10 md:grid-cols-3 md:gap-8">
					{/* Brand */}
					<div className="text-center md:text-left">
						<h3 className="text-lg font-bold tracking-tight">
							Rafayel <span className="text-green-600">Ghazaryan</span>
						</h3>
						<p className={`mt-2 text-sm max-w-xs mx-auto md:mx-0 ${muted}`}>
							Full Stack Developer crafting fast, thoughtful web experiences.
						</p>
					</div>

					{/* Quick links */}
					<nav className="text-center">
						<h4 className={`text-xs font-semibold uppercase tracking-widest mb-4 ${muted}`}>
							Navigate
						</h4>
						<ul className="flex flex-col gap-2 text-sm">
							{Data.navItems.map((item) => (
								<li key={item.name}>
									<a href={item.link} className={linkStyle}>
										{item.name}
									</a>
								</li>
							))}
						</ul>
					</nav>

					{/* Connect */}
					<div className="text-center md:text-right">
						<h4 className={`text-xs font-semibold uppercase tracking-widest mb-4 ${muted}`}>
							Connect
						</h4>
						<div className="flex gap-3 justify-center md:justify-end">
							{socials.map(({ Icon, href, label }) => (
								<motion.a
									key={label}
									href={href}
									target={href.startsWith("http") ? "_blank" : undefined}
									rel="noreferrer"
									aria-label={label}
									title={label}
									whileHover={{ y: -3 }}
									whileTap={{ scale: 0.9 }}
									className={`w-10 h-10 flex items-center justify-center rounded-full border text-lg transition-colors duration-300 ${iconBtn}`}
								>
									<Icon />
								</motion.a>
							))}
						</div>
						<a href={`mailto:${EMAIL}`} className={`mt-4 inline-block text-sm ${linkStyle}`}>
							{EMAIL}
						</a>
					</div>
				</div>

				{/* Bottom bar */}
				<div className={`mt-10 pt-6 border-t ${darkMode ? "border-white/10" : "border-gray-300"} flex flex-col sm:flex-row items-center justify-between gap-4`}>
					<p className={`text-xs ${muted}`}>
						© {new Date().getFullYear()} Rafayel Ghazaryan · Built with React &amp; Tailwind CSS
					</p>
					<motion.button
						onClick={scrollTop}
						whileHover={{ y: -2 }}
						whileTap={{ scale: 0.95 }}
						aria-label="Back to top"
						className={`flex items-center gap-2 text-xs font-medium px-3 py-1.5 rounded-full border transition-colors duration-300 ${iconBtn}`}
					>
						<FaArrowUp className="text-[10px]" />
						Back to top
					</motion.button>
				</div>
			</div>
		</footer>
	);
};

export default Footer;

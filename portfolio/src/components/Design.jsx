import { Palette } from "lucide-react";
import { FaExternalLinkAlt, FaGlobe } from "react-icons/fa";
import Data from "../components/data";

const designs = Data.designs;

const Design = ({ darkMode }) => {
	const colors = darkMode ? "text-gray-100" : "text-gray-900";
	const card = darkMode ? "bg-white/[0.04] border-white/10" : "bg-white border-gray-200";
	const chip = darkMode ? "bg-green-400/10 text-green-300" : "bg-green-600/10 text-green-700";
	const muted = darkMode ? "text-gray-400" : "text-gray-500";
	const outlineBtn = darkMode
		? "border border-white/20 text-gray-100 hover:bg-white/10"
		: "border border-gray-300 text-gray-800 hover:bg-gray-100";

	return (
		<section id="design" className={`${colors} bofy-font relative z-10 scroll-mt-28 px-4 sm:px-8 lg:px-14 py-16`}>
			<div className="container mx-auto max-w-5xl">
				<div className="text-center mb-10" data-aos="fade-up">
					<h2 className="sm:text-4xl font-bold mb-3"> Web Design </h2>
					<p className="max-w-xl mx-auto opacity-80">
						Website design concepts I have built.
					</p>
				</div>

				<div className="space-y-8">
					{designs.map((item) => (
						<div
							key={item.title}
							className={`rounded-3xl border p-5 sm:p-8 shadow-xl ${card}`}
							data-aos="fade-up"
							data-aos-delay="200"
						>
							<div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
								<div className="flex items-start gap-4">
									<div className="shrink-0 rounded-2xl p-3 bg-green-600/10 text-green-600">
										<Palette size={22} />
									</div>
									<div>
										<a href={item.preview} target="_blank" rel="noreferrer" className="hover:text-green-600 transition-colors duration-300">
											<h3 className="text-xl font-bold">{item.title}</h3>
										</a>
										<p className={`text-sm ${muted}`}>{item.subtitle}</p>
									</div>
								</div>

								<div className="flex gap-2 self-start">
									{item.original && (
										<a
											href={item.original}
											target="_blank"
											rel="noreferrer"
											className={`inline-flex items-center gap-1.5 py-2 px-4 rounded-xl text-sm font-medium transition-colors duration-300 ${outlineBtn}`}
										>
											<FaGlobe />
											Original
										</a>
									)}
									<a
										href={item.preview}
										target="_blank"
										rel="noreferrer"
										className="inline-flex items-center gap-1.5 py-2 px-4 rounded-xl text-sm font-medium bg-green-600 text-white hover:bg-green-700 transition-colors duration-300"
									>
										<FaExternalLinkAlt />
										View design
									</a>
								</div>
							</div>

							<p className="mt-5 opacity-80 leading-relaxed">{item.desc}</p>

							<div className="flex flex-wrap gap-1.5 mt-5">
								{item.tags.map((tag) => (
									<span key={tag} className={`px-2.5 py-1 text-[11px] font-medium rounded-md ${chip}`}>
										{tag}
									</span>
								))}
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Design;

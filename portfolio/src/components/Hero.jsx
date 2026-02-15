import { DownloadCloud , Mail} from "lucide-react";
import Mypoto		from "../assets/home/My_.png"
import CV			from "../assets/home/Rafayel-Ghazaryan-CV.pdf"
import data         from "../components/data";

const languages = data.languages;
const Btn =  "w-full sm:w-auto inline-flex items-center justify-center rounded-full border-2 border-green-700 py-3 px-6 sm:px-8 text-base sm:text-lg font-semibold hover:bg-green-700 transition-all duration-300 transfrom";
const  darkstyle  = {
    textPrimary: 'text-white',
    textSecondary: 'text-gray-300',
    buttonSecondary: 'text-white hover:text-gray-900' + Btn,
    decorativeCircle: 'bg-green-500 opacity-10'
};
const lightstyle  = {
    textPrimary: 'text-gray-900',
    textSecondary: 'text-gray-700',
    buttonSecondary: 'text-gray-900 hover:text-white' + Btn,
    decorativeCircle: 'bg-green-400 opacity-20'
};

const Hero = ({darkMode}) => {
    
    const style = darkMode ?  darkstyle : lightstyle ;
    return (
        <div className="relative overflow-hidden min-h-screen flex flex-col">
                <section id="home" data-aos='fade-up' data-aos-delat='250' className="bofy-font z-10">
                    <div className="container mx-auto flex px-4 sm:px-8 lg:px-14 py-12 lg:py-32 flex-col lg:flex-row items-center justify-between lg:mt-0 mt-14">
                        <div className="lg:w-1/2 w-full flex flex-col items-center lg:items-start text-center lg:text-left mb-12 lg:mb-0">
                            <div className="flex justify-center lg:justify-start gap-4 sm:gap-6 mb-6 sm:mb-7 w-full">
                                {
                                    languages.map((item, i) => (
                                        <span key={i}  data-aos-delay={`${400 + i * 100}`} className="transform hover:scale-110 transition-transform duration-300">
                                            <img src={languages[i].icon} alt={item.alt}  className={`w-8 h-8 sm:w-10 sm:h-10 object-contain ${darkMode ? " " : "filter brightness-75"}`}/>
                                        </span> )) 
                                }
                            </div>
                            <h1 className={`title-font text-3xl sm:text-4xl lg:text-5xl mb-4 font-bold ${style.textPrimary}`}
                                data-aos='fade-up'
                                data-aos-delay='500'
                            >
                                Hi, I'm Rafayel Ghazaryan 
                            </h1>
                            <p className={`mb-6 sm:mb-8 leading-relaxed max-w-md sm:max-w-lg ${style.textSecondary}`}
                                data-aos="fade-up"
                                data-aos-dele='600'
                            >
                                I am a full-stack developer currently studying at 42 Vienna Coding School. I am passionate about applying my skills to real-world projects and continuously expanding my knowledge by taking on new challenges.
                            </p>
                            <div >

                            </div>
                            {/* Button */ }
                                <div className="w-full pt-4 sm:pt-6 ">
                                    <div className="flex flex-col sm:flex-row justify-center lg:jsutify-strt gap-3 sm:gap-4"
                                         data-aos='fade-up'
                                         data-aos-delay='700'
                                    >
                                        <a href={CV} download className="w-full sm:w-auto">
                                            <button  className={`${style.buttonSecondary}`} >
                                                <DownloadCloud className="w-4 h-4 sm:h-5 sm:w-5 mr-2"/>
                                                    Download CV 
                                            </button>
                                        </a>
                                        <a href="mailto:ghazarysnrafayle@gmail.com" className="w-full sm:w-auto">
                                            <button className={`${style.buttonSecondary}`} >
                                                <Mail className="w-4 h-4 sm:h-5 sm:w-5 mr-2"/>
                                                    Contact Me
                                            </button>
                                        </a>
                                    </div>
                                </div>
                        </div>
                        <div className="lg:w-1/2 w-full max-w-md lg:max-w-lg mt-3 lg:mt-0 flex justify-center" data-aos='fade-left' data-aos-delay='400'>
                                <div className="relative w-2/3 sm:w-3/4 lg:w-full flex justify-center">
                                    <img src={Mypoto} alt="My poto" className="w-2/3 h-auto object-cover transform hover:scale-105 transition-transform duration-500"/>
                                </div>
                        </div>
                    </div>
                </section>
        </div>
    )
}

export default Hero;
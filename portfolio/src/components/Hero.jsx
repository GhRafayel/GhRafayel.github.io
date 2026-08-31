import Mypoto	from "../assets/home/Rafayel.png"
import Skills	from "./Skills";

const Hero = ({darkMode}) => {

    return (
        <div className="relative overflow-hidden flex flex-col">
                <section id="home" data-aos='fade-up' data-aos-delat='250' className="bofy-font z-10">
                    <div className="container mx-auto flex px-4 sm:px-8 lg:px-14 py-12 lg:py-24 flex-col lg:flex-row items-center justify-between gap-12 lg:mt-0 mt-14">
                        <div className="lg:w-1/2 w-full max-w-md lg:max-w-lg flex justify-center" data-aos='fade-right' data-aos-delay='300'>
                            <div className="relative w-2/3 sm:w-3/4 lg:w-full flex justify-center">
                                <img src={Mypoto} alt="Rafayel Ghazaryan" className="w-2/3 h-auto object-cover transform hover:scale-105 transition-transform duration-500"/>
                            </div>
                        </div>
                        <div className="lg:w-1/2 w-full" data-aos='fade-left' data-aos-delay='400'>
                            <Skills darkMode={darkMode} />
                        </div>
                    </div>
                </section>
        </div>
    )
}

export default Hero;

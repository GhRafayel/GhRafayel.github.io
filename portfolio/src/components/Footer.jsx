
import {FaGithub, FaLinkedin, FaFacebook, FaPhoneVolume} from 'react-icons/fa';
import { SiGmail } from "react-icons/si";


const Footer = ({darkMode}) => {
    
    const color = darkMode ? "text-white" : "text-gray-900"
    const a1 = `cursor-pointer w-10 h-10 flex items-center hover:border-green-700  hover:border-2 justify-center rounded-full hover:scale-120 transition-all duration-700'}`;
    return (

        <footer className={`${color}  border-t-2 mt-5 border-gray-400`} id='contact'>
            <div className="container mx-auto px-4 py-8">
                <div className="flex flex-col md:flex-row justify-around text-center gap-6">
                   
                    <div className={`flex gap-6 text-2xl justify-center`} >
                       
                        <a className={a1} href="tel:+436505484898">
                            <FaPhoneVolume />
                        </a>

                        <a className={a1} target="_blank" href="mailto:ghazarysnrafayle@gmail.com">
                            <SiGmail />
                        </a>
                        
                        <a className={a1} target="_blank" href='https://github.com/GhRafayel'>
                            <FaGithub />
                        </a>
                        <a className={a1} target="_blank" href='https://www.linkedin.com/in/rafayel-ghazaryan-b1623426a/'>
                            <FaLinkedin />
                        </a>
                        <a className={a1} target="_blank" href='https://www.facebook.com/rafo.ghazaryan.52'>
                            <FaFacebook/>
                        </a>
                    </div>
                     <div className="text-center md:text-left">
                        <h3 className="text-1xl font-bold mb-2">
                         ©   Full Stack Developer  2026 
                        </h3>
                       
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
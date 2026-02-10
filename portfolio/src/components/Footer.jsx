
import {FaGithub, FaLinkedin, FaFacebook} from 'react-icons/fa';


const Footer = ({darkMode}) => {
    
    const color = darkMode ? "text-white" : "text-gray-900"
    const a1 = `cursor-pointer w-10 h-10 flex items-center hover:border-gray-400  hover:border-2 justify-center rounded-full hover:scale-120 transition-all duration-700'}`;
    return (

        <footer className={`${color}  border-t-2 mt-5`} id='contact'>
            <div className="container mx-auto px-4 py-8">
                <div className="flex flex-col md:flex-row justify-around text-center gap-6">
                    <div className="text-center md:text-left">
                        <h3 className="text-2xl font-bold mb-2">
                            Portfolio 
                        </h3>
                        <p className="text-sm ">
                            Full Stack Developer 
                        </p>
                    </div>
                    <div className={`flex gap-6 text-2xl `} >
                       
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
                </div>
            </div>
        </footer>
    )
}

export default Footer;
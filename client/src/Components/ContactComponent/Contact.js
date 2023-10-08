import './Contact.css'
import {Link} from 'react-router-dom';
function Contact(){
  return (
    <div id="contact">
            <div className="contact-container">
                <div className="contact-left">
                    <h3 className="contact-title">
                        Contact Me
                    </h3>
                    <div><img src={require("../public/img/Gmail.png")} alt="mail" className="contact-left-p-img"/> ghazarysnrafayel@gmail.com</div>
                    <div><img src={require("../public/img/contact.png")} alt="" className="contact-left-p-img"/> +43 650 5 48 48 98</div>

                    <div className="contact-social-icon">
                        <Link to="https://www.facebook.com/rafo.ghazaryan.52/" className="contact-social-icon-a" target="blank">
                            <img src={require("../public/img/facebook.png")} alt="facebook" className="contact-social-icon-img"/>
                        </Link>
                        <Link to="https://www.instagram.com/" className="contact-social-icon-a" target="blank">
                            <img src={require("../public/img/instagram.png")} alt="instagram" className="contact-social-icon-img"/>
                        </Link>
                        <Link to="https://twitter.com/tweeter?lang=en" className="contact-social-icon-a" target="blank">
                            <img src={require("../public/img/twitter.png")} alt="twitter" className="contact-social-icon-img"/>
                        </Link>
                        <Link to="https://www.linkedin.com/feed/" className="contact-social-icon-a" target="blank">
                            <img src={require("../public/img/linkedin.png")} alt="linkedin" className="contact-social-icon-img"/>
                        </Link>
                    </div>
                    
                </div>
        </div>
        <div className="end">
          <p className="end-p">All rights reserved</p>
        </div>
    </div>
  )
}
export default Contact
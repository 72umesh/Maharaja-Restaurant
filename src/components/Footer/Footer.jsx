import { images } from "../../constants";
import "./Footer.css"
import FooterOverlay from "./FooterOverlay";
import Newsletter from "./Newsletter";
import {FiFacebook, FiTwitter, FiInstagram } from "react-icons/fi"

function Footer(){

    return(
        <div className="footer section-padding">
            <FooterOverlay/>
            <Newsletter/>

            <div className="footer-links">
                <div className="footer-links-contact">
                    <h1 className="footer-headtext">Contact Us</h1>
                    <p className="p-opensans">4th Avenue Street, Andheri, Mumbai</p>
                    <p className="p-opensans">1234567890</p>
                    <p className="p-opensans">1234567891</p>
                </div>

                <div className="footer-links-logo">
                    <p className="footer-links-logo-brand">MAHARAJA</p>
                    <p className="p-opensans">The best way to find yourself is to lose yourself in the service of others</p>
                    <img src={images.spoon} alt="spoon" className="spoon-img" style={{marginTop: "15px"}} />

                    <div className="footer-links-icons">
                        <FiFacebook/>
                        <FiTwitter/>
                        <FiInstagram/>

                    </div>
                </div>
                <div className="footer-links-work">
                    <h1 className="footer-headtext">Working Hours</h1>
                    <p className="p-opensans">Monday - Friday:</p>
                    <p className="p-opensans">10:00am - 09:00pm</p>
                    <p className="p-opensans">Saturday - Sunday:</p>
                    <p className="p-opensans">10:00am - 11:00pm</p>
                </div>

            </div>
            <div className="footer-copyright">
                <p className="p-opensans">2024 Maharaja. All Rights Reserved</p>
                <p className="p-opensans">Built By | Umesh Pal</p>

            </div>
        </div>
    )

}

export default Footer;
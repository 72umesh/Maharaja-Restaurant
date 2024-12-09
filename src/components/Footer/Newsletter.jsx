import Subheading from "../SubHeading/SubHeading";
import "./Newsletter.css"

function Newsletter(){

    return(
        <div className="newsletter">
            <div className="newsletter-heading">
                <Subheading/>
                <h1 className="headtext-cormorant">Subscribe to our Newsletter</h1>
                <p className="p-opensans">And Never Miss Latest Updates</p>
            </div>
            <div className="newsletter-input flex-center ">
                <input type="email" placeholder="Enter your E-mail Address"/>
                <button type="button" className="custom-button">Subscribe</button>
            </div>
        </div>
    )

}

export default Newsletter;
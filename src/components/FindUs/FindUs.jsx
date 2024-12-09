import SubHeading from "../SubHeading/SubHeading";
import { images } from "../../constants";

function FindUs(){

    return(
        <div className="app-bg wrapper section-padding" id="contact">
            <div className="wrapper-info">
                <SubHeading title="Contact"/>
                <h1 className="headtext-cormorant" style={{marginBottom:"3rem"}}>Find Us</h1>

                <div className="wrapper-content">
                    <p className="p-opensans">4th Avenue Street, Andheri, Mumbai</p>
                    <p className="p-cormorant" style={{color:"#DCCA87", margin:"2rem 0 "}}>Opening Hours</p>
                    <p className="p-opensans">Monday - Friday: 10:00am - 09:00pm </p>
                    <p className="p-opensans">Saturday - Sunday: 10:00am - 11:00am</p>
                </div>
                <button type="button" className="custom-button" style={{marginTop: "2rem"}}>Visit Us </button>

            </div>
            <div className="wrapper-img">
                <img src={images.findus} alt="findus Image" />
            </div>
        </div>
    )

}
export default FindUs;
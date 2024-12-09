import "./AboutUs.css";
import {images} from "../../constants"

function AboutUs(){
    return(
        <div className="aboutus app-bg flex-center section-padding" id="about">
            <div className="aboutus-overlay flex-center">
                <img src={images.M} alt="M Letter" />
            </div>

            <div className="aboutus-content flex-center">
                <div className="aboutus-content-about">
                    <h1 className="headtext-cormorant">About Us</h1>
                    <img src={images.spoon} alt="spoon image" className="spoon-img" />
                    <p className="p-opensans">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum itaque, quaerat amet et consequatur veritatis maiores corrupti. Ex, consequuntur modi autem excepturi dignissimos cupiditate eveniet tenetur officiis reiciendis tempore sunt.</p>
                    <button type="button" className="custom-button">Know More</button>
                </div>

                <div className="aboutus-content-knife flex-center">
                    <img src={images.knife} alt="knife image" />
                </div>

                <div className="aboutus-content-history">
                    <h1 className="headtext-cormorant">Our History</h1>
                    <img src={images.spoon} alt="spoon image" className="spoon-img" />
                    <p className="p-opensans">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum itaque, quaerat amet et consequatur veritatis maiores corrupti. Ex, consequuntur modi autem excepturi dignissimos cupiditate eveniet tenetur officiis reiciendis tempore sunt.</p>
                    <button type="button" className="custom-button">Know More</button>
                </div>
            </div>
        </div>
    )
}
export default AboutUs;
import "./Awards.css"
import SubHeading from "../SubHeading/SubHeading";
import { images,data } from "../../constants";

function AwardCard(props){
    return(
        <div className="laurels-awards-card">
            <img src={props.imgUrl} alt="awards"/>
            <div className="laurels-awards-card-content">
                <p className="p-cormorant" style={{color: "#DCCA87"}}>{props.title}</p>
                <p className="p-cormorant">{props.subtitle}</p>
                
            </div>
        </div>

    )
}


function Awards(){
    return(
        <div className="app-bg wrapper section-padding " id="awards">
            <div className="wrapper-info">
                <SubHeading title="Awards and Recognition"/>
                <h1 className="headtext-cormorant">Our Laurels</h1>

                <div className="laurels-awards">
                    {data.awards.map((award,index) => <AwardCard key={index} imgUrl={award.imgUrl} title={award.title} subtitle={award.subtitle}/> )}

                </div>

            </div>
            <div className="wrapper-img">
                <img src={images.laurels} alt="laurel Image" />
            </div>
            
        </div>
    )

}
export default Awards;
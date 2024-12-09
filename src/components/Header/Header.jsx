import {images} from "../../constants";
import SubHeading from "../SubHeading/SubHeading";
import "./Header.css";

function Header(){

    return(
        <div className="header wrapper section-padding" id="home">
            <div className="wrapper-info">
                <SubHeading title= "Chase the new flavour"/>
                <h1 className='header-h1'> The Key to Fine Dining</h1>
                <p className='p-opensans' style={{margin: '2rem 0'}}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius repudiandae culpa architecto odio expedita ut nesciunt voluptatum cum similique totam pariatur aliquid, tenetur fugiat, temporibus consectetur, recusandae aperiam qui. Totam?</p>
                <button type="button" className='custom-button'>Explore menu</button>
            </div>
            <div className="wrapper-img">
                <img src={images.welcome} alt="Header image"/>
            </div>
        </div>
    )

}
export default Header;


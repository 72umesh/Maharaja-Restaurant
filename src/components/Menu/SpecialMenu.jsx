import "./SpecialMenu.css"
import {images, data} from "../../constants";
import SubHeading from "../SubHeading/SubHeading";
import MenuItem from "../MenuItem/MenuItem";


function SpecialMenu(){


    return(
        <div className="specialMenu flex-center section-padding" id="menu">
            <div className="specialMenu-title">
                <SubHeading title="Menu that Fits your Palatte"/>
                <h1 className="headtext-cormorant">Today Special</h1>
            </div>

            <div className="specialMenu-menu">
                <div className="specialMenu-menu-drinks flex-center">
                    <p className="specialMenu-menu-heading">Juices</p>
                    <div className="specialMenu-menu-items">
                        {data.drinks.map((drink, index) => (
                            <MenuItem key={drink.title + index} title={drink.title} price={drink.price} tags={drink.tags}/>
                        ))}
                    </div>
                </div>

                <div className="specialMenu-menu-img">
                    <img src={images.menu} alt="Menu Image" />
                </div>

                <div className="specialMenu-menu-cocktails flex-center">
                    <p className="specialMenu-menu-heading">Cocktails</p>
                    <div className="specialMenu-menu-items">
                        {data.cocktails.map((cocktail, index) => (
                            <MenuItem key={cocktail.title + index} title={cocktail.title} price={cocktail.price} tags={cocktail.tags}/>
                        ))}
                    </div>

                </div>
            </div>

            <div style={{marginTop: "15px"}}>
                <button type="button" className='custom-button'>View More</button>
            </div>
        </div>
    )

}
export default SpecialMenu;
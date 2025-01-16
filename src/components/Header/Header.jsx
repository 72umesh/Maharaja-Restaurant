import { images } from "../../constants";
import SubHeading from "../SubHeading/SubHeading";
import "./Header.css";

function Header() {
  return (
    <div className="header wrapper section-padding" id="home">
      <div className="wrapper-info">
        <SubHeading title="Chase the new flavour" />
        <h1 className="header-h1"> The Key to Fine Dining</h1>
        <p className="p-opensans" style={{ margin: "2rem 0" }}>
          Discover a culinary experience like no other, where flavors are
          crafted with precision and passion. Enjoy a delightful meal in a cozy
          and inviting space. Let us take you on a journey of exquisite tastes
          and unforgettable moments.
        </p>
        <button type="button" className="custom-button">
          Explore menu
        </button>
      </div>
      <div className="wrapper-img">
        <img src={images.welcome} alt="Header image" loading="lazy" />
      </div>
    </div>
  );
}
export default Header;

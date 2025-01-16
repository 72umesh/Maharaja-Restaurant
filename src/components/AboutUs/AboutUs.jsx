import "./AboutUs.css";
import { images } from "../../constants";

function AboutUs() {
  return (
    <div className="aboutus app-bg flex-center section-padding" id="about">
      <div className="aboutus-overlay flex-center">
        <img src={images.M} alt="M Letter" loading="lazy" />
      </div>

      <div className="aboutus-content flex-center">
        <div className="aboutus-content-about">
          <h1 className="headtext-cormorant">About Us</h1>
          <img
            src={images.spoon}
            alt="spoon image"
            className="spoon-img"
            loading="lazy"
          />
          <p className="p-opensans">
            At Maharaja , we are passionate about bringing people together
            through exceptional food and a warm atmosphere. Our journey is
            driven by a love for culinary artistry, combining traditional
            recipes with a modern twist to create flavors that delight every
            palate. Join us to experience a celebration of taste, craftsmanship,
            and hospitality.
          </p>
          <button type="button" className="custom-button">
            Know More
          </button>
        </div>

        <div className="aboutus-content-knife flex-center">
          <img src={images.knife} alt="knife image" loading="lazy" />
        </div>

        <div className="aboutus-content-history">
          <h1 className="headtext-cormorant">Our History</h1>
          <img
            src={images.spoon}
            alt="spoon image"
            className="spoon-img"
            loading="lazy"
          />
          <p className="p-opensans">
            Established in 1998, Maharaja Restaurant began as a small family-run
            restaurant with a vision to share a love for authentic flavors and
            culinary excellence. Over the years, we have grown into a beloved
            destination for food enthusiasts, blending tradition with innovation
            to craft unforgettable dining experiences. Our story is one of
            passion, dedication, and a commitment to quality.
          </p>
          <button type="button" className="custom-button">
            Know More
          </button>
        </div>
      </div>
    </div>
  );
}
export default AboutUs;

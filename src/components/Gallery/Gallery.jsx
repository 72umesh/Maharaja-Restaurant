import "./Gallery.css";
import SubHeading from "../SubHeading/SubHeading";
import { images } from "../../constants";

import {
  BsInstagram,
  BsArrowLeftShort,
  BsArrowRightShort,
} from "react-icons/bs";
import React from "react";

function Gallery() {
  const galleryimages = [
    images.gallery01,
    images.gallery02,
    images.gallery03,
    images.gallery04,
    images.gallery05,
  ];

  const scrollRef = React.useRef(null);

  function scroll(direction) {
    const { current } = scrollRef;

    if (direction === "left") {
      current.scrollLeft -= 300;
    } else {
      current.scrollLeft += 300;
    }
  }

  return (
    <div className="gallery flex-center">
      <div className="gallery-content">
        <SubHeading title="Instagram" />
        <h1 className="headtext-cormorant">Photo Gallery</h1>
        <p className="p-opensans" style={{ color: "#AAA", marginTop: "2rem" }}>
          {" "}
          Explore moments captured at our restaurant, showcasing exquisite
          dishes, warm ambiance, and memorable experiences. Each photo tells a
          story of flavor, artistry, and hospitality.
        </p>
        <button type="button" className="custom-button">
          View More
        </button>
      </div>

      <div className="gallery-images">
        <div className="gallery-images-container" ref={scrollRef}>
          {galleryimages.map((image, index) => (
            <div className="gallery-images-card flex-center" key={index}>
              <img src={image} alt="gallery images" loading="lazy" />
              <BsInstagram className="gallery-image-icon" />
            </div>
          ))}
        </div>
        <div className="gallery-images-arrows">
          <BsArrowLeftShort
            className="gallery-arrow-icon"
            onClick={() => scroll("left")}
          />
          <BsArrowRightShort
            className="gallery-arrow-icon"
            onClick={() => scroll("right")}
          />
        </div>
      </div>
    </div>
  );
}
export default Gallery;

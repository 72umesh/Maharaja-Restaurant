import { images } from "../../constants";

function SubHeading(props) {
  return (
    <div style={{ marginBottom: "1rem" }}>
      <p className="p-cormorant">{props.title}</p>
      <img
        src={images.spoon}
        alt="spoon"
        className="spoon-img"
        loading="lazy"
      />
    </div>
  );
}
export default SubHeading;

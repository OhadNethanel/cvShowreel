import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

export default ({ photosArray = [], imgStyle = {} }) => {
  return (
    <div
      style={
        {
          // marginLeft: "25%",
        }
      }
    >
      <Carousel>
        {photosArray.map((photo) => {
          return (
            <div>
              <img
                style={{ objectFit: "contain", width: 325, ...imgStyle }}
                src={photo?.path}
              />
              <p className="legend">{photo.description || ""}</p>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};

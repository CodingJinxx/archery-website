import { loadGetInitialProps } from "next/dist/next-server/lib/utils";
import { hashCode } from "../lib/HashCode";
import style from "./Carousel.module.scss";

type Props = {
  images: string[];
  className?: string;
};

export const Carousel: React.FC<Props> = (props) => {
  const images = [];

  var first = true;
  props.images.forEach((image) => {
    images.push(
      <div className={"carousel-item ".concat(first ? " active" : "")} key={hashCode(image + "%")}>
        <img
          className={"d-block w-100" }
          src={image}
          alt=""
          key={hashCode(image)}
        />
      </div>
    );
    first = false;
  });

  return (
    <>
      <div
        id="carouselExampleSlidesOnly"
        className={"carousel slide " + style.containeroverride + " " + props.className}
        data-ride="carousel"
      >
        <div className="carousel-inner">
          {images}
        </div>
      </div>
    </>
  );
};

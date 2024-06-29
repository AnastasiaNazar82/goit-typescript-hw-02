import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";

export default function ImageGallery({ images, openModal }) {
  return (
    <ul className={css.list}>
      {images.map((image) => (
        <li className={css.listItem} key={image.id}>
          <ImageCard
            urlSmall={image.urls.small}
            urlReg={image.urls.regular}
            alt={image.description || "Image description not available"}
            openModal={openModal}
          />
        </li>
      ))}
    </ul>
  );
}

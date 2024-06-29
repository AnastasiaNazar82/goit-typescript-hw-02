import React from "react";
import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";

interface Image {
  id: string;
  description: string;
  urls: {
    small: string;
    regular: string;
  };
}

interface ImageGalleryProps {
  images: Image[];
  openModal: (alt: string, url: string) => void;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ images, openModal }) => {
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
};

export default ImageGallery;

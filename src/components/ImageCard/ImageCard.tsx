import React from "react";
import css from "./ImageCard.module.css";

interface ImageCardProps {
  urlSmall: string;
  alt: string;
  urlReg: string;
  openModal: (alt: string, url: string) => void;
}

const ImageCard: React.FC<ImageCardProps> = ({
  urlSmall,
  alt,
  urlReg,
  openModal,
}) => {
  return (
    <div className={css.imgContainer}>
      <img
        className={css.listImage}
        src={urlSmall}
        alt={alt}
        onClick={() => openModal(alt, urlReg)}
      />
    </div>
  );
};

export default ImageCard;
